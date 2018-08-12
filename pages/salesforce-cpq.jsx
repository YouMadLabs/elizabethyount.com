import Layout from '../components/layout'
import ProjectStyles from "../css/project.scss"

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

export default () => (
  <Layout>
    <h1 className="title">{project.title}</h1>
    <div className="content">
      <article className="row row-first">
        <img src={project.image1} className="image-right" />
        <section className="text-left">
          <h2>{project.heading1}</h2>
          <p>{project.text1}</p>
        </section>
      </article>
      <article className="row row-second">
      <img src={project.image2} className="image-left" />
        <section className="text-right">
          <h2>{project.heading2}</h2>
          <p>{project.text2}</p>
        </section>
      </article>
      <article className="row row-third">
        <img src={project.image3} className="image-right" />
        <section className="text-left">
          <h2>{project.heading3}</h2>
          <p>{project.text3}</p>
        </section>
      </article>
    </div>
    <style dangerouslySetInnerHTML={{__html: ProjectStyles}}/>
  </Layout>
);
