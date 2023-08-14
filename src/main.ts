import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {of, from} from 'rxjs';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>    
    Start editing to see some magic happen
    
  `,
})
export class App implements OnInit {
  name = 'Angular';

  ngOnInit(){
    of(2, 4, 6, 8).subscribe((item)=> console.log(item))

    from([20, 4, 7, 8]).subscribe({
      next: (item)=> console.log(`resulting item...${item}`),
      error: (err)=> console.log(`error occurred...${err}`),
      complete: ()=> console.log(`complete`)
    })

    of(['Apple', 'Oranges', 'Cherries']).subscribe({
      next: (item)=> console.log(`These are the items...${item}`),
      error: (err)=> console.log(`An error has occured: ${err}`),
      complete: ()=> console.log(`complete`)
    })
  }
}

bootstrapApplication(App);
