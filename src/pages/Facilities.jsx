import { motion } from 'framer-motion';

const Facilities = () => {
  const facilities = [
    {
      name: 'Library',
      icon: '📚',
      description: 'Well-stocked library with thousands of books, journals, and digital resources. Quiet study areas and reading rooms available.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
    },
    {
      name: 'Laboratories',
      icon: '🔬',
      description: 'State-of-the-art laboratories for Physics, Chemistry, Biology, and Computer Science with modern equipment and safety measures.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    },
    {
      name: 'Computer Labs',
      icon: '💻',
      description: 'Fully equipped computer laboratories with latest hardware and software. High-speed internet connectivity and modern workstations.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    },
    {
      name: 'Canteen',
      icon: '🍽️',
      description: 'Spacious canteen serving healthy and hygienic meals. Multiple food options available at affordable prices.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    },
    {
      name: 'Gymkhana',
      icon: '🏋️',
      description: 'Sports and recreation facilities including gymnasium, indoor games, and outdoor sports courts for physical fitness and recreation.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    },
    {
      name: 'Hostel',
      icon: '🏠',
      description: 'Separate hostels for boys and girls with comfortable accommodation, mess facilities, and 24/7 security.',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
    },
    {
      name: 'Wi-Fi Campus',
      icon: '📶',
      description: 'Campus-wide high-speed Wi-Fi connectivity enabling students to access online resources and stay connected.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    },
    {
      name: 'Transport',
      icon: '🚌',
      description: 'College bus service covering major routes in and around Pune for convenient and safe transportation.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
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
            Facilities
          </motion.h1>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 text-4xl bg-white/90 rounded-full p-2">
                    {facility.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;

