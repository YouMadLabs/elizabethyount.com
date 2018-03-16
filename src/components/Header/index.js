import Link from 'next/link';

// Style
import style from './style.css';

//images
import logo from '../../static/header-logo.png';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="header">
    <img src={logo} className="logo"/>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>

    <style dangerouslySetInnerHTML={{ __html: style }} />
  </div>
)

export default Header
