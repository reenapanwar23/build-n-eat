import React from "react";
//import  {Component}  from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

//---------------- FUNCTIONAL APPROACH---------------------------------------------------------------------

const Modal = (props) => {

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />

            <div className={classes.Modal}
                style={{

                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",//vh is viewport height which will slide it outside the screen
                    opacity: props.show ? "1" : "0"
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
}

export default React.memo(Modal, (prevProps, nextprops) => {

    return (prevProps.show === nextprops.show && prevProps.children === nextprops.childern);

}); //for performance optimization, and specify when the modal should update


//---------------- CLASS BASED APPROACH---------------------------------------------------------------------

// class Modal extends Component {

//     shouldComponentUpdate(nextProps, nextState) {

//         return (nextProps.show !== props.show || nextProps.children !== props.childern); //returns true to re-render if props.show has changed 
//     }

//     // componentDidUpdate() { // to check if cmponent is re-rendered
//     //     console.log("[Modal] compnent updated");
//     // }

//     render() {
//         return (
//             <Aux>
//                 <Backdrop show={props.show} clicked={props.modalClosed} />

//                 <div className={classes.Modal}
//                     style={{

//                         transform: props.show ? "translateY(0)" : "translateY(-100vh)",//vh is viewport height which will slide it outside the screen
//                         opacity: props.show ? "1" : "0"
//                     }}
//                 >
//                     {props.children}
//                 </div>
//             </Aux>
//         );
//     }

// }

// export default Modal;