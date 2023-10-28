import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { HomeFilled, DownloadOutlined, CheckCircleOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Navbar.css'
const items = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeFilled />,
        to: '/home'
    },

    {
        label: 'Post',
        key: 'post',
        icon: <CheckCircleOutlined />,
        to: '/post'
    },
  
    {
        label: 'About me',
        key: 'about_us',
        icon: <TeamOutlined />,
        to: '/about_us'
    }
]

export const Navbar = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Menu
        id='navbar'
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        inlineIndent={100}
    >
        {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
        ))}
        </Menu>
    )
}