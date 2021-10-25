import React from 'react';

const Appointment = () => {
    
    const handleAppointForm = e => {
        alert("I am currently working on it!");
        e.preventDefault();
  }
    return (
<section>
             <div className="emergencyAppoint" style={{padding: "150px 0px"}}>
                 <div className="container">
                     <div className="row">
                     <div class="sectionTitle">
                         <h1 class="title">Book <span class="highlight">Appointment</span> </h1>
                     </div>
                         <div className="col-lg-6 col-md-6 col-sm-12">
                             <div className="image">
                                 <img width="100%" src="https://www.godoct.com/assets/images/login-screen.webp" alt="emergencyImg" />
                             </div>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-12">
                             <div className="appointForm">
                                 <h2 className="doctorName">Please Submit Your Info</h2>
                                  <form onSubmit={handleAppointForm}>
                                      <input type="text" placeholder="Enter patient name" /><br />
                                      <input type="text" placeholder="Enter doctor name" /><br />
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

export default Appointment;