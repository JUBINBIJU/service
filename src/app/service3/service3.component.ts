import { Component, OnInit } from '@angular/core';
import { service3 } from '../service/info-service';

@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.css']
})
export class Service3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Agile";
  btnclick(){
    const myserv=new service3();
    myserv.onclickbtn(this.title);
  }
}
