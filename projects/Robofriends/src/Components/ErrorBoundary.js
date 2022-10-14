// ErrorBoundary is used so that if any error ocuur we can still display something meaningfull.
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
}

   componentDidCatch(error, info){
       this.setstate({hasError: true})
       }

  render() {
    if (this.state.hasError) {
      return <h1>oops!Looks like Something is Wrong!!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
