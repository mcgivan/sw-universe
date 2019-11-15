class ErrorBoundaries extends React.Component {
    construct(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    render() {
        return this.state.hasError ? (
            <h3 className="error-msg">Something went wrong!</h3>
        ) : (
            this.props.children
        );
    }
}
