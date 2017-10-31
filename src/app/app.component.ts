import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer proyecto Angular 2';
  autor = 'Johnny Alexander Salazar Cardona';
  count = 0;
  imgSource = '../favicon.ico';
  status = false;
  number = [10, 20, 30];

  res;

  // res$;

  constructor(private postService: PostService) {
    /*Se conecta*/

    // this.res$ = httpClient.get("https://jsonplaceholder.typicode.com/posts/1");        


    const res$ = postService.getPost();
    const subcription = res$.subscribe(
      // La respuesta se recibe en la variable res
      res => {
        this.res = res;
      }
    );

    // this.res = postService.getPostObject();

  }
}
