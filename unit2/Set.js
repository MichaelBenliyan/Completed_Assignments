function MySet() {
    this.locations = {};
    this.length = 0;
}

// adds an object to the set
// does not add an object to the set if object is already present
MySet.prototype.add = function (value) {
    this.locations[value] = this.length;
    this.length ++;
};

// returns true if the value is contained in the set
MySet.prototype.contains = function (value) {
    return this.locations[value] !== undefined;
};

// removes value from the set if present
MySet.prototype.remove = function (value) {
    delete this.locations[value];
};
