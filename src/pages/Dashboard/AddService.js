import React, { useState } from "react";
import login from "../../assets/images/login_pic.png";
import { useForm } from "react-hook-form";
import fatcher from "../../api/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [imageUrl, setimageUrl] = useState("");
  console.log(imageUrl);

  //* Upload all image and data
  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      image: imageUrl,
    };

    const result = await fatcher.post("/add-service", serviceData);
    console.log(result);
    toast.success("Data Upload Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    reset();
  };

  //*UPload Image
  const handleUploadImage = (event) => {
    console.log(event.target.files[0]);
    const image = event.target.files[0];

    //*  for uplod the image file in imagebb need to create a form object
    const formData = new FormData();

    //* then need to set/append the photo in formdata
    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=8571ba37c64539e79f99a83ecdad96d4",
        formData
      )
      .then((res) => {
        console.log(res.data.data.display_url);
        setimageUrl(res.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="hero min-h-screen bg-pink-300">
      <div className="hero-content flex flex-col mb-20 items-center justify-center lg:flex-row">
        <div className="flex justify-center">
          {/* xs:h-[20vh] md:h-[60vh] lg:h-[85vh]  */}
          <div className="w-[80%] ">
            <img className=" w-full " src={login} alt="" />
          </div>
        </div>
        {/* <div className="w-full max-w-sm items-center justify-center "> */}
        <div className="w-full">
          {/* --------------------------Form Submit----------------------- */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card rounded-none shadow-2xl bg-gray-300">
              <div className="card-body ">
                <h3 className="text-2xl text-center font-bold capitalize">
                  Add Service!
                </h3>
                <div className="form-control">
                  <label htmlFor="serviceName" className="label">
                    <span className="label-text text-gray-700 font-semibold capitalize">
                      Service Name
                    </span>
                  </label>
                  <input
                    type="text"
                    id="serviceName"
                    className="input input-bordered"
                    {...register("serviceName", {
                      required: true,
                      maxLength: 10,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    aria-invalid={errors.serviceName ? "true" : "false"}
                  />

                  {errors.serviceName?.type === "required" && (
                    <p role="alert" className="text-red-400 text-sm mt-2">
                      service Name is required
                    </p>
                  )}
                  {errors.serviceName?.type === "maxLength" && (
                    <p role="alert" className="text-red-400 text-sm mt-2">
                      maxLength is 10
                    </p>
                  )}
                  {errors.serviceName?.type === "pattern" && (
                    <p role="alert" className="text-red-400 text-sm mt-2">
                      pattern required A to Z
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700 font-semibold capitalize">
                      Service Charge
                    </span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    {...register("serviceCharge", {
                      required: true,
                      max: 100,
                      min: 50,
                    })} //when using the hook no need to use placeholder
                    aria-invalid={errors.serviceCharge ? "true" : "false"}
                  />

                  {errors.serviceCharge?.type === "required" && (
                    <p role="alert" className="text-red-400 text-sm mt-2">
                      service Charge is required
                    </p>
                  )}
                  {errors.serviceCharge?.type === "max" && (
                    <p role="alert" className="text-red-400 text-sm mt-2">
                      Max Charge is 100
                    </p>
                  )}
                  {errors.serviceCharge?.type === "min" && (
                    <p role="alert" className="text-red-400 text-sm mt-2">
                      Min Charge is 50
                    </p>
                  )}
                </div>
                <div className="form-control mb-10">
                  <label className="label">
                    <span className="label-text text-gray-700 font-semibold capitalize">
                      Upload Image
                    </span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-warning w-full "
                    onChange={handleUploadImage}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-control mt-[-25px] mx-auto w-[50%] relative z-40 ">
              {/* <p className="text-white text-center">hello</p> */}
              <button
                type="submit"
                className="btn btn-primary rounded-none capitalize text-lg"
                disabled={!imageUrl ? true : false}
              >
                Add Service
              </button>
            </div>
          </form>
          {/* --------------------------Form Submit end----------------------- */}
        </div>
      </div>
    </section>
  );
};

export default AddService;
