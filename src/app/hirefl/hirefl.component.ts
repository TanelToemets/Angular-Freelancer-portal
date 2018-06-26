import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hirefl',
  templateUrl: './hirefl.component.html',
  styleUrls: ['./hirefl.component.scss']
})
export class HireflComponent implements OnInit {
  btnText: string = 'Esita';

  constructor() { }

  ngOnInit() {
  }
  
  submitWork() {
    console.log('click');
  }

}
