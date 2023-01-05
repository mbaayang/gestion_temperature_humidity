import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  currentUser: any = {};
  showAcceuil:boolean = true;
  showActifs: boolean = false;
  showArchive: boolean = false;
  showInscription: boolean = false;

  constructor(public authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

     // Recuperer les informations de l'utilisateur
     let id = this.activatedRoute.snapshot.paramMap.get('id');
     this.authService.getUserProfile(id).subscribe((res) => {
       this.currentUser = res.msg;
     });
  }
    //Deconnexion
    logout() {
      this.authService.doLogout()
    }
    
  public affiche1():void {
    this.showAcceuil = true;
    this.showActifs = false;
    this.showArchive = false;
    this.showInscription = false;
  }
  public affiche2():void {
    this.showAcceuil = false;
    this.showActifs = true;
    this.showArchive = false;
    this.showInscription = false;
  }
  public affiche3():void {
    this.showAcceuil = false;
    this.showActifs = false;
    this.showArchive = true;
    this.showInscription = false;
  }
  public affiche4():void {
    this.showAcceuil = false;
    this.showActifs = false;
    this.showArchive = false;
    this.showInscription = true;
  }
}
