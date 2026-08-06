import { CDN_URL } from "../utils/constants";


const ResturentCard = (props) => {
    const { resData } = props;
    const { name, avgRating, sla, costForTwo, cloudinaryImageId, cuisines } = resData;

    return (
        <div className="res-card">
            <img src={CDN_URL + cloudinaryImageId} className="res-logo" alt={name} />
            <h3>{name}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{sla.deliveryTime} mins</h3>
            <h3>{costForTwo}</h3>


        </div>
    )
};
export default ResturentCard;