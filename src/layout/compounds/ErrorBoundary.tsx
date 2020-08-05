import React from "react";
import { PortalWithState } from "react-portal";

export class ErrorBoundary extends React.Component<{ showBack?: boolean }> {
  state: {
    error: any;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so next render shows fallback UI.
    return { error };
  }

  componentDidCatch(error: any) {
    // Log the error to an error reporting service
    this.setState({ error });
  }

  render() {
    const { showBack, children } = this.props;
    const { error } = this.state;
    const stackHtml = error?.stack.replace(/\\n/g, "<br />");
    if (error) {
      return (
        <PortalWithState closeOnOutsideClick closeOnEsc node={document && document.getElementById("portalRoot")}>
          {({ openPortal, closePortal, isOpen, portal }) => (
            <div>
              <p>Uh oh, something went wrong. {showBack && <a href="/">Go home?</a>}</p>
              <p>
                <button onClick={openPortal}>Click for More Info</button>
              </p>
              {portal(
                <div style={{ background: "#aaa", padding: 20 }}>
                  <button onClick={closePortal} style={{ float: "right" }}>
                    Close (X)
                  </button>
                  <p>Message: {error?.message}</p>
                  <p>Stack: </p>
                  <pre dangerouslySetInnerHTML={{ __html: stackHtml }} />
                </div>
              )}
            </div>
          )}
        </PortalWithState>
      );
    }
    return children;
  }
}
