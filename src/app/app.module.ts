import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CardComponent } from './card/card.component';
import { CardContentComponent } from './card-content/card-content.component';
import { ConvertValuesPipe } from './convert-values.pipe';
import { HttpClientModule } from '@angular/common/http';

import { BootcampModule } from './bootcamp/bootcamp.module';
import { PostService } from './post.service';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    CardComponent,
    CardContentComponent,
    ConvertValuesPipe
  ],
  /*EN LOS IMPORTS VA LOS MODULOS DEFINIDOS*/
  imports: [
    BrowserModule,
    BootcampModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'card', component: CardComponent },
      { path: 'test', component: MyComponentComponent },
      { path: 'profile', component: CardComponent },
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
