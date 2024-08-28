import { Link } from 'react-router-dom'
import './Button.css'

// eslint-disable-next-line react/prop-types
export default function Button({ children, type, onClick, buttonStyle, buttonSize }) {
    return (
        <Link to='sign-up' className='btn-mobile'>
            <button className={`btn ${buttonStyle} ${buttonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}