/*import React from 'react';
import PropTypes from 'prop-types';
import { createChallenge } from './ChallengeFactory';
import { createStory } from './StoryFactory';
import { useRef, useState, useEffect } from 'react';

function StoryManager(storyName, nodes, rules) {
    
    let CurrentComponent = null;
    const [currentNode, setCurrentNode] = useState(null);
    const [mode, setMode] = useState("story");

    
    function getNextNode() {
        if (currentNode.current) {
            let choiceScores = [];
            let maxScoreIndex = 0;
            let maxScore = 0;
            for(let i = 0; i < currentNode.current.choices.length; i++) {
                choiceScores.push(0);
                let choice = currentNode.current.choices[i];
                rules.foreach(rule => {
                    if (rule.appliesTo(choice)) {
                        choiceScores[i] += rule.getScore(choice);
                    }
                });

                if (choiceScores[i] > maxScore) {
                    maxScoreIndex = i;
                    maxScore = choiceScores[i];
                }
            }
            
            return nodes[currentNode.current.choices[maxScoreIndex].nextNode];
        } else {
            return null;
        }
    }

    function onChallengeCompleted(response) {
        if (currentNode.current) {
            currentNode.current.attributes.forEach(attribute => {
                if (response[attribute.name]) {
                    attribute.value += response[attribute.name].effect;
                }
            });

            let nextNode = getNextNode();
            if (nextNode) {
                setCurrentNode(nextNode);
                if(nextNode.type === "challenge") {
                    setMode("challenge");
                } else {
                    setMode("story");
                }
            }
        }
    }

    function onChallengeFailed(response) {
        if (currentNode.current) {
            currentNode.current.attributes.forEach(attribute => {
                if (response[attribute.name]) {
                    attribute.value += response[attribute.name].effect;
                }
            });

            let nextNode = getNextNode();
            if (nextNode) {
                setCurrentNode(nextNode);
                if(nextNode.type === "challenge") {
                    setMode("challenge");
                } else {
                    setMode("story");
                }
            }
        }
    }

    useEffect(() => {
        if (mode === "story") {
            CurrentComponent = createStory(storyName, currentNode.current.chapterName);
        } else if (mode === "challenge") {
            CurrentComponent = createChallenge(
                currentNode.current.challengeName, 
                currentNode.current.attributes, 
                onChallengeCompleted, 
                onChallengeFailed);
        }
    }, [currentNode]);



    


    return (
        <>
            {CurrentComponent}
        </>
    )
}*/