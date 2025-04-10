


import React from "react";
import { motion } from "framer-motion";

const SuccessMessage = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gradient-to-br from-black to-red-900 text-white p-5 rounded-lg shadow-lg text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-xl font-bold">Thank You!</h2>
        <p>Your message has been sent successfully. 😃</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessMessage;
