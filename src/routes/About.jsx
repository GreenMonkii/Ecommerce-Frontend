import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 style={{ textAlign: "left" }}>
          <span style={{ textDecoration: "underline" }}>About us</span>
        </h2>
        <p>
          <br />
          <span
            style={{
              color: "rgb(0, 0, 0)",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            voluptatum ea sint deleniti nam autem atque explicabo consequuntur
            quisquam reprehenderit maxime, voluptas pariatur ab ut neque
            architecto accusamus dolor alias.&nbsp;Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fuga voluptatum ea sint deleniti nam
            autem atque explicabo consequuntur quisquam reprehenderit maxime,
            voluptas pariatur ab ut neque architecto accusamus dolor alias.
          </span>
          <br />
          <br />
          <span
            style={{
              color: "rgb(0, 0, 0)",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            voluptatum ea sint deleniti nam autem atque explicabo consequuntur
            quisquam reprehenderit maxime, voluptas pariatur ab ut neque
            architecto accusamus dolor alias.&nbsp;Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Fuga voluptatum ea sint deleniti nam
            autem atque explicabo consequuntur quisquam reprehenderit maxime,
            voluptas pariatur ab ut neque architecto accusamus dolor alias.
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;