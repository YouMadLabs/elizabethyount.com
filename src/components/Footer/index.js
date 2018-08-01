import Link from 'next/link';

import style from './style.css';

// Style
const linkStyle = {
  color: "#AAA",
  textAlign: "center",
  width: "100%",
  paddingBottom: "10px",
};

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <footer className="footer">
    <Link href="mailto:elizabethydesign@gmail.com?Subject=Hello">
      <a style={linkStyle}>Contact</a>
    </Link>
    <Link href="https://youmadlabs.com">
      <a style={linkStyle}>© {getYear()} You Mad Labs Inc.</a>
    </Link>

    <style dangerouslySetInnerHTML={{ __html: style }} />
    <style jsx>
      {`
        a {
          display: inline-block;
          text-align: center;
          text-transform: initial;
        }
      `}
    </style>
  </footer>
);

export default Footer;