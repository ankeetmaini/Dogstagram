export interface BreedListResponse {
  message: BreedMap;
  status: string;
}

export interface BreedMap {
  [breed: string]: string[];
}

export interface DogResponse {
  message: string;
  status: string;
}
