let jump = 20;
class player {
  constructor(playerID) {
    this.player = document.getElementById(playerID);
    const { left, top } = this.player.getBoundingClientRect();
    this.left=left;
    this.top=top;
  }
  goRight() {
    if(this.left-jump>-20){
    this.left = this.left - jump;
    this.player.style.left = `${this.left}px`;
    }
  }
  goLeft() {
    if(this.left+jump<610){
    this.left = this.left + jump;
    this.player.style.left = `${this.left}px`;
  }
  }
  goUp() {
    if(this.top+jump<860){
    this.top = this.top + jump;
    this.player.style.top = `${this.top}px`
    }
  }
  goDown() {
    if(this.top-jump>-20){
    this.top = this.top - jump;
    this.player.style.top = `${this.top}px`;
  }
}

set setLeft(left){
  this.left = left;
}
set setTop(top){
  this.top = top;
}

}