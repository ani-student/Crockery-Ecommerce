
import './r-collection.css'

function Rcollection(props) {



    return (

        <div className="r-collection">

            <div className="card-box flexcol">

                <div className="card-img">
                    <img src={props.image} alt="logo" />
                </div>

                <div className="card-details">
                    <p>{props.name}</p>
                    <div className="price">
                        <h3>{props.sales_price}</h3>
                        <h3 style={{ textDecorationLine: "line-through" }}>{props.old_price}</h3>
                    </div><br />
                    <button className='button centerBox' >Add to Cart</button>
                </div>
            </div>

        </div>

    )
}

export default Rcollection;
