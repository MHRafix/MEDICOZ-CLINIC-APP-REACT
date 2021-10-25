import React from 'react';
import { useHistory } from 'react-router';

const FeaturedService = (props) => {
    // Destructuring the service data from object
    const {uniqueId, serviceName, description, serviceImg} = props.service;

    // Use history for changing the route after clicking the button
    const history = useHistory();

    // Handle Single Route
    const handleSingleRoute = (id) => {
          history.push(`/services/singleService/${id}`);
          console.log(id);
    }
    return (
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="serviceBox">
          <img src={serviceImg} alt="serviceImg" width="100%" height="150" />
          <h2 className="serviceTitle">{serviceName}</h2>
          <p className="serviceDesc">{description.slice(1, 120)}</p>
          <button onClick={() => handleSingleRoute(uniqueId)} className="regularBtn">Load more &nbsp;<i className="fas fa-arrow-right"></i></button>
        </div>
    </div>
    );
};

export default FeaturedService;