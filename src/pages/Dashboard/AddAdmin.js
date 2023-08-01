import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fatcher from "../../api/baseUrl";
import axios from "axios";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const allData = {
      ...data,
      imageUrl: imageUrl,
    };

    const postData = await fatcher.post("/add-service", allData);
    console.log(postData);
    reset();
  };

  const handleUploadImage = (event) => {
    console.log(event.target.files[0]);
    const image = event.target.files[0];
    setLoading(true);

    const formData = new FormData();
    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=8571ba37c64539e79f99a83ecdad96d4",
        formData
      )
      .then((res) => {
        console.log(res.data.data.display_url);
        setImageUrl(res.data.data.display_url);
        setLoading(false);
      });
  };

  return (
    <div className="hero h-[100vh] bg-green-600">
      <div className="hero-content w-full ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className=" card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  {...register("serviceName", { required: true ,pattern: /^[A-Za-z]+$/i})}
                  aria-invalid={errors.serviceName ? "true" : "false"}
                />
                {errors.serviceName?.type === "required" && (
                  <p role="alert" className="text-red-400 text-sm mt-2">
                    service Name is required
                  </p>
                )}
                {errors.serviceName?.type === "pattern" && (
                  <p role="alert" className="text-red-400 text-sm mt-2">
                    pattern is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text capitalize">Service Charge</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered"
                  min={18}
                  max={99}
                  {...register("serviceCharge", {
                    required: true,
                    min: 18,
                    max: 99,
                  })}
                  aria-invalid={errors.serviceCharge ? "true" : "false"}
                />

                {errors.serviceCharge?.type === "required" && (
                  <p role="alert" className="text-red-400 text-sm mt-2">service Charge is min: 18 and max: 99</p>
                )}
                {errors.serviceCharge?.type === "min" && (
                  <p role="alert" className="text-red-400 text-sm mt-2">Service Charge should be at least 18</p>
                )}
                {errors.serviceCharge?.type === "max" && (
                  <p role="alert" className="text-red-400 text-sm mt-2">Service Charge should be at most 99</p>
                )}

              </div>
              <div className="form-control mt-5">
                <label
                  htmlFor="uploadImage"
                  className={
                    loading
                      ? "btn btn-primary loading mt-4"
                      : "btn btn-primary mt-4"
                  }
                >
                  <span className="label-text capitalize text-white">
                    Upload Image
                  </span>
                </label>
                <input
                  onChange={handleUploadImage}
                  id="uploadImage"
                  type="file"
                  className={"input input-bordered hidden"}
                />
                {errors.file?.type === "required" && (
                  <p role="alert" className="text-red-400 text-sm">file is required</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary capitalize"
                  // disabled={!imageUrl ? true : false}
                >
                  Add Service
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
