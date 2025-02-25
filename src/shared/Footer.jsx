import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h6 className="text-xl font-bold mb-4 text-gray-200">TutorLink</h6>
          <p className="text-gray-200">
            Connecting you with the best tutors for a brighter future. Learn languages and subjects with ease.
          </p>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4 text-gray-200">Services</h6>
          <ul>
            <li><a href="#" className="hover:underline text-gray-200">Find Tutors</a></li>
            <li><a href="#" className="hover:underline text-gray-200">Add Tutorials</a></li>
            <li><a href="#" className="hover:underline text-gray-200">My Tutorials</a></li>
            <li><a href="#" className="hover:underline text-gray-200">My Booked Tutors</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4 text-gray-200">Company</h6>
          <ul>
            <li><a href="#" className="hover:underline text-gray-200">About Us</a></li>
            <li><a href="#" className="hover:underline text-gray-200">Contact</a></li>
            <li><a href="#" className="hover:underline text-gray-200">Jobs</a></li>
            <li><a href="#" className="hover:underline text-gray-200">Press Kit</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-xl font-bold mb-4 text-gray-200">Legal</h6>
          <ul>
            <li><a href="#" className="hover:underline text-gray-200">Terms of Use</a></li>
            <li><a href="#" className="hover:underline text-gray-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline text-gray-200">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-200">&copy; {new Date().getFullYear()} TutorLink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
