import React from 'react'
import { Layout } from 'antd'
const { Header, Content, Sider, Footer } = Layout
import HeaderComponent from '../src/components/Header'
import SiderComponent from '../src/components/Sider'
import FooterComponent from '../src/components/Footer'
import WithAuth from '../src/hoc/withAuth'
import Form001_Uploadfile_2Content from '../src/components/Pages/Form001_Uploadfile_2'
import styled from 'styled-components'
const StyledWrapper = styled.div``
const Pageform001_Uploadfile_2 = () => {
  return (
    <StyledWrapper>
      <title>Form001Page_Upload file</title>
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Form001_Uploadfile_2Content />
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
    </StyledWrapper>
  )
}
const WithTransfer = () => <WithAuth component={Pageform001_Uploadfile_2} />
export default WithTransfer

