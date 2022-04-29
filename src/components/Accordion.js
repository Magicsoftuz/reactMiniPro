import React, { useState } from "react";

const Accordion = (props) => {
  const [index, setIndex] = useState("");

  const renderData = () => {
    return props.data.map((val, key) => {
      let active;
      if (index === key) {
        active = "active";
      } else {
        active = "";
      }

      return (
        <div>
          <div className="ui styled accordion" id={key}>
            <div className={"title " + active} onClick={() => setIndex(key)}>
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className={"content " + active}>
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div> {renderData()}</div>;
};

export default Accordion;
