import React from "react";

function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
  ];

  const loading = false;
  const showComments = true;
  if (loading) return <h1>Loading...</h1>;

  // this const could go directly in the return jsx statement below.
  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  // How to add elements in plain js:
  //   return React.createElement(
  //     "div",
  //     { className: "container" },
  //     React.createElement("h1", {}, "My App")
  //   );

  // How to add elements using jsx:
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      {showComments && commentBlock}
    </div>
  );
}

export default App;
