import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css"
export const AboutUs = () => {
  return (
    <div className="container">
      <div className="hero-back">
        <h1>About Us</h1>
      </div>
      <div className="middle">
        <h2>Where it all began</h2>
        <p>
          In 2015,Aman,Zeeshan,Bhavyanth and Apoorva Co-Founded Fitmeals India
          first delivery service of its kind in india. The intention was to
          introduce the concept of healthy <br />
          eating in Hyderabad wher people always associated healthy food with
          terms like 'expensive','boring' ans 'bland'.Since then Fitmeals grew
          profoundly over the years and now we <br />
          cater to clients all over the city.Thanks to the diverse and talented
          staff,Fitmeals india has encouraged a revolution of progressive
          consumers.
        </p>

        <div className="founders">
          <div className="img-div">
            <img
              src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0160-360x360.jpeg"
              alt=""
            />
          </div>
          <div className="img-div">
            <img
              src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0159-1.jpg"
              alt=""
            />
          </div>
          <div className="img-div">
            <img
              src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0161-360x353.jpg"
              alt=""
            />
          </div>
          <div className="img-div">
            <img
              src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/IMG_0157-360x364.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <h2>Our Mission</h2>
        <p>
          We are on a mission to bring awareness about the importance of eating
          well and to improve your relationship with food. The relationship
          between food and the human body is so intense yet ignored by everybody
          that often results in neglected health and ultimately health related
          problems. Our aim is to ensure that everybody has access to nutrient
          dense,convenient meals so that you don’t have to compromise on your
          nutrition because of your busy schedules.
        </p>

        <div className="quotes">
          <i className="fa-solid fa-quote-left fa-4x"></i>
          <p>
            {" "}
            For us it’s not ‘just food’, it’s a matter of good lifestyle choices
            and eventually a better quality of life.
          </p>
        </div>
      </div>
    </div>
  );
};
