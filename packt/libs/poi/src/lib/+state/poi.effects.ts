import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { EMPTY, map } from 'rxjs';
import { PoiService } from '../poi.service';

import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';

@Injectable()
export class PoiEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      fetch({
        run: (action) => {
          return this.poiService.getAll().pipe(
            map(pois => PoiActions.loadPoiSuccess({
              poi: pois
            }))
          )
          // Your custom service 'load' logic goes here. For now just return a success action...
          // return PoiActions.loadPoiSuccess({ poi: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PoiActions.loadPoiFailure({ error });
        },
      })
    )
  );

  visit$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PoiActions.visitPoi),
        fetch({
          run: action => {
            const selectedTourId = 'tour' + action.poiId;
            const stat = localStorage.getItem(selectedTourId);
            const total = stat ? Number(stat) + 1 : 1;
            localStorage.setItem(selectedTourId, total.toString());
            return EMPTY;
          }
        })
      )
  )

  constructor(private readonly actions$: Actions, private poiService: PoiService) {}
}
