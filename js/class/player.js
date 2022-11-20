export default class player {

    static hi(){
        alert("hi");
    }

    #name = "Default Name"
    #strengthOver10 = 0
    #points = 0

    constructor(name, strengthOver10) {
      this.#name = name;
      this.#strengthOver10 = strengthOver10;
      this.#points = 0;
    }

    get getName(){
        return this.#name;
    }

    set setName(name){
        this.#name = name;
    }

    get getStrength(){
        return this.#strengthOver10;
    }

    set setStrength(strength){
        this.#strengthOver10 = strength;
    }

    get getPoints(){
        return this.#points;
    }

    set setPoints(points){
        this.#points = points;
    }

    toJSON(){
        return {
          name: this.#name,
          strengthOver10: this.#strengthOver10,
          points: this.#points
        }
    }
}