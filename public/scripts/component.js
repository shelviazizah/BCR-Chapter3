class Component {
    constructor() {
        if (this.constructor === Component) {
            throw new error("Abstract class can't be initiized")
        }

    }

    // empty implementation 
    render() { }
}