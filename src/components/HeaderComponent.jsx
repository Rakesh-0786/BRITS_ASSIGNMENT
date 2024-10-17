import React from 'react';
import { Menu, Avatar } from 'antd';
import { UserOutlined, SketchOutlined, BellOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
            {/* Logo Section */}
            <div className="logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <SketchOutlined style={{ fontSize: '50px', marginBottom: '1px', marginTop: '2px', marginRight: '25px' }} /> {/* Adjusted marginTop */}
                <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>
                    BlackRock <span style={{ color: 'red', fontSize: '30px' }}>IT Solutions</span>
                    <div style={{ fontSize: '12px' }}>
                        One Stop Solutions For All Your IT Needs
                    </div>
                </div>
            </div>
            
            {/* Navigation Menu */}
             <Menu
      mode="horizontal"
      defaultSelectedKeys={['timesheets']}
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        border: 'none',
        marginTop: '45px',
      }}
      selectedKeys={['timesheets']}
    >
      <Menu.Item key="dashboard"><strong>Dashboard</strong></Menu.Item>
      <Menu.Item key="timesheets">
        <span style={{ color: 'red' }}><strong>Timesheets</strong></span>
      </Menu.Item>
      <Menu.Item key="requests"><strong>Requests</strong></Menu.Item>
    </Menu>
            
            {/* User Profile Section */}
            <div className="user-profile" style={{ display: 'flex', alignItems: 'center',marginTop:'40px' }}>
                <BellOutlined style={{ fontSize: '24px', marginRight: '55px' }} />
                <Avatar icon={<UserOutlined />} />
                <span style={{ marginLeft: '8px' }}>Username</span>
            </div>
        </header>
    );
};

export default HeaderComponent;


