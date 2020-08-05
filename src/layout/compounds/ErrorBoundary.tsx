import React from "react";

export class ErrorBoundary extends React.Component<{ showBack?: boolean }> {
  state: {
    error: any;
    show: boolean;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      show: false,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  static getDerivedStateFromError(error: any) {
    // Update state so next render shows fallback UI.
    return { error };
  }

  componentDidCatch(error: any) {
    // Log the error to an error reporting service
    this.setState({ error });
  }

  toggleShow(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const { show } = this.state;
    this.setState({ ...this.state, show: !show });
  }

  render() {
    const { showBack, children } = this.props;
    const { error, show } = this.state;
    const stackHtml = error?.stack.replace(/\\n/g, "<br />");
    if (error) {
      return (
        <div>
          <p>Uh oh, something went wrong. {showBack && <a href="/">Go home?</a>}</p>
          <p>
            <a href="toggleShow" onClick={this.toggleShow}>
              Click for More Info
            </a>
          </p>
          {show && (
            <div>
              <p>Message: {error?.message}</p>
              <p>Stack: </p>
              <pre dangerouslySetInnerHTML={{ __html: stackHtml }} />
            </div>
          )}
        </div>
      );
    }
    return children;
  }
}
