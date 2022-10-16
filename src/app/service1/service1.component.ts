import { Component, OnInit } from '@angular/core';
import { service1 } from '../service/info-service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Agile";
  btnclick(){
    const myserv=new service1();
    myserv.onclickbtn(this.title);
  }

}
