import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
return (
    <div>
    <h2>My name is {props.name}</h2>
    <p>{props.bio}</p>
    <h2>I am a {props.job}</h2>
        
    </div>
);
};



Profile.defaultProps = {
    name: "Youssef Ben Youssef",
    job: "Developper",
    bio: "i am youssef from tunisia",
};


Profile.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    bio: PropTypes.string,

};



export default Profile ;