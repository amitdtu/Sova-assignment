import React from 'react'
import './CardDetails.css'
import img from '../../Assets/images/pexels-alex-azabache-3214944.jpg'
import Button from '../Button/Button'

export default function CardDetails() {
    return (
        <section>
            <div className="card-details">
                <img src={img} alt="" />
                <div className="content">
                    <h2 className="title">Iron Man (2008)</h2>
                    <div className="details">
                        <p>IMDB Rating: 7.9</p>
                        <p>Runtime: 126 minutes</p>
                        <p>Genre: Action, Adventure, Sci-Fi</p>
                        <p>Director: Jon Favreau</p>
                        <p>Country: USA, Canada</p>
                    </div>
                    <span className="story">After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil</span>
                </div>
            </div>
            <Button> View Similar </Button>
        </section>

    )
}
