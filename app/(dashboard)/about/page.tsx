import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Welcome to our website! We are passionate about delivering the best services to our customers.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              Our mission is to provide high-quality products and services that bring value to our customers. We strive
              to innovate and continuously improve to meet your needs.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              We envision a future where our solutions make a significant impact on society. We aim to create a better
              tomorrow by focusing on sustainability, innovation, and excellence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
            <p className="text-gray-600 mt-2">
              We are a team of dedicated professionals with diverse skills and expertise. Together, we work towards
              achieving our shared goals and delivering exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
