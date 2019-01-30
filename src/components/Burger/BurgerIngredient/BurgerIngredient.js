import React, { Component } from 'react';
import propTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {

  render () {
    
    let ingredient = null

    switch (this.props.type) {
      case ( 'bread-bottom' ):
        ingredient = <div className="BreadBottom" style={classes}></div>;
        break
      case ( 'bread-top' ):
        ingredient = (
          <div className="BreadTop" style={classes}>
            <div className="Seed1" style={classes}></div>
            <div className="Seed2" style={classes}></div>
          </div>
        )
        break;
      case ( 'meat' ):
        ingredient = <div className="Meat" style={classes}></div>;
        break;
      case ( 'cheese' ):
        ingredient = <div className="Cheese" style={classes}></div>;
        break;
      case ( 'bacon' ):
        ingredient = <div className="Bacon" style={classes}></div>;
        break;
      case ( 'salad' ):
        ingredient = <div className="Salad" style={classes}></div>;
        break;

      default:
        ingredient = null
    }

    return ingredient  
  }
}

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired
}

export default BurgerIngredient