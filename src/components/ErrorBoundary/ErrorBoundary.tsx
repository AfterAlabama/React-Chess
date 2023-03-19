import { Component } from 'react';
import { ChildrenOnlyProps } from '../../types/Props/UIProps';
import Loader from '../Generic/Loader/Loader';

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ChildrenOnlyProps, ErrorBoundaryState> {
	constructor(props: ChildrenOnlyProps) {
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
