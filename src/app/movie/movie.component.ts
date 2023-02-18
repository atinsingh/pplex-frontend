import { Component } from '@angular/core';
import { Movie } from '../models/moview.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    moviews: Movie[] = [
      {
        id: 1,
        movieName: 'Avatar- Way of Water',
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers.2436_480x.progressive.jpg?v=1647534214'
      },
      {
        id: 2,
        movieName: 'Ant Man - Quantamania',
        poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers.2436_480x.progressive.jpg?v=1647534214'
      }
    ]
}
