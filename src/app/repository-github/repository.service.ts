import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(
    private http: HttpClient,
  ){}

  getRepositories() : Observable<any> {
    return this.http.get('https://api.github.com/users/nadiduno/repos')
  }
}
