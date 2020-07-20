import React from 'react'
import NewsItem from './NewsItem'
import data from '../data/db.json'

function News() {
    var dataNews = data.news
    return (
        <div className="container">
            <div className="row mt-md-5 justify-content-center">
                {
                    dataNews.map((item, key) => <NewsItem key={key} data={item} />)
                }
            </div>
        </div>
    )
}

export default News