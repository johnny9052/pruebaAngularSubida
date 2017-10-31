import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { DataProfileManagerComponent } from './data-profile-manager/data-profile-manager.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataProfileComponent,
    DataProfileManagerComponent
  ],
  /*SE COMPARTEN LOS COMPONENTES*/
  exports: [
    DataProfileComponent,
    DataProfileManagerComponent
  ]
})

export class BootcampModule { }
