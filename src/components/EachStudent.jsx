import React from "react";
import calender from "../assets/calender.png";
const EachStudent = ({ student }) => {
  return (
    <div
      key={student.id}
      className="bg-gray-200 rounded-lg px-3 py-5 space-y-2 cursor-pointer hover:scale-102 shadow-md shadow-gray-300 transition-all duration-200 ease-in-out"
    >
      <div className="flex justify-between items-center gap-3">
        <h2 className="text-lg font-bold">{student.title}</h2>
        <div
          className={` px-4 py-1.5  rounded-2xl flex justify-between gap-2  items-center font-bold  ${student.status === "Open" ? "text-green-500 bg-green-200" : student.status === "In Progress" ? "text-amber-500 bg-amber-200" : "text-purple-500 bg-purple-200"}`}
        >
          <p
            className={`w-5 h-5  rounded-full ${student.status === "Open" ? "bg-green-500" : student.status === "In Progress" ? "bg-amber-500" : "bg-purple-500"}`}
          ></p>
          <p className="text-nowrap">{student.status}</p>
        </div>
      </div>
      <p>{student.desc}</p>

      <div className="flex justify-between items-center">
        <div className="flex flex-col lg:flex-row justify-between  gap-3 ">
          <p className="text-xl font-bold ">ID : #{student.id}</p>
          <p
            className={`text-lg font-semibold ${student.priority === "High" ? "text-red-500" : student.priority === "Medium" ? "text-amber-500" : "text-green-500"} `}
          >
            {`${student.priority} Priority`.toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-3 ">
          <p className="font-semibold text-gray-600">{student.user}</p>
          <div className="flex gap-1.5">
            <img src={calender} alt="Calender image" />
            <p>{student.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachStudent;
