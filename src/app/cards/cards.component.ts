import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardServiceService } from '../card-service.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    private cardService: CardServiceService,
    private messageService: MessageService) { }
  
  selectedCard?: Card;

  cards: Card[] = []

  ngOnInit(): void {
    this.getCards();
  }

  onSelect(card: Card): void {
  this.selectedCard = card;
  }


  getCards(): void {
    this.cardService.getCards()
        .subscribe(cards => this.cards = cards);
  }

  add(text: string): void {
    text = text.trim();
    if (!text) { return; }
    this.cardService.addCard({ text } as Card)
      .subscribe(card => {
        this.cards.push(card);
      });
  }

  delete(card: Card): void {
    this.cards = this.cards.filter(h => h !== card);
    this.cardService.deleteCard(card.id).subscribe();
  }



}
