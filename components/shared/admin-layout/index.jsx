import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  BarChartOutlined,
  DashboardOutlined,
  MessageOutlined,
  NotificationOutlined
  
} from '@ant-design/icons';
import { Layout, Menu, Button, theme ,Badge } from 'antd';
import Link from 'next/link';
const { Header, Sider, Content } = Layout;
const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical " />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <ShopOutlined />,
              label: <Link href='/admin/products'>Products </Link>,
            },
        
            {
              key: '3',
              icon: <BarChartOutlined />,
              label: 'Chart',
            },
          ]}
       
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className='flex justify-between p-20'
        >
      <div className='flex '>
      <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <h1> Dashboard</h1>
      </div>

      <div className='mr-10'>
      <Badge size="small" count={5} >
      <MessageOutlined />
      </Badge>
      <i className='bx bx-cog ml-4 mr-4 text-xl' ></i>
      <Badge size="small" count={1} >
      <NotificationOutlined />
      </Badge>
      </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <div className='overflow-auto  h-screen thumb controller scrollbar scroll'>{children} </div> 
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
