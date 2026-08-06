import ResturentCard from "./RestaurnentCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";


const Body = () => {
    /*
    
    const arr = useState(resList);
    const listOfResturents = arr[0];
    const setListOfResturents = arr[1];
    above code can be written as below using array destructuring

    const [listOfResturents, setListOfResturents] = useState(resList);
whenever statevariable changes react trigers a reconsilation cycle(rerender the component) 
    */

    const [listOfResturents, setListOfResturents] = useState([]);
    const [searchText, setsearchText] = useState('');
    const [filterdResturent, setfilterdResturent] = useState([]);
    useEffect(() => {
        fetchData();

    }, []);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const restaurants = json?.data?.cards
            ?.filter((item) => item?.card?.card?.info)
            ?.map((item) => item.card.card.info);
        setListOfResturents(restaurants);
        setfilterdResturent(restaurants);





    }
    // conditional rendering
    return listOfResturents.length === 0 ? <Shimmer /> : (



        <div>
            <div className="filter">
                <input type="text" value={searchText} onChange={
                    (e) => setsearchText(e.target.value)

                }></input>
                <button onClick={
                    () => {
                        const filterdList = listOfResturents.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilterdResturent(filterdList);
                    }
                }>search</button>
                <button className="to-rated" onClick={() => {
                    const filteredList = listOfResturents.filter((res) => res.avgRating <= 3.6);

                    setfilterdResturent(filteredList);

                }}>
                    Top Rated Resturents
                </button>
            </div>
            <div className="res-container">
                {filterdResturent.map((resturent) => {
                    return <ResturentCard resData={resturent} key={resturent.id} />
                })}

            </div>
        </div>
    )
};
export default Body;