import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  task: any[] = [{}];
  inputData: any
  inputid: any
  i: any;
  status: any
  len: any

  ngOnInit() {
      }

  clear() {
    this.task = []
  }


  saveTask(data: any) {
    this.task.push({ data: this.inputData, status: 'Pending' });
    console.log("!", this.task);

    this.len = this.task.length
      console.log("leng", this.len);
  }


  delete(index: number) {
    this.task.splice(index, 1);
  }

  finished(t: any) {
    t.status = 'Done';
  }





}







