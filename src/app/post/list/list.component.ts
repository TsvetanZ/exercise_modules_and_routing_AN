import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/test';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private t: Test) { 
    (window as any ).t1 = t
  }

  ngOnInit(): void {
  }
}


//class test {
//  private t: number;
//  constructor (t: number) {
//    this.t = t;
//  }
//}
//  Горния клас е същия като долния класс, това ни позволя TypeScript
//class BetterTest {
//  constructor(private t: number) {}
//}
