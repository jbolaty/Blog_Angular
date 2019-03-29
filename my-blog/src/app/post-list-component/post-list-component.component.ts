import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {


  // Propriétés transmises au component PostListComponent 
  @Input() thetitle: string;
  @Input() contenu: string;
  @Input() thedate: Date;
  @Input() loveIts: number;

  // Initialisation du nombre de LoveIt et DontLoveIt
  numberOfLoveIt : number = 0;
  numberOfDontLoveIt : number = 0; 


  // Fonctions
  // comptage de loveIt, DontLoveIt, LoveIts, et changement de couleur
  countLoveIt(){
    this.numberOfLoveIt = this.numberOfLoveIt + 1
    this.loveIts = this.loveIts + 1 
  }
  countDontLoveIt(){
    this.numberOfDontLoveIt = this.numberOfDontLoveIt + 1
    this.loveIts = this.loveIts - 1 
  }
  changeColor(){
    if  (this.loveIts > 0){
      return "green"
    }else if (this.loveIts < 0){
      return "red"
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
