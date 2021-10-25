import React, { useEffect, useState } from 'react';
import Medicine from './Medicine/Medicine';
import './MedicineCorner.css';

const MedicineCorner = () => {
      // Use state for storing medicine data
      const [medicins, setMedicins] = useState([]);

      // Use effect for loading medicine data from fake data json files
      useEffect( () => {
          fetch('./medicineData.json')
          .then(res => res.json())
          .then(data => setMedicins(data));
      }, []);

    return (
       <section>
           <div className="medicineCornerPage">
               <div className="container">
                  <div className="row justify-content-arround">
                   <div className="sectionTitle">
                       <h1 className="title">Welcome to <span className="highlight">Medicine Corner</span></h1>
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-12">
                       <div className="medicineSideBar">
                         <div className="sideBarBlock">
                           <span className="subInfo">Search Medicine</span> <br />
                           <input type="text" placeholder="Search your medicine..." />
                        </div>
                         <div className="sideBarBlock">
                           <span className="subInfo">Filter by company name</span> <br />
                           <input type="text" placeholder="Enter medicine company..." />
                        </div>
                         </div>
                       </div>
                       <div className="col-lg-7 col-md-7 col-sm-12">
                   {
                       medicins.map(medicine => <Medicine key={medicine.uniqueId} medicine={medicine} />)
                   }
                   </div>
                     </div>
                   </div>
                </div>
            </section>
    );
};

export default MedicineCorner;