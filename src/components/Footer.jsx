import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0a2a66] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COLLEGE INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Dr. Sudhakarrao Jadhavar <br /> Arts, Commerce & Science College
            </h3>

            <p className="text-white/80 text-sm mb-4">
              NAAC Accredited <br />
              Affiliated to Savitribai Phule Pune University
            </p>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Experience the vibrant campus life and picturesque environment,
              fostering excellence, innovation, and holistic development.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" className="bg-white text-[#0a2a66] p-2 rounded">f</a>
              <a href="https://instagram.com" target="_blank" className="bg-white text-[#0a2a66] p-2 rounded">ig</a>
              <a href="https://linkedin.com" target="_blank" className="bg-white text-[#0a2a66] p-2 rounded">in</a>
              <a href="https://youtube.com" target="_blank" className="bg-white text-[#0a2a66] p-2 rounded">yt</a>
            </div>
          </motion.div>

          {/* IMPORTANT LINKS 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><Link to="/nss">N.S.S.</Link></li>
              <li><Link to="/feedback">Stakeholder’s Feedback</Link></li>
              <li><a href="https://erp.mitacsc.ac.in/student" target="_blank">ERP Student Login</a></li>
              <li><a href="https://erp.mitacsc.ac.in/staff" target="_blank">ERP Staff Login</a></li>
              <li><Link to="/mandatory-disclosure">Mandatory Disclosure</Link></li>
              <li><Link to="/orientation-schedule">All Programs Orientation Schedule</Link></li>
              <li><Link to="/edc">EDC</Link></li>
              <li><Link to="/nirf">NIRF</Link></li>
            </ul>
          </motion.div>

          {/* IMPORTANT LINKS 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><Link to="/program-outcomes">Program Outcomes</Link></li>
              <li><Link to="/code-of-conduct">Code Of Conduct</Link></li>
              <li><Link to="/committees">List Of Committees</Link></li>
              <li><Link to="/student-development-cell">Student Development Cell</Link></li>
              <li><a href="https://ugcmoocs.inflibnet.ac.in" target="_blank">UGC E-Resources</a></li>
              <li><Link to="/library-newsletter">Library News Letter</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/fra-fees">FRA Fees Proposal A.Y. 2026-27</Link></li>
            </ul>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>

            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-center gap-3">
                📞 <a href="tel:8888878858">8888878858</a>
              </li>
              <li className="flex items-center gap-3">
                📧 <a href="mailto:sjartscommcollege@gmail.com">
                  sjartscommcollege@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                📍 Narhe, Pune – 411041, Maharashtra, India

              </li>
            </ul>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Dr. Sudhakarrao Jadhavar Arts, Commerce & Science College. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
