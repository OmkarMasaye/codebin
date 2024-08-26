import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getFirestore } from "firebase/firestore";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private db?: any
  constructor(private authService: AuthService,private router:Router) {
    this.db = getFirestore()
  }
}
