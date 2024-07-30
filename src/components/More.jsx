import { PhoneOutlined,MailOutlined ,EnvironmentOutlined} from "@ant-design/icons";


const More = () => {
  return (
    <>
      <h3 className="h3more">If you need more help</h3>
      <p>
        Have more queries regarding the plans or need a customised plan? No
        problem! Give us a call or send us an email and we will get back to you
        as soon as possible!
      </p>

      <div className="iconsmore">
          <div> <span><PhoneOutlined style={{ color: "rgb(142,192,56)", fontSize: 20 }} /></span> <h6 className="span-txt">+91 9963697412</h6></div>
          <div><span><MailOutlined style={{ color: "rgb(142,192,56)", fontSize: 20 }}/></span>  <h6 className="span-txt">fitmealsindia@gmail.com</h6></div>
          <div><span><EnvironmentOutlined style={{ color: "rgb(142,192,56)", fontSize: 20 }} /></span> <h6 className="span-txt">Banjara Hills, road no.5</h6></div>
      </div>
    </>
  );
};

export default More;
