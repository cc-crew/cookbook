import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-info-dialog',
  templateUrl: './recipe-info-dialog.component.html',
  styleUrls: ['./recipe-info-dialog.component.css']
})
export class RecipeInfoDialogComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
