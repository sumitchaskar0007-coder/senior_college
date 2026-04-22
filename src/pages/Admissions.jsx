import { motion } from "framer-motion";
import { useState } from "react";

const Admissions = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const admissionSteps = [
    {
      step: 1,
      title: "Check Eligibility Criteria",
      description:
        "Review the eligibility requirements for your desired course. Ensure you meet the minimum academic qualifications and age criteria.",
      details: [
        "Minimum 50% marks in 12th standard",
        "Valid entrance exam scores (if applicable)",
        "Age limit as per university norms",
      ],
    },
    {
      step: 2,
      title: "Download Application Form",
      description:
        "Download the admission application form from our website or collect it from the admission office.",
      details: [
        "Online form available on college website",
        "Offline forms available at admission office",
        "Fill all required fields accurately",
      ],
    },
    {
      step: 3,
      title: "Upload Documents & Submit",
      description:
        "Prepare all necessary documents and submit your application either online or offline.",
      details: [
        "10th and 12th mark sheets",
        "Transfer certificate",
        "Migration certificate (if applicable)",
        "Caste certificate (if applicable)",
        "Passport size photographs",
      ],
    },
    {
      step: 4,
      title: "Check Merit List Online",
      description:
        "Merit lists will be published on the college website. Check your admission status regularly.",
      details: [
        "Provisional merit list published first",
        "Final merit list published after verification",
        "Counselling dates announced separately",
      ],
    },
  ];

  const announcements = [
    {
      title: "Admissions Open for Academic Year 2025-26",
      date: "2025-01-01",
      type: "info",
    },
    {
      title: "Last Date for Application Submission: March 31, 2025",
      date: "2025-01-15",
      type: "warning",
    },
    {
      title: "Entrance Exam Schedule Released",
      date: "2025-02-01",
      type: "info",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Admissions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100"
          >
            Join us for Academic Year 2026–27
          </motion.p>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {admissionSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setSelectedStep(index)}
                className={`p-4 rounded-lg transition font-medium ${selectedStep === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <div className="text-xl font-bold mb-1">
                  Step {step.step}
                </div>
                <div className="text-sm">{step.title}</div>
              </button>
            ))}
          </div>

          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              {admissionSteps[selectedStep].title}
            </h3>

            <p className="text-gray-700 mb-6">
              {admissionSteps[selectedStep].description}
            </p>

            <ul className="space-y-2">
              {admissionSteps[selectedStep].details.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* DOWNLOADS (ONLY PROSPECTUS) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Downloads
          </h2>

          <motion.a
            href="images/pdf/ProspectAndPamplet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-indigo-600 text-white px-10 py-5 rounded-lg shadow font-semibold"
          >
            📄 Download Prospectus
          </motion.a>
        </div>
      </section>

      {/* NOTICE */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Admission Notices
          </h2>

          <div className="space-y-4">
            {announcements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-5 rounded-lg shadow ${item.type === "warning"
                    ? "bg-yellow-50 border-l-4 border-yellow-500"
                    : "bg-blue-50 border-l-4 border-blue-500"
                  }`}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow text-center"
          >
            <h2 className="text-2xl font-bold mb-6">
              Admission Office
            </h2>

            <p className="mb-2 font-semibold">
              📞 +91 8181815768
            </p>

            <p className="mb-4 font-semibold">
              ✉️ college.gmacs@gmail.com
            </p>

            <p className="text-sm opacity-90">
              Office Hours: Monday – Saturday | 9:00 AM – 5:00 PM
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Admissions;
