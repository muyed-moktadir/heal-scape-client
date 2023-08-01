import React from "react";
import login_pic2 from "../assets/images/login.png";

const Login = () => {
  return (
    <section className=" hero h-screen bg-pink-50 lg:mt-8 mt-4">
      <div className="hero-content flex-col lg:flex-row lg:gap-40 ">
        <div className="text-center lg:text-left">
          <div className="h-full shrink-0">
            <img className="w-full lg:h-[550px] " src={login_pic2} alt="" />
          </div>
        </div>

        <div className="w-full max-w-sm">
          <div
            // style={{
            //   boxShadow:
            //     "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            // }}
            className="card flex-shrink-0 w-full max-w-sm rounded-none shadow-2xl"
          >
            <div className="card-body">
              <h3 className="text-2xl text-center font-bold">Login now!</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text uppercase text-gray-700 font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text uppercase  text-gray-700 font-semibold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <button className="btn btn-ghost hover:btn-primary rounded-none">
                Continue with google
              </button>
              <div class="divider">OR</div>
            </div>
          </div>
          <div className="form-control mt-[-25px] mx-24 justify-center relative z-40 w-52 ">
            {/* <p className="text-white text-center">hello</p> */}
            <button className="btn btn-primary rounded-none">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
