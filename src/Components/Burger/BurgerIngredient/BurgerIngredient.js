import React from "react";
import classes from "./BurgerIngredient.module.css"; //.model for css module apprach
import PropTypes from "prop-types"; // installed // to use propType validation

//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.types) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}> </div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}> </div>
          <div className={classes.Seeds2}> </div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}> </div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}> </div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}> </div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}> </div>;
      break;

    default:
      ingredient = null;
  }
  return ingredient;
};

//for validation of prop types being passed

BurgerIngredient.propTypes = {
  //accessing added(npm i prop-type) property(propType)
  types: PropTypes.string, //of class(BurgerIngredient) to set validation fr propreties (types)
};

export default BurgerIngredient;

//---------------- CLASS BASED APPROACH---------------------------------------------------------------------

// class BurgerIngredient extends Component {

//     render() {

//         let ingredient = null;

//         switch (props.types) {

//             case ("bread-bottom"):
//                 ingredient = <div className={classes.BreadBottom}> </div>
//                 break;
//             case ("bread-top"):
//                 ingredient =
//                     <div className={classes.BreadTop}>
//                         <div className={classes.Seeds1}> </div>
//                         <div className={classes.Seeds2}> </div>
//                     </div>
//                 break;
//             case ("meat"):
//                 ingredient = <div className={classes.Meat}> </div>
//                 break;
//             case ("cheese"):
//                 ingredient = <div className={classes.Cheese}> </div>
//                 break;
//             case ("salad"):
//                 ingredient = <div className={classes.Salad}> </div>
//                 break;
//             case ("bacon"):
//                 ingredient = <div className={classes.Bacon}> </div>
//                 break;

//             default: ingredient = null;
//         }
//         return (ingredient);
//     }

// }

// //for validation of prop types being passed

// BurgerIngredient.propTypes = {      //accessing added(npm i prop-type) property(propType)
//     types: PropTypes.string //of class(BurgerIngredient) to set validation fr propreties (types)

// };

// export default BurgerIngredient;
