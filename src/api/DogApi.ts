import {BreedListResponse, DogResponse} from '../models/DogResponses';

export default {
  getBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all').then<BreedListResponse>(
      res => res.json(),
    );
  },
  getDog(breed: string) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then<
      DogResponse
    >(res => res.json());
  },
};
