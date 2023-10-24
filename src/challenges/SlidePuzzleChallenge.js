import React from 'react';
import PropTypes from 'prop-types';

function SlidePuzzleChallenge({
    attributes = [],
    onChallengeCompleted = null,
    onChallengeFailed = null
}) {

    let formElenets = [];
    for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].type === "button") {
            if (attributes[i].outcome === "success") {
                formElenets.push(<button type="button" className='nes-btn' key={i} onClick={() => {
                    let response = {};
                    response[attributes[i].name] = {
                        effect: attributes[i].effect,
                    }
                    onChallengeCompleted(response);
                }}>{attributes[i].label}</button>);
            } else {
                formElenets.push(<button type="button" className='nes-btn' key={i} onClick={() => {
                    let response = {};
                    response[attributes[i].name] = {
                        effect: attributes[i].effect,
                    }
                    onChallengeFailed(response);
                }}>{attributes[i].label}</button>);
            }
        }
    }

    return (
        <>
            <div className='nes-container' style={{ margin: "4rem" }}>
                <div>Slide Puzzle Challenge</div>
                {formElenets}
            </div>

        </>
    );
}

SlidePuzzleChallenge.propTypes = {
    attributes: PropTypes.array,
    onChallengeCompleted: PropTypes.func,
    onChallengeFailed: PropTypes.func
};

export default SlidePuzzleChallenge;