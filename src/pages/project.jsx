import Layout from "../components/Layout";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.show.title}</h1>
        <p>{this.props.show.id}</p>
        <img src={this.props.show.image1} />
      </Layout>
    );
  }
}

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  const show = getProjects().find(element => {
    return element.id === id.title;
  });

  console.log(`Fetched show: ${id}`);

  return { show };
};

function getProjects() {
  return [
    {
      id: "rac",
      title: "Regional Acceptance App | BB&T",
      image1: "../static/thumbnails/rac-thumbnail.png"
    },
    {
      id: "salesforce-cpq",
      title: "CPQ App | Salesforce",
      image1: "../static/thumbnails/cpq-thumbnail.png"
    },
    {
      id: "freelance",
      title: "Freelance Work",
      image1: "../static/thumbnails/freelance-thumbnail.png"
    },
    {
      id: "salesforce-promotions",
      title: "Promotions App | Salesforce",
      image1: "../static/thumbnails/promotions-thumbnail.png"
    }
  ];
}

export default Project;
