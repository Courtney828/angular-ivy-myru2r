import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  constructor() {}
  

  ngOnInit() {
  }
 project = [
    {projectName:"Tracking app",projectDetails:"tracking daily activities", Department:"developer"},
    {projectName:"Map app",projectDetails:"locating the direction", Department:"Engineering"},
    {projectName:"Mining app",projectDetails:"stores information of miners", Department:"project manager"},
    {projectName:"pay roll",projectDetails:"keeps records of payments", Department:"Engineering"},
    {projectName:"advertising",projectDetails:"promote products and sell", Department:"marketing"},
    {projectName:"Web application",projectDetails:"creating applications", Department:"web developers"},
    {projectName:"advertising",projectDetails:"flyers", Department:"Priting"}
  ]

}