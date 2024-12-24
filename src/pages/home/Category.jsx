import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const Category = () => {
  const category = [
    {
      id: 1,
      title: "English Tutors",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/017/300/766/small/learning-english-doodle-set-language-school-in-sketch-style-online-language-education-course-hand-drawn-illustration-isolated-on-white-background-vector.jpg",
      link: "/find-tutors/English",
    },
    {
      id: 2,
      title: "Spanish Tutors",
      logo: "https://as2.ftcdn.net/v2/jpg/01/96/94/97/1000_F_196949758_d5sXSJ9HhKHX9K1DjKOYAtquT4L7CBBf.jpg",
      link: "/find-tutors/Spanish",
    },
    {
      id: 3,
      title: "French Tutors",
      logo: "https://thumbs.dreamstime.com/b/learning-french-language-class-logo-exchange-program-forum-speech-bubble-international-communication-sign-france-flag-230057976.jpg",
      link: "/find-tutors/French",
    },
    {
      id: 4,
      title: "German Tutors",
      logo: "https://t3.ftcdn.net/jpg/03/38/58/58/360_F_338585891_Onqv5UXEZmTmec794BKccj7Nq09oprU4.jpg",
      link: "/find-tutors/German",
    },
    {
      id: 5,
      title: "Italian Tutors",
      logo: "https://cdn.vectorstock.com/i/1000v/12/11/learning-italian-language-class-logo-vector-39861211.jpg",
      link: "/find-tutors/Italian",
    },
    {
      id: 6,
      title: "Chinese Tutors",
      logo: "https://www.shutterstock.com/image-vector/vector-illustration-two-hand-drawn-600nw-751101376.jpg",
      link: "/find-tutors/Chinese",
    },
    {
      id: 7,
      title: "Arabic Tutors",
      logo: "https://i.pinimg.com/736x/84/c5/73/84c573bd2c2cdad9a3b0bc1dec7ae187.jpg",
      link: "/find-tutors/Arabic",
    },
    {
      id: 8,
      title: "Japanese Tutors",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Japanese-language.jpg",
      link: "/find-tutors/Japanese",
    },
    {
      id: 9,
      title: "Portuguese Tutors",
      logo: "https://static.thenounproject.com/png/1355781-200.png",
      link: "/find-tutors/Portuguese",
    },
  ];


  return (
    <div className="dark:bg-gray-800">
        <div className="grid dark:bg-gray-800 grid-cols-1 py-6 gap-5 sm:grid-cols-2 md:grid-cols-3 w-11/12 lg:w-4/5 mx-auto">
      {category.map((ct) => (
        <Link key={ct.id} to={ct.link} className="group">
          <div className="flex items-center justify-between border dark:border-gray-700 shadow-md rounded-lg p-4 hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 object-cover rounded-full border dark:border-gray-600"
                src={ct.logo}
                alt={ct.title}
              />
              <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-500">
                {ct.title}
              </p>
            </div>
            <FaChevronRight className="text-gray-500 group-hover:text-blue-500 text-xl dark:text-gray-300" />
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Category;
