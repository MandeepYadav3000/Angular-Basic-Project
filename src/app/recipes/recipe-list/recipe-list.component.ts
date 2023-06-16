import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Samosa Recipe', 'Toasty samosa with Chutney','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjeD_t47D4pWirTgGwu4VwCfL5Ekba9cOlw&usqp=CAU'),
    new Recipe('Samosa Recipe', 'Toasty samosa with Chutney','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjeD_t47D4pWirTgGwu4VwCfL5Ekba9cOlw&usqp=CAU')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
