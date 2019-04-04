class Wheelwork extends Object {
    static findWheels(c1,c2) {
        var concept = `${c1}/${c2}`;
        var results = [];
        var t1,t2,w;
        for (t1=0; t1< 14; t1++) {
            for (t2=t1+1; t2< 14; t2++) {
                w = new Wheelwork(t1,t2);
                if (w.concept === concept) {
                    results.push(w);
                }
            }
        }
        return results;
    }

    static getAllConcepts() {
        var results = [];
        var i,w;
        for (i=52; i > 0; i--) {
            w = Wheelwork.findWheels(i, 105 - i).reverse();
            if (w.length === 0) {
                var conceptStr = `${i}/${105-i}`;
                w.push({
                    c1: i,
                    c2: 105 - i,
                    concept: conceptStr
                });
            }
            results = results.concat(w);

        }
        return results;
    };


    constructor(t1, t2) {
        super();
        if (t1 < 0 || t1 > 13) {
            throw new Error("Torch 1 position must be between 0 and 13");
        }
        if (t2 < 0 || t2 > 13) {
            throw new Error("Torch 2 position must be between 0 and 13");
        }

        if (t1 === t2) {
            throw new Error("Torches can not be in same position");
        }

        const _t1 = Math.min(t1,t2);
        const _t2 = Math.max(t2,t1);

        var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        var _c1 = nums.slice(_t1, _t2).reduce((a,i)=>a+i);    
        var _c2 = 105 - _c1;
        this.t1 = _t1;
        this.t2 = _t2;
        this.c1 = Math.min(_c1,_c2);
        this.c2 = Math.max(_c1,_c2);
        this.concept = `${this.c1}/${this.c2}`;
        this._fullConcept = null;
        this.getFullConcept = this.getFullConcept.bind(this);
    }

    getFullConcept() {
        if (!this._fullConcept) {
            const wheels = Wheelwork.findWheels(this.c1, this.c2);
            this._fullConcept = this.concept;
            for(var i=0; i < wheels.length && wheels.length > 1; i++) {
                if (wheels[i].t1 === this.t1 && wheels[i].t2 === this.t2) {
                    this._fullConcept = `${this.concept} ${["A","B","C","D","E"][i]}`;
                }
            }
        }
        return this._fullConcept;
    }

}

export default Wheelwork;
