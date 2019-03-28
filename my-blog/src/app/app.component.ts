import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts= [
    {
    title: 'Mon premier post',
    content: "contenu1",
    loveIts: 1,
    created_at: Date
  },
  {
    title: 'Mon deuxième post',
    content: "contenu2",
    loveIts: 1,
    created_at: Date
  },
  {
    title: 'Encore un post',
    content: "contenu 3",
    loveIts: 1,
    created_at: Date
  },]
}
