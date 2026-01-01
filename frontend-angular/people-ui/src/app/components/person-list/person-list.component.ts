import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  // 1️⃣ Always initialize arrays
  people: any[] = [];

  // 2️⃣ Inject the service
  constructor(private personService: PersonService) { }

  // 3️⃣ Lifecycle hook – runs when component loads
  ngOnInit(): void {
    this.loadPeople();
  }

  // 4️⃣ Call backend API
  loadPeople(): void {
    this.personService.getAll().subscribe(data => {
      this.people = data;
    });
  }
}
