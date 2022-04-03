import EditEquipment from './components/Travel_Equipments/EditEquipment';
import AddEquipment from './components/Travel_Equipments/AddEquipment';
import AdminEquipment from './components/Travel_Equipments/AdminEquipment';
import UserEquipment from './components/Travel_Equipments/UserEquipment';
import EquipmentReport from './components/Travel_Equipments/EquipmentReport'
import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <div> 
    
 
      
      
      <Route path ="/equipment/add" exact component={AddEquipment}/>
      <Route path ="/equipment/edit/:id" exact component={EditEquipment}/>
      <Route path ="/equipment/admin" exact component={AdminEquipment}/>
      <Route path ="/equipment" exact component={UserEquipment}/>
      <Route path ="/equipment/report" exact component={EquipmentReport}/>
      
  
    </div>
    </Router>
    
    
  );
}

export default App;
