import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
// import Banner from "./components/Banner";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useState(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/user.json");
        if (!res.ok) throw new Error("data can not fetch");
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        setError(error.messgage);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error :{error}</p>;

  return (
    <div className="bg-amber-200">
      <Navbar></Navbar>

      <MainContainer students={students}></MainContainer>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
