import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

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

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddInput() {
    const ingName = this.ingredientName.nativeElement.value;
    const ingAmount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
