import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Label } from '../model/label.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-recherche-par-label',
  templateUrl: './recherche-par-label.component.html',
  styleUrls: ['./recherche-par-label.component.css']
})
export class RechercheParLabelComponent implements OnInit {

  albums!: Album[];
  idLabel!: number;
  labels!: Label[];

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.albumService.labelsList().subscribe(data => {
      this.labels = data;
    });
  }
  
  onChange() {
    this.albumService.searchByLabel(this.idLabel).subscribe(data => {
      this.albums = data;
    });
  }

}
