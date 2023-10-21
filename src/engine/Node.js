class Node {
    constructor(type, chapterName, challengeName, attributes, choices) {
        this.type = type;
        this.chapterName = chapterName;
        this.challengeName = challengeName;
        this.attributes = attributes;
        this.choices = choices;
    }
}

export default Node;