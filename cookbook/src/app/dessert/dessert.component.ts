import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {RecipeDialogComponent} from '../recipe-dialog/recipe-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Data from '../data/dessert-recipes';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  data: any[] = [];
  filterName: string;
  constructor(private modalService: NgbModal) {
    this.data = Data;
  }

  ngOnInit() {
  }

  openRecipe(name: any) {
    const modalRef = this.modalService.open(RecipeDialogComponent);
    modalRef.componentInstance.recipe = name;  }

}

@Pipe({name: 'filterByName'})
export class FilterDessertNames implements PipeTransform {
  transform(listOfNames: any[], nameToFilter: string): any[] {
    if (!listOfNames) { return []; }
    if (!nameToFilter) { return listOfNames; }
    nameToFilter = nameToFilter.toLowerCase();
    return listOfNames.filter( it => {
      return it.recipe.label.toLowerCase().includes(nameToFilter);
    });
  }
}
