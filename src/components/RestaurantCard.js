import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData;
    const { deliveryTime } = resData?.sla;
    const {loggedInUser} = useContext(UserContext);


    return (
            <div data-testid="resCard" className="m-4 p-4 w-[271px] h-[390px] rounded-lg bg-stone-100 hover:bg-stone-200">
                <img 
                    className="rounded-lg" 
                    alt="res-logo" 
                    src={CDN_URL + cloudinaryImageId}
                />
                <h3 className="font-semibold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} minutes</h4>
                {/* <h4>User: {loggedInUser}</h4> */}
            </div>
    );
};

export const withPromotedLabel = (Restaurantcard) => { //withPromotedLabel returns a component (not jsx). And takes comp as a input. So it is a higher order fun.
    return (props) => {  //this return is a fun (component) which returns a jsx
        return (
            <div>
                <label className="absolute text-white bg-black m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    }; 
};

export default RestaurantCard;