import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { catchError, Observable, of, take, tap } from 'rxjs';
import { LineChartData } from 'src/app/core/models/line-chart-data.model';
import { Olympic } from 'src/app/core/models/olympic.model';
import { DefaultChartData } from 'src/app/core/models/default-chart-data.model';
import { RelativeData } from 'src/app/core/models/relative-data.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  olympic$!: Observable<LineChartData[]>;
  numberOfMedals: number = 0;
  numberOfAthletes: number = 0;

  dataNumberOfEntries: RelativeData = {
    title: 'Number of entries',
    quantity: 0,
  };
  dataNumberOfMedals: RelativeData = {
    title: 'Total number medals',
    quantity: 0,
  };
  dataNumberOfAthletes: RelativeData = {
    title: 'Total number athletes',
    quantity: 0,
  };

  // relative data
  relativeDataArray: RelativeData[] = [
    this.dataNumberOfEntries,
    this.dataNumberOfMedals,
    this.dataNumberOfAthletes,
  ];

  // chart data
  single!: DefaultChartData[];
  multi!: LineChartData[];
  view: [number, number] = [innerWidth / 1.2, 400];
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Dates';
  yAxisLabel: string = '';
  timeline: boolean = true;
  colorScheme: Color = {
    domain: ['#5AA454'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor(
    private olympicService: OlympicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const olympicId = +this.route.snapshot.params['id'];
    this.olympicService
      .getOlympicById(olympicId)
      .pipe(
        tap((data?: Olympic) => {
          if (data) {
            this.single = [];
            data.participations.forEach((item, i, data) => {
              this.single.push({
                name: item.year + '',
                value: item.medalsCount,
              });
              this.numberOfMedals += item.medalsCount;
              this.numberOfAthletes += item.athleteCount;
            });
            this.multi = [{ name: data?.country, series: this.single }];
            this.olympic$ = of(this.multi);
            // the number of entries, medals and athletes
            this.setNumberOfMedals(this.numberOfMedals);
            this.setNumberOfAthletes(this.numberOfAthletes);
            this.setNumberOfEntries(this.single.length);
          } else if (!this.multi) {
            console.log('vide');
          }
        })
      )
      .subscribe();
  }

  setNumberOfEntries(quantity: number) {
    this.dataNumberOfEntries.quantity = quantity;
  }
  setNumberOfMedals(quantity: number) {
    this.dataNumberOfMedals.quantity = quantity;
  }
  setNumberOfAthletes(quantity: number) {
    this.dataNumberOfAthletes.quantity = quantity;
  }
}