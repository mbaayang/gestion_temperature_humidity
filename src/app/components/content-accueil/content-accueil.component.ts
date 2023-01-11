import { Component } from '@angular/core';

@Component({
  selector: 'app-content-accueil',
  templateUrl: './content-accueil.component.html',
  styleUrls: ['./content-accueil.component.css']
})
export class ContentAccueilComponent {
  on: boolean = false;
  off: boolean = true;

  public onVentillateur():void{
    this.on = true;
    this.off = false;
  }

  public offVentillateur():void{
    this.on = false;
    this.off = true;
  }
}