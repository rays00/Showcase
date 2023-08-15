import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private searchTerm: string
  
  showcaseElements = [
    {'swift-ui': ['ios', 'apps', 'iphone']},
    {'watch': ['apple-watch', 'watch', 'ios', 'apps']}, 
    {'ecommerce': ['ecommerce', 'shop', 'web']},
    {'homepage': ['homepage', 'bussiness', 'web']},
    {'ski': ['ski', 'bussiness', 'web']},
    {'mobile-web': ['website', 'mobile', 'web']} 
  ];

  constructor(
    private searchService: SearchService
  ) { }

  get searchterm() {
    return this.searchService.getSearchTerm()
  }

  ngOnInit() {
  }

  getShowcaseElements(filter) {
    let searchTerm = this.searchterm
    let toReturn = this.showcaseElements.filter((element) => searchTerm == "" ||  Object.values(element)[0].includes(searchTerm)).filter((element) => Object.keys(element)[0].includes(filter));
    return toReturn;
  }

}

