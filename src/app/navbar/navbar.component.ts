import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public href: string = "";

  searchForm = this.formBuilder.group({
    search: ''
  }); 

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) { 
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const searchText = this.searchForm.value.search;
    this.searchService.setSearchTerm(searchText);
  }

}
