import { Component, ReactNode } from 'react';
import Loader from '../UI/Generic/Loader';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<Loader>
					<h1>Something went wrong!</h1>
					<p>Fixing the issue...</p>
				</Loader>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
