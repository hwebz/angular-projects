import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username = environment.username;
  constructor(private title: Title, private meta: Meta) {}
  ngOnInit(): void {
    this.title.setTitle('Github portfolio app');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s Github portfolio`
      },
      {
        name: 'author',
        content: this.username
      }
    ])
  }
}
