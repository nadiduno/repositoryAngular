import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RepositoryGithubRoutingModule } from './repository-github-routing.module';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RepositoryGithubRoutingModule
  ]
})
export class RepositoryGithubModule { }
