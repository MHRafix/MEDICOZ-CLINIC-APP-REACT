import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/SharedComponent/Header/Header';
import Login from './pages/AccountPage/LoginPage/Login';
import Reagistration from './pages/AccountPage/RegistrationPage/Reagistration';
import Home from './pages/HomePage/Home';
import SingleDoctor from './pages/HomePage/SingleDoctor/SingleDoctor';
import SingleService from './pages/HomePage/SingleService/SingleService';
import AuthProvider from './Context/AuthProvider';
import Appointment from './pages/AppointmentPage/Appointment/Appointment';
import PrivateRoute from './pages/AppointmentPage/PrivateRoute/PrivateRoute';
import About from './pages/AboutPage/About';
import Footer from './pages/SharedComponent/Footer/Footer';
import EmergencyAppoint from './pages/EmergencyPage/EmergencyAppoint';
import ErrorPage from './pages/Error404Page/ErrorPage';
import MedicineCorner from './pages/MedicinePage/MedicineCorner';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <PrivateRoute exact path="/emergency">
            <EmergencyAppoint />
          </PrivateRoute>
          <PrivateRoute exact path="/services/singleService/:uniqueId">
            <SingleService />
          </PrivateRoute>
          <Route exact path="/doctor/serialBook/:doctorUniqueId">
            <SingleDoctor />
          </Route>
          <Route exact path="/account">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Reagistration />
          </Route>
          <PrivateRoute exact path="/appointment" >
          <Appointment />
         </PrivateRoute> 
          <PrivateRoute exact path="/medicineCorner" >
          <MedicineCorner />
         </PrivateRoute> 
        <Route path="*">
          <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
