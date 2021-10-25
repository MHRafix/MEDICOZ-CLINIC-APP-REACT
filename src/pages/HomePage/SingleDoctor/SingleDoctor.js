import React, { useEffect, useState } from 'react';
import './SingleDoctor.css';
import { useHistory, useParams } from 'react-router';

const SingleDoctor = () => {
    // Use state for store the data in the  state
    const [doctors, setDoctors] = useState([]);

    // Get the unique id of the doctors
    const {doctorUniqueId} = useParams();

    // Use history for changing route
    const history = useHistory();

    // Load doctors data using use effect from the fake data json file
    useEffect( () => {
        fetch('../../doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, []);

    // If doctors data avilaable then find the selected doctors
    if(doctors.length){
       const singledoctor = doctors.find(doctor => doctor.uniqueId === doctorUniqueId);
       
       // If doctor is found then set the single single doctor in the state 
       if(singledoctor){
        setDoctors(singledoctor);
      }else{
          // If singledoctor is not found then redirect to the home page
          history.push('/');
      }
    }

    // Destructuring the single doctor data from object
    const {doctorName, operation, consaltant, visitFee, availableTime, picture, institute, degree, experience} = doctors;
    
    // Handle booking serial
    const handleBookingSerial = () => {
          history.push('/appointment')
    }
    return (
        <div className="singleDoctorArea">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-12 col-md-12 colsm-12">
                         <div className="doctorArea">
                             <div className="doctorImage">
                                 <img src={picture} alt="doctorImage" />
                             </div>
                             <div className="doctorInfo">
                             <div className="dualInfo">
                                 <h2 className="singleDoctorName">Name : DR. {doctorName}</h2> <button className="emergencyBtn" onClick={handleBookingSerial}>Get Serial</button> 
                                 </div>
                                 <div className="dualInfo2">
                                     <span className="subInfo">Consaltant :</span><br />
                                     <span className="subInfo">Operation :</span><br />
                                     <span className="subInfo">Visit :</span><br />
                                     <span className="subInfo">Experience :</span><br />
                                     <span className="subInfo">Degree :</span><br />
                                     <span className="subInfo">Available :</span><br />
                                     <span className="subInfo">Institute :</span>
                                 </div>
                                 <div className="dualInfo3">
                                     <span className="subInfo">{consaltant}</span><br />
                                     <span className="subInfo">{operation}</span><br />
                                     <span className="subInfo">$ {visitFee}</span><br />
                                     <span className="subInfo">{experience} Years</span><br />
                                     <span className="subInfo"> {degree}</span><br />
                                     <span className="subInfo">{availableTime}</span><br />
                                     <span className="institute">{institute}</span>
                                 </div>
                                 
                             </div>
                             
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default SingleDoctor;