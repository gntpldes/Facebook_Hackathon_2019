import React from 'react'; 


class UserInfo extends React.Component {

    render(){
    return(
        <div className="PDisp">
            <h1>User Name</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <ul>
                <li>Event Name</li>
                <br></br>
                <li>Event Location</li>
                <br></br>
                <li>Event Time</li>
            </ul>
        </div>
    ); 
    }
}

export default UserInfo; 