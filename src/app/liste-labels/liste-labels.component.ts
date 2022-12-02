import { Component, OnInit } from '@angular/core';
import { Label } from '../model/label.model';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-liste-labels',
  templateUrl: './liste-labels.component.html',
  styleUrls: ['./liste-labels.component.css']
})
export class ListeLabelsComponent implements OnInit {

  labels!: Label[];

  constructor(private albumService : AlbumService) { }

  ngOnInit(): void {
    this.albumService.labelsList().subscribe(data => {
      this.labels = data;
    });
  }

}
