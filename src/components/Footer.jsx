import Button from "./Button";
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn-outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <a to='/sign-up'>How it works</a>
                        <a to='/'>Testimonials</a>
                        <a to='/'>Careers</a>
                        <a to='/'>Investors</a>
                        <a to='/'>Terms of Service</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <a to='/'>Contact</a>
                        <a to='/'>Support</a>
                        <a to='/'>Destinations</a>
                        <a to='/'>Sponsorships</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <a to='/'>Submit Video</a>
                        <a to='/'>Ambassadors</a>
                        <a to='/'>Agency</a>
                        <a to='/'>Influencer</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a to='/'>Instagram</a>
                        <a to='/'>Facebook</a>
                        <a to='/'>Youtube</a>
                        <a to='/'>Twitter</a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <a to='/' className='social-logo'>
                            TRVL
                            <i className='fab fa-typo3' />
                        </a>
                    </div>
                    <small className='website-rights'>TRVL © 2020</small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='aedIn'
                        >
                            <i className='fab fa-aedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}