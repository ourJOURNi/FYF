
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ToastController } from '@ionic/angular';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class FavoriteJobsService {
  BACKEND_URL = environment.url;
  favoriteJobs$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private toast: ToastController
  ) {}


}

