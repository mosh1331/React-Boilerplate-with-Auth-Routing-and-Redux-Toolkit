import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { AccountCircleOutlined } from '@mui/icons-material';

const Header = ({user}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
   const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleProfileClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    };

  return (
    <nav className="bg-primary text-white px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-4">
        {/* <Logo onClick={()=>navigate('/')} /> */}
        </div>
        <div className="relative">
            <button onClick={handleProfileClick} className="focus:outline-none w-12 h-12">
                <AccountCircleOutlined style={{fontSize:'40px',color:'#030351'}} />
            </button>
            {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <button
                        onClick={handleLogout}
                        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Header