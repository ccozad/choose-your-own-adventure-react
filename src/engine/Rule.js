class Rule {
    constructor(name, appliesTo, getScore) {
        this.name = name;
        this.appliesTo = appliesTo;
        this.getScore = getScore;
    }
}

export default Rule;