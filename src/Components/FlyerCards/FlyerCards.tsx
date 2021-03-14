import React from "react";
import {Link} from "react-router-dom";
const FlyerCards:React.FC = () => {
    return(
        <div className="flyer-card">
            <Link to = "/" className="trending-tour-item">
                <img className="trending-tour-item__thumnail" src="https://images.unsplash.com/photo-1614254480533-d2a816781d58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="tour1" />  
                <div className="trending-tour-item__info">
                    <h3 className="trending-tour-item__name">
                        iPhone X (256 GB)
                    </h3>
                    <div className="trending-tour-item__group-infor">
                        <div className="trending-tour-item__group-infor--left">
                            <span className="trending-tour-item__group-infor__rating"> Condtion:  9/10</span>
                            <div className="trending-tour-item__group-infor__lasting">
                                <button className = "buy-now">Buy Now</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </Link>
        </div>     
    );
}

export default FlyerCards;