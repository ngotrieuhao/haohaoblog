import DashboardHeading from "module/dashboard/DashboardHeading";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";

const DashboardPage = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  const [total, setTotal] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "posts");
      const colRefUser = collection(db, "users");

      onSnapshot(colRef, (snashot) => {
        setTotal(snashot.size);
      });
      onSnapshot(colRefUser, (snashot) => {
        setTotalUser(snashot.size);
      });
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex">
        <span className="mr-2 text-white page-title-icon bg-gradient-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <DashboardHeading
          title="Dashboard"
          desc="Overview dashboard monitor"
        ></DashboardHeading>
      </div>

      <div className="main-panel">
        <div className="content-wrapper">
          <div>
            {/* Top Dashboard */}
            <div className="row">
              <div className="col-md-4 stretch-card grid-margin h-[140px] md:h-[150px] text-sm">
                <div className="text-white card bg-gradient-danger card-img-holder">
                  <div className="card-body">
                    <h4 className="flex flex-col-reverse justify-center p-1 mb-3 text-center md:justify-between md:flex-row font-weight-normal">
                      All Posts{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                        />
                      </svg>
                    </h4>
                    <p className="text-lg text-center md:text-left md:text-2xl">
                      {total}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin  h-[140px] md:h-[150px] text-sm ">
                <div className="text-white card bg-gradient-info card-img-holder">
                  <div className="card-body">
                    <h4 className="flex flex-col-reverse justify-center p-1 mb-3 text-center md:justify-between md:flex-row font-weight-normal">
                      User statistical{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </h4>
                    <p className="text-lg text-center md:text-left md:text-2xl">
                      {totalUser}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 stretch-card grid-margin  h-[140px] md:h-[150px] text-sm">
                <div className="text-white card bg-gradient-success card-img-holder">
                  <div className="card-body">
                    <h4 className="flex flex-col-reverse justify-center p-1 mb-3 text-center md:justify-between md:flex-row font-weight-normal">
                      Visitors Online{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </h4>
                    <div className="mb-5 text-lg "></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Body Dashboard */}
            <div className="flex flex-col row md:flex-row">
              <div className="calendar">
                <Calendar value={date} onChange={onChange} locale="en" />
              </div>
              <div className="mb-10 bg-white recent-update">
                <div className="p-2 card">
                  <div className="card-body ">
                    <h4 className="text-lg font-semibold card-title">
                      Recent Updates
                    </h4>
                    <div className="flex gap-4 text-[#B69FA6] my-4">
                      <div className="flex items-center justify-center gap-1 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                        <span className="capitalize">Hao Hao</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="capitalize">October 27th, 2022</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <img
                        src="/blockchain.png"
                        alt="img-item1"
                        className="object-cover w-full h-full rounded-lg"
                      />
                      <img
                        src="/backend.jpg"
                        alt="img-item2"
                        className="object-cover w-full h-full rounded-lg"
                      />

                      <img
                        src="/backend2.jpeg"
                        alt="img-item3"
                        className="object-cover w-full h-full rounded-lg"
                      />
                      <img
                        src="/unittest.png"
                        alt="img-item4 "
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>

                    <div className="flex items-start gap-4 mt-10">
                      <img
                        src="/dog.jpg"
                        className="w-12 h-12 rounded-full"
                        alt="avatar"
                      />
                      <div className="flex-grow mb-0">
                        <h5 className="mb-1 mr-2 font-medium">
                          HaoHao - University Of Greenwich
                        </h5>
                        <p className="text-sm font-thin">
                          Every time you post something online, you have a
                          choice. You can either make it something that adds to
                          the happiness levels in the world—or you can make it
                          something that takes away.
                        </p>
                      </div>
                      <div className="ml-auto">
                        <i className="mdi mdi-heart-outline text-muted"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
