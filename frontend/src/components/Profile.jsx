import React, { useState, useEffect } from "react";

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/appointments", {
        method: "GET",
        headers: {
          authorization: `${token}`,
        },
      });
      const data = await response.json();
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="my-32 flex flex-col">
      <h1 className="font-noto-semi text-5xl text-center">Your Profile:</h1>
      <button
        type="button"
        onClick={handleLogout}
        class="my-5 self-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Logout
      </button>
      <div className="mx-10 my-5">
        <h2 className="text-3xl font-outfit-semi">Your Appointments:</h2>
        <div className="m-10 flex flex-wrap ">
          {appointments.map(({state, doctorType, date, person}) => {
            return (
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {state + " State Hospital"}
                  </h5>
                </a>
                <ul class="mb-3 font-normal text-gray-700 dark:text-gray-400 px-10">
                  <li className="list-disc">{"Doctor Type: "+ doctorType}</li>
                  <li className="list-disc">{"Date: "+ new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</li>
                  
                  <li className="list-disc">{"Person: "+ person}</li>
                </ul>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Details
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
