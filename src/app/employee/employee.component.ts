import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import { DialogtwoComponent } from '../dialogtwo/dialogtwo.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
newEmployeeClicked = false;
  constructor(public dialog: MatDialog) {}
  color;
  

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

//x : number;


 employeeArr = 
  [ {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLL_JOP0qM29RcBjU-BzuloJLGJF7TkPj7Jw&usqp=CAU", name:"Julius", surname:"Mlambo", position:"CEO", age:27 },
  { image: "https://www.dw.com/image/53145853_401.jpg",name:"Peter", surname:"Brown", position:"Executive Director", age:32},

  {name:"Angel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStktAVwIe6xnl3UVjsNhPVdhKr6ZZRC50hGQ&usqp=CAU", surname:"Zulu", position:"Managing Director", age:22},

   {name:"Stanly", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV-6dBzrXhqhG8ozzzYvDiwLXcYSbaRN7KfA&usqp=CAU", surname:"Scott", position:"Chief Financial Office", age:28},

   {image: "https://kpbs.media.clients.ellingtoncms.com/img/photos/2020/06/05/Jordan_Carroll_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d", name:"Amanda", surname:"Solo", position:"Online Manager", age:29},

   {image: "https://legacy.afrotech.com/wp-content/uploads/2020/06/C245DE33-7AA3-47AC-9F2D-F50927B8D1A3.jpeg", name:"Chris", surname:"Malana", position:"Chief Technology officer", age:33},

   {image: "https://static-25.sinclairstoryline.com/resources/media/4b0728f6-0057-4e9d-a6cb-054eb0950ca0-largeScale_HeatherMelendez320x420.png?1594396173435", name:"Noma", surname:"Mzobe", position:"Developer", age:22},

   {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR60fVNTLG_3KV-v7wn8zUBenSpm43jv6JJA&usqp=CAU", name:"Arthur", surname:"Mazibuko", position:"Front-end developer", age:23},

    {image: "https://static-34.sinclairstoryline.com/resources/media/2a404fe1-1d00-4fb8-2016-5e0cf5d20a7f-2a404fe11d004fb820165e0cf5d20a7frendition_1_tara.jpg?1553097784554", name:"Anathi", surname:"Xulu", position:"Software Developer", age:21},

    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI6Pp1HrYl0YOzgkknEd50b76vc4oCc5pnqQ&usqp=CAU", name:"Amo", surname:"Zwane", position:"Intern", age:19}
  ];

  setArray() {
    let employeeArray:any[];
    for(let i=0; i < this.employeeArr.length;i++) { 
     // higest_bid_array.push(this.crypto[i].highestBid);
      employeeArray.push(this.employeeArr[i]);
    }
    return employeeArray;
  }

openDialog(Employee) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'YES',
          cancel: 'NO'
        }
      }
    });

       dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      const index = this.employees.indexOf(Employee,0)
      if (index >-1) {
        this.employees.splice(index,1);
      }
      }
    });
     }

  update() {
    const dialogRef = this.dialog.open(DialogtwoComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'YES',
          cancel: 'NO'
        }
      }
    })
  }

  
model: any = {};
  model2: any = {}; 

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    this.employees.splice(i);
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }





  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }



ngOnInit() {
  }

}

