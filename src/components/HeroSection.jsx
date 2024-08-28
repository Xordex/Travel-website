import Button from "./Button";
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get started</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Watch trailer <i className="far fa-play-circle"></i></Button>
            </div>
        </div>
    )
}