import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  templateUrl: './person-delete.component.html'
})
export class PersonDeleteComponent implements OnInit {

  id!: string;

  constructor(
    private route: ActivatedRoute,
    private service: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  confirm(): void {
    this.service.delete(this.id).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
