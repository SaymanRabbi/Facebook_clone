import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowDown, Friends, FriendsActive, Gaming, Home, HomeActive, Logo, Market, Menu, Messenger, Notifications, Search, Watch } from '../../svg';
import AllMenu from './AllMenu';
import './Header.css';
import SearchMenu from './SearchMenu';
import UserMenu from './UserMenu';
const Header = ({page,getAllpost}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [showAllMenu, setShowAllMenu] = useState(false);
    const [showuserMenu, setShowUserMenu] = useState(false);
    const { user } = useSelector(user => ({ ...user }))
    const color = "#65676b"
    return (
        <header>
            {/* --------Header Left---------------- */}
            <div className="header_left">
                
                <Link to="/" onClick={()=>getAllpost()}>
                    <div className="circle">
                        <Logo/>
                    </div> 
                </Link>
                <div className="search search1" onClick={()=>setShowSearch(!showSearch)}> 
                    <Search color={color} />
                    <input type="text" placeholder="Search Facebook" className='hide-input'/>
                    </div>
                
            </div>
            {
                showSearch && <SearchMenu setShowSearch={setShowSearch} token={user.token} />
            } 
            {/* --------Header Left---------------- */}
            {/* --------Header Middle---------------- */}
            <div className="header_middle">
                <Link to='/' className={`middle_icon ${page==='home'? 'active':'hover1'}`}
                onClick={()=>getAllpost()}
                >
                 {
                    page ==='home' ? <HomeActive  color={color}/>: <Home color={color}/>
                 }
                </Link>
                <Link to='/Friends' className={`middle_icon ${page==='friend'? 'active':'hover1'}`}>
                {
                    page ==='friend' ? <FriendsActive  color={color}/>: <Friends color={color}/>
                 }
                </Link>
                <Link to='/' className='middle_icon hover1'>
                    <Watch color={color} />
                    <div className="middle_notification">9+</div>
                </Link>
                <Link to='/' className='middle_icon hover1'>
                 <Market color={color}/>
                </Link>
                <Link to='/' className='middle_icon hover1'>
                 <Gaming color={color}/>
                </Link>
            </div>
            {/* --------Header Middle---------------- */}
            {/* --------Header Right---------------- */}
          
            <div className="header_right">
                <Link to="/profile" className={`profile_link hover1 ${page==='profile'?'active_link':''}`}>
                    <img src={user?.picture} alt="User Profile"/>
                    <span>{user?.first_name}</span>
                </Link>
                <div className={`circle_icon hover1 ${showAllMenu && "active_header"}`} onClick={()=>setShowAllMenu(true)}>
                    <Menu />
                    {
                        showAllMenu && <AllMenu setShowAllMenu={setShowAllMenu} /> 
                   }
                </div>
                <div className="circle_icon hover1">
                    <Messenger/>
                </div>
                <div className="circle_icon hover1">
                    <Notifications />
                    <div className="right_notification">5</div>
                </div>
                <div className={`circle_icon hover1 ${showuserMenu && "active_header"}`} onClick={()=>setShowUserMenu(true)}>
                    <ArrowDown />
                    {
                        showuserMenu &&
                        <UserMenu user={user} setShowUserMenu={setShowUserMenu} />
                    }
                </div>
            </div>
              {/* --------Header Right---------------- */}
       </header>
    );
};

export default Header;