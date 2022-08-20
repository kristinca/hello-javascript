import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Redirect, Switch } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishDetailComponent';
import { Component } from 'react';

class Main extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
        leader={this.state.leaders.filter((lead) => lead.featured)[0]}  />
      );
    }
  return (
    <div>
    <Header />
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
      <Route exact path='/contactus' component={Contact} />
      </Switch>
    <Footer />
    </div>
  );
}
}

export default Main;
