import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchResult } from '../../func/user';
import useClickoutside from '../../Helpers/useClickoutside';
import { Return, Search } from '../../svg';

const SearchMenu = ({ setShowSearch,token }) => {
    const [iconVesible, setIconVesible] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const color = "#65676b"
    const menu = useRef(null)
    const search = useRef(null)
    useEffect(() => {
       search.current.focus(); 
    },[])
    useClickoutside(menu, () => {
        setShowSearch(false)
    })
    const searchHandeler = async (e) => {
        if(searchValue===""){
            setSearchResults("")
        }
        else{
            const res = await searchResult(searchValue,token)
            setSearchResults(res.data)
        }
    }
    return (
        <div className='header_left search_area scrollbar' ref={menu}>
            <div className="search_wrap">
                <div className="header_logo">
                    <div className="circle hover1"  onClick={()=>setShowSearch(false)}>
                         <Return color={color}/>
                    </div>
                </div>
                <div className="search search1" onClick={() => {
                    search.current.focus()
                }}>
                    {
                        iconVesible && <div>
                        <Search color={color} />
                    </div>
                   }
                    <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}
                    onKeyUp={searchHandeler} placeholder="Search Facebook" ref={search} onFocus={() => setIconVesible(false)} onBlur={
                        () => setIconVesible(true)
                    } />
                </div>
            </div>
            <div className="search_history_header">
                <span>
                    Recent Searchs
                </span>
                <a>Edit</a>
            </div>
            <div className="search_history"></div>
            <div className="search_results scrollbar">
            {searchResults &&
          searchResults.map((user) => (
            <Link
              to={`/profile/${user.username}`}
              className="search_user_item hover1"
            //   onClick={() => addToSearchHistoryHandler(user._id)}
            >
              <img src={user.picture} alt="" />
              <span>
                {user.first_name} {user.last_name}
              </span>
            </Link>
          ))}
            </div>
        </div>
    );
};

export default SearchMenu;