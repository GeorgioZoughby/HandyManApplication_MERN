import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import Loader from "../Loader/Loader";

const AboutUsContent = () => {

    return (
        <>
            <div className="aboutus-content gap-48">
                <div className="flex flex-col gap-8">
                    <h1 className="text-green-900 font-bold text-6xl">Behind Our Success</h1>
                    <p className="w-96 text-xl text-black ">
                        Bringing people together, one task at a time

                        We bring people together. It’s at the heart of everything we do. We know that for every person who needs their radiator fixed before winter, the nursery set up for their newborn, or a TV mounted in time for game day, there’s someone nearby who is ready, willing, and able to help, without delay. When these two people come together, they help each other in a profound way—they offer each other a better way of living.
                    </p>
                </div>
                <div className="flex flex-col">
                    <img src="/assets/ceo.jpeg" style={{borderRadius : "100%", width : "400px", height:"400px"}} alt="ceo-photo"></img>
                    <h1 className="text-black font-bold text-3xl text-center mt-4">Our CEO</h1>
                </div>
                </div>
            </>
            );
};

            export default AboutUsContent;
