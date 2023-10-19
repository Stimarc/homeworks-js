import { Component } from '@angular/core';
import { PostType } from 'src/app/types/PostType';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: PostType[] = [
    { id: 1, title: 'Post 1 title', text: 'post content, some text ...'},
    { id: 2, title: 'Post 2 title', text: 'post content, some text ...'},
    { id: 3, title: 'Post 3 title', text: 'post content, some text ...'},
  ]
}
