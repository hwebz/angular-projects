import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PoiSelectors, PoiActions, PoiEntity } from '@packt/poi';
import { AdminService } from './admin.service';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'packt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  pieChartDatasets: any[] = [
    {
      data: []
    }
  ];
  pieChartPlugins = [];
  pieChartLegend = true;
  pieChartLabels: string[] = [];
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false
  }
  constructor(private store: Store, private adminService: AdminService) { }

  ngOnInit(): void {
    this.subscription = this.store.select(PoiSelectors.getAllPoi).subscribe(pois => {
      this.buildChart(pois);
    });
    this.store.dispatch(PoiActions.initPoi());
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

  private buildChart(pois: PoiEntity[]) {
    this.pieChartLabels = pois.map(poi => poi.name);
    this.pieChartDatasets = [
      {
        data: this.adminService.getStatistics(pois)
      }
    ]
  }
}
