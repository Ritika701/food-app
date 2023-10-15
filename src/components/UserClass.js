import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        };
        // console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Ritika701");
        const json = await data.json();
        // console.log(data);
        // console.log(json);

        this.setState({
            userInfo: json,
        });
        
        // console.log(this.props.name + "Child Component Did Mount");
    }

    componentDidUpdate() {
        // console.log(this.props.name + "Child Component Did Update")
    }

    componentWillUnmount() {
        // console.log(this.props.name + "Child Component Will Unmount")
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        // console.log(this.state.userInfo);
        // console.log(this.state.userInfo.avatar_url);
        //  console.log(this.props.name + "Child Render");

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ritika123</h4>
            </div>
        );
    };
};

export default UserClass;