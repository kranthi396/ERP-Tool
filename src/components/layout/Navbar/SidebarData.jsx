import React from 'react'
import { FaUserAlt,FaChartBar ,FaUserPlus,FaAward,FaThList,FaBook} from 'react-icons/fa'
import { GoSignOut } from "react-icons/go";
import { RiQuestionnaireFill } from "react-icons/ri";


export const sidebarDataStudent = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaChartBar />,
        cName: 'nav-text'
    },
    {
        title: 'E-Notes',
        path: '/e-notes',
        icon: <FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Q-Bank',
        path: '/e-bank',
        icon: <RiQuestionnaireFill />,
        cName: 'nav-text'
    },
    {
        title: 'Grievance',
        path: '/grievance',
        icon: <FaThList />,
        cName: 'nav-text'
    },
    {
        title: 'Achievement',
        path: '/achievement',
        icon: <FaAward />,
        cName: 'nav-text'
    },
    {
        title: 'My Profile',
        path: '/my-profile',
        icon: <FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <GoSignOut />,
        cName: 'nav-text'
    }
]

export const sidebarDataFaculty = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaChartBar />,
        cName: 'nav-text'
    },
    {
        title: 'E-Notes',
        path: '/e-notes',
        icon: <FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Q-Bank',
        path: '/e-bank',
        icon: <RiQuestionnaireFill />,
        cName: 'nav-text'
    },
    {
        title: 'Grievance',
        path: '/grievance',
        icon: <FaThList />,
        cName: 'nav-text'
    },
    {
        title: 'Achievement',
        path: '/achievement',
        icon: <FaAward />,
        cName: 'nav-text'
    },
    {
        title: 'My Profile',
        path: '/my-profile',
        icon: <FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <GoSignOut />,
        cName: 'nav-text'
    }
]

export const sidebarDataHod = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <FaChartBar />,
        cName: 'nav-text'
    },
    {
        title: 'E-Notes',
        path: '/e-notes',
        icon: <FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Q-Bank',
        path: '/e-bank',
        icon: <RiQuestionnaireFill />,
        cName: 'nav-text'
    },
    {
        title: 'Grievances',
        path: '/grievance',
        icon: <FaThList />,
        cName: 'nav-text'
    },
    {
        title: 'Achievement',
        path: '/achievement',
        icon: <FaAward />,
        cName: 'nav-text'
    },
    {
        title: 'My Profile',
        path: '/my-profile',
        icon: <FaUserAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Add Student',
        path: '/student',
        icon: <FaUserPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Add Faculty',
        path: '/faculty',
        icon: <FaUserPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <GoSignOut />,
        cName: 'nav-text'
    }
]