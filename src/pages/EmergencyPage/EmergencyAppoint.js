import React from 'react';

const EmergencyAppoint = () => {

      const handleEmergencyAppointForm = e => {
            alert("I am currently working on it!");
            e.preventDefault();
      }
    return (
         <section>
             <div className="emergencyAppoint" style={{padding: "150px 0px"}}>
                 <div className="container">
                     <div className="row">
                     <div class="sectionTitle">
                         <h1 class="title">Emergency <span class="highlight">Appoint</span> </h1>
                     </div>
                         <div className="col-lg-6 col-md-6 col-sm-12">
                             <div className="image">
                                 <img width="100%" src="https://glamyohealth.in/blog/wp-content/uploads/2021/09/istockphoto-1218104087-612x612-1.jpg" alt="emergencyImg" />
                             </div>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-12">
                             <div className="appointForm">
                                 <h2 className="doctorName">Quickly Submit Your Info</h2>
                                  <form onSubmit={handleEmergencyAppointForm}>
                                      <input type="text" placeholder="Enter patient name" /><br />
                                      <input type="text" placeholder="Enter patient age" /><br />
                                      <input type="text" placeholder="Enter problem name" /><br />
                                      <input type="email" placeholder="Enter email" /><br />
                                      <input type="text" placeholder="Enter mobile number" /><br />
                                      <button className="submitBtn">Submit</button>
                                  </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
    );
};

export default EmergencyAppoint;