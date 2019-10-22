import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/delish/assets/17/37/1505333248-goulash-delish-1.jpg'), 
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/delish/assets/17/37/1505333248-goulash-delish-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
