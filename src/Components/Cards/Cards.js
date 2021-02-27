import React from 'react'
import './Cards.css'
import { withRouter } from 'react-router-dom'

function Cards({list=[], ...props}) {
    if(!list.length){
        return(
            <div className="empty-list-text">Type somthing to see search results</div>
        )
    }
    return (
        <section className="cards">
            {list.map((item, idx) => 
                <div key={idx} className="card" onClick={() => props.history.push(`/${item.imdbID}`)}>
                    <img src={item.Poster} alt="" />
                    <span>{item.Title} ({item.Year})</span>
                </div>
            )}
        
    </section>
    )
}

export default withRouter(Cards)