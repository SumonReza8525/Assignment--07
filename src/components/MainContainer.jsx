import React, { useState } from "react";
import Banner from "./Banner";
import Container from "./Container";
import EachStudent from "./EachStudent";

const MainContainer = ({ students }) => {
  //   console.log(students);

  //   const [newData, setNewData] = useState(students);
  //   console.log(newData);

  return (
    <div>
      <Container>
        <Banner></Banner>
        <div className="min-h-125 border-2  grid grid-cols-10 gap-10">
          <div className=" col-span-full lg:col-span-7 space-y-3">
            <p className="text-2xl font-bold">Customer Ticket</p>
            <div className=" mt-4 p-3 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              {students.map((student) => (
                <EachStudent key={student.id} student={student}></EachStudent>
              ))}
            </div>
          </div>
          <div className="bg-cyan-200 col-span-full lg:col-span-3 space-y-4">
            <div className="bg-gray-400">
              <p className="text-xl font-semibold">Task Status</p>
              <p>Select a ticket to add to task Status</p>
            </div>
            <div className="bg-red-300">
              <p className="text-xl font-semibold">Resolved Task</p>
              <p>No resolved task yet</p>
              {/* <div>tesk will be here</div> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainContainer;
