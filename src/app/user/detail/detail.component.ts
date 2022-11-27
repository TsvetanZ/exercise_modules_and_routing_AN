import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
    ) { 
      console.log(this.activatedRoute.snapshot.data ,this.activatedRoute.snapshot.params)//с това взимаме стойност, която не е динамична, т.е взима първата стойност
      this.activatedRoute.params.subscribe(console.log)  //с това взимаме стойност, която  е динамична
  }

  ngOnInit(): void {
  }

}
