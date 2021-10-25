import { useEffect, useState } from 'react';

const useDoctorsData = () => {
      // Store services data in the state
      const [doctors, setDoctors] = useState([]);

      // Load services data from fake data
      useEffect( () => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, []);

    return [doctors, setDoctors];

}

export default useDoctorsData;