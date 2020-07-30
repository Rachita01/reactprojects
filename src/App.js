import React from 'react';
import './App.css';
import './CarouselExample';
import './VoteUp';
import CarouselExample from './CarouselExample';
import VoteUp from './VoteUp';
import FirstExample from './FirstExample';
import StateLike from './StateLike';
import StateOnly from './StateOnly';
import StateWithPorps from './StateWithProps';
import EventExampleLogin from './EventExampleLogin';
import EventExampleToggle from './EventExampleToggle';
import EventExamplePfromc from './EventExamplePfromc';

function App() {
  return (
    <div>
    <EventExampleLogin/>
    <CarouselExample/>
    <VoteUp/>
    <FirstExample/>
    <StateLike/>
    <StateOnly/>
    <StateWithPorps/>
    <EventExampleToggle/>
    <EventExamplePfromc/>
    </div>
  );
};

export default App;
