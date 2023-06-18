import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  // @ts-ignore
  @ViewChild('nameInput',{static: true}) ingredientName: ElementRef;
  // @ts-ignore
  @ViewChild('amountInput',{static: true}) ingredientAmount: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  onAddInput() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient)
  }
}
