import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xldlpnao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setOpen(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <section
      id="contact"
      className="pt-20 pb-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg"></div>
      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 bg-opacity-70 backdrop-blur-lg p-8 rounded-xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-600 focus:ring focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-600 focus:ring focus:ring-indigo-500 outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full mt-6 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-indigo-600 focus:ring focus:ring-indigo-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Direct Contact Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="mailto:jitendrasahu@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-indigo-600 rounded-lg transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://linkedin.com/in/jitendra-sahu-660008366/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-indigo-600 rounded-lg transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-green-600 rounded-lg transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Success Snackbar */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </section>
  );
}
