import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StorySelect from './StorySelect';
import TheMap from './stories/the-map/Main';
  
  export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StorySelect />} />
                <Route path="/stories/the-map" element={<TheMap />} />
            </Routes>
        </div>
    );
  }