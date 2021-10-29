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

function App() {
  return (
    <div className="App">
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
            <Route exact path="/services/:skey">
              <PlaceOrder></PlaceOrder>
            </Route>
            {/* <Route path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </Route> */}
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageorders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/newservice">
              <NewServices></NewServices>
            </Route>
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
