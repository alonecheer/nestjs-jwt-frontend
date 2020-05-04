import React, { useState, useEffect } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout

import styled from 'styled-components'
const StyledWrapper = styled.div`
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }

  .site-layout-background {
    background: #fff;
  }
  .text-content{
      margin-left: 15px;
  }
`

const ContentComponent = () => {
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Announce</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
          <div>
              <h2>Patch fix</h2>
              <div className='text-content'>
              <div>- 6:52 PM 5/4/2020 ออกแบบหน้าเว็ปใหม่</div>
              </div>
          </div>
          <h2>Patch update</h2>
              <div className='text-content'>
              <div>- 6:52 PM 5/4/2020 ปรับปรุงฟังก์ชันจากเวอร์ชั่นเก่า</div>

              </div>
        
      </Content>
    </StyledWrapper>
  )
}
export default ContentComponent
