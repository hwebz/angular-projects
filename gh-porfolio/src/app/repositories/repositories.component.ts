import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Repository } from '../repository';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repos$: Observable<Repository[]> | undefined;
  constructor(private GithubService: GithubService) {}

  ngOnInit(): void {
    this.repos$ = this.GithubService.getRepos().pipe(
      map(repos => repos.filter(repo => !repo.fork))
    )
  }

}
