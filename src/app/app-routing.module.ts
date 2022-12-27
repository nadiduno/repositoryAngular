import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './repository-github/list/list.component';

const routes: Routes = [
  {
    path:'repositories',
    component: ListComponent 
  },
  // {
    // path:'repositories',
    // loadChildren: ()  => import('./repository-github/repository-github.module').then(m => m.RepositoryGithubModule)    
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 


export class AppRoutingModule { }
