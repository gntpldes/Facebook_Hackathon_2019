import React from 'react'; 


class Box  extends React.Component {
    render() {return(
        <div className="EBox">
            <img src={this.props.event_obj.img_url} alt="profile_pic" className="PPic"></img>
            <div className="PDisp">
            <h1>{this.props.event_obj.EventName}</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <ul>
                <li>Hosted by {this.props.event_obj.Hostname}</li>
                <br></br>
                <li>{this.props.event_obj.location.street} {this.props.event_obj.location.city} {this.props.event_obj.location.state} {this.props.event_obj.location.zip}</li>
                <br></br>
                <li>{this.props.event_obj.time}</li>
            </ul>
        </div>
        
        </div>
    ); }
}

export default Box; 