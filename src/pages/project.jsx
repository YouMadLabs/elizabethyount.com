import Layout from "../components/Layout";

const style = {
  gridColumn: "2 / span 3",
  gridRow: "2 / span 3",
  display: "inline-grid",
  gridTemplateColumns: "50px 1fr 30px 1fr 30px 1fr 50px",
  gridTemplateRows: "50px minmax(30px, auto) 1fr 30px 1fr 30px 1fr 50px",
  whiteSpace: "pre-wrap",
  lineHeight: "1.7em"
};

const titleStyle = {
  gridColumn: "1 / span 6",
  gridRow: "1",
  textAlign: "center",
  textTransform: "initial"
};

const messageStyle = {
  gridColumn: "3 / span 3",
  gridRow: "2",
  textAlign: "center",
  textTransform: "initial"
};

const firstLeftTextStyle = {
  gridColumn: "2 / span 3",
  gridRow: "3",
  textAlign: "left",
  textTransform: "initial"
};

const firstRightImageStyle = {
  gridColumn: "6 / span 1",
  gridRow: "3",
  height: "600px",
  width: "300px"
};

const rightTextStyle = {
  gridColumn: "4 / span 3",
  gridRow: "5",
  textAlign: "left",
  textTransform: "initial"
};

const leftImageStyle = {
  gridColumn: "2 / span 1",
  gridRow: "5",
  height: "600px",
  width: "600px"
};

const secondLeftTextStyle = {
  gridColumn: "2 / span 3",
  gridRow: "7",
  textAlign: "left",
  textTransform: "initial"
};

const secondRightImageStyle = {
  gridColumn: "6 / span 1",
  gridRow: "7",
  height: "600px",
  width: "300px"
};

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div style={style}>
          <h1 style={titleStyle}>{project.title}</h1>
          <p style={messageStyle}>{project.message}</p>
          <img src={project.image1} style={firstRightImageStyle} />
          <section style={firstLeftTextStyle}>
            <h2>{project.heading1}</h2>
            <p>{project.text1}</p>
          </section>
          <img src={project.image2} style={leftImageStyle} />
          <section style={rightTextStyle}>
            <h2>{project.heading2}</h2>
            <p>{project.text2}</p>
          </section>
          <img src={project.image3} style={secondRightImageStyle} />
          <section style={secondLeftTextStyle}>
            <h2>{project.heading3}</h2>
            <p>{project.text3}</p>
          </section>
        </div>
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
