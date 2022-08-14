import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Redirect, Switch } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import { Component } from 'react';

class Main extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }
  return (
    <div>
    <Header />
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
      </Switch>
    <Footer />
    </div>
  );
}
}

export default Main;
