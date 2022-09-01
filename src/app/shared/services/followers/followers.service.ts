import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchFollowers(results = 5) {
    return this.http.get('https://randomuser.me/api/', {
      params: {
        results,
      },
    }).pipe(
      map((data: any) => {
        return data.results;
      }),
    );
  }
}
