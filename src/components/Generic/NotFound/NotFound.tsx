import cl from './NotFound.module.scss'

const NotFound = () => {
	return (
		<div
			data-testid='notFound'
			className = {cl.notFound}
		>
			The Page Was Not Found
		</div>
	);
};

export default NotFound;
