import React from 'react';
import Chapter1 from '../stories/the-map/Chapter1';

export function createStory(storyName, chapterName) {
    if (storyName === "the-map") {
        if (chapterName === "Chapter1") {
            return (<Chapter1 />);
        } else {
            return (<p>Chapter not found.</p>);
        }
    } else {
        return (<p>Story not found.</p>);
    }
}