import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  success() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  error() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  info() {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }


}
