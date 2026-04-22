import { motion } from 'framer-motion';
import { useState } from 'react';

const Alumni = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    course: '',
    profession: '',
    email: '',
    message: '',
  });

  const alumniStories = [
    {
      name: 'Rajesh Kumar',
      batch: '2010',
      course: 'BCom',
      profession: 'Chartered Accountant',
      story: 'The college provided me with a strong foundation in commerce that helped me excel in my CA career.',
    },
    {
      name: 'Priya Sharma',
      batch: '2015',
      course: 'BCA',
      profession: 'Software Engineer',
      story: 'The practical approach to computer science education here prepared me well for the tech industry.',
    },
    {
      name: 'Amit Patel',
      batch: '2012',
      course: 'BBA',
      profession: 'Business Consultant',
      story: 'The management skills I learned during my BBA have been invaluable in my consulting career.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for registering! We will contact you soon.');
    setFormData({
      name: '',
      batch: '',
      course: '',
      profession: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Alumni
          </motion.h1>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Alumni Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {alumniStories.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {alumni.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{alumni.name}</h3>
                <p className="text-gray-600 text-center mb-2">
                  Batch {alumni.batch} | {alumni.course}
                </p>
                <p className="text-primary font-medium text-center mb-4">{alumni.profession}</p>
                <p className="text-gray-700 text-sm italic text-center">{alumni.story}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Registration Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Alumni Registration</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Batch *</label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 2010"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Course *</label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Current Profession *</label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Submit Registration
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;

