import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import NodeRenderer from './NodeRenderer';
import { useNavigate } from 'react-router-dom';


function StoryManager({storyName, nodes = {}, rules = []}) {
    const [node, setNode] = useState(nodes["start"]);
    const stats = useRef({
        health: 100
    });
    const navigate = useNavigate();
    
    function getNextNode() {
        if (node) {
            let choiceScores = [];
            let maxScoreIndex = 0;
            let maxScore = -1;
            for(let i = 0; i < node.choices.length; i++) {
                choiceScores.push(0);
                //let choice = node.choices[i];
                if(rules) {
                    /*rules.foreach(rule => {
                        if (rule.appliesTo(choice)) {
                            choiceScores[i] += rule.getScore(choice, stats.current);
                        }
                    });*/
                }

                if (choiceScores[i] > maxScore) {
                    maxScoreIndex = i;
                    maxScore = choiceScores[i];
                }
            }

            let nextNode = node.choices[maxScoreIndex].nextNode
            
            if (Object.hasOwnProperty.call(nodes, nextNode)) {
                return nodes[nextNode];
            } else {
                return null;
            }
            
        } else {
            return null;
        }
    }

    function onChallengeCompleted(response) {
        console.log("Challenge completed.");
        console.log(response);
        /*for(const attribute in response) {
            if (response[attribute.name]) {
                if (!stats.current[attribute.name]) {
                    stats.current[attribute.name] = attribute.effect;
                } else {
                    stats.current[attribute.name] += attribute.effect;
                }
            }
        }*/

        let nextNode = getNextNode();
        setNode(nextNode);
    }

    function onChallengeFailed(response) {
        console.log("Challenge failed.");
        console.log(response);
        /*for(const attribute in response) {
            if (!stats.current[attribute.name]) {
                stats.current[attribute.name] = attribute.effect;
            } else {
                stats.current[attribute.name] += attribute.effect;
            }
        }*/

        let nextNode = getNextNode();
        setNode(nextNode);
    }

    function onChapterCompleted(response) {
        console.log("Chapter completed.");
        console.log(response);
        for(const attribute in response) {
            if (!stats.current[attribute.name]) {
                stats.current[attribute.name] = attribute.effect;
            } else {
                stats.current[attribute.name] += attribute.effect;
            }
        }

        let nextNode = getNextNode();
        setNode(nextNode);
    }

    function onStoryCompleted() {
        console.log("Story completed.");
        navigate("../../");
    }

    return (
        <>
            <NodeRenderer
                storyName={storyName} 
                node={node} 
                onChallengeCompleted={onChallengeCompleted} 
                onChallengeFailed={onChallengeFailed}
                onChapterCompleted={onChapterCompleted}
                onStoryCompleted={onStoryCompleted}
            />
        </>
    )
}

StoryManager.propTypes = {
    storyName: PropTypes.string.isRequired,
    nodes: PropTypes.object.isRequired,
    rules: PropTypes.array
};

export default StoryManager;