import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Routes, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import { Component } from 'react';
import { addComment } from '../redux/ActionCreators';


// map the redux state into props that will be available to the component
// the state is the state we get from redux store
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }   
}

const mapDispachToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {
 
  constructor(props) {
    super(props);
  }


  render() {
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]} 
        leader={this.props.leaders.filter((lead) => lead.featured)[0]}  />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment} />
      );
    }


  return (
    <div>
    <Header />
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
      <Route path='/menu/:dishId' component={DishWithId} />
      <Route exact path='/contactus' component={Contact} />
      <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
      </Switch>
    <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Main));