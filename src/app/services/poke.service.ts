import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  pokeList: Array<any> = [];
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getList(page: number = 0) {
    return this.http.get(`${this.baseUrl}?`, {
      params: {
        limit: 8,
        offset: page,
      },
    });
  }

  getPokeData(name: string) {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
