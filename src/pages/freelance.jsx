import Layout from '../components/Layout';

const project = {
  id: "freelance",
  title: "Freelance Work",
  message: "My current freelance projects focus on improving user experience to optimize conversion rates for enterprise e-commerce clients. I design new solutions for lower-performing screens like forms, shopping carts, and checkout flows and validate conversion improvements with Optimizly X.\
  \n\nHere are a few examples of the mobile and Web designs I've worked on recently.",
  image1: "../static/freelance/ga-phone.png",
  heading1: "General Assembly",
  text1: "In recent designs for the General Assembly responsive site, changing the registration CTA from a link at the bottom of the page to a sticky layout button on mobile viewports increased click-through rates by 22%.",
  image2: "../static/freelance/atlassian.png",
  heading2: "Atlassian",
  text2: "Bringing educational content above the fold led to decreased drop-off rates.",
  image3: "../static/freelance/ab.png",
  heading3: "Alexis Bittar",
  text3: "Alexis Bittar's checkout process was initially a long, one-page form. Conversions increased when I created a paginated flow with clear length expectations for Web and mobile (below).",
};

const style = {
  gridColumn: "2 / span 3",
  gridRow: "2 / span 3",
  display: "inline-grid",
  gridTemplateColumns: "15% 1fr 30px 1fr 30px 1fr 15%",
  gridTemplateRows: "100px minmax(30px, auto) 1fr 100px 1fr 50px",
  // gridTemplateRows: "100px minmax(30px, auto) 1fr 100px 1fr 100px 1fr 50px",
  whiteSpace: "pre-wrap",
  lineHeight: "1.7em",
};

const titleStyle = {
  gridColumn: "1 / span 7",
  gridRow: "1",
  textAlign: "center",
  textTransform: "initial",
  alignSelf: "center",
};

const messageStyle = {
  gridColumn: "2 / span 5",
  gridRow: "2",
  textAlign: "center",
  textTransform: "initial",
};

const firstLeftTextStyle = {
  gridColumn: "2 / span 3",
  gridRow: "3",
  textAlign: "left",
  textTransform: "initial",
};

const firstRightImageStyle = {
  gridColumn: "6 / span 1",
  gridRow: "3",
  height: "600px",
  width: "300px",
  alignSelf: "center",
  justifySelf: "center",
};

const rightTextStyle = {
  gridColumn: "4 / span 3",
  gridRow: "5",
  textAlign: "left",
  textTransform: "initial",
};

const leftImageStyle = {
  gridColumn: "2 / span 1",
  gridRow: "5",
  height: "600px",
  width: "300px",
  alignSelf: "center",
  justifySelf: "center",
};

const secondLeftTextStyle = {
  gridColumn: "2 / span 3",
  gridRow: "7",
  textAlign: "left",
  textTransform: "initial",
};

const secondRightImageStyle = {
  gridColumn: "6 / span 1",
  gridRow: "7",
  height: "600px",
  width: "300px",
  alignSelf: "center",
  justifySelf: "center",
};

export default () => (
  <Layout>
    <div style={style}>
      <h1 style={titleStyle}>{project.title}</h1>
      <p style={messageStyle}>{project.message}</p>
      <img src={project.image1} style={firstRightImageStyle}/>
      <section style={firstLeftTextStyle}>
        <h2>{project.heading1}</h2>
        <p>{project.text1}</p>
      </section>
      <img src={project.image3} style={leftImageStyle}/>
      <section style={rightTextStyle}>
        <h2>{project.heading3}</h2>
        <p>{project.text3}</p>
      </section>
      {/* <img src={project.image3} style={secondRightImageStyle}/>
      <section style={secondLeftTextStyle}>
        <h2>{project.heading3}</h2>
        <p>{project.text3}</p>
      </section> */}
    </div>
  </Layout>
)
