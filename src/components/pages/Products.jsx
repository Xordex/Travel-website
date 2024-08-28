import './Products.css'

export default function Products() {
    return (
        <>
            <h1 className="products">PRODUCTS</h1>
            <div className="products-section">
                <div className="product">
                    <img src="images/product1.jpg" alt="" />
                    <h4>Colonies Radom 2024</h4>
                    <p>from $1659</p>
                    <button>Details</button>
                </div>
                <div className="product">
                    <img src="images/product2.jpg" alt="" />
                    <h4>Aqua Trip 2024</h4>
                    <p>from $860</p>
                    <button>Details</button>
                </div>
                <div className="product">
                    <img src="images/product3.jpg" alt="" />
                    <h4>Premium Party 2024</h4>
                    <p>from $459</p>
                    <button>Details</button>
                </div>
                <div className="product">
                    <img src="images/product4.jpg" alt="" />
                    <h4>Survival Trip 2024</h4>
                    <p>from $523</p>
                    <button>Details</button>
                </div>
            </div>
        </>
    )
}