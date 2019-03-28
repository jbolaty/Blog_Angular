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
  @Input() created_at: Date;
  @Input() loveIts: number;

  constructor() { }

  ngOnInit() {
  }

}
