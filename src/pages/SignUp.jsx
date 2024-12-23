import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
    const {register, profileUpdate} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const initialData = Object.fromEntries(form.entries())
        const {name, email, photo, password} = initialData

        register(email, password)
        .then(res=> {
            toast.success("Acount created successful")
            profileUpdate(name, photo)
        })
    }
  return (
    <div className="dark:bg-gray-800 py-6">
      <div className="flex flex-col max-w-xl mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-800 dark:text-gray-50">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up to access your account
          </p>
        </div>
        <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm dark:text-gray-50">
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="MD. Ibrahim"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50"
              />
            </div>
            <div>
              <label htmlFor="url" className="block mb-2 text-sm dark:text-gray-50">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                id="url"
                required
                placeholder="https://www.craiyon.com/image/BIfyRw2PTLqJ5xpgKBVTIg"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm dark:text-gray-50">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm dark:text-gray-50">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="hover:underline dark:text-violet-600"
              >
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
