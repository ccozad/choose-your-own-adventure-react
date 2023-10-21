# Introduction

An open source choose your own adventure game with a the twist of embedded mini games

![Chapter Example](/screenshots/chapter.png?raw=true "Chapter Example")

# Getting Started

- *Install dependencies* `npm install`
- *Run dev server on Mac* `npm run start`
- *Run dev server on Windows* `npm run start-win`
- *Build foe dev* `npm run build-dev`
- *Build for production* `npm run build-prod`

# The Engine

This project has a custom engine to make it easier to work with "choose your own adventure" stories. 

## Story Manager

Stories are represented as a graph of nodes for easy composition. The `StoryManager` currently supports the following nodes:

- Challenge node
- Chapter node
- Ending node

The `StoryManager` manages the transitions between nodes by processing various callbacks. The `StoryManager` keeps track of a generic stat system controlled by the story nodes.

The `StoryManager` relies on a dictionary of nodes. Nodes can be chained in any order but one node must be named `start`. Nodes are chained using the choices section of the node structure. Each choice should have a `nextNode` field that is the name of a valid node.

A three part story might look like

```javascript
const nodes = {};

// Every story needs a node named "start".
nodes["start"] = {
    "type": "story",
    "chapterName": "Chapter1",
    "choices": [
        {
            name: "default",
            nextNode: "challenge1",
        }
    ]
};

nodes["challenge1"] = {
    "type": "challenge",
    "challengeName": "MockChallenge",
    "attributes": [
        {
            type: "button",
            outcome: "success",
            name: "wizard",
            effect: "10",
            label: "Wizard +10"
        }
    ],
    "choices": [
        {
            name: "default",
            nextNode: "ending1",
        }
    ]
};

nodes["ending1"] = {
    "type": "ending",
    "endingName": "Ending1"
};
```

# Rules

Coming soon! This section will explain how to tell the `StoryEngine` which choice to take when transitioning to the next node. For example, if a section of the story requires having obtained the small key, a rule can written to enforce that condition before allowing the player to progress to that chapter.

## Challenge Nodes

Challenge nodes are interactive mini games. Challenges are an active game play way of making choices instead of just selecting an option like traditional choose your own adventure books. Challenge nodes communicate with the `StoryManager` using two different call backs

- `onChallengeCompleted(result)`
- `onChallengeFailed(result)`

The parameter passed to each function is a dictionary of stat effects. Some examples of stat effects include

```json
{
    "wizard": {
        "effect": 1
    }
}
```

```json
{
    "health": {
        "effect": -10
    }
}
```

These stat effects would increase the wizard stat by one and reduce the health stat by ten. The `StoryManager` will evaluate the choices of the node to determine the next node to show.

## Chapter Nodes

Chapter nodes are narrative elements. Chapter nodes communicate with the `StoryManager` using a single callback:

- `onChapterCompleted(result)`

The parameter passed to the callback is a dictionary of stat effects. An example of a stat effects. The `StoryManager` will evaluate the choices of the node to determine the next node to show.

```json
{
    "small_key": {
        "effect": 1
    }
}
```

This stat effect would add a small key to the stats.

## Ending Nodes

Ending nodes represent a conclusion to a story. Ending nodes communicate with the `StoryManager` using a single callback.

- `onStoryCompleted()`

The `StoryManager` returns to the story select screen when the story is completed.

## Node Renderer

Nodes are rendered by the `NodeRenderer` using information about the story name, node name, node type and node specific attributes. See the respective node factories in the engine for more details ( `ChallengeFactory`, `ChapterFactory`, `EndingFactory`).

