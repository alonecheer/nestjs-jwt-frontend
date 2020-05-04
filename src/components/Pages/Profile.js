import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import {
  Layout,
  Menu,
  Breadcrumb,
  message,
  Row,
  Col,
  Divider,
  Descriptions,
  Radio
} from 'antd'
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
    /* display: flex;
    align-content: center;
    justify-content: center; */
  }
`

const ProfileContent = () => {
  const [size, setSize] = useState('default')
  const [profile, setProfile] = useState({})
  const getprofiledatabase = async () => {
    const users = await Axios.get(
      `http://localhost:3001/users/${sessionStorage.getItem('username')}`,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
      }
    )
    console.log('user', users)
    setProfile(users.data)
  }
  const cssonChange = e => {
    console.log('size checked', e.target.value)
    setSize(e.target.value)
  }
  useEffect(() => {
    getprofiledatabase()
  }, [])
  return (
    <StyledWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>แก้ไขข้อมูลประวัติส่วนตัว</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <div className='site-layout-content'>
          <Divider
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          >
            ข้อมูลส่วนตัว
          </Divider>
          <div>
            <Radio.Group onChange={cssonChange} value={size}>
              <Radio value='default'>default</Radio>
              <Radio value='middle'>middle</Radio>
              <Radio value='small'>small</Radio>
            </Radio.Group>
            <br />
            <br />
            <Descriptions bordered title=' ' size={size}>
              <Descriptions.Item label='รหัสนักศึกษา'>
                {profile.sid}
              </Descriptions.Item>
              <Descriptions.Item label='ชื่อ'>
                {profile.firstname}
              </Descriptions.Item>
              <Descriptions.Item label='นามสกุล'>
                {profile.lastname}
              </Descriptions.Item>
              <Descriptions.Item label='บัตรประจำตัวประชาชน'>
                {profile.cid}
              </Descriptions.Item>
              <Descriptions.Item label='ที่อยู่'>
                99/99 หมู่ 4
                <br />
                อำเภอ กะทู้ ตำบล กะทู้
                <br />
                จังหวัด ภูเก็ต 83000
                <br />
              </Descriptions.Item>
            </Descriptions>
            <br />
            <br />
          </div>
          <Divider
            orientation='left'
            style={{ color: '#333', fontWeight: 'normal' }}
          ></Divider>
        </div>
      </Content>
    </StyledWrapper>
  )
}

export default ProfileContent