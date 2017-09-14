import { Component } from '@angular/core';
import { DependencyService } from './dependency.service';
import { DropdownService } from './dropdown.service';
import { LoggingService } from './logging.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DependencyService]
})
export class AppComponent {
  title = 'app works!';

  persons=[];
  sums=0;
  combos=[];

  constructor(private dependency:DependencyService, private dropdown:DropdownService ){}

  ngOnInit(){
    this.persons=this.dependency.persons();
    this.sums=this.dependency.sum();
    this.combos=this.dropdown.dropdown();
  }
}
