import { useEffect, useState } from "react"
import { jsx } from "react/jsx-runtime";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import ResturentCategory from "./ResturentCateggory";

import useResturentCardMenu from "../utils/useResturentCardMenu";

const ResturentCardMenu = () => {

    const { resId } = useParams()
    const resInfo = useResturentCardMenu(resId)
    const [showIndex, setShowIndex] = useState()






    if (resInfo === null) return <Shimmer />
    const [name, cusines, costForTwoMessage] = resInfo?.cards[0]?.card?.card?.info;
    const [itemcards] = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.filter((c) => c.card?.card?.['@typeof'] === "type.googleapis.com/swiggy.presentation.food.v2.Dish")


    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg" >{cusines.join(",")} - {costForTwoMessage}</p>


            {
                categories.map((cat, index) => {
                    <ResturentCategory key={cat.card?.card?.title} data={cat?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />





                })
            }


        </div>
    )
}
export default ResturentCardMenu