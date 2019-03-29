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
    title: 'Frameworks',
    content: "On se pose toujours la question de savoir lequel de React, Angular et VueJs est le meilleur framework. A mon avis je dirais Angular et vous ne me ferez pas changer d'avis",
    loveIts: 0,
    created_at: this.postDate
  },
  {
    title: 'Jeux Video',
    content: "FIFA2019 est le meilleur jeu de sport sur le marché. Ceci reste un avis personnel ! ",
    loveIts: 0,
    created_at: this.postDate
  },
  {
    title: 'Musique',
    content: "hum ... En terme de style musicale je trouve que le rap est un peu agressif. Je préfère planner avec du bon reggae oh yeahh !!",
    loveIts: 0,
    created_at: this.postDate
  },]

}
