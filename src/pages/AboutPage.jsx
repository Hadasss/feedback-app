import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app tp leave feedback for a product or a service</p>
        <p>Version: 1.0.0</p>

        <p>
          {/* Instead of a regular <a> tag - the Link component is rendering all on the client side, so it's very fast and not reloading the component on click. Link has different properties and query params you can pass into it. */}
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
