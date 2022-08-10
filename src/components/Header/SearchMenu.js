import React, { useEffect, useRef, useState } from 'react';
import useClickoutside from '../../Helpers/useClickoutside';
import { Return, Search } from '../../svg';

const SearchMenu = ({ setShowSearch }) => {
    const [iconVesible, setIconVesible] = useState(true);
    const color = "#65676b"
    const menu = useRef(null)
    const search = useRef(null)
    useEffect(() => {
       search.current.focus(); 
    },[])
    useClickoutside(menu, () => {
        setShowSearch(false)
    })
    
    return (
        <div className='header_left search_area scrollbar' ref={menu}>
            <div className="search_wrap">
                <div className="header_logo">
                    <div className="circle hover1" onClick={()=>setShowSearch(false)}>
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
                    <input type="text" placeholder="Search Facebook" ref={search} onFocus={() => setIconVesible(false)} onBlur={
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
            <div className="search_results scrollbar"></div>
        </div>
    );
};

export default SearchMenu;