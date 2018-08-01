import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Project = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?project>/g, "")}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Project;
