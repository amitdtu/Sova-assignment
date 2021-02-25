import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter'

function SearchBar({text='', list=[], ...props}) {
    const [hideList, setHideList] = useState(true)

    const inputChangeHanlder = (e) => {
        props.onChangeHanlder(e)
        setHideList(false)
    }

    const listClickHandler = (id) => {
        setHideList(true);
        props.history.push(`/${id}`)
    }
    return (
        <div className="search-input-box">
            <input value={text} onChange={inputChangeHanlder} onClick={() => setHideList(false)} autoComplete="off" list="ice-cream-flavors" type="text" className="search-box" />
            <span onClick={() => setHideList(false)}><i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <OutsideAlerter onClickOutside={() => setHideList(true)}  >
            {list.length && !hideList ?
             <ul>
                 {list.map((item, i) => 
                    <li onClick={() => listClickHandler(item.imdbID) } key={i}>{item.Title} {item.Year}</li>
                 )}
            </ul> : null}
            </OutsideAlerter>
        </div>
    )
}

export default withRouter(SearchBar)
