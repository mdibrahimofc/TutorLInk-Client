import React from "react";

const Banner = () => {
  return (
    <div className="relative text-white dark:text-gray-200">
      {/* Top Section with Background Image */}
      <div
        className="bg-cover bg-gradient-to-r from-gray-400 to-gray-700 bg-center py-12 md:py-16 lg:py-24 px-4 md:px-12"
        style={{
          backgroundImage: 'url("https://i.ibb.co/WfXnLsx/studying-5831644-1920.jpg")',
        }}
      >
        <div className="bg-black/70 dark:bg-black/80 rounded-lg p-6 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achieve Academic <span className="text-green-400">Success</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Educators</h3>
              <p className="text-sm">
                Learn from highly qualified tutors dedicated to your academic growth and success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-sm">
                Our students consistently achieve higher grades and develop lifelong learning skills.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">University Partnerships</h3>
              <p className="text-sm">
                Collaborating with top institutions to ensure quality education and valuable certifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white dark:bg-gray-900 py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Text Section */}
        <div className="bg-green-200 dark:bg-green-800 p-6 md:p-12 rounded-lg shadow-lg text-center md:w-1/2">
          <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
            Your Satisfaction, Guaranteed
          </h3>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Love the Lesson or It’s Free
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            **If you’re not satisfied with your first lesson, we’ll refund your payment—no questions asked.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/GWCSLw3/boy-5731001-1920.jpg"
            alt="Focused student"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
