import React from 'react';
import { useHistory } from 'react-router';

const FeaturedDoctors = (props) => {
    // Use history for changing route
    const history = useHistory();
    // Destructuring the data from props
    const {uniqueId, doctorName, consaltant, visitFee, picture} = props.doctors;
    
    const handleSeeDetail = id => {
          history.push(`/doctor/serialBook/${id}`);
    } 
    return (
    <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="doctorBioBox">
            <img src={picture} alt="doctorImage" />
            <h2 className="doctorName">{doctorName}</h2>
            <div className="dualinfo">
                <span className="det">Spe : {consaltant}</span>
                <span className="det">Visit Fee : $ {visitFee}</span>
            </div>
              <button onClick={() => handleSeeDetail(uniqueId)} className="regularBtn">About&nbsp;<i className="fas fa-eye"></i></button>
        </div>
    </div>
    );
};

export default FeaturedDoctors;