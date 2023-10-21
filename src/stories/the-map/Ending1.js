import React from 'react';
import PropTypes from 'prop-types';
  
function Ending1({onStoryCompleted}) {
    return (
        <>
            <p>You vanquish the enemy with a well timed fire ball. The end.</p>
            <button onClick={() => { onStoryCompleted()}}>Play again</button>
        </>
    );
}

Ending1.propTypes = {
    onStoryCompleted: PropTypes.func.isRequired
};

export default Ending1;