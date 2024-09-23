import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RenderMarkdownPipe } from './pipes/render-markdown.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailComponent,
    RenderMarkdownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
