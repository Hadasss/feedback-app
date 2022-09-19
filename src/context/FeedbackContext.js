import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// create variable to hold global state
const FeedbackContext = createContext();

// create provider for context to allow global state to be passed into different components
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // delete a feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add a feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(feedback);
  };

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // update feedbackItem
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, // this is the actual state of the item object that needs to be edited
        deleteFeedback,
        addFeedback,
        editFeedback, // this is the function that runs in <FeedbackItem/>
        updateFeedback,
      }}
    >
      {/* any values that needs to be passed into that provider (such as state, functions etc.), will be passed in as a value attribute inside the <FeedbackContext.Provider> tag. */}
      {children}
      {/* the children that are passed in will be the components that the Provider will be wrapping in App.js, that will need access to the state. */}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
