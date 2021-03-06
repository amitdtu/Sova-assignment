import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Cards from '../../Components/Cards/Cards'

 function Home({movieList}) {
    return (
        <Fragment>
            <Cards list={movieList} />
        </Fragment>
    )
}

const mapState = state => {
    const {movieList} = state.header;
    return {
        movieList
    }
}

export default connect(mapState)(Home)
