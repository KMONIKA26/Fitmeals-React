import "./test.css";

const Testimony = ({ icon, body, image, name }) => {
  return (
 <div className="testimonials">
    <div className="inside">

         <i className={icon} ></i>
         <p>{body}</p>

         <img src={image} alt="" />
        <div>{name}</div>
      </div>
   
    </div>
  );
};

export default Testimony;
