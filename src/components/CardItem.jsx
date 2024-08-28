import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CardItem(props) {
    return (
        <>
            <li className="cards_item">
                <Link to={props.path} className="cards_item_link">
                    <figure className="cards_item_pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel image" className="cards_item_img" />
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards_item_text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}