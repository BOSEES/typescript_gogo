import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
export class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("image title", "http://picsum.photos/600/300");
        this.page.addChild(image);
        const note = new NoteComponent("Note title", "this is note");
        this.page.addChild(note);
        const todo = new TodoComponent("Todo title", "this is todo");
        this.page.addChild(todo);
        const video = new VideoComponent("Video title", "https://www.youtube.com/watch?v=ViKhZJ4P6Aw");
        this.page.addChild(video);
    }
}
new App(document.querySelector(".document"));
