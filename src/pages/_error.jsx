import React from 'react'
import Layout from '../components/Layout'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <Layout>
        <p>
          {this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client'}
        </p>
        <style jsx>{`
          p {
            font-family:'Arial';
          }
        `}</style>
      </Layout>
    )
  }
}
