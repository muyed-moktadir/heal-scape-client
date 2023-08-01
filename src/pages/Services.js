// import axios from "axios";
import React, { useEffect, useState } from "react";
import fatcher from "../api/baseUrl";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services)

  useEffect(() => {
    // TODO: axios get mathod 1
    // axios
    //   .get("http://localhost:5000/services")
    //   .then((res) => setServices(res))
    //   .catch((err) => console.log(err));

    // TODO: axios get using invoke function mathod 2

    (async()=>{
      const result= await fatcher.get("/services")
      setServices(result.data)
    })()

  }, []);

  return (
    <div className="mt-16 text-center font-bold">
      
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
      <h1>services</h1>
    </div>
  );
};

export default Services;
