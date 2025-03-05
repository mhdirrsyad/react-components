import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "motion/react";

const ModalContainer = ({ handleClick }) => {
  return (
    <motion.div
      className="fixed z-10 inset-0 bg-black/50 overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <motion.div
        className="sm:mx-auto my-12 bg-white shadow-lg max-w-2xl min-h-max p-2 rounded-lg mx-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="font-semibold text-xl">
            Request a <span className="text-teal-500">quote</span>
          </h2>
          <button
            className="cursor-pointer hover:text-red-700 transition-all duration-100"
            onClick={handleClick}
          >
            <IoMdCloseCircle className="size-6" />
          </button>
        </div>

        <hr className="border-gray-300" />
        <form className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-6">
          {/* First name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname" className="font-semibold w-max">
              First name <span className="text-teal-500">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter your first name"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
              required
            />
          </div>

          {/* Last name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="font-semibold w-max">
              Last name <span className="text-teal-500">*</span>
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter your last name"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
              required
            />
          </div>

          {/* Email address */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="email" className="font-semibold w-max">
              Email address <span className="text-teal-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold w-max">
              Phone number{" "}
              <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
            />
          </div>

          {/* Project */}
          <div className="flex flex-col gap-2">
            <label htmlFor="project" className="font-semibold w-max">
              Project type <span className="text-teal-500">*</span>
            </label>
            <input
              type="text"
              name="project"
              id="project"
              placeholder="Enter your project type"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
              required
            />
          </div>

          {/* Estimated budget */}
          <div className="flex flex-col gap-2">
            <label htmlFor="budget" className="font-semibold w-max">
              Estimated budget <span className="text-teal-500">*</span>
            </label>
            <input
              type="text"
              name="budget"
              id="budget"
              placeholder="Enter your estimated budget"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
              required
            />
          </div>

          {/* Time frame */}
          <div className="flex flex-col gap-2">
            <label htmlFor="frame" className="font-semibold w-max">
              Time frame <span className="text-teal-500">*</span>
            </label>
            <input
              type="text"
              name="frame"
              id="frame"
              placeholder="Maximum time for the project"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
              required
            />
          </div>

          {/* Project details */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="project-detail" className="font-semibold w-max">
              Project details <span className="text-teal-500">*</span>
            </label>
            <textarea
              name="project-detail"
              id="project-detail"
              rows={4}
              placeholder="Provide a short brief about your project"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-teal-500"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            className="cursor-pointer px-4 py-2 bg-slate-800 text-white rounded-md border border-slate-800 shadow-md hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 sm:col-span-2"
          >
            Submit your request
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ModalContainer;
