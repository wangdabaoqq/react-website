import React from 'react'
import { Layout } from 'antd'
import Header from '../Header'
import Footer from '../Footer'
import Content from '../Content'
import './index.css'
export default class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </div>
    )
  }
}
