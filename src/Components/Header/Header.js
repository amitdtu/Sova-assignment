import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Toggle from '../Toggle/Toggle'
import logo from '../../Assets/images/sova-logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchInputChange, toggleThemeCheckbox } from '../../redux/header/header.action'

class Header extends React.Component {

    searchTextChangeHandler = (e) => {
        this.setState({searchText: e.target.value})
    }

    darkModeToggler = () => {
        const {isDarkMode, toggleThemeCheckbox} = this.props
        // toggle dark class in body tag
        const bodyTag = document.getElementsByTagName("body")[0]
        if(isDarkMode) {
            bodyTag.classList.remove("dark");
        } else {
            bodyTag.classList.add("dark");
        }
        toggleThemeCheckbox()
    }

    render(){
        const {searchText, movieList, searchInputChange, isDarkMode, toggleThemeCheckbox} = this.props
        return (
            <header>
                <Link to='/'>
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <SearchBar 
                    text={searchText} 
                    list={movieList} 
                    onChangeHanlder={searchInputChange} 
                />
                <Toggle isChecked={isDarkMode} toggleChangeHandler={this.darkModeToggler} />
            </header>
        )
    }
}

const mapState = state => {
    const { searchText, movieList, isDarkMode } = state.header
    return {
        searchText,
        movieList,
        isDarkMode,
    }
}

const mapDispatch = dispatch => ({
    searchInputChange: (e) => dispatch(searchInputChange(e.target.value)),
    toggleThemeCheckbox: () => dispatch(toggleThemeCheckbox()),
})
export default  connect(mapState, mapDispatch)(Header)