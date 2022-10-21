import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovies(id);
      this.getMovieVideos(id);
    });
  }

  getMovies(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }
}
