import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";

const ProjectSection = ({ project }) => (
  <div>
    <img src={project.image}/>
    <Link as={`/projects/${project.id}`} href={`/project?title=${project.id}`}>
      <a> {project.title} </a>
    </Link>
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
        <ul>
          {getProjects().map(project => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </ul>

        {/* Styling */}
        <style jsx>{`
          ul {
            padding: 0;
            grid-column-start: 2;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 5;
          }

          li {
            list-style: none;
            margin: 5px 0;
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
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
      atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
      has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
      scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
      adolescens no. 1",
      image: ""
    },
    {
      id: "salesforce-cpq",
      title: "CPQ APP | SALESFORCE",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
        atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
        has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
        scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
        adolescens no. 1",
      image: ""
    },
    {
      id: "freelance",
      title: "FREELANCE WORK",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
        atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
        has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
        scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
        adolescens no. 1",
      image: ""
    },
    {
      id: "ca",
      title: "PROJECT MANAGEMENT APP | CA TECHNOLOGIES",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
        atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
        has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
        scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
        adolescens no. 1",
      image: ""
    },
    {
      id: "salesforce-promotions",
      title: "PROMOTIONS APP | SALESFORCE",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
        atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
        has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
        scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
        adolescens no. 1",
      image: ""
    }
  ];
  
}

Index.getInitialProps = async function() {
  // const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  // TODO: We will want this to be in a central area to reuse elsewhere
  const data = []

  return {
    shows: data
  };
};

export default Index;
