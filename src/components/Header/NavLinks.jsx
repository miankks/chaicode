import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { dropdownItems } from './NavItems';
import { BiDownArrowAlt } from "react-icons/bi";

const NavLinks = () => {
    const [dropdown, setDropdown] = useState(false);
    const onClickDropdown = () => {
        setDropdown(!dropdown)
    }

    const onClickDropdownChange = () => {
        setDropdown(false)
    }
  return (
    <>
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                             <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                         hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                         hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                         hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                             <li>
                                <NavLink 
                                    to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                         hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <div onClick={onClickDropdown}>
                             <li className='text-gray-700' >
                                <NavLink 
                                    to="#"
                                    className="text-gray-700
                                        border-b border-gray-100 
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                         hover:text-orange-700 lg:p-0 flex justify-center items-center"
                                >
                                    useContext <BiDownArrowAlt />
                                    <ul className={!dropdown?  'hidden' : 'w-36 absolute list-none text-start top-12 bg-sky-300'}
                                        
                                    >
                                        {dropdownItems.map(item => (
                                            <li>
                                                <NavLink
                                                    to={item.path}
                                                    className={({isActive}) =>
                                                        `block py-2 pr-4 pl-3 duration-200 
                                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                                        border-b border-gray-100 
                                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                                        hover:text-orange-700 lg:p-0 w-full block`
                                                        }
                                                    onClick={onClickDropdownChange}
                                                >
                                                    {item.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavLink>
                            </li>
                            </div>
                            <li>
                                <NavLink 
                                    to="/profile"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                        border-b border-gray-100 
                                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                                         hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
    </>
  )
}

export default NavLinks
        {/* <li className='flex items-center text-gray-200 mx-6 font-semibold hover:text-white h-12'
            onMouseOver={setDropdown(true)}
            onMouseLeave={setDropdown(false)}
        >
                <ul className={!dropdown ? 'hidden' : 'w-36 absolute list-none text-start top-12 bg-sky-300'}
                    onClick={setDropdown(!dropdown)}
                >
                    {dropdownItems.map(item => (
                        <li>
                            <Link
                                to={item.path}
                                className='w-full block'
                                onClick={setDropdown(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
        </li>
    </> */}