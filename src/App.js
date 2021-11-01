import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Contuct from './Pages/Contuct/Contuct';
import AuthProvider from './Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import ViewCard from './Pages/ViewCard/ViewCard';
import Notfound from './Pages/Notfound/Notfound';
import PrivetRoute from './Pages/Login/PrivetRoute';
import AddService from './Pages/AddService/AddService';





function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>

     <Header></Header>
     

     <Switch>
     <Route exact path="/">
           <Home></Home>
       </Route>
       <Route exact path="/home">
           <Home></Home>
       </Route>
       {/* <Route exact path="/service">
        
       </Route> */}
        <Route exact path="/addService">
            
            <AddService></AddService>

          </Route>
       
       <Route exact path="/contuct">
        <Contuct></Contuct>
       </Route>
       <PrivetRoute exact path="/viewCard/:cardId"> 
              <ViewCard></ViewCard>
       </PrivetRoute>
       <Route exact path="/login">
           <Login></Login>
       </Route>
      
       
       <Route exact path="*">
           <Notfound></Notfound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
