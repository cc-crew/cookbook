import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {RecipeDialogComponent} from '../recipe-dialog/recipe-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Data from '../data/starter-recipes';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  data: any[] = [];
  filterName: string;
  constructor(private modalService: NgbModal) {
    this.data = Data;
  }

  ngOnInit() {
  }

  openRecipe(name: any) {
    const modalRef = this.modalService.open(RecipeDialogComponent);
    modalRef.componentInstance.recipe = name;
  }

}

@Pipe({name: 'filterByName'})
export class FilterNamesStarter implements PipeTransform {
  transform(listOfNames: any[], nameToFilter: string): any[] {
    if (!listOfNames) { return []; }
    if (!nameToFilter) { return listOfNames; }
    nameToFilter = nameToFilter.toLowerCase();
    return listOfNames.filter( it => {
      return it.recipe.label.toLowerCase().includes(nameToFilter);
    });
  }
}
