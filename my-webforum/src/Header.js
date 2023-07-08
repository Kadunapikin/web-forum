import React from "react";

const Header = (props) => {
    return (
        <>
        <img>{props.profileImg}</img>
        <h1>{props.username}</h1>
        </>
    )
}
export default Header;