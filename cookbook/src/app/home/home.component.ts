import { Component, OnInit } from '@angular/core';
import {RecipeDialogComponent} from '../recipe-dialog/recipe-dialog.component';
import {RecipeInfoDialogComponent} from '../recipe-info-dialog/recipe-info-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showRecipeInfo() {
    this.modalService.open(RecipeInfoDialogComponent);
  }
}
