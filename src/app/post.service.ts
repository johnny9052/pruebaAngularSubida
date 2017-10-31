import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private httpClient: HttpClient) { }

  getPost(): Observable<{}> {
    return this.httpClient.get(this.url);
  }


  getPostObject() {
    const res$ = this.httpClient.get(this.url);
    const subcription = res$.subscribe(
      // La respuesta se recibe en la variable res
      res => {
        return res;
      }
    );
  }

}
