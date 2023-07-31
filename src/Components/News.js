import React from "react";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState("");
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (str) => {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    document.title = `${capitalizeFirstLetter(props.category)} - Tazza Khabar`

    
    useEffect(() =>{
        const updateNews = async() => {
            const url = `https://newsdata.io/api/1/news?apikey=pub_26817413e5b27d15c0612f0f4ab4d49f9dec0&country=${props.country}&category=${props.category}&language=en`
            let data = await fetch(url);
            setLoading(true);
            let parsedData = await data.json();
            setArticles(parsedData.results);
            setTotalResults(parsedData.totalResults);
            setLoading(false);
            setPage(parsedData.nextPage);
        }
        updateNews();
    },[props.newsApiKey, props.country, props.category]);

    const fetchMoreData = async() => {
        setTimeout(async() => {
            const url = `https://newsdata.io/api/1/news?apikey=pub_26817413e5b27d15c0612f0f4ab4d49f9dec0&country=${props.country}&category=${props.category}&language=en&page=${page}`
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.results));
            setTotalResults(parsedData.totalResults);
            setPage(parsedData.nextPage);
        }, 1500);
    }

    return (
        <>
           <h1 className='text-center' style={{margin : "35px 0", marginTop : "70px",}}>Tazza Khabar - {props.category !== 'top' ? 'Top' : ''} {capitalizeFirstLetter(props.category)} Headlines</h1> 

                {loading && <Spinner/>}
                <InfiniteScroll
                dataLength={articles.length} 
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
                endMessage={
                    <h2 style={{ textAlign: 'center' }}>
                    {loading === false && <b>Oops! articles got over </b>}
                    </h2>
                }
                >
                <div className="container">
                    {<div className="row">
                        {articles.map((element) =>{
                            return <div className="col-md-3" key={element.link}>
                                <NewsItem title={element.title ? element.title : ""} description = {element.description ? element.description : ""} imageUrl = {element.image_url ? element.image_url : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl = {element.link} source = {element.source_id} date = {element.pubDate}/>
                            </div>
                        })}
                    </div>}
                </div>
            </InfiniteScroll>
        </>
    )
}

    News.defaultProps = {
        country : 'in',
        category : 'top',
    }
  
    News.propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category :PropTypes.string,
    }

export default News