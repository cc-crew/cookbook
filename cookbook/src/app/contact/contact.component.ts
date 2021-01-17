import { Component, OnInit } from '@angular/core';
import {RecipeInfoDialogComponent} from '../recipe-info-dialog/recipe-info-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showRecipeInfo() {
    this.modalService.open(RecipeInfoDialogComponent);
  }
}
