import { DefaultChartData } from './default-chart-data.model';

export interface LineChartData {
  name?: string;
  series: DefaultChartData[];
}
