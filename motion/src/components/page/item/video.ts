import { BaseComponent } from "./base.js";
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
      <div class="video__player"><iframe src="" frameborder="0" class="video__iframe"></iframe></div>
      <h3 class="video__title"></h3>
    </section>`)

    const iframe = this.element.querySelector(".video__iframe ")! as HTMLIFrameElement;
    iframe.src = this.converToEmbededURL(url);
    
    const titleElement = this.element.querySelector(".video__title")! as HTMLHeadElement;
    titleElement.textContent = title;
  }

  private converToEmbededURL(url: string): string {
    const splited = url.split("=");
    const id = splited[splited.length - 1]!;
    console.log(id);
    return `https://www.youtube.com/embed/${id}`
  }
}

// <iframe width="1280" height="720" src="https://www.youtube.com/embed/BUAhpB3FmS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>