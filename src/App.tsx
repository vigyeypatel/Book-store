import React, { Component,Fragment } from 'react';

import { Header } from './app/components/Header/Header';
import  {Home} from './app/components/Home/Home';
import Footer from './app/components/Footer/Footer'
import { Switch, Route } from 'react-router';
import ChangeBookCont from './app/components/ChangeBook/container/ChangeBookCont';
import BooksCont from './app/components/Books/container/BooksCont';
import CartCont from './app/components/Cart/container/CartCont';
import CheckoutCont from'./app/components/Checkout/container/CheckoutCont';
import AdminBooksCont from './app/components/AdminBooks/container/AdminBooksCont';
import OrderDetailsCont from './app/components/OrderDetails/container/OrderDetailsCont';
import AdminOrdersCont from './app/components/AdminOrders/container/AdminOrdersCont'

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mb" exact component={ChangeBookCont} />
        <Route path="/books" exact component={BooksCont} />
        <Route path="/cart" exact component={CartCont} />
        <Route path="/checkout" exact component={CheckoutCont} />
        <Route path="/adminbooks" exact component={AdminBooksCont} />
        <Route path="/orderdetails" exact component={OrderDetailsCont} />
        <Route path="/manageorders" exact component={AdminOrdersCont} />
        
      </Switch>
      
      <Footer />
      </React.Fragment>
    );
  }
}

export default App;
