import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Card } from './card'; 

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards = [
      { id: 11, text: 'Card1' },
      { id: 12, text: 'Card2' },
      { id: 13, text: 'Card3' },
    ];
    return {cards};
  }

  genId(cards: Card[]): number {
    return cards.length > 0 ? Math.max(...cards.map(card => card.id)) + 1 : 11;
  }
}