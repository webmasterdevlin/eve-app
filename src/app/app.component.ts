import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { st } from "@angular/core/src/render3";
import { LocationService } from "./location.service";
import { City } from "./City";
import { Observable } from "rxjs";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  lng: number = 121.0218146;
  lat: number = 14.5537947;
  newLng: number;
  newLat: number;
  loc: City;

  constructor(private locService: LocationService, public snackBar: MatSnackBar) {}
  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
  getMap() {
    this.locService.getCity("3");
    this.newLng = 121.0230918;
    this.newLat = 14.5534097;
    this.openSnackBar();
  }

  // TODO: Refactor this hardcoded function
  find(city: string) {
    this.locService.getCity("3").subscribe(data =>
      // {
      //   this.loc = data;
      //   this.newLat = this.loc.lat;
      //   this.newLng = this.loc.lng;
      //   console.log(this.loc.lat + " "+ this.loc.lng);
      //   this.getMap();
      // }
      this.getMap()
    );
  }

  openSnackBar() {
    this.snackBar.open("Searching for women drivers...", "OK", {
      duration: 5000
    });
  }
}
