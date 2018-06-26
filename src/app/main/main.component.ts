import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  freelancer: string = 'Hakka vabakutseliseks';
  employer: string = 'Palka vabakutseline';

  constructor() {
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1478756207824-1af404a88355?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16e2845bb85d8b4f1ca924cc019cbb0c&auto=format&fit=crop&w=1050&q=80)";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit() {
  }
  addItem() {
    console.log("click");
  }
  


    ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }
}
