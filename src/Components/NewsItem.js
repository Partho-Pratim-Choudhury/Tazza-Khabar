import React from 'react'
import '../index.css';

export default function NewsItem (props){
    let {title, description, imageUrl, newsUrl, source, date} = props
    return (
      <div>
        <div className="card" style={{ height: "45rem", margin: "5px" }}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description.slice(0, 20*10) + "..."}</p>
                <p class="card-text"><small class="text-muted">Last updated by {source ? source : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a target = "_blank" rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}