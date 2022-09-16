import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function AboutIconLink() {
  return (
    <div className="about-link">
      {/* Instead of a regular <a> tag - the Link component is rendering all on the client side, so it's very fast and not reloading the component on click. Link has different properties and query params you can pass into it. */}
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
