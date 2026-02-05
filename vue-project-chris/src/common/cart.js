import { Product } from "./products";

export class Cart extends Product {
  constructor(id, name, price, count) {
    super(id, name, price);
    this.count = count;
    // super 就是 product 裡面的
  }
}

// 原因是 JavaScript 的 class 繼承機制決定了 父類別的初始化必須先完成，才能使用 this。
// 當你寫一個派生類別 extends Product 時，子類的 this 是建立在父類 constructor 的基礎上，如果你還沒呼叫 super()，JS 根本還沒把父類的內部結構（屬性、原型鏈）建立好，這時候用 this 就不知道指向哪裡，所以直接報錯。

//////// 即  "連一個可以存屬性的實例都沒有，所以會報錯"
