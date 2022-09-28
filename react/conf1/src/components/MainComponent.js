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
import { addComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


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
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

class Main extends Component {
 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return(
        <Home 
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishErrMess={this.props.dishes.errMsg}
        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promoLoading={this.props.promotions.isLoading}
        promoErrMess={this.props.promotions.errMsg}
        leaders ={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={this.props.leaders.isLoading}
        leadersErrMess={this.props.leaders.errMsg}
    />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMsg={this.props.dishes.errMsg}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        commentsErrMess={this.props.comments.errMsg}
        addComment={this.props.addComment}
      />
      );
    }


  return (
    <div>
    <Header />
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
      <Route path='/menu/:dishId' component={DishWithId} />
      <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
      <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
      </Switch>
    <Footer />
    </div>
  );
}
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Main)); 