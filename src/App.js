import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';
import Home from './components/home/Home';
import Services from './components/services/Services';
import PlaceOrder from './components/placeOrder/PlaceOrder';
import MyOrders from './components/myOrders/MyOrders';
import ManageOrders from './components/manageOrders/ManageOrders';
import NewServices from './components/newServices/NewServices';
import About from './components/about/About';
import NotFound from './components/notfound/NotFound';
import Login from './authentication/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';
import Update from './components/manageOrders/Update';

function App() {
  return (
    <div className="App">
    {/* Comonents are in the authProvider that contex can pass data to every component in it */}
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/services/:skey">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            {/* <Route path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </Route> */}
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders/edit/:userId">
              <Update></Update>
            </PrivateRoute>
            <PrivateRoute path="/newservice">
              <NewServices></NewServices>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
