import { Component, OnInit } from '@angular/core';
import { PersonService } from '@app-services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {

  public peoples: any = [];
  public page: any = 1;
  public number: any = 0;
  public total_page:any=0;
  constructor(
    private personService: PersonService,
    private router: Router
  ) {

  }

  ngOnInit() {

    this.loadData()
  }

  loadPage(page) {
    this.number = (this.page * 10)
    this.page = page;
    this.loadData()
  }
  loadPerson(people) {
    this.router.navigate(['people/'+people]);
  }

  loadData() {
    this.personService.getPeoples(this.page).subscribe(
      response => {
        if (response.count > 0) {
          this.peoples = response.results;
          this.total_page=response.count
        }else{
          this.total_page=0;
        }
      }, error => {

      }
    )
  }

}
