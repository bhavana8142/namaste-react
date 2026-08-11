import { CDN_URL } from "../utils/constants";


const ResturentCard = (props) => {
    const { resData } = props;
    const { name, avgRating, sla, costForTwo, cloudinaryImageId, cuisines } = resData;

    return (
        <div className="w-[250]  p-3 m-3  bg-mist-400 hover:bg-mist-600 rounded-lg">
            <img src={CDN_URL + cloudinaryImageId} className="rounded-lg" alt={name} />
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{sla.deliveryTime} mins</h3>
            <h3>{costForTwo}</h3>


        </div>
    )
};
export default ResturentCard;