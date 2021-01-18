import { Injectable } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: any[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
