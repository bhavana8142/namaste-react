import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"


const ItemList = ({ items }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        // dispatch an action 
        dispatch(addItem(item))


    }
    return (
        <div>

            {items.map(item => (<div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">



                <div className="w-9/12">
                    <div className="py-2">
                        <span> {item.card.info.name}</span>
                        <span> {item.card.info.price ? item.card.info.Price / 100 : item.card.info.defaultPrice}</span>
                    </div>
                    <p className="text-xs"> {item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4 absolute">

                    <button className="p-2 bg-black shadow-lg mx-16 rounded-lg text-white  " onClick={() => handleAddItem(item)}>Add+</button>
                    <img src={CDN_URL + item.card.info.imageId} className="w-14" />
                </div>
            </div>))}



        </div>
    )
}
export default ItemList