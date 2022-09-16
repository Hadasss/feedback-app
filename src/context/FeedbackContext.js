import { createContext, useState } from "react";

// create variable to hold global state
const FeedbackContext = createContext();

// create provider for context to allow global state to be passed into different components
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {/* any values that needs to be passed into that provider (such as state, functions etc.), will be passed in as a value attribute inside the <FeedbackContext.Provider> tag. */}
      {children}
      {/* the children that are passed in will be the components that will need access to the state. */}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
