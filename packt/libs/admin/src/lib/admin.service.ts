import { Injectable } from '@angular/core';
import { PoiEntity } from '@packt/poi';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getStatistics(pois: PoiEntity[]): number[] {
    return pois.map(poi => {
      const selectedTourId = 'tour' + poi.id;
      const stat = localStorage.getItem(selectedTourId) ?? 0;
      return +stat;
    })
  }
}
