import Layout from '../components/Layout';

// import logo from '../static/header-logo.png';

const style = {
  "grid-column": "2 / span 3",
  "grid-row": "2 / span 3",
};

export default () => (
  <Layout>
    <div style={style}>
      <section>
        {/* <img src={logo} /> */}
      </section>

      <section>
        <p>I'm Elizabeth, a UI and UX designer who loves to wear a lot of hats in the product design process. I get excited about great data visualization and great design for wearables,</p>

        <p>Originally from the East Coast of Florida, I moved to Raleigh after living in Chicago to work at SteelBrick, and then Salesforce post-acquisition. I currently work at BB&T designing Android, iOS, and web apps.</p>

        <p>Outside of work, I enjoy being outside, traveling, my dog, Slinky (pictured left), and never drinking my coffee hot.</p>

        <p>If you'd like to learn more about my work or start a conversation, send me a message at elizabethydesign@gmail.com, or visit me at <a href="https://dribbble.com/ElizabethY" target="_blank">https://dribbble.com/ElizabethY</a>. </p>
      </section>
    </div>
  </Layout>
)
