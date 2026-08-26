import { Component } from "react";
import StatusPage from "./StatusPage";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StatusPage
          headingLead="Something went wrong."
          subtext="An unexpected error occurred. Try refreshing the page, or head back home."
          ctaLabel="Back to home"
          ctaHref="/"
          ctaIsExternalReload
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
