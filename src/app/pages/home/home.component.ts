import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, take, tap } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { RelativeData } from 'src/app/core/models/relative-data.model';
import { DefaultChartData } from 'src/app/core/models/default-chart-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  numberOfJos!: number[];

  dataNumberOfJOs: RelativeData = {
    title: 'Number of JOs',
    quantity: 0,
  };
  dataNumberOfCountries: RelativeData = {
    title: 'Number of Countries',
    quantity: 0,
  };

  // relative data
  relativeDataArray: RelativeData[] = [
    this.dataNumberOfJOs,
    this.dataNumberOfCountries,
  ];

  // chart data
  single!: DefaultChartData[];
  view: [number, number] = [innerWidth / 1.2, 400];
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  below = LegendPosition.Below;
  colorScheme: Color = {
    domain: ['#956065', '#793d52', '#89a1db', '#9780a1', '#bfe0f1'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.olympicService
      .getOlympics()
      .pipe(
        tap((data) => {
          this.single = [];
          this.numberOfJos = [];
          data.forEach((item, i, data) => {
            this.single.push({
              id: item.id,
              name: item.country,
              value: item.participations.reduce(function (total, record) {
                return total + record.medalsCount;
              }, 0),
            });
            // for number of JOs
            item.participations.forEach((item, i, data) => {
              this.numberOfJos.push(item.year);
            });
          });
        }),
        // number of JOs and number of countries
        tap(() => {
          this.setNumberOfJos([...new Set(this.numberOfJos)].length);
          this.setNumberOfCountries(this.single.length);
        }),
        // the observable complete in 2 emissions
        take(2)
      )
      .subscribe();
  }

  setNumberOfJos(quantity: number) {
    this.dataNumberOfJOs.quantity = quantity;
  }
  setNumberOfCountries(quantity: number) {
    this.dataNumberOfCountries.quantity = quantity;
  }

  onSelect(data: Event): void {
    const country = JSON.parse(JSON.stringify(data)).name;
    const countryId = this.single.find(
      (countries) => countries.name === country
    )?.id;
    this.router.navigateByUrl(`detail/${countryId}`);
  }
}
