import React from 'react';
import Header from './components/header';
import Box from './components/event_box/e_box';
import Base from './components/base';  
import './App.css';

function App() {
  var eventFile = '{"Event":[{"EventName":"Neighborhood Clean up","Hostname":"Christine","time":"2019-15-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}},{"EventName":"Meet and Greet","Hostname":"Mark","time":"2019-11-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}},{"EventName":"Say Hi to your Alderman","Hostname":"Alderman Tara","time":"2019-19-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}},{"EventName":"How to build a website with React A-Z","Hostname":"Liam","time":"2020-01-02T20:06:21.853Z","location":{"street":"100 West Birch Lane","city":"Chicago","state":"IL","zip":"60620"}}]}'
  var obj = JSON.parse(eventFile); 
  var i;
  var rows = [];
  for (i = 0; i < obj.Event.length; i++) { 
      //alert("event name : " + obj.Event[i].EventName + "    Host :" + obj.Event[i].Hostname);
      rows.push(<Box key={obj.Event[i].EventName} />);
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
