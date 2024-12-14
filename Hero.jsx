import { color } from "framer-motion";
import "./Hero.css";
import React from 'react';
import CountUp from "react-countup";
import { HiLocationMarker } from 'react-icons/hi';
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="white-gradient" />
            <div className="padding innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="circle"></div>
                        <h1>Discover <br />
                            Most Suitable<br />
                            Property</h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>Find a variety of properties that suit you very easily</span>
                        <br />
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="stats-container" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", textAlign: "center", gap: "20px", color: "#fff" }}>
                        <div className="stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CountUp className="num" style={{ fontSize: "2rem", fontWeight: "bold" }} start={8} end={9000} duration={5} />
                                <span className="orange-text" style={{ color: "#f39c12", fontSize: "1.5rem" }}>+</span>
                            </div>
                            <span className="second-text" style={{ fontSize: "1rem", marginTop: "5px" }}>Premium Products</span>
                        </div>

                        <div className="stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <span className="num" style={{ fontSize: "2rem", fontWeight: "bold" }}>2,000</span>
                                <span className="orange-text" style={{ color: "#f39c12", fontSize: "1.5rem" }}>+</span>
                            </div>
                            <span className="second-text" style={{ fontSize: "1rem", marginTop: "5px" }}>Happy Customers</span>
                        </div>

                        <div className="stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <span className="num" style={{ fontSize: "2rem", fontWeight: "bold" }}>28</span>
                                <span className="orange-text" style={{ color: "#f39c12", fontSize: "1.5rem" }}>+</span>
                            </div>
                            <span className="second-text" style={{ fontSize: "1rem", marginTop: "5px" }}>Awards Winning</span>
                        </div>
                    </div>
                    <div className="buttontype">
                    <h6 className="hhh">
                <HiLocationMarker color="var(--blue)" size={25} /> 
                    </h6>
                    <input className="input1" />
                  
                    <button className="Button">Search</button>
                    </div>
                </div>

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hi1.jpg" alt="Hero" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
