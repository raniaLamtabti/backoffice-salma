import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {
  showModalMore = false;
  toggleModalMore(){
    this.showModalMore = !this.showModalMore;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
