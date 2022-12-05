import { Injectable } from '@angular/core';
import { Album } from '../model/album.model';
import { Label } from '../model/label.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  apiURL: string = 'http://localhost:8090/albums/api';

  albums : Album[];
  album!: Album;
  /* labels!: Label[]; */

  constructor(private http: HttpClient) {
    /* this.labels = [
      {idLabel: 1, labelName: "EMI", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 2, labelName: "Sony", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 3, labelName: "Universal", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 4, labelName: "Warner", labelFounder: "John Smith", labelCountry: "USA"},
      {idLabel: 5, labelName: "BMG", labelFounder: "John Smith", labelCountry: "USA"},
    ]; */

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

    /* labelsList():Label[] {
      return this.labels;
    }

    getLabelById(id:number):Label {
      return this.labels.find(l => l.idLabel == id)!;
    } */

    albumsList (): Observable<Album[]> {
      return this.http.get<Album[]>(this.apiURL);
    }

    addAlbum ( al:Album ): Observable<Album> {
      return this.http.post<Album>(this.apiURL, al, httpOptions);
    }

    deleteAlbum ( id: number ) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
    }

    getAlbumById ( id : number ) : Observable<Album> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Album>(url);
    }

    updateAlbum ( al:Album ): Observable<Album> {
      return this.http.put<Album>(this.apiURL, al, httpOptions);
    }

    labelsList (): Observable<Label[]> {
      return this.http.get<Label[]>(this.apiURL + '/labels');
    }

    rechrcheParLabel ( idLabel : number ) : Observable< Album[] > {
      const url = `${this.apiURL}/label/${idLabel}`;
      return this.http.get<Album[]>(url);
    }

    addLabel ( lab:Label ): Observable<Label> {
      return this.http.post<Label>(this.apiURL + '/labels', lab, httpOptions);
    }
  }
