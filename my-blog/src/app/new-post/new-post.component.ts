import { Component, OnInit } from '@angular/core';
import { PostServicesService } from '../services/post-services.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Post } from '../model/Post.model';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  
  constructor(private postService: PostServicesService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  // méthode pour imposer des champs requis pour validation du formulaire
  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  // Récupération des informations du formulaire et stockage dans notre liste de posts 
  // redirection vers le l'url de la liste complète de posts (localhost:4200/posts)
  onSubmit(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const createAt = new Date();
    
    const newPost = new Post(title, content, loveIts, createAt);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);

  }
}
