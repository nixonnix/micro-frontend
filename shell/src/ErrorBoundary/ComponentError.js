import React from 'react';
import { PropTypes } from 'prop-types';
import './componentError.css';

class ComponentError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      hasError: error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: error };
  }

  render() {
    const { errorInfo, hasError, error } = this.state;
    const { children, message, Wrapper } = this.props;

    if (hasError) {
      console.error(error, errorInfo);
      return <div className='error-container'>{message}</div>;
    }
    // Normally, just render children
    return children;
  }
}

ComponentError.propTypes = {
  children: PropTypes.element.isRequired,
  message: PropTypes.string,
  Wrapper: PropTypes.node,
};

ComponentError.defaultProps = {
  message: null,
  Wrapper: '',
};

export default ComponentError;