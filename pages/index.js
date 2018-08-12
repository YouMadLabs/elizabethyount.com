import Link from 'next/link'
import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'
import ThumbnailStyle from '../css/thumbnail.scss'

const ProjectSection = ({ project }) => (
  <div>
    <Link href={`/${project.id}`}>
      <div className="thumbnail">
        <img src={project.image} />
        <p> {project.title} </p>
      </div>
    </Link>
    <style dangerouslySetInnerHTML={{ __html: ThumbnailStyle }} />
  </div>
);


const projects = [
    {
      id: "rac",
      title: "Regional Acceptance App | BB&T",
      image: "../static/thumbnails/rac-thumbnail.png"
    },
    {
      id: "salesforce-cpq",
      title: "CPQ App | Salesforce",
      image: "../static/thumbnails/cpq-thumbnail.png"
    },
    {
      id: "freelance",
      title: "Freelance Work",
      image: "../static/thumbnails/freelance-thumbnail.png"
    },
    {
      id: "salesforce-promotions",
      title: "Promotions App | Salesforce",
      image: "../static/thumbnails/promotions-thumbnail.png"
    }
  ];

export default class extends Page {
  render() {
    return (
      <Layout>
        {/* DOM */}
        <div className="project">
          {projects.map(project => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </div>

        {/* Styling */}
        <style jsx>{`
          .project {
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
    )
  }
}