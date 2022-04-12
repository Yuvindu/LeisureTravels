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
      
  
    </div>
    </Router>
    
    
  );
}

export default App;
