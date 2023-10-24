import React from 'react';
import MockChallenge from '../challenges/MockChallenge';
import SlidePuzzleChallenge from '../challenges/SlidePuzzleChallenge';

export function createChallenge(challengeName, attributes, onChallengeCompleted, onChallengeFailed) {
    if (challengeName === "MockChallenge") {
        return (<MockChallenge
            attributes={attributes}
            onChallengeCompleted={onChallengeCompleted}
            onChallengeFailed={onChallengeFailed} />);
    } else if (challengeName === "SlidePuzzleChallenge") {
        return (<SlidePuzzleChallenge
            attributes={attributes}
            onChallengeCompleted={onChallengeCompleted}
            onChallengeFailed={onChallengeFailed} />);
    } else {
        return (<p>Challenge not found.</p>);
    }
}

