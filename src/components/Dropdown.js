import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  const [color, setColor] = useState(props.data[0]);
  const [check, setCheck] = useState(true);

  const ref = useRef();

  useEffect(() => {
    props.setLang(color);
  }, [color]);

  useEffect(() => {
    document.querySelector("body").addEventListener("click", function (e) {
      if (ref.current?.contains(e.target)) {
        return;
      }
      setCheck(false);
    });
  }, []);

  const renderDate = () => {
    return props.data.map((val) => {
      if (color.color === val.color) {
        return;
      }
      return (
        <div
          className="item"
          data-value={val.value}
          onClick={() => setColor(val)}
          key={val.value}
        >
          {val.color}
        </div>
      );
    });
  };

  return (
    <div ref={ref}>
      <label>{props.label}</label>
      <div
        onClick={() => setCheck(!check)}
        className={`ui fluid selection dropdown ${
          check ? "active visible" : ""
        } `}
      >
        <input type="hidden" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">{color.color}</div>
        <div className={`menu ${check ? "transition visible" : ""}  `}>
          {renderDate()}
        </div>
      </div>
      {/* <h1 style={{ color: `${color.value}` }}>Hello Wolrd</h1> */}
    </div>
  );
};

export default Dropdown;
