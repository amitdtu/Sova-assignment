import React from 'react'
import './Cards.css'
import img1 from '../../Assets/images/pexels-alex-azabache-3214944.jpg'
import img2 from '../../Assets/images/pexels-jeremy-bishop-3464632.jpg'
import img3 from '../../Assets/images/pexels-john-lee-6154807.jpg'
import img4 from '../../Assets/images/pexels-michael-block-3225517.jpg'
import img5 from '../../Assets/images/pexels-nick-wehrli-5282269.jpg'
import img6 from '../../Assets/images/pexels-nothing-ahead-3571551.jpg'
import img7 from '../../Assets/images/pexels-sidnei-maia-3489130.jpg'
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