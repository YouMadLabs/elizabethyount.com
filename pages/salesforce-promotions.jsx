import Layout from "../components/layout";
import ProjectStyles from "../css/project.scss"

const project = {
  id: "salesforce-promotions",
  title: "Promotions App | Salesforce",
  image1: "../static/promotions/desktop.png",
  heading1: "Background",
  text1:
    "I led the design of a new customer-requested feature for the Salesforce SteelBrick Web app. This feature would allow admins to add promotion codes to their standard pricebooks, either using discount codes at checkout or by applying discount to products automatically.",
  image2: "../static/promotions/wireframe.png",
  heading2: "Prototyping and Testing",
  text2:
    "Starting with low-fidelity clickable prototypes  and internal tests with sales users helped me narrow down early navigation issues and way-finding.  Highly-detailed prototypes for remote user testing and user interviews validated my customized application of the new Lightning Design System.",
  image3: "../static/promotions/user-testing.png",
  heading3: "Tools Used",
  text3: "Axure, Adobe Comet (now XD), UserTesting, Illustrator, Sketch"
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
