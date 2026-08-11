import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                'name': 'dummy',

            }


        }
        console.log(this.props.name + 'consturctor')

    }
    async componentDidMount() {
        console.log(this.props.name + 'cmopent')
        const data = await fetch('https://gitlab.com/api/graphql', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
      query {
        currentUser {
          id
          name
          username
          avatarUrl
        }
      }
    `,
            }),

        })
        const json = await data.json()
        console.log("STATUS:", data.status);
        console.log("RESPONSE:", json);
        this.setState({
            userInfo: json.data.currentUser
        })
        const { name } = this.state.userInfo

    }



    render() {
        console.log(this.props.name + 'render')


        return (
            <div className="user-card">
                <h4>Name : {name}</h4>

                <h4>contact :@bhavana.com</h4>
            </div>
        )

    }

}
export default UserClass;