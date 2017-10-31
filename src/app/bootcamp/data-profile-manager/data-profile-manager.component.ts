import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-profile-manager',
  templateUrl: './data-profile-manager.component.html',
  styleUrls: ['./data-profile-manager.component.css']
})
export class DataProfileManagerComponent implements OnInit {

  url = "https://api.adorable.io/avatars/103/abott@adorable.png";

  persons = [{name:"Johnny",photo:this.getUrl()},
             {name:"Juan",photo:this.getUrl()},
             {name:"Angela",photo:this.getUrl()},
             {name:"Angela",photo:this.getUrl()},
             {name:"Johans",photo:this.getUrl()}
            ];

  getUrl(){    
    return this.url + (Math.random()*100);
  }

  constructor() { }

  ngOnInit() {
  }

}
