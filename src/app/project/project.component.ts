import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
projects = [
    {projectName:"Map app", Department:"IT"},
    {projectName:"tracking systems", Department:"developer"},
    {projectName:"Marketing", Department:"Marketing"},
    {projectName:"database", Department:"Engineering"},
    {projectName:"advertising", Department:"Sales"},
    {projectName:"Web app", Department:"Software dev"},
    {projectName:"advertising", Department:"Priting"}
  ];
}
