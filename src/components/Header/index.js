import Link from 'next/link';

// Style
import style from './style.css';

//images
// import logo from '../../static/header-logo.png';

const linkStyle = {
  marginLeft: 20,
};

const titleStyle = {
  gridColumn: "4 / span 3",
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
};

// const logoStyle = {
//   height: "100px",
//   width: "100px",
//   float: "left",
//   marginRight: 20,
// };

const Header = () => (
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

    <style dangerouslySetInnerHTML={{ __html: style }} />
  </div>
)

export default Header
