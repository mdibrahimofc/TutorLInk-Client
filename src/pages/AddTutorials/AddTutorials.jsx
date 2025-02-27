import React, { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import axios from "axios";
import UseAxios from "../../Hooks/UseAxios";
import toast from "react-hot-toast";

const AddTutorials = () => {
  const secureAxios = UseAxios();
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.photo.value;
    const description = form.description.value;
    const price = form.price.value;
    const language = form.Language.value;
    const review = 0;
    const email = form.userEmail.value;
    const name = form.userName.value;

    const tutorial = {
      image,
      name,
      description,
      price,
      language,
      review,
      email,
    };

    secureAxios.post("/addTutorial", tutorial)
    .then(res=> {
      console.log(res.data);
      toast.success("tutorial added successfull")
    })
    // fetch("http://localhost:5000/addTutorial", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(tutorial),
    //   credentials: 'include'
    // })
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // });
  };

  return (
    <div className="pb-8 md:pb-12 lg:pb-16 lg:pt-8 pt-4 md:pt-8">
      <p className="text-center text-cyan-500 text-2xl md:text-3xl lg:text-4xl font-bold">
        Add New <br />
        Tutorial
      </p>
      <p className="text-sky-400 text-center my-2 md:text-2xl font-semibold">
        Enter the Details to Add a New Tutorial to the Server
      </p>
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Add Tutorial
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Image URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter the image URL"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Category Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Language
              </span>
            </label>
            <select
              name="Language"
              className="select select-bordered w-full dark:bg-gray-700 dark:text-white"
              required
            >
              <option disabled value="">
                Select a language category
              </option>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
              <option>Chinese</option>
              <option>Arabic</option>
              <option>Japanese</option>
              <option>Portuguese</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Description
              </span>
            </label>
            <textarea
              name="description"
              placeholder="Enter a description"
              className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                Price (USD)
              </span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* User Info */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                User Email
              </span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="userEmail"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-gray-300">
                User Name
              </span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="userName"
              className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              value={"Add Tutorial"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
