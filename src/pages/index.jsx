import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount = () => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker.register("/sw.js")
  //       .catch((err) => console.error("Service worker registration failed", err));
  //   } else {
  //     console.log("Service worker not supported");
  //   }
  // }

  render () {
    return <Layout>
      {/* DOM */}
      <h1>Batman TV Shooooooooows</h1>
      <ul>
        {this.props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Styling */}
      <style jsx>{`
        h1, a {
          font-family:'Arial';
        }
        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
