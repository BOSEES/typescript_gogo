import { BaseComponent } from "./base.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
      <div class="video__player"><iframe src="" frameborder="0" class="video__iframe"></iframe></div>
      <h3 class="video__title"></h3>
    </section>`);
        const iframe = this.element.querySelector(".video__iframe ");
        iframe.src = this.converToEmbededURL(url);
        const titleElement = this.element.querySelector(".video__title");
        titleElement.textContent = title;
    }
    converToEmbededURL(url) {
        const splited = url.split("=");
        const id = splited[splited.length - 1];
        console.log(id);
        return `https://www.youtube.com/embed/${id}`;
    }
}
