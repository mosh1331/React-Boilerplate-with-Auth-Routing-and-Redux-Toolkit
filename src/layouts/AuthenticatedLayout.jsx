import React from 'react'
import Header from '../components/header/Header'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


const AuthenticatedLayout = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    const location = useLocation()

    const menuItems = [
        { id: 1, label: "Overview", path: '/' }
    ]
    const renderNavItems = () => {
        return menuItems.map(item => <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
                isActive ? 'text-lg bg-gray-300' : 'text-lg hover:bg-gray-200'
            }
        >
            {item.label}
        </NavLink>)
    }

    return (
        <div className='h-screen bg-secondary font-playfair'>
            <Header user={user} />
            <div className="flex h-[93%]">
                <aside className="w-20 bg-white rounded text-black ">
                    {renderNavItems()}
                </aside>

                <main className="flex-1  p-4 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AuthenticatedLayout