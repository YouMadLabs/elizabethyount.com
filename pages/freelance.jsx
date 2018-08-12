import Layout from '../components/layout'
import ProjectStyles from "../css/project.scss"

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
  text3: "Alexis Bittar's checkout process was initially a long, one-page form. Conversions increased when I created a paginated flow with clear length expectations for Web and mobile.",
};

export default () => (
  <Layout>
    <h1 className="title">{project.title}</h1>
    <p className="message">{project.message}</p>
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
