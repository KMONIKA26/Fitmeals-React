import logo from './logo.svg';
import './App.css';
import Header_fit_meals from './components/header';
import Bodypart from './components/body';
import Footer_part from './components/footer';
import { ProductCart } from './components/cart/productcart';
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Productpage from './components/productpage';
import { WeightLossMealPlan } from './components/mealplans/weightlossmealplan';
import { MaintenanceMealPlan } from "./components/mealplans/maintenancemealplan"
import { AthleticPlan } from "./components/mealplans/athleticmealplan"
import { KetoMealPlan } from "./components/mealplans/ketomealplan.jsx"
import { Health_coaching } from "./components/Health_coaching.jsx";
import { Login } from './components/login';
import { LostPassword } from './components/lost-password';
import {AboutUs} from "./components/AboutUs"
import { SeprateProduct } from './components/singleproductpage/seprateproduct';
import { Second } from './components/second';
import { CheckOut } from './components/checkout';
import  Test  from './components/Test';
import  Home  from './components/blogHome';
function App() {
  return (
    <div className="App">
      <Header_fit_meals />

      <Routes>
        <Route path='/' element={<><Bodypart /></>}></Route>
        <Route path='/productpage' element={<><Productpage /></>}></Route>
        <Route path='/productpage/:name' element={<><Productpage /></>}></Route>
        <Route path='/weightlossmealplan' element={<WeightLossMealPlan></WeightLossMealPlan>} />
        <Route path='/maintenancemealplan' element={<MaintenanceMealPlan></MaintenanceMealPlan>} />
        <Route path='/athleticmealplan' element={<AthleticPlan></AthleticPlan>} />
        <Route path='/Ketomealplan' element={<KetoMealPlan></KetoMealPlan>} />

        <Route path='/healthcoaching' element={< Health_coaching />} />
        <Route path='/SeprateProduct/:id' element={<   SeprateProduct />} />
        <Route path='/loginpage' element={< Login />} />
        <Route path='/lostpassword' element={< LostPassword />} />
        <Route path='/cartpage' element={< ProductCart />} />
        <Route path='/ourstory' element={< AboutUs />} />
        <Route path='/faq' element={< Second />} />
        <Route path='/test' element={< Test />} />
        <Route path='/bloghome' element={< Home />} />
        <Route path='/checkout' element={< CheckOut />} />
      </Routes>

      <Footer_part />
    </div>
  );
}

export default App;
