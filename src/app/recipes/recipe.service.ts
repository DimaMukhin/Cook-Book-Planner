import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First test recipe', 'first test description', 'http://images.media-allrecipes.com/images/58656.png'),
    new Recipe('Second test recipe', 'second test description', 'https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
