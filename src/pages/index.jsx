import Link from "next/link";
import fetch from "isomorphic-unfetch";
import style from './style.css';

import Layout from "../components/Layout";

const ProjectSection = ({ project }) => (
  <div>
    <Link as={`/projects/${project.id}`} href={`/project?title=${project.id}`}>
      <div className="thumbnail">
        <img src={project.image}/>
        <p> {project.title} </p>
      </div>
    </Link>
    <style dangerouslySetInnerHTML={{ __html: style }} />
  </div>
);

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = () => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .catch(err => console.error("Service worker registration failed", err));
  //   } else {
  //     console.log("Service worker not supported");
  //   }
  // };

  render() {
    return (
      <Layout>
        {/* DOM */}
        <div className="projects">
          {getProjects().map(project => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>

        {/* Styling */}
        <style jsx>{`
          .projects {
            padding: 0;
            grid-column-start: 2;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 5;
            display: inline-grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-row-gap: 40px;
          }
        `}</style>
      </Layout>
    );
  }
}

function getProjects() {
  return [
    {
      id: "rac",
      title: "REGIONAL ACCEPTANCE APP | BB&T",
      image: "../static/thumbnails/rac-thumbnail.png"
    },
    {
      id: "salesforce-cpq",
      title: "CPQ APP | SALESFORCE",
      image: "../static/thumbnails/cpq-thumbnail.png"
    },
    {
      id: "freelance",
      title: "FREELANCE WORK",
      image: "../static/thumbnails/freelance-thumbnail.png"
    },
    // {
    //   id: "ca",
    //   title: "PROJECT MANAGEMENT APP | CA TECHNOLOGIES",
    //   image: "../static/thumbnails/ca-thumbnail.png"
    // },
    {
      id: "salesforce-promotions",
      title: "PROMOTIONS APP | SALESFORCE",
      image: "../static/thumbnails/promotions-thumbnail.png"
    }
  ];
  
}

Index.getInitialProps = async function() {
  // const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = []

  return {
    shows: data
  };
};

export default Index;
