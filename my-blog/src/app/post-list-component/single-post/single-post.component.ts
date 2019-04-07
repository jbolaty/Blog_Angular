import { Component, OnInit, Input } from '@angular/core';
import { PostServicesService } from 'src/app/services/post-services.service';
import { Post } from 'src/app/model/Post.model';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit {

  // Propriétés transmises au component PostListComponent 
  @Input() thetitle: string;
  @Input() contenu: string;
  @Input() thedate: Date;
  @Input() loveIts: number;

  // Initialisation du nombre de LoveIt et DontLoveIt
  numberOfLoveIt : number = 0;
  numberOfDontLoveIt : number = 0; 
  

  constructor( private postServices: PostServicesService ) {  }

  ngOnInit() {
  }

  // Fonctions
  // comptage de loveIt, DontLoveIt, LoveIts, et changement de couleur
  countLoveIt(postTitle: string){
    this.numberOfLoveIt = this.numberOfLoveIt + 1
    this.postServices.countingLoveIt(this.numberOfLoveIt, postTitle)
  }
  countDontLoveIt(postTitle: string){
    this.numberOfDontLoveIt = this.numberOfDontLoveIt + 1
    this.postServices.countingDontLoveIt(this.numberOfDontLoveIt, postTitle)
  }
  
  changeColor(){
    if  (this.loveIts > 0){
      return "green"
    }else if (this.loveIts < 0){
      return "red"
    }
  }

  deletePost(postTitle: string){
    this.postServices.deletePost(postTitle);
  }
}
