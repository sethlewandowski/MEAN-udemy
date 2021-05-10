import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create2',
  templateUrl: './post-create2.component.html',
  styleUrls: ['./post-create2.component.css'],
})
export class PostCreate2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAddPost() {
    alert('post added!');
  }
}
