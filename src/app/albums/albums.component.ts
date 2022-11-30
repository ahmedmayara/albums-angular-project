import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : Album[] = [];

  constructor(private albumService: AlbumService, public authService : AuthService) {}

  deleteAlbum(album: Album) {
    let conf = confirm("Are you sure you want to delete this album?");
    if (conf) {
      this.albumService.deleteAlbum(album.idAlbum).subscribe( data => {
        console.log("Album deleted");
        this.loadAlbums();
      });
    }
  }

  loadAlbums() {
    this.albumService.albumsList().subscribe( data => {
      this.albums = data;
    });
  }
    

  ngOnInit(): void {
    this.loadAlbums();
  }

}
