import React, { Fragment } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Toggle from '../Toggle/Toggle'
import logo from '../../Assets/images/sova-logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchInputChange } from '../../redux/header/header.action'

class Header extends React.Component {
    state ={
        searchText: 'iron man',
        dropdownList: ['iron man 2008', 'iron man 2009', 'iron man 2012'],
        darkMode: true,
    }

    searchTextChangeHandler = (e) => {
        this.setState({searchText: e.target.value})
    }

    render(){
        const {searchText, dropdownList, darkMode} = this.state
        return (
            <header>
                <Link to='/'>
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <SearchBar 
                    text={this.props.searchText} 
                    list={this.props.movieList} 
                    onChangeHanlder={this.props.searchInputChange} 
                />
                <Toggle isChecked={darkMode} toggleChangeHandler={() => this.setState({darkMode: !darkMode})} />
            </header>
        )
    }
}

const mapState = state => {
    const { searchText, movieList } = state.header
    return {
        searchText,
        movieList
    }
}

const mapDispatch = dispatch => ({
    searchInputChange: (e) => dispatch(searchInputChange(e.target.value))
})
export default  connect(mapState, mapDispatch)(Header)