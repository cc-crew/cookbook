import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: any[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = JSON.parse(localStorage.getItem('ingredients'));
    this.subscription = this.shoppingListService.ingredientChanged
      .subscribe(
        (Ingredients: any[]) => {
          this.ingredients = Ingredients;
          this.ingredients.forEach(item => {
            item.clicked = false;
          });
        }
      );
  }

  onEditItem(id: number, ingredient: any) {
    this.shoppingListService.startedEditing.next(id);
    this.ingredients.forEach(ingre => {
      ingre.clicked = false;
    });
    ingredient.clicked = true;
  }
}
