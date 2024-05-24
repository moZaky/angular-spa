import { Component, OnInit } from '@angular/core';
type Status = 'Approved' | 'Pending' | 'Rejected';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-first-app';
  isHidden: boolean = true;

  status: Status = 'Approved';

  constructor() {}
  ngOnInit(): void {
    this.saveItem();

    setTimeout(() => {
      this.title = this.getItem() ?? 'not found';
    }, 5000);
  }
  saveItem() {
    localStorage.setItem('name', 'mohammed');
  }
  getItem() {
    return localStorage.getItem('name');
  }
  changeStatus() {
    if(this.status==="Pending") this.status="Approved";
   else if(this.status==="Approved") this.status="Rejected" ;
   else if (this.status==="Rejected") this.status="Pending";
  }
}
