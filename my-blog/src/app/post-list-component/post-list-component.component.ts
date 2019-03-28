import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

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


  numberLoveIt = 0
  numberDontLoveIt = 0

  constructor() { }

  ngOnInit() {
  }

  countLoveIt(){
    this.numberLoveIt = this.numberLoveIt + 1
  }

  countDontLoveIt(){
    this.numberDontLoveIt = this.numberDontLoveIt + 1
  }

}
