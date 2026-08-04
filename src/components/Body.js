import ResturentCard from "./RestaurnentCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    /*
    
    const arr = useState(resList);
    const listOfResturents = arr[0];
    const setListOfResturents = arr[1];
    above code can be written as below using array destructuring

    const [listOfResturents, setListOfResturents] = useState(resList);

    */

    const [listOfResturents, setListOfResturents] = useState(resList);
    return (



        <div>
            <div className="btn">
                <button className="to-rated" onClick={() => {
                    const filteredList = listOfResturents.filter((res) => res.info.avgRating > 4.7);
                    setListOfResturents(filteredList);

                }}>
                    Top Rated Resturents
                </button>
            </div>
            <div className="res-container">
                {listOfResturents.map((resturent) => {
                    return <ResturentCard resData={resturent} key={resturent.info.id} />
                })};

            </div>
        </div>
    )
};
export default Body;