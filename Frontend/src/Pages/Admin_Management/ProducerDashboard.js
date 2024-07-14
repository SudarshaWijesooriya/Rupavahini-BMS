import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    DashboardOutlined,
    ShoppingOutlined,
    StockOutlined,
    AreaChartOutlined,
    FormOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import ViewBlogDetails from '../Blog_Management/ViewBlogDetails';
import BloggerPage from '../Blog_Management/BloggerPage';
import WelcomeProducerDashboard from './WelcomeProducerDashboard';
import MyPro_Booking from '../Booking/MyProBooking';
// import Pro_Booking from '../Booking/ProBooking';
import AddBoxIcon from '@material-ui/icons/AddBox';

const { Sider, Content } = Layout;

const ProducerDashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const content = [
        <WelcomeProducerDashboard />,
        <MyPro_Booking />,
        // <Pro_Booking />,
        <ViewBlogDetails />,
        <BloggerPage />,
        <div></div>,
        <div></div>,
        <div></div>,
    ]


    return (
        // <Layout style={{ minHeight: '100vh' }}>
        //     <Sider width={200} theme="dark" collapsible>
        //         <Menu mode="inline" theme="dark" defaultSelectedKeys={['users']}> 
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} theme="light" collapsible>
                <Menu mode="inline" theme="light" defaultSelectedKeys={['Dashboard']}>
                    <Menu.Item key="Dashboard"

                        onClick={() => {
                            setActiveIndex(0)
                        }}
                        icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(1)
                        }}
                        key="MyPro_Booking" icon={<AreaChartOutlined />}>
                        My Requests
                    </Menu.Item>
                    {/* <Menu.Item
                        onClick={() => {
                            setActiveIndex(2)
                        }}
                        key="Pro_Booking" icon={<AreaChartOutlined />}>
                        Booking Request
                    </Menu.Item> */}
                    {/* <Menu.Item
                        onClick={() => {
                            setActiveIndex(2)
                        }}
                        key="blogs" icon={<FormOutlined />}>
                        Blogs
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(3)
                        }}
                        key="addblog" icon={<AddBoxIcon />}>
                        Add New Blog
                    </Menu.Item> */}
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ adding: 24, minHeight: 360 }}>
                        {content.length !== 0 && content[activeIndex]}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default ProducerDashboard;
