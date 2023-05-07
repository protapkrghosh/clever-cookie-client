import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GetContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { users, userLogOut } = useContext(GetContext);

    const handleLogOut = () => {
        userLogOut()
            .then()
            .catch(() => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-slate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case sm:text-3xl lg:text-3xl">Clever Cookie</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <Link to="/">Home</Link>
                        <Link to="/blog" className='mx-7'>Blog</Link>
                    </ul>
                </div>

                <div className="navbar-end">
                    {users &&
                        <div className="avatar tooltip tooltip-left" data-tip={users?.displayName}>
                            <div className="w-11 me-3 rounded-full ">
                                <img src={users?.photoURL} />
                            </div>
                        </div>}

                    {users ?
                        <button onClick={handleLogOut} className='btn'>Log Out</button> :
                        <Link to="/login">
                            <button className='btn'>Log In</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;