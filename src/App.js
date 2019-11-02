import React from 'react';
import Header from './components/header';
import Box from './components/event_box/e_box';
import Base from './components/base';  
import './App.css';

function App() {
  var eventFile = '{   "Event": [     {       "EventName": "Neighborhood Clean up",       "Hostname": "Christine",       "time": "2019-15-02T20:06:21.853Z", 	  "img_url": "http://www.cityoforlando.net/wp-content/uploads/2016/02/Community-Connections-2.jpg",       "location": {         "street": "100 West Birch Lane",         "city": "Chicago",         "state": "IL",         "zip": "60620"       }     }, 	{       "EventName": "Meet and Greet",       "Hostname": "Mark",       "time": "2019-11-02T20:06:21.853Z", 	  "img_url": "http://communityarchiving.org/wp-content/uploads/2014/07/presentations.jpg",       "location": {         "street": "100 West Birch Lane",         "city": "Chicago",         "state": "IL",         "zip": "60620"       }     }, 	{       "EventName": "Lets watch Moonlight",       "Hostname": "Boris",       "time": "2019-19-02T20:01:45.853Z", 	  "img_url": "http://www.rioonwatch.org/wp-content/uploads/2018/10/Group-Discussion-CLT-Community-Workshop-2.jpg",       "location": {         "street": "100 West Birch Lane",         "city": "Chicago",         "state": "IL",         "zip": "60620"       }     },	 	{       "EventName": "Morning Excersizes",       "Hostname": "Dakota",       "time": "2019-19-02T20:01:45.853Z", 	  "img_url": "https://s3.amazonaws.com/northfortynews/wordpress/wp-content/uploads/2019/03/25175048/City-Park-Sign-678x381.png",       "location": {         "street": "100 West Birch Lane",         "city": "Chicago",         "state": "IL",         "zip": "60620"       }     }, 	{       "EventName": "Say Hi to your Alderman",       "Hostname": "Alderman Tara",       "time": "2019-19-02T20:06:21.853Z", 	  "img_url": "https://coronadotimes.com/wp-content/uploads/2015/03/1719-100_56741.jpg",       "location": {         "street": "100 West Birch Lane",         "city": "Chicago",         "state": "IL",         "zip": "60620"       }     }, 	{       "EventName": "How to build a website with React A-Z",       "Hostname": "Liam",       "time": "2020-01-02T20:06:21.853Z", 	  "img_url": "https://www.zionnationalpark.com/wp-content/uploads/2013/11/zion_lodge.png",       "location": {         "street": "100 West Birch Lane",         "city": "Chicago",         "state": "IL",         "zip": "60620"       }     }	, 	{       "EventName": "Intermediate Spanish",       "Hostname": "Fatima",       "time": "2020-04-02T20:09:21.853Z", 	  "img_url": "https://freshkillspark.org/wp-content/uploads/2019/04/IMG_5886-e1556221507695.jpg",       "location": {         "street": "100 West Birch Lane",         "city": "Chicago",         "state": "IL",         "zip": "60620"       }     }	   ] }'
  var obj = JSON.parse(eventFile); 
  var i;
  var rows = [];
  for (i = 0; i < obj.Event.length; i++) { 
      //alert("event name : " + obj.Event[i].EventName + "    Host :" + obj.Event[i].Hostname);
      var event = obj.Event[i];
      rows.push(<Box event_obj={event} />);
  } 

  return (
    <div>
      
      <Header /> 
      {rows}

      <Base />
    </div>
  );
}

export default App;
