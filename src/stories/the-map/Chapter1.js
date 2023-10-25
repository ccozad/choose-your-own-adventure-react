import React from 'react';
import PropTypes from 'prop-types';
  
function Chapter1({onChapterCompleted}) {
    return (
        <>
            <div className='nes-container is-rounded is-dark' style={{margin: "4rem"}}>
                <p>You awake in a mysterious inn with an old map spread on the table.</p>
            </div>
            <div className='nes-container with-title' style={{margin: "4rem"}}>
                <p className='title'>Actions</p>
                <div style={{margin: "1rem"}}>
                    <button style={{ width: "100%" }} className='nes-btn' onClick={() => {
                        onChapterCompleted(
                            {
                                experience: {
                                    effect: 1
                                },
                                choice: {
                                    effect: "slidePuzzle"
                                }
                            })
                    }}>Examine Map</button>
                </div>
                <div style={{margin: "1rem"}}>
                    <button style={{width: "100%"}} className='nes-btn' onClick={() => { onChapterCompleted({experience: 1}) }}>Inspect Area</button>
                </div>
                <div style={{margin: "1rem"}}>
                    <button style={{width: "100%"}} className='nes-btn' onClick={() => { onChapterCompleted({experience: 1}) }}>Leave Room</button>
                </div>
            </div>
            
        </>
    );
}

Chapter1.propTypes = {
    onChapterCompleted: PropTypes.func.isRequired
};

export default Chapter1;