import React from 'react';
import PropTypes from 'prop-types';
  
function Ending1({onStoryCompleted}) {
    return (
        <>
            <div className='nes-container is-rounded is-dark' style={{margin: "4rem"}}>
                <p>You vanquish the enemy with a well timed fire ball. The end.</p>
            </div>
            <div className='nes-container with-title' style={{margin: "4rem"}}>
                <p className='title'>Actions</p>
                <div style={{margin: "1rem"}}>
                    <button style={{width: "100%"}} className='nes-btn' onClick={() => { onStoryCompleted() }}>Play again</button>
                </div>
            </div>
        </>
    );
}

Ending1.propTypes = {
    onStoryCompleted: PropTypes.func.isRequired
};

export default Ending1;