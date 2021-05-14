import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle = 'Post Title'
  enteredContent = 'Post Content'
  @Output() postCreated = new EventEmitter()

  onClickTitle(){
    this.enteredTitle = ''
  }
  onClickContent(){
    this.enteredContent = ''
  }

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post);
    this.enteredTitle = 'Post Title';
    this.enteredContent = 'Post Content';
  }
}
