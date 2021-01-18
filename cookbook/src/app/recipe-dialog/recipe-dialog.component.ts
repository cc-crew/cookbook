import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.css']
})
export class RecipeDialogComponent {

  @Input() recipe: any;
  constructor(public activeModal: NgbActiveModal, private recipeService: RecipeService) { }

  onAddToShoppingList(ingredientLines: any) {
    this.recipeService.addIngredientsToShoppingList(ingredientLines);
  }
}
