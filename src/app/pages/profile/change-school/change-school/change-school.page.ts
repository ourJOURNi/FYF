import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-change-school',
  templateUrl: './change-school.page.html',
  styleUrls: ['./change-school.page.scss'],
})
export class ChangeSchoolPage implements OnInit {
  changeSchool: UntypedFormGroup;
  activeEmail = this.profile.email.getValue();
  school = this.profile.school.getValue();
  grade = this.profile.grade.getValue();

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private profile: ProfileService,
    private auth: AuthService,
    private router: Router) {
      this.activeEmail = this.auth.user.email;
     }

  ngOnInit() {
    this.changeSchool =  this.formBuilder.group({
      newSchool: [`${this.school}`, Validators.required],
      newGrade: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
    confirmChangedSchool(email, newSchool, newGrade, password) {
      this.profile.changeSchool(email, newSchool, newGrade,  password);

    }
    goBack() {
      this.router.navigate(['/home/profile']);
    }

}
