import React, { useEffect, useState } from 'react';
import './SingleService.css';
import { useHistory, useParams } from 'react-router';

const SingleService = () => {
      // For changing route
      const history = useHistory();
      // Store service data from in the state 
      const [services, setServices] = useState([]);
      
      // For getting single service id 
      const {uniqueId} = useParams();
     
      // Getting the service data from separate data loading file
      useEffect( () => {
        fetch('../../serviceData.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
     
     // If service is true then find the selected one
     if(services.length){
        const singleService = services.find(service => service.uniqueId === uniqueId);
        if(singleService){
          // If service is found then set the single service in the state 
          setServices(singleService);
        }else{
            // If service is not found then redirect to the home page
            history.push('/');
        }
     }
    
     // Destructuring the single service data from object
     const {serviceName, description, serviceImg} = services;
    
    return (
        <div className="singleServiceArea">
             <div className="container">
                 <div className="row">
                     <div className="col-md-12 col-sm-12">
                         <div className="singleServiceBox">
                             <img src={serviceImg} alt="serviceImg" />
                             <div className="details">
                             <h2 className="serviceTitle">{serviceName}</h2>
                             <p className="serviceDesc">{description}</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default SingleService;