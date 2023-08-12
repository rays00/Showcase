import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm = this.formBuilder.group({
    search: ''
  }); 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const searchText = this.searchForm.value.search;
    this.router.navigate(['/search'], {queryParams: {searchText: searchText}});
  }

}
