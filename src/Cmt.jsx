import React, {useEffect} from 'react'
import "./Cmt.css"
import {cmtMenu} from "./animations/cmt.js"
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos';


const Cmt = () => {


    useEffect(()=>{
        cmtMenu();
        
        AOS.init({ duration: 1200 });
      },[]);
    

  return (
    
    <div className="committee-page" id="committees">
      
        <h1 data-aos="fade-up">COMMITTEES</h1>
    <div className="container" data-mouse-down-at="0" data-prev-percentage="0" id="image-track" >
        
      <div className="card" >
        <div className="content">
          <h2>UNGA DISEC</h2>
          <p>Disarmament and 
            <br />
            International Security 
            Committee</p>
          <a href="#">Agenda</a>
        </div>
        <img src="../img/DISEC.png" className="image" draggable="false"  />
      </div>
      <div className="card" >
        <div className="content">
          <h2>UNCSW</h2>
          <p>Commission on Status of <br /> Women</p>
          <a href="#">Agenda</a>
        </div>
        <img src="../img/UNW.png" className="image" draggable="false" />
      </div>
      <div className="card"  >
        <div className="content">
          <h2>LOK SABHA</h2>
          <p>Lok Sabha</p>
          <a href="#">Agenda</a>
        </div>
        <img src="../img/LOKSABHA.png" className="image" draggable="false" />
      </div>
      
        <div className="card"  >
        <div className="content">
          <h2>VPC</h2>
          <p>Viceroy's Partition Council</p>
          <a href="#">Agenda</a>
        </div>
        <img src="../img/VPC.png" className="image" draggable="false" />
      </div>
     
      <div className="card">
        <div className="content">
          <h2>UNHCR</h2>
          <p>United Nations High 
            <br />Commissioner of Refugee</p>
          <a href="#">Agenda</a>
        </div>
        <img src="../img/HCR.png" className="image" draggable="false" />
      </div>
      <div className="card" >
        <div className="content">
          <h2>IP</h2>
          <p>International Press</p>
          <a href="#">Agenda</a>
        </div>
        <img src="../img/IP.png" className="image" draggable="false" />
      </div>

      {/* Repeat similar structure for other cards */}

      
      </div>
      </div>
  );
};

export default Cmt;
