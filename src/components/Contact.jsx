

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// const Contact = ({ compact }) => {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Huzaifa",
//           from_email: form.email,
//           to_email: "huzaifahanif7555@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(() => {
//         setLoading(false);
//         alert("Thank you for your message! 😃");
//         setForm({ name: "", email: "", message: "" });
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.error(error);
//         alert("Oops! Message not sent 😢");
//       });
//   };

//   return (
//     <motion.div
//       className={`text-white bg-gradient-to-br from-black to-red-900 flex flex-col items-center transition-all
//         ${compact ? "w-full h-12/10 scale-80" : "h-full p-5 w-7/10 scale-100 m-5 border-none shadow-[0_0_20px_rgba(255,255,255,0.1)]"}
//         max-sm:w-full max-sm:p-6 max-sm:m-6 max-sm:mt-24`}
//     >
//       <h1 className={`${compact ? "text-sm" : "text-4xl"} font-bold mb-2 max-sm:text-xl`}>
//         Contact Me
//       </h1>
//       {!compact && (
//         <p className="text-lg mb-4 max-sm:text-base max-sm:mb-2">
//           Reach out to me anytime.
//         </p>
//       )}

//       <form
//         ref={formRef}
//         onSubmit={handleSubmit}
//         className={`flex flex-col gap-4 ${compact ? "p-1 text-xs" : "p-2 text-sm"} max-sm:w-11/12 max-sm:text-xs`}
//       >
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           placeholder="Your Name"
//           className={`rounded bg-gray-800 text-white border border-red-800 ${compact ? "p-1 text-[5px]" : "p-2 text-sm"} max-sm:p-3 max-sm:text-sm`}
//         />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           placeholder="Your Email"
//           className={`rounded bg-gray-800 text-white border border-red-800 ${compact ? "p-1 text-[5px]" : "p-2 text-sm"} max-sm:p-3 max-sm:text-sm`}
//         />
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           required
//           placeholder="Your Message"
//           className={`rounded bg-gray-800 text-white border border-red-800 ${compact ? "p-1 text-[5px]" : "p-2 text-sm"} max-sm:p-3 max-sm:text-sm`}
//         ></textarea>
//         <button
//           type="submit"
//           className={`bg-red-600 hover:bg-red-700 rounded ${compact ? "p-1 text-[5px]" : "p-2 text-sm"} max-sm:p-3 max-sm:text-sm`}
//           disabled={loading}
//         >
//           {loading ? "Sending..." : "Send"}
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default Contact;

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SuccessMessage from "./SuccessMessage"; // Import SuccessMessage

const Contact = ({ compact }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false); // State to control success message visibility

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Huzaifa",
          from_email: form.email,
          to_email: "huzaifahanif7555@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setShowSuccess(true); // Show the custom success message after sending the email
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Oops! Message not sent 😢"); // Default browser alert in case of error
      });
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false); // Close the success message when the user clicks "Close"
  };

  return (
    <>
      {showSuccess && <SuccessMessage onClose={closeSuccessMessage} />} {/* Render SuccessMessage */}

      <motion.div
        className={`text-white bg-gradient-to-br from-black to-red-900 flex flex-col items-center transition-all
          ${compact ? "w-full h-12/10 mt-0 scale-80" : "h-full mt-18 p-5 w-7/10 scale-100 m-5 border-none shadow-[0_0_20px_rgba(255,255,255,0.1)]"}
          max-sm:w-full 
        `}
      >
        <h1 className={`${compact ? "text-sm" : "text-4xl"} font-bold mb-2 max-sm:text-xl`}>
          Contact Me
        </h1>
        {!compact && (
          <p className="text-lg mb-4 max-sm:text-base max-sm:mb-2">
            Reach out to me anytime.
          </p>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`flex flex-col gap-4 ${compact ? "p-1 text-xs" : "p-2 text-sm"} max-sm:w-11/12 max-sm:text-xs`}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className={`rounded bg-gray-800 text-white border border-red-800 ${
              compact ? "p-1 text-[5px]" : "p-2 text-sm"
            } max-sm:p-3 max-sm:text-sm`}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className={`rounded bg-gray-800 text-white border border-red-800 ${
              compact ? "p-1 text-[5px]" : "p-2 text-sm"
            } max-sm:p-3 max-sm:text-sm`}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className={`rounded bg-gray-800 text-white border border-red-800 ${
              compact ? "p-1 text-[5px]" : "p-2 text-sm"
            } max-sm:p-3 max-sm:text-sm`}
          ></textarea>
          <button
            type="submit"
            className={`bg-red-600 hover:bg-red-700 rounded ${
              compact ? "p-1 text-[5px]" : "p-2 text-sm"
            } max-sm:p-3 max-sm:text-sm`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;
