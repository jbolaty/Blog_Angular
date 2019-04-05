import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';

// Module nécessaire pour le two way datat binding = > ([ valeur ])
import { FormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SinglePostComponent } from './post-list-component/single-post/single-post.component';
import { PostServicesService } from './services/post-services.service';

@NgModule({
  // import des components 
  declarations: [
    AppComponent,
    PostListComponentComponent,
    NewPostComponent,
    NavbarComponent,
    SinglePostComponent
  ],

  // import des modules 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // import des services 
  providers: [PostServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
