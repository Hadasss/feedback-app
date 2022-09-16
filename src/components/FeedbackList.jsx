import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleDelete }) {
  console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    //   <div className="feedback-list">
    //   {feedback.map((item) => (
    //     <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //   ))}
    // </div>
  );
}

FeedbackList.propTypes = {
  // FYI propTypes are not must-haves. can also be written this way: {feedback: PropTypes.array} without elaborating on the properties of the object.
  feedback: PropTypes.arrayOf(
    // this is a specification of the properties in the FeedbackList array, meaning - each FeedbackItem object.
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
