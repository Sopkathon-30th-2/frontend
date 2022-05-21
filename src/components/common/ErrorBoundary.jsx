import React from 'react';

class ErrorBoundary extends React.Component {
  initState = { hasError: false, error: null };

  constructor(props) {
    super(props);
    this.state = this.initState;
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps) {
    if (!this.state.hasError == null) return;
    if (prevProps.resetKey !== this.props.resetKey) {
      this.resetErrorBoundary();
    }
  }

  componentDidCatch(error) {
    // Error를 잡아서 따로 할 일이 있는 경우 이곳에 추가
  }

  resetErrorBoundary() {
    this.setState(this.initState);
  }

  render() {
    const { children, renderFallback } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }
    return children;
  }
}

export default ErrorBoundary;
