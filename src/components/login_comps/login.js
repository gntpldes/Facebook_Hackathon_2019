import React from 'react'; 


const Login = () => {
    return(
        <div>
            <button className="Button" onClick={()=>{
var eventFile = '{"Event":[{"EventName":"Neighborhood Clean up","Hostname":"Christine","time":"2019-15-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}},{"EventName":"Meet and Greet","Hostname":"Mark","time":"2019-11-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}},{"EventName":"Say Hi to your Alderman","Hostname":"Alderman Tara","time":"2019-19-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}},{"EventName":"How to build a website with React A-Z","Hostname":"Liam","time":"2020-01-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}}]}'
var obj = JSON.parse(eventFile); 
var i;
  var rows = [];
  for (i = 0; i < obj.Event.length; i++) { 
      //alert("event name : " + obj.Event[i].EventName + "    Host :" + obj.Event[i].Hostname);
      rows.push(<box key={obj.Event[i].EventName} />);
  } 

 
}}>
                <h1>
                    Login
                </h1>
            </button>
        </div>
    ); 
}

export default Login; 