import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  
  @Input() thetitle: string;
  @Input() contenu: string;
  @Input() thedate: Date;
  @Input() loveIts: number;


  numberOfLoveIt = 0;
  numberOfDontLoveIt = 0; 



  // fonction de comptage de love it, dont love it, et modification du loveits
  countLoveIt(){
    this.numberOfLoveIt = this.numberOfLoveIt + 1
    this.loveIts = this.loveIts + 1 
  }

  countDontLoveIt(){
    this.numberOfDontLoveIt = this.numberOfDontLoveIt + 1
    this.loveIts = this.loveIts - 1 
  }



  constructor() { }

  ngOnInit() {
  }

}
