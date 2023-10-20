import React from 'react';
import MockChallenge from '../challenges/MockChallenge';

export function createChallenge(challengeName, attributes, onChallengeCompleted, onChallengeFailed) {
    if (challengeName === "MockChallenge") {
        return (<MockChallenge 
            attributes={attributes} 
            onChallengeCompleted={onChallengeCompleted} 
            onChallengeFailed={onChallengeFailed}/>);
    } else {
        return (<p>Challenge not found.</p>);
    }
}

