import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _recipeServices: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this._recipeServices.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this._recipeServices.getRecipes();
  }

  onNewRecipe() {
  this.router.navigate(["new"], {relativeTo: this.route});
  }

}
