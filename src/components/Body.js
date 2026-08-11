import ResturentCard from "./RestaurnentCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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
    const onlinseStaus = useOnlineStatus()
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
    return listOfResturents.length === 0 ? <Shimmer /> :

        onlinseStaus ?


            (



                <div>
                    <div className="flex ">
                        <input className=" h-10 border border-s-black rounded-md m-3" type="text" value={searchText} onChange={
                            (e) => setsearchText(e.target.value)

                        }></input>
                        <div>
                            <button className="border  bg-green-300 rounded-lg px-4 py-2 m-2 " onClick={
                                () => {
                                    const filterdList = listOfResturents.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()))
                                    setfilterdResturent(filterdList);
                                }
                            }>search</button>
                        </div>
                        <button className="border  bg-green-300 rounded-lg px-4 py-2 m-2" onClick={() => {
                            const filteredList = listOfResturents.filter((res) => res.avgRating <= 3.6);

                            setfilterdResturent(filteredList);

                        }}>
                            Top Rated Resturents
                        </button>
                    </div>
                    <div className="flex  flex-wrap">
                        {filterdResturent.map((resturent) => (
                            <Link key={resturent.id} to={'/resturents/' + resturent.id}><ResturentCard resData={resturent} /></Link>
                        ))}

                    </div>
                </div>
            ) : <h2> please check your connection</h2>
}
export default Body;