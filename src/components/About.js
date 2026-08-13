import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";


class About extends React.Component {
    constructor(props) {
        super(props)
        //console.log('parent consturctor')
    }

    componentDidMount() {
        //console.log('parent component did Mount')
    }



    render() {
        //console.log('parent render')
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <User name={'bhavana(function)'} />
                <UserClass name={"firstChild"} />


            </div>

        )
    }

}





// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={'bhavana(function)'} />
//             <UserClass name={"bhavana(class)"} location={'guntur(calss)'} />
//         </div>
//     )
// };
export default About;