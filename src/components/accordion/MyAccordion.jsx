import React, { useState } from "react";
import { RightOutlined, DownOutlined } from "@ant-design/icons";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading" onClick={() => setShow(!show)}>
        <h3 className="que">{question}</h3>
        <p onClick={() => setShow(!show)}>
          {show ? (
            <RightOutlined style={{ color: "rgb(142,192,56)", fontSize: 20 }} />
          ) : (
            <DownOutlined style={{ color: "rgb(142,192,56)", fontSize: 20 }} />
          )}
        </p>
      </div>
      {show && (
        <div className="ans">
        
          <ul>{answer}</ul>
        </div>
      )}
    </>
  );
};

export default MyAccordion;
