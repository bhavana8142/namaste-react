import { useEffect, useState } from "react"
import { jsx } from "react/jsx-runtime";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

import useResturentCardMenu from "../utils/useResturentCardMenu";

const ResturentCardMenu = () => {

    const { resId } = useParams()
    const resInfo = useResturentCardMenu(resId)





    if (resInfo === null) return <Shimmer />
    const [name, cusines, costForTwoMessage] = resInfo?.cards[0]?.card?.card?.info;
    const [itemcards] = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cusines.join(",")} - {costForTwoMessage}</h3>
            <ul >{itemcards.map((item) => {
                <li key={itemcards.id}>{item.card.info.name} - RS{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
            })}</ul>
        </div>
    )
}
export default ResturentCardMenu