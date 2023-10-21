import React from 'react';
import Ending1 from '../stories/the-map/Ending1';

export function createEnding(storyName, endingName, onStoryCompleted) {
    if (storyName === "the-map") {
        if (endingName === "Ending1") {
            return (<Ending1 onStoryCompleted={onStoryCompleted}/>);
        } else {
            return (<p>Chapter not found.</p>);
        }
    } else {
        return (<p>Story not found.</p>);
    }
}