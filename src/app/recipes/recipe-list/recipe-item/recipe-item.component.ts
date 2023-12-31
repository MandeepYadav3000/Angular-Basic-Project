import {Component, Input} from '@angular/core';
import {Recipe} from "../../recipes.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  // @ts-ignore
  @Input() recipe: Recipe;

  // @ts-ignore
  @Input() index: number;


}
