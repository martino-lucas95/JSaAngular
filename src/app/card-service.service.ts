import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './cardList';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

    private cardsUrl = 'api/cards';  // URL to web api
    
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    

    // getCardById(id: number): Observable<Card> {
    //   const url = `${this.cardsUrl}/${id}`;
    //   return this.http.get<Card>(url)
    // }
    getCards(): Observable<Card[]> {
      return this.http.get<Card[]>(this.cardsUrl)
    }

    addCard(card: Card): Observable<Card> {
      return this.http.post<Card>(this.cardsUrl, card, this.httpOptions)}

    deleteCard(id: number): Observable<Card> {
       const url = `${this.cardsUrl}/${id}`;
       return this.http.delete<Card>(url, this.httpOptions)}

    updateCard(card: Card): Observable<any> {
       return this.http.put(this.cardsUrl, card, this.httpOptions)
    }
    

}
