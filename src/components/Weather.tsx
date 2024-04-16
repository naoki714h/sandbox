import { useFetchData } from "@/utils/useFetchData";
import { WeatherForecast } from "@/types/weather";
import Image from "next/image";

import styles from "@/components/Weather.module.scss";

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
    <div className={styles.content}>
      {/* <h2>天気: {data?.title}</h2> */}
      <h2 className={styles.title}>東京の天気予報</h2>
      <div>
        <h3 className={styles.subTitle}>概要</h3>
        <p className={styles.text}>{data?.description.text}</p>
      </div>
      <div>
        <h3 className={styles.subTitle}>予報</h3>
        <ul className={styles.weatherList}>
          {data?.forecasts.map((forecast) => (
            <li key={forecast.date} className={styles.weatherItem}>
              <h4>
                {forecast.dateLabel} ({forecast.date})
              </h4>
              <p>天気: {forecast.telop}</p>
              <p>
                <span>{forecast.temperature.min?.celsius || "--"}°C</span>~
                <span>{forecast.temperature.max?.celsius || "--"}°C</span>
              </p>
              {/* <p>風: {forecast.detail.wind}</p> */}
              {/* <p>波: {forecast.detail.wave}</p> */}
              <Image
                src={forecast.image.url}
                alt={forecast.image.title}
                width={forecast.image.width}
                height={forecast.image.height}
                style={{
                  width: forecast.image.width,
                  height: forecast.image.height,
                }}
              />
            </li>
          ))}
        </ul>
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
