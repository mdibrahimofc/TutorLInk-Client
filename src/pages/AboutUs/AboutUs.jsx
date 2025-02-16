import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-green-300 dark:bg-blue-500 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
          About TutorLink
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Connecting students with expert educators to achieve academic excellence.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          At TutorLink, we aim to empower learners by providing access to highly qualified tutors and personalized educational experiences. Whether you're preparing for exams or developing new skills, we’re here to help you succeed.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Our Services
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li className="mb-2">
            <span className="font-semibold">One-on-One Tutoring:</span> Personalized lessons tailored to your learning style.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Group Classes:</span> Learn with others and collaborate on projects.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Online Workshops:</span> Regularly scheduled workshops on various academic topics.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Exam Preparation:</span> Focused coaching for competitive exams and university admission tests.
          </li>
        </ul>
      </div>

      {/* Locations Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Our Locations
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          TutorLink is headquartered in Chittagong, Bangladesh, with additional branches across key cities. We also offer fully online services to ensure that students from any location can access quality education.
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Dhaka Branch – Gulshan, Dhaka</li>
          <li>Chittagong Branch – Agrabad, Chittagong</li>
          <li>Online – Nationwide</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="bg-green-300 dark:bg-blue-500 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Start Your Learning Journey Today!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Join TutorLink and gain access to top educators and personalized learning experiences. Whether you’re aiming for academic excellence or personal growth, we’re here to support your journey.
        </p>
        <button className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 py-3 px-6 rounded-lg font-semibold">
          Sign Up Now
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Why Choose TutorLink?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li className="mb-2">
            <span className="font-semibold">Expert Educators:</span> Learn from highly qualified tutors in various subjects.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Personalized Learning:</span> Tailored lesson plans for individual needs.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Flexible Scheduling:</span> Book classes at times that suit your schedule.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Satisfaction Guaranteed:</span> Love your lessons or get a refund for your first class.
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 dark:bg-gray-900 py-8 text-center">
        <p className="text-white text-lg">
          &copy; 2024 TutorLink. All rights reserved. | Terms of Service | Privacy Policy
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
