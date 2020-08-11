let jump = 15;
const leftBorder = 0;
const topBorder = 0;
const rightBorder = 520;
const bottomBorder = 320;

class element {
  constructor(elementID) {
    this.element = document.getElementById(elementID);
    const {
      left,
      top,
      right,
      down,
      width,
      height,
    } = this.element.getBoundingClientRect();
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.down = down;
    this.right = right;
  }

  goRight() {
    let left = this.left + jump;
    if (left < rightBorder) {
      this.left = left;
      this.element.style.left = `${left}px`;
    }
  }
  goLeft() {
    let left = this.left - jump;
    if (left > leftBorder) {
      this.left = left;
      this.element.style.left = `${left}px`;
    }
  }

  goUp() {
    let top = this.top - jump;
    if (top > topBorder) {
      this.top = top;
      this.element.style.top = `${top}px`;
    }
  }
  goDown() {
    let top = this.top + jump;
    if (top < bottomBorder) {
      this.top = top;
      this.element.style.top = `${top}px`;
    }
  }
}
