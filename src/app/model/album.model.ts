import { Label } from "./label.model";

export class Album {
  idAlbum!: number;
  title!: string;
  artist!: string;
  releaseDate!: Date;
  genre!: string;
  label!: Label;
}