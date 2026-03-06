import React from "react";

const EachStudent = ({ student }) => {
  return (
    <div
      key={student.id}
      className="bg-gray-300  rounded-lg px-3 py-5 space-y-2"
    >
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-bold">{student.title}</h2>
        <button className="px-3 py-1.5 border border-amber-500 rounded-2xl">
          {student.status}
        </button>
      </div>
      <p>{student.desc}</p>

      <div className="flex justify-between items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 bg-amber-300 ">
          <p className="text-right">ID : #{student.id}</p>
          <p>Priority : {student.priority}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
          <p>{student.user}</p>
          <p>{student.date}</p>
        </div>
      </div>
    </div>
  );
};

export default EachStudent;
