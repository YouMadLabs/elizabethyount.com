import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'reactstrap'
import Styles from '../css/index.scss'
import HeaderStyles from '../css/header.scss'

const gridStyle = {
  minHeight: "100%",
  display: "grid",
  gridTemplateColumns: "50px repeat(3, minmax(1fr, max-content)) 50px",
  gridTemplateRows: "50px auto 1fr auto 50px",
  gridGap: "20px",
};

const linkStyle = {
  margin: 20,
};

const titleStyle = {
  gridColumn: "3 / span 5",
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
};

export default class extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      providers: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired,
      fluid: React.PropTypes.boolean,
      navmenu: React.PropTypes.boolean,
      signinBtn: React.PropTypes.boolean
    }
  }
  
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
      modal: false,
      providers: null
    }
  }

  render() {
    return (
      <React.Fragment style={gridStyle}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Elizabeth Yount UX|UI'}</title>
          <style dangerouslySetInnerHTML={{__html: Styles}}/>
          {/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/> */}
        </Head>
        <div className="header">
          {/* <img src={logo} style={logoStyle}/> */}
          <h3 style={titleStyle}>ELIZABETH YOUNT UX | UI</h3>

          <div className="nav">
            <Link href="/">
              <a style={linkStyle}>WORK</a>
            </Link>
            <Link href="/about">
              <a style={linkStyle}>ABOUT</a>
            </Link>
          </div>

          <style dangerouslySetInnerHTML={{ __html: HeaderStyles }} />
        </div>
        <MainBody navmenu={this.props.navmenu} fluid={this.props.fluid} container={this.props.container}>
          {this.props.children}
        </MainBody>
        <footer className="footer">
          <Link href="mailto:elizabethydesign@gmail.com?Subject=Hello">
            <a style={linkStyle}>Contact</a>
          </Link>
          <Link href="https://youmadlabs.com">
            <a style={linkStyle}>© {new Date().getFullYear()} You Mad Labs Inc.</a>
          </Link>
          <style jsx>
            {`
              .footer {
                grid-column: 3 / 4;
                grid-row: 5 / -1;
              }
              a {
                display: grid;
                text-align: center;
                text-transform: initial;
              }
            `}
          </style>
        </footer>
      </React.Fragment>
    )
  }
}

export class MainBody extends React.Component {
  render() {
    if (this.props.container === false) {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      )
    }
      return (
        <Container fluid={this.props.fluid} style={{marginTop: '1em'}}>
          {this.props.children}
        </Container>
      )
  }
}
