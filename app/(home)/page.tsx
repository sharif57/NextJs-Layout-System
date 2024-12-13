import React from 'react';

// Types for sections
type Service = {
  id: number;
  title: string;
  description: string;
};

type Testimonial = {
  id: number;
  name: string;
  feedback: string;
  role: string;
};

const Home: React.FC = () => {
  // Dummy data for sections
  const services: Service[] = [
    { id: 1, title: 'Web Development', description: 'Build responsive and functional websites.' },
    { id: 2, title: 'Mobile Development', description: 'Create seamless mobile applications.' },
    { id: 3, title: 'UI/UX Design', description: 'Design user-centric and aesthetic interfaces.' },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'This team did an amazing job with our website!',
      role: 'CEO, Company X',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Professional and timely delivery of a great app.',
      role: 'CTO, Startup Y',
    },
  ];

  return (
    <div className="bg-gray-50 ">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">We provide top-notch digital solutions for your business.</p>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-md font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700">
            We are a team of experts dedicated to delivering exceptional web and mobile experiences.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-700">
                Our team consists of professionals with years of experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="text-gray-700">
                We use cutting-edge technology to deliver outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700 mb-4">"{testimonial.feedback}"</p>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions? Fill out the form below, and we'll get back to you.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
