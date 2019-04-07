import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})

export class PostServicesService {

  // Nos Data => list de tous les posts 
  postsList: Post[] = [
    {
    title: 'Frameworks',
    content: "On se pose toujours la question de savoir lequel de React, Angular et VueJs est le meilleur framework. A mon avis je dirais Angular et vous ne me ferez pas changer d'avis",
    loveIts: 0,
    createdAt: new Date()
  },
  {
    title: 'Jeux Video',
    content: "FIFA2019 est le meilleur jeu de sport sur le marché. Ceci reste un avis personnel ! ",
    loveIts: 0,
    createdAt: new Date()
  },
  {
    title: 'Musique',
    content: "hum ... En terme de style musicale je trouve que le rap est un peu agressif. Je préfère planner avec du bon reggae oh yeahh !!",
    loveIts: 0,
    createdAt: new Date()
  },
];

  postSubject = new Subject<Post[]>();


  constructor() { }

  emitPost(){
    this.postSubject.next(this.postsList);
  }

  createNewPost(newPost: Post){
    this.postsList.push(newPost);
    this.emitPost();
  }

  // Méthode pour supprimer un post 
  deletePost(postTitle : string){
    // suppression du post partant de son titre 
    for(var i=0; i<this.postsList.length; i++ ){
      if( this.postsList[i].title === postTitle ){
        this.postsList.splice(i, 1)
      }
    }
    this.emitPost();
  }

  // méthode pour compter le nombre de loveIts
  countingLoveIt(numberOfLoveIt : number, postTitle: string){
    for(var i=0; i<this.postsList.length; i++ ){
      if( this.postsList[i].title === postTitle ){
        this.postsList[i].loveIts ++
      }
    }
    this.emitPost();
    
  }
  
  // méthode pour compter le nombre de dontLoveIts
  countingDontLoveIt(numberOfDontLoveIt : number, postTitle: string){
    for(var i=0; i<this.postsList.length; i++ ){
      if( this.postsList[i].title === postTitle ){
        this.postsList[i].loveIts --
      }
    }
    this.emitPost();
  }
}
