import Layout from '../components/Layout';

const project = {
  id: "salesforce-promotions",
  title: "Promotions App | Salesforce",
  image1: "../static/promotions/desktop.png",
  heading1: "Background",
  text1: "I led the design of a new customer-requested feature for the Salesforce SteelBrick Web app. This feature would allow admins to add promotion codes to their standard pricebooks, either using discount codes at checkout or by applying discount to products automatically.",
  image2: "../static/promotions/wireframe.png",
  heading2: "Prototyping and Testing",
  text2: "Starting with low-fidelity clickable prototypes  and internal tests with sales users helped me narrow down early navigation issues and way-finding.  Highly-detailed prototypes for remote user testing and user interviews validated my customized application of the new Lightning Design System.",
  image3: "../static/promotions/user-testing.png",
  heading3: "Tools Used",
  text3: "Axure, Adobe Comet (now XD), UserTesting, Illustrator, Sketch",
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
  width: "600px",
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
  width: "600px",
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
        <p>{project.text1}</p>
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
