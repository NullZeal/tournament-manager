import player from "./player";

export default class team {
    #player1;
    #player2;
    #player3;
    #player4;

    #name

    constructor(player1, player2, player3, player4) {
      this.player1 = player1;
      this.player2 = player2;
      this.player3 = player3;
      this.player4 = player4;
      this.points = 0;
    }


    get getPlayer1(){
        return this.player1;
    }

    set setPlayer1(player1){
        this.player1 = player1
    }

    get getPlayer2(){
        return this.player2;
    }

    set setPlayer2(player2){
        this.player2 = player2
    }

    get getPlayer3(){
        return this.player3;
    }

    set setPlayer3(player3){
        this.player3 = player3
    }

    get getPlayer4(){
        return this.player4;
    }

    set setPlayer4(player4){
        this.player4 = player4
    }
  }
  