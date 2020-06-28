import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-deal-card',
  templateUrl: './catalog-deal-card.component.html',
  styleUrls: ['./catalog-deal-card.component.scss'],
})
export class CatalogDealCardComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {}

}
