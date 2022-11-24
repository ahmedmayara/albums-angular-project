import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';
import { Label } from '../model/label.model';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  newAlbum = new Album();

  labels!: Label[];
  newLabelId!: number;
  newLabel!: Label;

  constructor(private albumService: AlbumService, private router : Router) {}

  ngOnInit(): void {
    /* this.labels = this.albumService.labelsList(); */
    this.albumService.labelsList().subscribe (data => {
      this.labels = data;
      console.log(data);
    })
  }

  addAlbum() {
    /* this.newLabel = this.albumService.getLabelById(this.newLabelId); */
    /* this.newAlbum.label = this.newLabel; */

    this.newAlbum.label = this.labels.find (lab => lab.idLabel === this.newLabelId)!;

    this.albumService.addAlbum(this.newAlbum).subscribe( data => {
      console.log(data);
      this.router.navigate(['albums']);
    });
  }

}
