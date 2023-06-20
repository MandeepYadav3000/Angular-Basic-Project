import {Recipe} from "./recipes.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Toasty Samosa', 'Crunchy-Toasty samosa with Chutney','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjeD_t47D4pWirTgGwu4VwCfL5Ekba9cOlw&usqp=CAU',[new Ingredient('Potato', 1,),new Ingredient('Flour',10)]),
    new Recipe('Big Fat Burger', 'What else do you need to say?','https://img.freepik.com/free-photo/grilled-cheeseburger-with-tomato-sesame-bun-generative-ai_188544-12302.jpg?size=626&ext=jpg&ga=GA1.1.1509174351.1677298091&semt=sph',[new Ingredient('Buns',2),new Ingredient('French Fries',10)])
  ];

    constructor(private slService: ShoppingListService) {
    }
  getRecipes() {
    // returns a copy of array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }
}
