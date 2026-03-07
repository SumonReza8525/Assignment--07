import React, { useState } from "react";
import Banner from "./Banner";
import Container from "./Container";
import EachStudent from "./EachStudent";

const MainContainer = ({ students }) => {
  //   console.log(students);

  const [newData, setNewData] = useState(students);

  const openData = newData.filter((item) => {
    return item.status === "Open";
  });

  const progressData = newData.filter((item) => {
    return item.status === "In Progress";
  });

  const resolvedData = newData.filter((item) => item.status === "Resolved");

  const handleInProgress = (id) => {
    setNewData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "In Progress" ? "Resolved" : item.status,
            }
          : item,
      ),
    );
  };

  return (
    <div>
      <Container>
        <Banner
          progressData={progressData}
          resolvedData={resolvedData}
        ></Banner>
        <div className="min-h-125   grid grid-cols-10 gap-10 mb-16">
          <div className=" col-span-full lg:col-span-7 space-y-3">
            <p className="text-2xl font-bold">Customer Ticket</p>
            <div className=" mt-4 p-3 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              {openData.length < 1 ? (
                <div className="w-full lg:col-span-2 h-100 flex justify-center items-center text-2xl font-bold  ">
                  No Ticket Available
                </div>
              ) : (
                openData.map((student) => (
                  <EachStudent
                    setNewData={setNewData}
                    key={student.id}
                    student={student}
                  ></EachStudent>
                ))
              )}

              {/* {openData.map((student) => (
                <EachStudent
                  setNewData={setNewData}
                  key={student.id}
                  student={student}
                ></EachStudent>
              ))} */}
            </div>
          </div>
          <div className=" col-span-full lg:col-span-3 space-y-4 px-1.5">
            <div className="">
              <p className="text-xl font-semibold">Task Status</p>
              <p>
                {progressData.length < 1
                  ? "Select a ticket to add to task Status"
                  : ""}
              </p>

              <div className="mt-6 mb-10 space-y-2">
                {progressData.map((student) => (
                  <div
                    key={student.id}
                    className="bg-gray-300 p-3 space-y-2 mt-2.5 rounded-xl"
                  >
                    <p className="font-bold">{student.title}</p>
                    <button
                      onClick={() => handleInProgress(student.id)}
                      className="bg-green-600 w-full rounded-lg py-1 text-white font-semibold cursor-pointer hover:bg-linear-to-br hover:from-green-600 hover:to-green-900"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-purple-400 p-2 rounded-md shadow-2xl">
              <p className="text-xl font-semibold">Resolved Task</p>
              <p>{resolvedData.length < 1 ? "No resolved task yet" : ""}</p>
              <div className="space-y-2 mt-3 p-2">
                {resolvedData.map((student) => (
                  <div key={student.id} className="">
                    <p className="font-bold bg-white py-2.5 pl-3.5 rounded-lg">
                      {student.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainContainer;
