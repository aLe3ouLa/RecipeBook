import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super-tasty schnitzel - just awesome!",
      "https://www.tasteofhome.com/wp-content/uploads/2017/11/Weeknight-Lazy-Lasagna_EXPS_SDDJ18_110233_B08_08_3b-1-696x696.jpg",
      [new Ingredient("Meat", 1),new Ingredient("French fries", 20)]
    ),
    new Recipe(
      "Big fat burger",
      "What else you need to say?",
      "https://www.tasteofhome.com/wp-content/uploads/2017/11/Weeknight-Lazy-Lasagna_EXPS_SDDJ18_110233_B08_08_3b-1-696x696.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
