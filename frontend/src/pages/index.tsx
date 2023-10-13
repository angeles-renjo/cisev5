import React from "react";
import "../styles/index.scss";
import Footer from "@/components/nav/Footer";
import withAuth from "@/hoc/withAuth";
import Signup from "@/components/Signup";

function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-center text-3xl font-bold my-8">
        Welcome to Speed
      </h1>
      <Signup />
      <Footer />
    </div>
  );
}

export default Home;
