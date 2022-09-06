import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})
export class DetailMenuComponent implements OnInit {

  menu = JSON.parse(this.route.snapshot.params['menu']);
  faLeftLong = faLeftLong;


  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log(this.menu.title)
  }

}
