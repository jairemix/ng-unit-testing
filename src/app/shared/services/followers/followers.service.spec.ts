import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { asyncData } from 'src/app/utils/async-data';
import { asyncError } from 'src/app/utils/async-error';

import { FollowersService } from './followers.service';
import { mockFollowerResponse } from './mock-follower-response';

describe('FollowersService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: FollowersService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    // either A:
    // TestBed.configureTestingModule({
    //   imports: [
    //     HttpClientModule,
    //   ],
    //   providers: [
    //     { provide: HttpClient, useValue: httpClientSpy },
    //   ],
    // });
    // service = TestBed.inject(FollowersService);

    // or B:
    service = new FollowersService(httpClientSpy);
  });

  it('#fetchFollowers should return expected followers', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(asyncData(mockFollowerResponse.data)); // may also use of(mockFollowerResponse.data) if we don't care to test it strictly being async

    service.fetchFollowers().subscribe({
      next: (followers) => {
        expect(followers)
          .withContext('expected followers')
          .toEqual(mockFollowerResponse.data.results);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);

  });

  it('#fetchFollowers should pass on the error', (done: DoneFn) => {

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse)); // may also use throwError(() => errorResponse) if we don't care to test it strictly being async

    service.fetchFollowers().subscribe({
      next: () => done.fail('should have got an error, not followers'),
      error: (error) => {
        expect(error)
          .withContext('expected error')
          .toEqual(errorResponse);
        done();
      },
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);

  });
});
