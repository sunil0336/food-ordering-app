import React from 'react';

function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 border-4 border-purple-200">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2 text-center">Contact Us</h1>
        <p className="mb-8 text-gray-600 text-center">
          We would love to hear from you! Fill out the form below and our team will get back to you soon.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-purple-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow hover:from-purple-600 hover:to-pink-600 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <span className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
