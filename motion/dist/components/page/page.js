import { BaseComponent } from "./item/base.js";
class PageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__contorols">
              <button class="close">X</button>
            </div>
          </li>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
    setOnCloseListener(listener) {
        this.closeListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super("<ul class='page'></ul>");
    }
    addChild(section) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}
