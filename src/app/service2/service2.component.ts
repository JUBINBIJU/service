import { Component, OnInit } from '@angular/core';
import { service2 } from '../service/info-service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Agile";
  btnclick(){
    const myserv=new service2();
    myserv.onclickbtn(this.title);
  }
}
