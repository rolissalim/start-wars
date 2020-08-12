import { Component, OnInit } from '@angular/core';
import { PersonService } from '@app-services/person.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent implements OnInit {

  public id: any;
  public people:any=null;

  constructor(
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,

  ) {

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
    });
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.personService.getPeopleById(this.id).subscribe(
      response => {
        this.people=response
      }, error => {
        this,this.people=null
      }
    )
  }

}
