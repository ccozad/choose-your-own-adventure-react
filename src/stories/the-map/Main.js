import React from 'react';
import StoryManager from '../../engine/StoryManager';

  
  export default function Main() {
    const storyName = "the-map";
    const nodes = {};

    // Every story needs a node named "start".
    nodes["start"] = {
        "type": "story",
        "chapterName": "Chapter1",
        "choices": [
            {
                name: "default",
                nextNode: "challenge1",
            }
        ]
    };

    nodes["challenge1"] = {
        "type": "challenge",
        "challengeName": "MockChallenge",
        "attributes": [
            {
                type: "button",
                outcome: "success",
                name: "wizard",
                effect: "10",
                label: "Wizard +10"
            }
        ],
        "choices": [
            {
                name: "default",
                nextNode: "ending1",
            }
        ]
    };

    nodes["ending1"] = {
        "type": "ending",
        "endingName": "Ending1"
    };

    console.log("Rendering story: " + storyName);

    let storyManager = (
        <StoryManager storyName={storyName} nodes={nodes}/>
    )

    return (
        <>
            {storyManager}
        </>
    );
}