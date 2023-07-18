import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import MyProfile from './components/profile/MyProfile';
import OrderHistory from './components/orderhistory/OrderHistory';
import Productinfo from './components/product_details/Productinfo'
import { BrowserRouter as Router,
Switch,
Route} from "react-router-dom"
import { useState } from 'react';
import CartItem from './components/cart/CartItem';
import Shop from './components/shop/Shop';
import AllCategory from './components/ItemsByCategory/AllCategory';
import Categories from './components/ItemsByCategory/seperateCategory/Categories';
import SearchPage from './components/search/SearchPage';
function App() {
  const [states,setState]=useState(true);
  return (
    <div className="App">
    <Router>
      <div className='top'>
        <Header states={states} change={setState} />
        <Navbar/>
      </div>
     <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
          <Route path="/signin">
           <SignIn changestate={data=>setState(data)}/>
          </Route>
          <Route path="/signup">
           <SignUp/>
          </Route>
          <Route path="/myprofile">
            <MyProfile/>
          </Route>
          <Route path="/myorders">
            <OrderHistory/>
          </Route>
           <Route path="/productDetails/:value">
          <Productinfo states={states}/>
        </Route>
       <Route path="/cart">
          <CartItem />
        </Route>
        </Switch>
       <Route path="/shop">
          <Shop/>
        </Route>
         <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/categories">
          <AllCategory/>
        </Route>
          <Route path="/laptops">
          <Categories categoryName="laptop"/>
        </Route>
        <Route path="/phones">
          <Categories categoryName="phone"/>
        </Route>
        <Route path="/camera">
          <Categories categoryName="camera"/>
        </Route>
        <Route path="/accessories">
          <Categories categoryName="accessories"/>
        </Route>
        <Route path="/watch">
          <Categories categoryName="watch"/>
        </Route>
        {/* <Route path="/watch">
          <Categories categoryName="watch"/>
        </Route> */}
        <Footer/>  
      </Router>
    </div>
  );
}

export default App;
