import Layout from "../components/layout";
const image = "../static/about.jpg";

const style = {
  gridColumn: "2 / span 3",
  gridRow: "2 / span 3",
  display: "inline-grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)"
};

const textStyle = {
  gridColumn: "3 / span 2",
  gridRow: "1 / span 3",
  textAlign: "left",
  textTransform: "initial"
};

const imageStyle = {
  gridColumn: "2 / span 1",
  gridRow: "1 / span 3",
  height: "400px",
  width: "300px",
  marginRight: "50px"
};

export default () => (
  <Layout>
    <div style={style}>
      <img src={image} style={imageStyle} />

      <section style={textStyle}>
        <p>
          I'm Elizabeth, a UI and UX designer who loves to wear a lot of hats in
          the product design process. I get excited about great data
          visualization and great design for wearables.
        </p>

        <p>
          Originally from the East Coast of Florida, I moved to Raleigh after
          living in Chicago to work at SteelBrick, and then Salesforce
          post-acquisition. I currently work at BB&T designing Android, iOS, and
          web apps.
        </p>

        <p>
          Outside of work, I enjoy being outside, traveling, my dog, Slinky
          (pictured left), and never drinking my coffee hot.
        </p>

        <p>
          If you'd like to learn more about my work or start a conversation,
          send me a message at{" "}
          <a
            href="mailto:elizabethydesign@gmail.com?Subject=Hello"
            target="_top"
          >
            elizabethydesign@gmail.com
          </a>, or visit me at{" "}
          <a href="https://dribbble.com/ElizabethY" target="_blank">
            https://dribbble.com/ElizabethY
          </a>.{" "}
        </p>
      </section>
    </div>
  </Layout>
);
