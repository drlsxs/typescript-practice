let protagonlist: "Sherlock";
// protagonlist = "Warton"; //错误的

type Easing = "ease-in" | "ease-out" | "ease-in-out";

enum Ease {
  A = "ease-in",
  B = "ease-out",
  c = "ease-in-out",
}

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing == Ease.A) {
      console.log(1);
    }else if (easing == Ease.B) {
      console.log(2);
    }else if (easing == Ease.c) {
      console.log(3);
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// @ts-ignore
button.animate(0, 0, "uneasy");


let die: 1 | 2 | 3 | 4 | 5 | 6;
type Die = "1" | "2" | "ds";
let die2: Die;
// @ts-ignore
die2 = "dff"; //错误的
