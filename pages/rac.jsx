import Layout from '../components/layout'
import ProjectStyles from "../css/project.scss"

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
