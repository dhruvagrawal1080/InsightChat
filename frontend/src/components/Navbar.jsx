import React, { useState } from 'react';
import { BiMessageDetail } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../services/operations/authAPI';

const Navbar = () => {
    const { token } = useSelector((state) => state.token);
    const { user } = useSelector((state) => state.user);
    const [tab, showTab] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout(navigate));
    }
    return (
        <nav className='shadow-md bg-white w-full relative'>
            <div className='absolute bg-gray-300 bottom-0 right-0 left-0 h-[1px]'></div>

            <div className='flex justify-between items-center w-[90%] mx-auto h-[3.5rem]'>
                {/* Logo */}
                <NavLink to={'/'} className='flex gap-2'>
                    <BiMessageDetail size={30} color={'#2563eb'} />
                    <p className='text-xl font-bold'>InsightChat</p>
                </NavLink>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-12'>
                    {["/", "/about", "/contact"].map((path, index) => (
                        <NavLink key={index} to={path}
                            className={({ isActive }) =>
                                `hover:text-[#2563eb] hover:border-b-2 transition-all duration-100 
                                 ${isActive ? 'text-[#2563eb] border-b-2 font-semibold' : 'text-black'}`
                            }>
                            {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
                        </NavLink>
                    ))}
                </div>

                {/* User Actions (Desktop) */}
                <div className='hidden md:flex items-center gap-4'>
                    {token ? (
                        <div className='flex items-center gap-2'>
                            <p>{user.firstName} {user.lastName}</p>

                            {/* Profile Dropdown */}
                            <div className='relative flex justify-center cursor-pointer' onClick={() => showTab(!tab)}>
                                <img src={user.image} className='rounded-full w-10 h-10 object-cover bg-black p-0.5' alt="User" loading='lazy' />
                                <div className='bg-green-500 w-2 h-2 rounded-full absolute right-7 bottom-0.5'></div>

                                {tab && (
                                    <div className='absolute top-[3.25rem] -left-10 border rounded-lg bg-white shadow-lg flex flex-col items-center z-50 overflow-hidden'>
                                        <Link to={'/chat/my-profile'} className='cursor-pointer text-lg border-b w-full text-center px-4 py-2 hover:bg-gray-100'>Profile</Link>
                                        <button className='cursor-pointer text-lg text-center px-4 py-2 w-full hover:bg-gray-100' onClick={logoutHandler}>Logout</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className='flex gap-4'>
                            <NavLink to={'/auth'}
                                className={({ isActive }) =>
                                    `border px-4 py-1 rounded-md hover:text-[#2563eb] 
                                    ${isActive ? 'bg-[#2563eb] text-white border-2 font-semibold hover:text-white' : ''}`
                                }>
                                Login / Register
                            </NavLink>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                {/* <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div> */}
            </div>

            {/* Mobile Navigation */}
            {/* <div className={`md:hidden absolute z-100 top-[3.5rem] left-0 w-full bg-white shadow-md transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col items-center py-4`}>
                {["/", "/about", "/contact"].map((path, index) => (
                    <NavLink key={index} to={path}
                        className={({ isActive }) =>
                            `py-2 text-lg w-full text-center ${isActive ? 'text-[#2563eb] font-semibold' : 'text-black'}`
                        }
                        onClick={() => setMenuOpen(false)}>
                        {path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)}
                    </NavLink>
                ))}

                <div className="w-full flex items-center">
                    <div className="flex-1 border-t border-gray-200"></div>
                </div>

                {token ? (
                    <div className='flex flex-col items-center w-full'>
                        <p className='text-lg'>{user.firstName} {user.lastName}</p>
                        <img src={user.image} className='rounded-full w-12 h-12 object-cover mt-2' alt="User"  />
                        <Link to={'/dashboard/my-profile'} className='py-2 text-lg w-full text-center hover:bg-gray-100' onClick={() => setMenuOpen(false)}>Profile</Link>
                        <Link to={'/dashboard/my-notes'} className='py-2 text-lg w-full text-center hover:bg-gray-100' onClick={() => setMenuOpen(false)}>Dashboard</Link>
                        <button className='py-2 text-lg w-full text-center hover:bg-gray-100' onClick={() => { logoutHandler(); setMenuOpen(false); }}>Logout</button>
                    </div>
                ) : (
                    <div className='flex flex-col items-center w-full'>
                        <NavLink to={'/auth'}
                            className={({ isActive }) =>
                                `py-2 text-lg w-full text-center hover:bg-gray-100 ${isActive ? 'text-[#2563eb] font-semibold' : 'text-black'}`
                            }
                            onClick={() => setMenuOpen(false)}>
                            Login
                        </NavLink>
                        <NavLink to={'/signup'}
                            className={({ isActive }) =>
                                `py-2 text-lg w-full text-center hover:bg-gray-100 ${isActive ? 'text-[#2563eb] font-semibold' : 'text-black'}`
                            }
                            onClick={() => setMenuOpen(false)}>
                            Sign Up
                        </NavLink>
                    </div>
                )}
            </div> */}
        </nav>
    );
};

export default Navbar;