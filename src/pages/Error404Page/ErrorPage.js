import React from 'react';
import { useHistory } from 'react-router';

const ErrorPage = () => {
      const history = useHistory();
      const handleBackHome = () => {
            history.push('/home');
      }
    return (
        <section>
            <div className="errorPageArea text-center" style={{padding: "150px 0px"}}>
                <div className="errorImg">
                    <img src="https://cdn.dribbble.com/users/1169343/screenshots/7044451/media/b7096f057e58b0334ef61b3695dc3032.png?compress=1&resize=400x300" alt="" /> 
                    <br />
                    <button onClick={handleBackHome} className="emergencyBtn">Back Home</button>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;