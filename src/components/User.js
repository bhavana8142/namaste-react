import { useState } from "react"
const User = (props) => {
    const { name } = props
    const [count] = useState(0);
    const [conut2] = useState(1)

    return (
        <div className="user-card">
            <h4>count = {count}</h4>
            <h4>Name : {name}</h4>
            <h4>Location : Gumtur</h4>
            <h4>contact :@bhavana.com</h4>
        </div>
    )
}

export default User