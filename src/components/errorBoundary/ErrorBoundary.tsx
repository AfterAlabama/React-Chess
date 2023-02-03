import { Component, ReactNode } from "react";
import cl from './errorB.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps){
    super(props);
    this.state = {hasError: false}
  };

  static getDerivedStateFromError(){
    return {hasError: true}
  }

  render() {
    if(this.state.hasError){
      return (
        <div className= {cl.container}>
          <h1>Something went wrong!</h1>
          <p>Fixing the issue...</p>
          <div className = {cl.loader}></div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary;