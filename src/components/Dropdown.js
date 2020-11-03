import React, { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = ({ title, list, setHeader, value, allowed }) => {
  const [toggle, toggleList] = useState(false);

  const handleClick = (item) => {
    toggleList(false);
    setHeader(item);
  };

  return (
    // <div style={{ height: "400px" }}>
    <div style={{ margin: "1rem" }}>
      {/* {title.split(" ").slice(1).join(" ")} */}
      <input
        // className={classes.title}
        className={
          list.length
            ? classes.title
            : `${classes["not-allowed"]} ${classes.title}`
        }
        readOnly
        onClick={() => toggleList(true)}
        value={value ? value : title}
      />
      {/* </input> */}
      {toggle ? (
        <div className={classes.options}>
          {list.map((item, index) => (
            <div
              key={index}
              className={classes.list}
              onClick={() => handleClick(item)}
              onBlur={() => toggleList(false)}
            >
              {" "}
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

Dropdown.defaultProps = {
  allowed: true,
};

export default Dropdown;
