import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserData } from '../../model/user-data';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user!: UserData;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    console.log("hello");
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.findOneById(id).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: () => {
        this.router.navigate(['/']);
      }
    });
  }
}