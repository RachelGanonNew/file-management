// import React from 'react';
import { Alert, AlertTitle } from '../materialUi.moduls';
import Header from '../components/Header';
import Footer from '../components/Footer';
// class ErrorBoundary extends React.Component {
//   state = { error: null, errorInfo: null };

//   componentDidCatch(error, errorInfo) {
//     this.setState({
//       error,
//       errorInfo
//     });
//   }

//   render() {
//     if (this.state.errorInfo) {
//       return (
//         <div>
//           <Alert severity="error">
//             <AlertTitle>Error</AlertTitle>

//             <details style={{ whiteSpace: "pre-wrap" }}>
//               {this.state.error && this.state.error.toString()}
//               <br />
//               {this.state.errorInfo.componentStack}
//             </details>
//           </Alert>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }
// export default ErrorBoundary;

import React from 'react';

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

function errorBoundary(Component) {
  return function (props) {
    return (<>
      <Header />
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
      <Footer />

    </>);
  };
}
export default errorBoundary;