import './SignUp.css'

export default function SignUp() {
    return (
        <>
            <h1 className="sign-up">Sign up</h1>
            <div className="signup-section">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea rows="6" placeholder="What do you want to ask?" />
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}