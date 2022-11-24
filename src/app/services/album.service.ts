import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Label } from '../model/label.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums : Album[];
  album!: Album;
  labels!: Label[];

  constructor() {
    this.labels = [
      {idLabel: 1, labelName: "EMI", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 2, labelName: "Sony", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 3, labelName: "Universal", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 4, labelName: "Warner", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 5, labelName: "BMG", labelFounder: "John Smith", labelCountry: "USA"},
    ];

    this.albums = [
      {
        idAlbum: 1,
        title: 'The Life Of Pablo',
        artist: 'Kanye West',
        releaseDate: new Date('2016-02-14'),
        genre: 'Hip-Hop',
        label: {idLabel: 1, labelName: "EMI", labelFounder: "John Smith", labelCountry: "USA"}
      },

      {
        idAlbum: 2,
        title: 'Blonde',
        artist: 'Frank Ocean',
        releaseDate: new Date('2016-08-20'),
        genre: 'R&B',
        label: {idLabel: 2, labelName: "Sony", labelFounder: "John Smith", labelCountry: "USA"}
      },

      {
        idAlbum: 3,
        title: 'After Hours',
        artist: 'The Weeknd',
        releaseDate: new Date('2020-03-20'),
        genre: 'R&B',
        label: {idLabel: 3, labelName: "Universal", labelFounder: "John Smith", labelCountry: "USA"}
      },

      {
        idAlbum: 4,
        title: 'The Blueprint',
        artist: 'Jay-Z',
        releaseDate: new Date('2001-09-11'),
        genre: 'Hip-Hop',
        label: {idLabel: 4, labelName: "Warner", labelFounder: "John Smith", labelCountry: "USA"}
      },

      {
        idAlbum: 5,
        title: 'The College Dropout',
        artist: 'Kanye West',
        releaseDate: new Date('2004-02-10'),
        genre: 'Hip-Hop',
        label: {idLabel: 5, labelName: "BMG", labelFounder: "John Smith", labelCountry: "USA"}
      }
    ];
    }

    labelsList():Label[] {
      return this.labels;
    }

    getLabelById(id:number):Label {
      return this.labels.find(l => l.idLabel == id)!;
    }

    albumList():Album[] {
      return this.albums;
    }

    addAlbum(al:Album) {
      this.albums.push(al);
    }

    deleteAlbum(al:Album) {
      this.albums.splice(this.albums.indexOf(al), 1);
    }

    getAlbumById(id:number):Album {
      this.album = this.albums.find(al => al.idAlbum == id)!;
      return this.album;
    }

    updateAlbum(al:Album) {
      this.deleteAlbum(al);
      this.addAlbum(al);
    }
  }
