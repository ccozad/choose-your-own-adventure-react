import React from 'react';
import PropTypes from 'prop-types';
import { createChallenge } from './ChallengeFactory';
import { createChapter } from './ChapterFactory';
import { createEnding } from './EndingFactory';

function NodeRenderer({
    storyName, 
    node, 
    onChallengeCompleted, 
    onChallengeFailed,
    onChapterCompleted,
    onStoryCompleted
}) {
    
    console.log("storyName: " + storyName);

    console.log("Rendering node: ");
    console.log(node);
    
    if (node && node.type === "story") {
        return createChapter(
            storyName, 
            node.chapterName, 
            onChapterCompleted);
    } else if (node && node.type === "challenge") {
        return createChallenge(
            node.challengeName, 
            node.attributes, 
            onChallengeCompleted, 
            onChallengeFailed,
            onChapterCompleted
        );
    } else if (node && node.type === "ending") {
        return createEnding(
            storyName,
            node.endingName,
            onStoryCompleted
        );
    } else {
        return <p>Node type not found.</p>
    }
}

NodeRenderer.propTypes = {
    storyName: PropTypes.string.isRequired,
    node: PropTypes.object.isRequired,
    onChallengeCompleted: PropTypes.func.isRequired,
    onChallengeFailed: PropTypes.func.isRequired,
    onChapterCompleted: PropTypes.func.isRequired,
    onStoryCompleted: PropTypes.func.isRequired
};

export default NodeRenderer;
