import PackageDetails from './components/Travel_Packages/TravelPackageDetails';
import PackageDetailsAdmin from './components/Travel_Packages/TravelPackageDetailsAdmin';
import PackageBooking from './components/Travel_Packages/PackageBooking';
import AllPackagesAdmin from './components/Travel_Packages/TravelPackagesAdmin';
import CreatePackage from './components/Travel_Packages/AddTravelPackage';
import EditPackage from './components/Travel_Packages/EditTravelPackage';
import AllPackages from './components/Travel_Packages/TravelPackages';
import EditTPackage from './components/Travel_Packages/EditPackage2';
import AllBooking from './components/Travel_Packages/BookingAllDetails';
import DeletePackage from './components/Travel_Packages/DeleteTravelPackage';
import EditEquipment from './components/Travel_Equipments/EditEquipment';
import AddEquipment from './components/Travel_Equipments/AddEquipment';
import AdminEquipment from './components/Travel_Equipments/AdminEquipment';
import UserEquipment from './components/Travel_Equipments/UserEquipment';
import EquipmentReport from './components/Travel_Equipments/EquipmentReport'
import HomePage from './components/HomePage';
import AdminHome from  './components/AdminHome';
import Gallery from './components/Gallery';
import Aboutus from './components/AboutUs';
import ContactUs from './components/Contactus';
import ContactUsAdmin from './components/ContactUsAdmin';
import Services from './components/Services';
import AllPayments from './components/Payment/AllPayments';
import EditPayment from './components/Payment/EditPayment';
import PaymentDetails from  './components/Payment/PaymentDetails';
import PayForEquipment from './components/Payment/PayForEquipment';
import PayForTP from './components/Payment/PayForTP';
import PaymentConfirm from './components/Payment/PaymentComplete';
import PaymentView from './components/Payment/PayView';
import Activities from "./components/Activity/Activities";
import Activity from "./components/Activity/Activity";
import AddActivity from "./components/Activity/AddActivity";
import EditActivity from "./components/Activity/EditActivity";
import AllActivity from './components/Activity/AllActivity';
import ViewActivity from './components/Activity/ViewActivity';
import ActivityDetails from './components/Activity/ActivityDetails';
import ActivitySelect from './components/Activity/ActivitySelect';
import ActivityUser from './components/Activity/ActivityUser';
import PayForActivity from './components/Payment/PayForActivity';
import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <div> 
    
 
      
      <Route path="/bookingpackage/:id" exact component = {PackageBooking}></Route>
      <Route path="/travelpackages/admin" exact component = {AllPackagesAdmin}></Route>
      <Route path="/travelpackage/admin/add" exact component ={CreatePackage}></Route>
      <Route path="/travelpackages/travelpackage/:id" exact component ={PackageDetails}></Route>
      <Route path="/travelpackages/travelpackage/admin/:id" exact component ={PackageDetailsAdmin}></Route>
      <Route path="/travelpackage/admin/edit/:id" exact component ={EditPackage}></Route>
      <Route path="/edittpackage/:id" component= {EditTPackage}></Route>
      <Route path="/travelpackages" exact component = {AllPackages}></Route>
      <Route path="/allbooking" exact component = {AllBooking}></Route>
      <Route path="/travelpackage/admin/delete/:id" exact component = {DeletePackage}></Route>
      <Route path ="/equipment/add" exact component={AddEquipment}/>
      <Route path ="/equipment/edit/:id" exact component={EditEquipment}/>
      <Route path ="/equipment/admin" exact component={AdminEquipment}/>
      <Route path ="/equipment" exact component={UserEquipment}/>
      <Route path ="/equipment/report" exact component={EquipmentReport}/>
      <Route path ="/" exact component={HomePage}></Route>
      <Route path="/adminhome" exact component={AdminHome}/>
      <Route path="/gallery" exact component={Gallery}/>
      <Route path="/aboutus" exact component={Aboutus}/>
      <Route path="/contactus" exact component ={ContactUs}/>
      <Route path="/contactus/admin" exact component ={ContactUsAdmin}/>
      <Route path="/payment/add-equipment/:id" exact component ={PayForEquipment}/>
      <Route path="/services" exact component = {Services}/>
      <Route path="/payment/add-package/:id" exact component={PayForTP}/>
      <Route path="/payment/" exact component={AllPayments}/>
      <Route path="/payment/edit/:id" exact component={EditPayment}/>
      <Route path="/payment/details/:id" exact component={PaymentDetails}/>
      <Route path="/confirm/payment/" exact component={PaymentConfirm}/>
      <Route path="/payment/view/" exact component={PaymentView}/>
      <Route path="/payment/add-activity/:id" exact component ={PayForActivity}/>
      <Route path="/all" exact component = {AllActivity}/>
      <Route path="/activity/:id" exact component = { Activity}/>
      <Route path="/activity-details" exact component = {ActivityDetails}/>
      <Route path="/view-activity/:id" exact component = {ViewActivity}/>
      <Route path="/update/:id" exact component =  {EditActivity}/>
      <Route path="/add-activity" exact component={AddActivity} />
      <Route path="/activities" exact component={Activities} />
      <Route path="/activity-select" exact component={ActivitySelect} />
      <Route path="/activity-user/:id" exact component={ActivityUser} />






      
  
    </div>
    </Router>
    
    
  );
}

export default App;
