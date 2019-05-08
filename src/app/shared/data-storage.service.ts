import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService){}

  storeRecipes() {
    return this.httpClient.put("https://ng-recipe-book-80661.firebaseio.com/recipes.json", this.recipeService.getRecipes());
  }
}
