import React, { Component } from "react";

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import DishDetail from './DishDetailComponent';



class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        };

        console.log('Menu component constructed here yay ^^');
        
    }

    onDishSelect(dish){

        this.setState({
            selectedDish: dish
        });

    }



    render(){
        console.log('Render menu component here ^^');
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
                    <Card onClick={ () => this.onDishSelect( dish ) } >

                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                        <CardImgOverlay>
                            <CardTitle> { dish.name }</CardTitle>
                        </CardImgOverlay>
                    </Card>                
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    { menu }
                </div>
                // dish detail here 
                <DishDetail dish={this.state.selectedDish} />
                

            </div>
        );
    }

    componentDidMount(){
        console.log('Menu component componentDidMounbt is invoked here ^^');
        
    }
}

export default Menu;