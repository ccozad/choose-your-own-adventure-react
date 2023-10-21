import React from 'react';
import { Link } from 'react-router-dom';
  
  export default function StorySelect() {
    return (
        <>
            <div className='nes-container' style={{margin: "4rem"}}>
                <h1 className='nes-text'>Stories</h1>
                <Link className="nes-btn" to="/stories/the-map/">The Map</Link>
            </div>
        </>
    );
}