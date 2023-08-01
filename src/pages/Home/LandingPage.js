import React from "react";
import doctor from "../../assets/images/doctor.png"

const LandingPage = ({ dark }) => {
  return (
    <section className="relative h-screen bg-red-200 ">
      <div className={`hero h-screen lg:h-[65vh] ${dark ? "bg-gradient-to-r from-[#e71919] to-[#a757dd]" : "bg-gradient-to-r from-[#f8cf6a] to-[#2178dd]"} relative z-0 mt-16`}>
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-5xl font-bold leading-tight">Happiness begins <br/>
                <span >with good health</span></h1>

            <p
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
              data-aos-duration="1300"
              className="btn btn-primary">Get Started</button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="h-full lg:h-[65vh] shrink-0">
            <img src={doctor} class="h-full" alt="" />
          </div>
        </div>
      </div>

      {/* TODO: Heal SCape Input fields*/}
      <div
        className={`p-5 mb-4 shadow-lg ${dark ? "bg-gradient-to-r from-emerald-400 via-yellow-500 via-opacity-50 to-blue-500 bg-opacity-50" : "bg-gradient-to-r from-red-500 via-yellow-500 via-opacity-50 to-green-500 bg-opacity-50"} relative z-[20] w-5/6 rounded-2xl mx-auto mt-[-30px]`}>
        <h1 className="text-2xl ">Get Free Estimate</h1>
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
        </div>
        <button className="btn btn-secondary mt-4">Get a Quote</button>
      </div>
    </section >
    
  );
};

export default LandingPage;
