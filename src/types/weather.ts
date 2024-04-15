export interface WeatherForecast {
  publicTime: string;
  publicTimeFormatted: string;
  publishingOffice: string;
  title: string;
  link: string;
  description: WeatherDescription;
  forecasts: Forecast[];
  location: Location;
  copyright: Copyright;
}

interface WeatherDescription {
  publicTime: string;
  publicTimeFormatted: string;
  headlineText: string;
  bodyText: string;
  text: string;
}

interface Forecast {
  date: string;
  dateLabel: string;
  telop: string;
  detail: ForecastDetail;
  temperature: Temperature;
  chanceOfRain: ChanceOfRain;
  image: WeatherImage;
}

interface ForecastDetail {
  weather: string;
  wind: string;
  wave: string;
}

interface Temperature {
  min: TemperatureDetail | null;
  max: TemperatureDetail | null;
}

interface TemperatureDetail {
  celsius: string | null;
  fahrenheit: string | null;
}

interface ChanceOfRain {
  T00_06: string;
  T06_12: string;
  T12_18: string;
  T18_24: string;
}

interface WeatherImage {
  title: string;
  url: string;
  width: number;
  height: number;
}

interface Location {
  area: string;
  prefecture: string;
  district: string;
  city: string;
}

interface Copyright {
  title: string;
  link: string;
  image: ProviderImage;
  provider: Provider[];
}

interface ProviderImage {
  title: string;
  link: string;
  url: string;
  width: number;
  height: number;
}

interface Provider {
  link: string;
  name: string;
  note: string;
}
