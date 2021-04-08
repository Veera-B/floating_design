import React,{useState} from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import BoxWrapper from './UI/BoxWraper/BoxWrapper';
import InsideBox from './UI/BoxWraper/Insidebox/InsideBox';
import Conversation from './components/conversations/Conversation';
import Notes from './components/notes/Notes';
import Togglebutton from './UI/Buttons/Togglebutton';
import Card from './UI/Cards/Card';
import Info from './UI/Info/Info';

const  App = () => {

const [toggleValue,setToggleValue] = useState('');

  return (<Switch>
    <div className="App" >
          <Route path="/conversation" component = {Conversation} />
          <Route path="/notes" component = {Notes} />
          <BoxWrapper>
            <Togglebutton  isActive = {toggleValue==='Conversation'} clicked = {()=>setToggleValue("Conversation")} label = "Conversation Draft">Conversation</Togglebutton>
            <Togglebutton isActive = {toggleValue==='Notes'} clicked = {()=>setToggleValue("Notes")} label = "Notes" >Notes</Togglebutton>
            <InsideBox>
              {toggleValue === 'Conversation'&& <Conversation />}
              {toggleValue === 'Notes'&& <Notes /> }
            </InsideBox>
          </BoxWrapper>
          
    </div>
      
    </Switch>
    
  );
}

export default App;
