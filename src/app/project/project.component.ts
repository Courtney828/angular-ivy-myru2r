import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {



employees = [{name:"Julius", surname:"Mlambo", position:"CEO", age:27},
                   {name:"Peter", surname:"Brown", position:"Executive Director", age:32},
                   {name:"Angel", surname:"Zulu", position:"Managing Director", age:22},
                   {name:"Stanly", surname:"Scott", position:"Chief Financial Office", age:28},
                   {name:"Amanda", surname:"Solo", position:"Online Manager", age:29},
                   {name:"Chris", surname:"Malana", position:"Chief Technology officer", age:33},
                   {name:"Noma", surname:"Mzobe", position:"Developer", age:22},
                   {name:"Arthur", surname:"Mazibuko", position:"Front-end developer", age:23},
                   {name:"Anathi", surname:"Xulu", position:"Software Developer", age:21},
                   {name:"Amo", surname:"Zwane", position:"Intern", age:19},
  ];


  constructor() {}
  

 

  ngOnInit() {
  }

}