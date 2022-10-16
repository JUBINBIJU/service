import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="jubin"
  today=Date();
  user={
    id:100,
    name:"jubin",
    DOB:"25-09-1999",
    salary:"20000"
  }
}
