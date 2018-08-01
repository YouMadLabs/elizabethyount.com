import Link from 'next/link';

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
  <footer>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    <Link href="https://youmadlabs.com" target="_blank">
      <a style={linkStyle}>© {getYear()} You Mad Labs Inc.</a>
    </Link>
    <style jsx>
      {`
        a {
          display: inline-block;
          text-align: center;
        }
        footer {
          position:absolute;
          left:0;
          bottom:0;
          right:0;
        }
      `}
    </style>
  </footer>
);

export default Footer;