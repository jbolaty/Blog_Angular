import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postDate = new Date

  posts= [
    {
    title: 'Mon premier post',
    content: "contenu1",
    loveIts: 0,
    created_at: this.postDate
  },
  {
    title: 'Mon deuxième post',
    content: "contenu2",
    loveIts: 0,
    created_at: this.postDate
  },
  {
    title: 'Encore un post',
    content: "contenu 3",
    loveIts: 0,
    created_at: this.postDate
  },]



}
