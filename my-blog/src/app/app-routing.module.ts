import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

const routes: Routes = [
  {path: 'posts', component : PostListComponentComponent },
  {path: 'new', component: NewPostComponent},
  {path: '', redirectTo: 'posts', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
