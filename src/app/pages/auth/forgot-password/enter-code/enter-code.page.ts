import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  enterCodeForm: UntypedFormGroup;
  code = '';
  userEmail = '';
  codesMatched: boolean;

  validationMessasges = {
    code: [
      { type: 'text', message: 'The codes do not match'}
    ]
  };

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private toast: ToastController) { }

  ngOnInit() {
    this.enterCodeForm =  this.formBuilder.group({
      code: ['', Validators.required],
    });

    this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');

    this.generateCode(6).then(code => {
      this.auth.sendEmailWithCodeForgotPassword(code, this.userEmail);
    });

    this.formOnChanges();

  }

  formOnChanges(): void {
    console.log(this.enterCodeForm);
    this.enterCodeForm.valueChanges.subscribe( data => {
        console.log(data);
        if(data.code === this.code) {
          this.codesMatched = true;
          return this.codesMatchedToast();
        } else {
          return this.codesMatched = false;
        }
      });
  }

  async generateCode(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('Generated Code: ' + result);
    return this.code = result;
 }


  newPasswordPage(newPassword) {
    console.log('New Password: ');
    console.log(newPassword);

    if (this.enterCodeForm.controls.code.value !== this.code) {
      // this.presentToast();
      console.log('Codes do not match');
    } else {
      console.log('Codes matched');
      this.router.navigate(['/enter-email/enter-code/:email/new-password', this.userEmail]);
    }
  }

  async sendNewCode() {
    await this.generateCode(6).then(code => {
      console.log('Data: ' + code);
      this.auth.sendEmailWithCode(code, this.userEmail);
    });

    await this.presentNewCodeToast(this.userEmail);
   }


  async codesMatchedToast() {
    console.log('Codes Matched!')
    const toast = await this.toast.create({
      message: 'Codes Matched!',
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }

  async presentNewCodeToast(email) {
    const toast = await this.toast.create({
      message: `New Code sent to ${email}`,
      duration: 2000,
      cssClass: 'success-toast',
      keyboardClose: true,
      position: 'top',
    });
    toast.present();
  }

  cancel() {
    console.log('Forgot password cancelled');
    this.router.navigate(['']);
  }
  back() {
    this.router.navigate(['/enter-email']);
  }

}
