import './ColorContainer.css';

export default function ColorContainer({ children }) {
    return (
        <div className="color-container">
            <div className="overlay-color"></div>
            <div className="color-container-content">
                {children}
            </div>
        </div>
    )
}