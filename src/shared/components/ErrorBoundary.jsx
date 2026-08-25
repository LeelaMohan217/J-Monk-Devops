import { Component } from "react";
import StatusPage from "./StatusPage";

// Catches render errors anywhere below it — wrapping <App/> in main.jsx
// means that includes the persistent chrome (GlobalNav, footer), not just
// routed pages. Without this, an unexpected error anywhere crashed to a
// blank white screen.
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
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
          // A boundary doesn't reset itself on client-side navigation — a
          // <Link> would just re-enter the same crashed tree. Recovery
          // needs an actual reload, hence a plain <a> here.
          ctaIsExternalReload
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
