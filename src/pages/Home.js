import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
