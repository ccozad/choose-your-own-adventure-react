import React from 'react';
import PropTypes from 'prop-types';
  
function Chapter1({onChapterCompleted}) {
    return (
        <>
            <p>You awake in a mysterious inn with an old map spread on the table.</p>
            <button onClick={() => { onChapterCompleted({experience: 1}) }}>Continue</button>
        </>
    );
}

Chapter1.propTypes = {
    onChapterCompleted: PropTypes.func.isRequired
};

export default Chapter1;