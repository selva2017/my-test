import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  lists = [{ "id": "1", "name": "name1", "phone": "123" },
  { "id": "2", "name": "name2", "phone": "243" },
  { "id": "3", "name": "name3", "phone": "345" },
  { "id": "4", "name": "name4", "phone": "567" }];
  // model = new Hero(18, 'test name', 'Test Power');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    // this.model = new Hero(42, '', '');
  }

  index: any;
  // listID: any;
  // listPhone: any;
  // name: any;
  model: Hero
  selectList() {
    console.log(this.lists[this.index-1]);
     this.model = new Hero(this.lists[this.index-1].id, this.lists[this.index-1].name,this.lists[this.index-1].phone);
    // this.listPhone = this.lists[this.index - 1].phone;
    // this.listID = this.lists[this.index - 1].id;
  }
}