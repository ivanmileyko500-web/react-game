import './AppEnter.css';
import ProgressBar from './components/interfaceComponents/progressBar/ProgressBar';

export default function AppEnter({ onEnter }) {
    return (
        <div className="main">
        <div className="component-preloader" onClick={onEnter}>
	<main className="main-preloader">
		<div className="preloader">
			<div className="preloader__square"></div>
			<div className="preloader__square"></div>
			<div className="preloader__square"></div>
			<div className="preloader__square"></div>
		</div>
	</main>
    <div className="progress-bar-container">
        <ProgressBar fillTime={13000} onFinish={onEnter}/>
      </div>
      </div>
</div>
    )
}