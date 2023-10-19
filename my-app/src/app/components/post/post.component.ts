import { Component, Input } from "@angular/core";
import { PostType } from "src/app/types/PostType";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input('post') post: PostType = {} as PostType;
}