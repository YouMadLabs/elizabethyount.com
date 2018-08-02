import Header from '../Header'
import Footer from '../Footer'

const gridStyle = {
  minHeight: "100%",
  display: "grid",
  gridTemplateColumns: "50px repeat(3, minmax(1fr, max-content)) 50px",
  gridTemplateRows: "50px auto 1fr auto 50px",
  gridGap: "20px",
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
        background: #f0e6e6;
      }
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        text-transform: uppercase;
        text-align: center;
        font-family: "Open Sans Semibold", Helvetica, Arial, sans-serif;
        color: #333;
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
