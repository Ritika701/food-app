import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {  
    const { resId } = useParams();

    const dummy = 'Dummy Data'; //props drilling, need to pass it to ItemList

    const resInfo = useRestuarantMenu(resId);

    // console.log(resInfo);
    // console.log("Render up");

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } =
    //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log("all res ", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log("res containing @type = ItemCategory ", categories);

    return (
        
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordions */}
            {categories.map((category, index) => (
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false} 
                    setShowIndex = {() => setShowIndex(index)}
                    dummy={dummy}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;