import React, { useState } from "react";
import Banner from "./Banner";
import Container from "./Container";
import EachStudent from "./EachStudent";
import { toast } from "react-toastify";

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
      prev.map((item) => {
        if (item.id === id && item.status === "In Progress") {
          toast.success("Resolved", {
            toastId: `status-${id}`,
          });

          return {
            ...item,
            status: "Resolved",
          };
        }

        return item;
      }),
    );
  };

  const handleRemove = (id) => {
    setNewData((prev) =>
      prev.map((item) => {
        if (item.id === id && item.status === "Resolved") {
          toast.error("Removed", {
            toastId: `status-${id}`,
          });

          return {
            ...item,
            status: "Open",
          };
        }

        return item;
      }),
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
            </div>
          </div>
          <div className=" col-span-full lg:col-span-3 space-y-4 px-1.5">
            <div className="bg-white p-3 rounded-lg">
              <p className="text-xl font-semibold">Task Status</p>
              <p>
                {progressData.length < 1
                  ? "Select a ticket to add to task Status"
                  : ""}
              </p>

              <div className="mt-6 mb-10 space-y-3 ">
                {progressData.map((student) => (
                  <div
                    key={student.id}
                    className=" shadow-[inset_0_4px_10px_rgba(0,0,0,0.25)] p-3 space-y-2 mt-2.5 rounded-xl"
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
                  <div
                    key={student.id}
                    className="flex justify-between items-center bg-white  rounded-lg p-2.5"
                  >
                    <div>
                      <p className="font-bold  ">{student.title}</p>
                      <p className="text-green-500 font-semibold">
                        Completed ✅
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(student.id)}
                      className="text-red-400 font-semibold cursor-pointer hover:text-red-800 "
                    >
                      remove
                    </button>
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
