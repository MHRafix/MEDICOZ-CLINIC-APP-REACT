import { useEffect, useState } from 'react';

const useLoadData = () => {
      // Store services data in the state
      const [services, setServices] = useState([]);

      // Load services data from fake data
      useEffect( () => {
        fetch('./serviceData.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return [services, setServices];

}

export default useLoadData;