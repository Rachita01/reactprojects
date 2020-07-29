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

function App() {
  return (
    <div>
    <CarouselExample/>
    <VoteUp/>
    <FirstExample/>
    <StateLike/>
    <StateOnly/>
    <StateWithPorps/>
    </div>
  );
};

export default App;
