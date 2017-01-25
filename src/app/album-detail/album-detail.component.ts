// import { Component, OnInit } from '@angular/core';
// ActivatedRoute contains info about a route associated with a component loaded in an outlet. Required for dynamic routing.
  // Params helps us collect parameters for routing, like the ID in the URL
  // import { ActivatedRoute, Params } from '@angular/router';
// Normalizes routes when traveling between pages
  // import { Location } from '@angular/common';
  // import { Album } from '../album.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {

  albumId;
  albumToDisplay;

  constructor(
   private route: ActivatedRoute,
   private location: Location,
   private albumService: AlbumService
 ) {}

 ngOnInit() {
   this.route.params.forEach((urlParameters) => {
    this.albumId = urlParameters['id'];
  });
  this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
 }

}
