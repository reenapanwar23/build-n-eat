import React, { useState, useEffect } from "react";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../Auxiliary";

//-------------------------------FUNCTIONAL APPROACH------------------------------------------------

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInterceptors = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });

    const resInterceptors = axios.interceptors.response.use(
      (res) => res,
      (errorObj) => {
        setError(errorObj);
      }
    );

    useEffect(() => {
      return () => {
        // used to remove interceptors when we no longer require it in component
        axios.interceptors.request.eject(reqInterceptors);
        axios.interceptors.response.eject(resInterceptors);
      };
    }, [reqInterceptors, resInterceptors]);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
          {/*.message is a ppty returned with error obj */}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;

//----------------CLASS BASED APPROACH---------------------------------------------------------------------

// const withErrorHandler = (WrappedComponent, axios) => {

//     return (
//         class extends Component {
//             state = {
//                 error: null,
//             }

//             componentWillMount() { //used componentWillMount instd of componentDidMount
//                 //to render it before the child components
//                 reqInterceptors = axios.interceptors.request.use((req) => {
//                     setState({ error: null });
//                     return req;
//                 });

//                 resInterceptors = axios.interceptors.response.use((res) => res, (errorObj) => {
//                     setState({ error: errorObj })
//                 });
//             }

//             componentWillUnmount() {    // used to remove interceptors when we no longer require it in component
//                 axios.interceptors.request.eject(reqInterceptors);
//                 axios.interceptors.response.eject(resInterceptors);
//             }
//             errorConfirmedHandler = () => {

//                 setState({ error: null });
//             }

//             render() {

//                 return (
//                     <Aux>
//                         <Modal
//                             show={error}
//                             modalClosed={errorConfirmedHandler} >
//                             {error ? error.message : null} {/*.message is a ppty returned with error obj */}
//                         </Modal>
//                         <WrappedComponent {...props} />
//                     </Aux>

//                 );
//             }
//         });
// }

// export default withErrorHandler;
