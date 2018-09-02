import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.data.subscribe((data) => {
      console.log(data);
    });
  }

}
