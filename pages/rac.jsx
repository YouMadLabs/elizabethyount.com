import Layout from '../components/layout'

const project = {
  id: "rac",
  title: "Regional Acceptance App | BB&T",
  image1: "../static/rac/overview.png",
  heading1: "Background",
  text1: "Regional Acceptance Corporation is an auto loan company whose clients often use smart phones as their primary devices. Prior to this project, though, Regional Acceptance did not offer a mobile product. The goal for this app was to offer an easy way for users to make recurring and one-time payments and to increase the amount of on-time payments each month.\
  \n\nAs the UX lead on this project, I developed and documented interaction designs and user flows through wireframes and high-fidelity prototypes.",
  image2: "../static/rac/payments.png",
  heading2: "User Research",
  text2: "During the design and development phases, recurring task-based tests were used to gauge effectiveness of the UI. During the first phase of design, an in-depth, weeklong dedicated study was used to rank the app’s usability among its target demographic. I developed detailed interactive prototypes in Axure to simulate the experience for accurate testing. I defined goals and KPIs for the research.",
  image3: "../static/rac/login.png",
  heading3: "Results",
  text3: "After the release of the RAC app, monthly payments are significantly higher and users can more easily enroll in features that increase on-time payments (such as automatic payments for which enrollment is now available in-app).",
};

const style = {
  gridColumn: "2 / span 3",
  gridRow: "2 / span 3",
  display: "inline-grid",
  gridTemplateColumns: "15% 1fr 30px 1fr 30px 1fr 15%",
  gridTemplateRows: "100px minmax(30px, auto) 1fr 100px 1fr 100px 1fr 50px",
  whiteSpace: "pre-wrap",
  lineHeight: "1.7em",
};

const titleStyle = {
  gridColumn: "1 / span 7",
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
        <p>Find the <a href="https://itunes.apple.com/us/app/rac-auto/id1325786204?platform=iphone&preserveScrollPosition=true#platform/iphone">Rac App here</a>!</p>
      </section>
    </div>
  </Layout>
)
