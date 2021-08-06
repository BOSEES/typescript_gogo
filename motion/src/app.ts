import { Component } from "./components/page/item/base.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";

export class App {
  private readonly page: Component & Composable;
  constructor(appRoot:HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot)

    const image = new ImageComponent("image title", "http://picsum.photos/600/300");
    this.page.addChild(image)

    const note = new NoteComponent("Note title", "this is note");
    this.page.addChild(note)

    const todo = new TodoComponent("Todo title", "this is todo");
    this.page.addChild(todo)

    const video = new VideoComponent("Video title", "https://www.youtube.com/watch?v=ViKhZJ4P6Aw");
    this.page.addChild(video)
  }
}

new App(document.querySelector(".document")! as HTMLElement);