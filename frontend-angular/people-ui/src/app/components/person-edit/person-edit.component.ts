import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {

  id!: string;
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  update(): void {
    this.service.update(this.id, this.person).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
