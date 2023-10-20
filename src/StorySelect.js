import React from 'react';
import { Link } from 'react-router-dom';
  
  export default function StorySelect() {
    return (
        <>
            <div>
                <h1>Stories</h1>
            </div>
            <div>
                <ul>
                    <li><Link to="/stories/the-map/">The Map</Link></li>
                </ul>
            </div>
        </>
    );
}