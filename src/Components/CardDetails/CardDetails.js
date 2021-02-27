import React from 'react'
import './CardDetails.css'
import Button from '../Button/Button'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovieDetails } from '../../redux/movieDetails/movieDetails.action'
import { searchInputChange } from '../../redux/header/header.action'
import Spinner from '../Spinner/Spinner'

class CardDetails extends React.Component {

    componentDidMount(){
        const {match, fetchMovieDetails} = this.props
        console.log(match.params.movieID)
        fetchMovieDetails(match.params.movieID)

    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.movieID !== this.props.match.params.movieID){
            this.props.fetchMovieDetails(this.props.match.params.movieID)
        }
    }

    viewSimilarHandler = () => {
        const {searchInputChange, history, data} = this.props
        searchInputChange(data.Title)
        history.push('/')
    }

    render(){
        const {data, isFetching, searchInputChange} = this.props
        if(isFetching) return <Spinner />

        return (
            data ? <section>
                <div className="card-details">
                    <img src={data.Poster} alt="" />
                    <div className="content">
                        <h2 className="title">{data.Title} ({data.Year})</h2>
                        <div className="details">
                            <p>IMDB Rating: {data.imdbRating}</p>
                            <p>Runtime: {data.Runtime}</p>
                            <p>Genre: {data.Genre}</p>
                            <p>Director: {data.Director}</p>
                            <p>Country: {data.Country}</p>
                        </div>
                        <span className="story">{data.Plot}</span>
                    </div>
                </div>
                <Button onClick={this.viewSimilarHandler}> View Similar </Button>
            </section> : null
    
        )
    }
}

const mapState = (state) => {
    const { data, isFetching } = state.movieDetails;
    return {
        data,
        isFetching,
    }
}

const mapDispatch = dispatch => ({
    fetchMovieDetails: (id) => dispatch(fetchMovieDetails(id)),
    searchInputChange: (text) => dispatch(searchInputChange(text)),

})



export default withRouter(connect(mapState, mapDispatch)(CardDetails))