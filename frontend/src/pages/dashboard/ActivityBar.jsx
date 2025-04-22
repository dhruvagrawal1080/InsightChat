import React, { useState } from 'react';
import { FiLogOut } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { PiChatsLight } from "react-icons/pi";
import { RiRobot2Line } from "react-icons/ri";
import { TbLayoutSidebarFilled, TbLayoutSidebarRightFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/operations/authAPI';

const ActivityBar = () => {
    const [expanded, setExpanded] = useState(true);
    const [activeTab, setActiveTab] = useState("chats");
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tabs = [
        { id: 'chats', icon: <PiChatsLight size={24} />, label: 'Chats' },
        { id: 'groups', icon: <GrGroup size={24} />, label: 'Groups' },
        { id: 'ai', icon: <RiRobot2Line size={24} />, label: 'AI Chat' }
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleLogout = () => {
        dispatch(logout(navigate));
    };

    return (
        <div className={`h-full bg-white transition-all duration-300 flex flex-col ${expanded ? 'w-60' : 'w-16'} border-r border-gray-300`}>
            <div
                onClick={() => setExpanded(!expanded)}
                className={`p-4 flex ${expanded ? "justify-end" : "justify-center"} cursor-pointer hover:bg-gray-100`}
            >
                {expanded
                    ? <TbLayoutSidebarFilled size={24} className="text-gray-600" />
                    : <TbLayoutSidebarRightFilled size={24} className="text-gray-600" />
                }
            </div>

            <div className="flex flex-col flex-grow">
                {tabs.map((tab) => (
                    <Link
                        // to={`/dashboard/${tab.id}`}
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`flex items-center gap-4 p-4 cursor-pointer transition-colors ${activeTab === tab.id ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600' : 'hover:bg-gray-100'}`}
                    >
                        <div className="flex items-center justify-center min-w-8">
                            {tab.icon}
                        </div>
                        {expanded && <p className="font-medium text-lg">{tab.label}</p>}
                    </Link>
                ))}
            </div>

            <div className="p-3 flex items-center justify-between border-t border-gray-300 hover:bg-gray-100">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 relative">
                        <img
                            src={user.image}
                            alt="Profile"
                            className="h-10 w-10 rounded-full object-cover bg-black p-0.5"
                        />
                        <div className='bg-green-500 w-2 h-2 rounded-full absolute right-7 bottom-0.5'></div>
                    </div>

                    {expanded && (
                        <div className="overflow-hidden">
                            <p className="font-medium text-sm">
                                {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-500 transition-colors p-2 cursor-pointer"
                >
                    <FiLogOut size={expanded ? 18 : 20} />
                </button>
            </div>
        </div>
    );
};

export default ActivityBar;