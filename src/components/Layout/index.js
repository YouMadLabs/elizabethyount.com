import Header from '../Header'
import Footer from '../Footer'

const gridStyle = {
  display: "grid",
  "grid-template-columns": "50px 1fr auto 1fr 50px",
  "grid-template-rows": "repeat(5, minmax(50px, max-content))",
  "grid-gap": "20px",
};

const layoutStyle = {
  width: "100vw",
  height: "100vh",
  padding: "20px 20px 20px 20px"
};

const Layout = (props) => (
  <div style={gridStyle}>
    <Header />
    {props.children}
    <Footer />
    <style jsx global>{`
      * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      body {
        background: white;
      }
      h1, h2, h3,
      a,
      p {
        font-family: "Open Sans Semibold";
        color: #333;
        text-align: center;
      }
      html,
      body {
          margin: 0;
      }
      a {
        color: #666;
      }
      a:hover {
        opacity: 0.6;
      }
      ul {
        margin: 0 0 0 0;
      }
    `}
    </style>
  </div>
)

export default Layout
