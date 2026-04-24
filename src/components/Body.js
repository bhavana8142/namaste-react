import RestaurantCard from "./RestaurantCard";
import resObj from "../utilis/mockData";
import { useState } from "react";



const  resturentsData =resObj.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;


const Body = () =>{
    // local state variable  - super powerful variable 
const [Resturents, setResturents] = useState(resturentsData);

// const [Resturents, setResturents] = useState(resturentsData);
//  both are same
// const arr =useState(resturentsData);
// const Resturents = arr[0];
// const setResturents = arr[1];
    
// normal variable 

//let resturents =resObj.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    return (
        <div className="body-container">
            <div className="filter">
                <button className="filter-btn" onMouseOver={() =>{
                    // Filter logic for top rated restaurants can be implemented here
                    const filterList =Resturents.filter((res) => res.info.avgRating >=4.6);
                    console.log("Top Rated Restaurants:", filterList);
                    setResturents(filterList);
                    
                }
                

                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    Resturents.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)
                }
                

                
            </div>
                  
    

        </div>
    
    )
  
}

export default Body;