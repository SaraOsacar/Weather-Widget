export default function WeatherMainInfo({weather}) {
    return (
      <div>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>
          <div>
            <img
              src={`http:${weather?.current.condition.icon}`}
              width="128"
              alt={weather?.current.condition.text}
            />
          </div>
          <div>
            <div>{weather?.current.condition.text}</div>
            <div>{weather?.current.temp_c}º</div>
          </div>
        </div>
        <iframe
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d181391.71585819108!2d${weather?.location.lon}5628!3d${weather?.location.lat}354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1692280605987!5m2!1ses!2ses`}
          width="600"
          height="450"
          style={{border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
     
}