import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() card?: Card;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

  // getCards(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.CardServiceService.getCard(id)
  //       .subscribe(card => this.card = card);
  // }
  // goBack(): void {
  //   this.location.back();
  // }
  
  // save(): void {
  //   if (this.card) {
  //     this.CardServiceService.updateCard(this.card)
  //       .subscribe(() => this.goBack());
  //   }
  // }
}
