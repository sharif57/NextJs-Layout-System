import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">YourCompany</h2>
          <p className="text-gray-400">
            Providing top-notch digital solutions for businesses of all sizes.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/services" className="hover:text-blue-500">Services</a></li>
              <li><a href="/about" className="hover:text-blue-500">About</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-blue-500">Blog</a></li>
              <li><a href="/faq" className="hover:text-blue-500">FAQ</a></li>
              <li><a href="/terms" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p>Email: <a href="mailto:support@yourcompany.com" className="hover:text-blue-500">support@yourcompany.com</a></p>
            <p>Phone: <span>+1 (123) 456-7890</span></p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-8 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
