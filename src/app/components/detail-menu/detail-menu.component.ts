import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})
export class DetailMenuComponent implements OnInit {

  menu = JSON.parse(this.route.snapshot.params['menu']);

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

}
