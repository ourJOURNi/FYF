import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  mentorName: string;
  mentorEmail: string;
  mentorPhoto: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private loading: LoadingController,
    private router: Router) { }

  ngOnInit() {

    this.mentorName = this.activatedRoute.snapshot.paramMap.get('name');
    this.mentorEmail = this.activatedRoute.snapshot.paramMap.get('email');
    this.mentorPhoto = this.activatedRoute.snapshot.paramMap.get('photo');

    console.log('Mentor Photo:');
    console.log(this.mentorName);

    // setTimeout(() => {
    //   this.router.navigate(['/home/mentors']);
    // }, 9000);
  }

  async returnToMentors() {
    const loading = await this.loading.create({
      message: 'Loading...',
      duration: 1500,
    });

    loading.present()
      .then( a => {
        this.router.navigate(['/home/mentors']);
      });
  }

}
