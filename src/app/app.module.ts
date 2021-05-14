import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header/header.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { PostListComponent } from './posts/post-list/post-list/post-list.component'; 
import {MatExpansionModule} from '@angular/material/expansion'; 


@NgModule({
  declarations: [AppComponent, PostCreateComponent, HeaderComponent, PostListComponent],
  imports: [BrowserModule, FormsModule, NoopAnimationsModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
