import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { UpdateAlbumComponent } from './update-album/update-album.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent},
  { path: 'add-album', component: AddAlbumComponent},
  { path: 'updateAlbum/:id', component: UpdateAlbumComponent},
  { path: '', redirectTo: 'albums', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
