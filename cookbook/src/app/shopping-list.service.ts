import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new Subject<any[]>();
  startedEditing = new Subject<number>();
  private ingredients: any[] = [
  ];
  constructor() { }

  getIngredient(index: number) {
    this.ingredients = JSON.parse(localStorage.getItem('ingredients'));
    return this.ingredients[index];
  }

  addIngredients(ingredients: any[]) {
    if (this.ingredients.length !== 0) {
      ingredients.forEach(ingredient => {
        this.addIngredient(ingredient);
      });
    } else {
      this.ingredients = ingredients;
    }
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: any) {
    this.ingredients = JSON.parse(localStorage.getItem('ingredients'));
    this.ingredients.push(ingredient);
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: any) {
    this.ingredients[index] = newIngredient;
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients = JSON.parse(localStorage.getItem('ingredients'));
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }
}
