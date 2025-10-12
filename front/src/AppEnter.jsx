import './AppEnter.css';

export default function AppEnter({ onEnter }) {
    return (
        <div className="component-preloader">
	<main className="main-preloader">
		<div className="preloader" onClick={onEnter}>
			<div className="preloader__square"></div>
			<div className="preloader__square"></div>
			<div className="preloader__square"></div>
			<div className="preloader__square"></div>
		</div>
	</main>
</div>
    )
}