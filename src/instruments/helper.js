
const yandexMap = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.REACT_APP_YMAP_KEY}&lang=ru_RU&load=Map,Placemark,Polyline,geoObject.addon.balloon`;

const loadScript = (src, onLoad) => {
  const script = document.createElement('script');

  script.src = src;
  script.async = true;
  document.body.appendChild(script);
  script.onload = onLoad;

};

const newScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = src;
    script.async = true;

    script.addEventListener('load', () => {
      resolve();
    });
    script.addEventListener('error', (e) => {
      reject(e);
    });
    document.body.appendChild(script);
  });
};

const genId = () => `f${(~~(Math.random()*1e8)).toString(16)}`;

const generateColor =() => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

const updateArray = (geoObj, destIndex, currentIndex) => {

  const currentItem = geoObj.get(currentIndex);

  geoObj.splice(currentIndex, 1);
  geoObj.splice(destIndex, 0, currentItem);

};

export {
  yandexMap,
  genId,
  generateColor,
  newScript,
  loadScript,
  updateArray
};
