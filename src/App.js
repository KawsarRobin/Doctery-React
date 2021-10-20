import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthPorvider from './context/AuthPorvider';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import DoctorPage from './pages/DoctorPage/DoctorPage';
import FaqPage from './pages/FaqPage/FaqPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/LoginPage/RegisterPage';
import ServicePage from './pages/ServicePage/ServicePage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const Styles = {
    color: '#0e1133',
  };
  return (
    <div style={Styles} className="App overflow-hidden">
      <AuthPorvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <LoginPage></LoginPage>
            </Route>
            <Route path="/register">
              <RegisterPage></RegisterPage>
            </Route>
            <Route path="/services">
              <ServicePage></ServicePage>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/contact">
              <ContactPage></ContactPage>
            </Route>
            <Route path="/doctors">
              <DoctorPage></DoctorPage>
            </Route>
            <Route path="/faq">
              <FaqPage></FaqPage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthPorvider>
    </div>
  );
}

export default App;
