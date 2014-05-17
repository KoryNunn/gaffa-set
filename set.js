var Gaffa = require('gaffa');

function Set(){}
Set = Gaffa.createSpec(Set, Gaffa.Action);
Set.prototype._type = 'set';
Set.prototype.trigger = function(){

    var fromObj = this.source.value;
    if(this.clone.value){
        fromObj = this.gaffa.clone(fromObj);
    }
    this.target.set(fromObj, this.cleans.value ? false : null);
};
Set.prototype.target = new Gaffa.Property();
Set.prototype.source = new Gaffa.Property();
Set.prototype.clone = new Gaffa.Property();
Set.prototype.cleans = new Gaffa.Property();

module.exports = Set;