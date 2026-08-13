import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const ResturentCard = (props) => {
    const { resData } = props;
    const { name, avgRating, sla, costForTwo, cloudinaryImageId, cuisines } = resData;
    const { loggedInUser } = useContext(UserContext)

    return (
        <div className="w-[250]  p-3 m-3  bg-mist-400 hover:bg-mist-600 rounded-lg">
            <img src={CDN_URL + cloudinaryImageId} className="rounded-lg" alt={name} />
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{sla.deliveryTime} mins</h3>
            <h3>{costForTwo}</h3>
            <h3>{loggedInUser}</h3>


        </div>
    )
};

// Highr card component 
//take input => resturent card => output promoted label resturent 

export const withResturentCardLabel = (ResturentCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">promoted</label>

                <ResturentCard {...props} />


            </div>
        )
    }
}











export default ResturentCard;