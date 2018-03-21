import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  collapsed = true

  constructor() {

  }

  ngOnInit() {
  }

  public toggleMenu() {
    $('.dropdown-menu').collapse('toggle');
  }

}
