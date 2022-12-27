import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Observable } from 'rxjs';

interface Repository {
  name: string;
  description: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  repos: Observable<Repository[]>;

  constructor(
    private repositoryService: RepositoryService
  ){ }
  
  ngOnInit(): void {
    this.repos = this.repositoryService.getRepositories();
  }

}