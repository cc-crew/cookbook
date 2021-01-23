import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ShoppingListService} from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: true}) addIngredientForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: any;

  constructor(private shoppingListService: ShoppingListService) {
  }
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          console.log(this.editMode);
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.addIngredientForm.setValue({
            amount: this.editedItem.amount,
            unit: this.editedItem.unit,
            ingredient: this.editedItem.ingredient
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, form.value);
    } else {
      this.shoppingListService.addIngredient(form.value);
    }
    this.editMode = false;
    this.addIngredientForm.reset();
  }

  onClear() {
    this.addIngredientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDeleteAll() {
    this.shoppingListService.deleteAllIngredients();
    this.onClear();
  }
}
