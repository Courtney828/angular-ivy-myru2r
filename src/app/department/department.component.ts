import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
department =[
    { depName:"Engineering", depId:"0001",depEmpCount:4 },
    { depName:"software taster", depId:"0002",depEmpCount:2 },
    { depName:"developer", depId:"0003",depEmpCount:10 },
    { depName:"project manager", depId:"0004",depEmpCount:25 },
    { depName:"HR department", depId:"0005",depEmpCount:15 },
    { depName:"Markerting", depId:"0005",depEmpCount:20 }
  ]
}