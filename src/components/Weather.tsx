import { useFetchData } from "@/utils/useFetchData";
import { WeatherForecast } from "@/types/weather";
import Image from "next/image";

export function Weather() {
  const url = "https://weather.tsukumijima.net/api/forecast";
  const tokyo = "130010";
  const urlTokyo = `${url}?city=${tokyo}`;

  const { data, isLoading, error } = useFetchData<WeatherForecast>(urlTokyo, {
    useEffectFetch: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>天気: {data?.title}</h2>
      <div>
        <h3>概要</h3>
        <p>{data?.description.text}</p>
      </div>
      <div>
        <h3>予報</h3>
        {data?.forecasts.map((forecast) => (
          <div key={forecast.date}>
            <h4>
              {forecast.dateLabel} ({forecast.date})
            </h4>
            <p>天気: {forecast.telop}</p>
            <p>最低気温: {forecast.temperature.min?.celsius || "--"}°C</p>
            <p>最高気温: {forecast.temperature.max?.celsius || "--"}°C</p>
            <p>風: {forecast.detail.wind}</p>
            <p>波: {forecast.detail.wave}</p>
            <Image
              src={forecast.image.url}
              alt={forecast.image.title}
              width={forecast.image.width}
              height={forecast.image.height}
              style={{ width: forecast.image.width, height: forecast.image.height }}
            />
          </div>
        ))}
      </div>
      <footer>
        <p>提供: {data?.publishingOffice}</p>
        <a href={data?.link} target="_blank" rel="noopener noreferrer">
          詳細リンク
        </a>
      </footer>
    </div>
  );
}
