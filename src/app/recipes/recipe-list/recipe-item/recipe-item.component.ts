import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipes.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  // @ts-ignore
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}