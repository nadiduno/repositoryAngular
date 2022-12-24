import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'repositories',
    loadChildren: ()  => import('./repository-github.module').then(m => m.RepositoryGithubModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryGithubRoutingModule { }
