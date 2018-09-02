import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableaux',
  templateUrl: './tableaux.component.html',
  styleUrls: ['./tableaux.component.css']
})
export class TableauxComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.data.subscribe((data) => {
      console.log(data);
    });
  }

}
