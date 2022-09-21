import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card-edition',
  templateUrl: './card-edition.component.html',
  styleUrls: ['./card-edition.component.scss']
})
export class CardEditionComponent implements OnInit {

  @Input() card?: Card;
  
  constructor(  ) { }

  ngOnInit(): void {  }

}
