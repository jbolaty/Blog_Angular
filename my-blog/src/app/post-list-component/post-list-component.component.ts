import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import  { PostServicesService } from '../services/post-services.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from '../model/Post.model'

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})

export class PostListComponentComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;

constructor(private postService: PostServicesService,
            private router: Router){

}

ngOnInit(){
  this.postSubscription = this.postService.postSubject.subscribe(
    (post : Post[])=>{
      this.posts = post;
    }
  );
  this.postService.emitPost();
}


}
