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

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  // albumId: number = null;

  albumId: number;
  albumToDisplay: Album;

  // By placing an instance of ActivatedRoute and Location in constructor(), we're ensuring that any new AlbumDetailComponent instances are created with these objects available to them.
  //  Any instance of AlbumDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.
    // constructor(private route: ActivatedRoute, private location: Location) {}

  constructor(
   private route: ActivatedRoute,
   private location: Location,
   private albumService: AlbumService
 ) {}

 ngOnInit() {
  this.route.params.forEach((urlParametersArray) => {
   this.albumId = parseInt(urlParametersArray['id']);
  });
 this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

  // A component lifecycle hook: A series of methods that Angular automatically calls at certain milestones in a component's life.
  // ngOnInit() {
    // Gathers the ActivatedRoute object we placed in constructor()
      // Calls .params on the route to retrieve any parameters, we added parameters to the route in our goToDetailPage() method in the last lesson with the code this.router.navigate(['albums', clickedAlbum.id]);. This will return an array.
    // this.route.params.forEach((urlParametersArray) => {
      // Retrieves the number in a key-value pair in urlParametersArray with the key id
        // Assigns the id value we retrieve to the AlbumDetailComponent's albumId property
      // this.albumId = parseInt(urlParametersArray['id']);
    // });
  // }

}
