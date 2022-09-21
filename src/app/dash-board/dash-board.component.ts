import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(private cardService: CardServiceService) { }

  cards: Card[] = []

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
        .subscribe(cards => this.cards = cards.slice(0,3));
  }
}
