import React from 'react';

// Define a TypeScript type for a service
type Service = {
    id: number;
    title: string;
    description: string;
    icon: string;
  };

const Services: React.FC = () => {
    const  services: Service[] = [
        {
            id: 1,
            title: 'Web Development',
            description:
                'Build scalable and responsive web applications tailored to your needs using the latest technologies.',
            icon: '💻',
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description:
                'Develop seamless and user-friendly mobile apps to engage your audience on their favorite devices.',
            icon: '📱',
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description:
                'Create stunning and intuitive designs that deliver exceptional user experiences.',
            icon: '🎨',
        },
        {
            id: 4,
            title: 'SEO & Digital Marketing',
            description:
                'Boost your online presence and drive traffic with expert SEO and digital marketing strategies.',
            icon: '🚀',
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                    Our Services
                </h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Discover the wide range of services we offer to help you achieve your goals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
                        >
                            <div className="text-4xl">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
