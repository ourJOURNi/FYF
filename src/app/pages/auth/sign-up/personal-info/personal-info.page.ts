import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild  } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  @ViewChild('ioninput', {static: false})  inputElement: IonInput;
  userInfoForm: UntypedFormGroup;

  validationMessasges = {
    phone: [
      // tslint:disable-next-line: max-line-length
      { type: 'text', message: 'Phone Number has to be 10 digits (xxx) xxx - xxxx'}
    ]
  };

  fullNamePattern = '/^([^0-9]*)$/';
  phonePattern = '';

  constructor(
    // private auth: AuthService,
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      fullName: ['', Validators.compose([
        Validators.required ])],
      gender: '',
      // Date of Birth
      dob: '',
      school: ['', Validators.required],
      phone: ['', Validators.required],
      grade: ['', Validators.required],
      about: ['', Validators.required],
    });

    this.formOnChanges();
  }


  goToProfilePicturePage(data) {
    console.log(data);
    this.auth.getPersonalInfo(data);
    this.router.navigate(['/personal-info/profile-picture']);
    }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

  formOnChanges(): void {
    console.log(this.userInfoForm);
  }

}


