import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../model/album.model';
import { Router } from '@angular/router';
import { Label } from '../model/label.model';

@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css']
})
export class UpdateAlbumComponent implements OnInit {

  currentAlbum = new Album();

  labels!: Label[];
  updatedLabelId!: number;

  constructor(private activatedRoute : ActivatedRoute, private albumService : AlbumService, private router : Router) { }

  ngOnInit(): void {
    this.labels = this.albumService.labelsList();
    this.currentAlbum = this.albumService.getAlbumById (this.activatedRoute.snapshot.params['id']);
    this.updatedLabelId = this.currentAlbum.label.idLabel;
  }

  updateAlbum() {
    this.currentAlbum.label = this.albumService.getLabelById(this.updatedLabelId);
    this.albumService.updateAlbum(this.currentAlbum);
    this.router.navigate(['albums']);
  }

}
