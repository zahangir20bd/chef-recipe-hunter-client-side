import React from "react";
import user1 from "./../../../assets/images/png/user1.png";
import user2 from "./../../../assets/images/png/user2.png";
import user3 from "./../../../assets/images/png/user3.png";
import user4 from "./../../../assets/images/png/user4.png";

const Reviews = () => {
  return (
    <div className="mt-28">
      <h2 className="mx-auto text-center max-w-[500px] text-4xl font-bold">
        What Customers Are Saying About Us
      </h2>
      <div class="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <h5 className="text-xl text-center mx-auto max-w-[400px]">
        We pride ourselves on what our happy clients say.
      </h5>

      <div className="flex flex-col md:flex-row gap-4 px-10 mt-20 text-center">
        <div className="px-5">
          <img
            className="rounded-full max-w-[150px] mx-auto"
            src={user1}
            alt="Client image"
          />
          <h2 className="text-xl font-bold mt-5 mb-3">Russell J. Morgan</h2>
          <p>
            "Many Thanks for the beautiful food and wonderful service. Yur food
            really made the event special. I appreciate your time and effort!"
          </p>
        </div>
        <div>
          <img
            className="rounded-full max-w-[150px] mx-auto"
            src={user2}
            alt="Client image"
          />
          <h2 className="text-xl font-bold mt-5 mb-3">Jeanette M. Rechburg</h2>
          <p>
            "Thank you for making my parents' anniversary so special. The food
            was amazing, as was the service. A perfect evening!"
          </p>
        </div>
        <div>
          <img
            className="rounded-full max-w-[150px] mx-auto"
            src={user3}
            alt="Client image"
          />
          <h2 className="text-xl font-bold mt-5 mb-3">Robert J. Brown</h2>
          <p>
            "Was so impressed I had to find out more and tell my friends! Last
            week we attended a fabulous pre-wedding afternoon party!"
          </p>
        </div>
        <div>
          <img
            className="rounded-full max-w-[150px] mx-auto"
            src={user4}
            alt="Client image"
          />
          <h2 className="text-xl font-bold mt-5 mb-3">Edward C. Parker</h2>
          <p>
            "When we were in your Restaurant we were all blown away by your
            service and will be recommending you to our friends."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
