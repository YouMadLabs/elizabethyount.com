import Layout from '../components/Layout';

const project = {
  id: "salesforce-cpq",
  title: "CPQ App | Salesforce",
  image1: "../static/cpq/sf-1.png",
  heading1: "Background",
  text1: "A major initiative during my time at SteelBrick was a mobile presence on Salesforce1. The existing tablet-only app was data-heavy and not optimized for mobile, and major clients were increasingly demanding an intuitive solution for their mobile workforces. Key goals included Lightning Certification and feature parity between Web and mobile platforms.\
  \n\nI looked at the existing tablet-only app and identified the quickest, most targeted ways to improve the experience. These included usability enhancements, like larger touch targets, mobile optimized text layouts, and eliminating horizontal scrolling, as well as feature enhancements to meet customer requests, and integrating native Salesforce1 interactions.",
  image2: "../static/cpq/sf-2.png",
  heading2: "Prototyping and Testing",
  text2: "I used quick and frequent user testing to validate our new designs: a mix of high- and low-fidelity prototypes and a combination of remote, unmoderated testing, in-person user interviews, and customer feedback helped me catch problems early and iterate on an ideal design.\
  \n\nTesting showed some new data — existing users weren't interested in conducting many of the more extensive, time-consuming processes on  mobile devices, and instead wanted mobile support for a handful of key processes they most frequently performed out in the field. The final product reflected streamlined functionality and prioritized seamless interactions.",
  image3: "../static/cpq/wireframe.png",
  heading3: "Tools Used",
  text3: "Sketch, InVision, Balsamiq",
};

const style = {
  gridColumn: "2 / span 3",
  gridRow: "2 / span 3",
  display: "inline-grid",
  gridTemplateColumns: "50px 1fr 30px 1fr 30px 1fr 50px",
  gridTemplateRows: "50px minmax(30px, auto) 1fr 30px 1fr 30px 1fr 50px",
  whiteSpace: "pre-wrap",
  lineHeight: "1.7em",
};

const titleStyle = {
  gridColumn: "1 / span 6",
  gridRow: "1",
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
  width: "600px",
};

export default () => (
  <Layout>
    <div style={style}>
      <h1 style={titleStyle}>{project.title}</h1>
      <img src={project.image1} style={firstRightImageStyle}/>
      <section style={firstLeftTextStyle}>
        <h2>{project.heading1}</h2>
        {project.text1}
      </section>
      <img src={project.image2} style={leftImageStyle}/>
      <section style={rightTextStyle}>
        <h2>{project.heading2}</h2>
        <p>{project.text2}</p>
      </section>
      <img src={project.image3} style={secondRightImageStyle}/>
      <section style={secondLeftTextStyle}>
        <h2>{project.heading3}</h2>
        <p>{project.text3}</p>
      </section>
    </div>
  </Layout>
)
