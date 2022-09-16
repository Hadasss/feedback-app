import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // conditional class:
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      // conditional style:
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "black",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = { reverse: false };

Card.protoTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
