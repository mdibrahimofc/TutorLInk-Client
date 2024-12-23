import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    profileImage: 'https://via.placeholder.com/80', // Replace with actual image URL
    review: 'This platform connected me with an amazing tutor who helped me ace my exams!',
    role: 'Student',
  },
  {
    id: 2,
    name: 'John Smith',
    profileImage: 'https://via.placeholder.com/80', // Replace with actual image URL
    review: 'Teaching here has been an incredible experience. The system is smooth and easy to use.',
    role: 'Tutor',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    profileImage: 'https://via.placeholder.com/80', // Replace with actual image URL
    review: 'I love how easy it is to find a tutor that matches my learning style.',
    role: 'Student',
  },
  {
    id: 1,
    name: 'Jane Doe',
    profileImage: 'https://via.placeholder.com/80', // Replace with actual image URL
    review: 'This platform connected me with an amazing tutor who helped me ace my exams!',
    role: 'Student',
  },
  {
    id: 2,
    name: 'John Smith',
    profileImage: 'https://via.placeholder.com/80', // Replace with actual image URL
    review: 'Teaching here has been an incredible experience. The system is smooth and easy to use.',
    role: 'Tutor',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    profileImage: 'https://via.placeholder.com/80', // Replace with actual image URL
    review: 'I love how easy it is to find a tutor that matches my learning style.',
    role: 'Student',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-300"
            >
              <img
                src={testimonial.profileImage}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 italic mb-4">{testimonial.role}</p>
              <p className="text-gray-700 dark:text-gray-300">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
            onClick={() => alert('Redirect to testimonial submission page')}
          >
            Write a Testimonial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
