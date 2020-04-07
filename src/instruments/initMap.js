import { loadScript, newScript } from 'Instruments/helper';

const yandexMap = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.REACT_APP_YMAP_KEY}&lang=ru_RU`;

// import { renderMap } from './renderMap';

export const initMap = (ref, center, zoom) => {

  const init = () => {
    window.map = new ymaps.Map(ref, {
      center,
      zoom,
      controls: ['routePanelControl'],
    });
  };

  // return loadScript(yandexMap, () => {
  //   window.ymaps.ready(init);
  // });
  return loadScript(yandexMap, () => {
    return new Promise((resolve) => {
      resolve();
    }).then(() => window.ymaps.ready(init), () => console.log('init Error'));

  });

  // const myScript =  newScript(yandexMap);

  // const doLoad = () => {
  //   myScript.then(() => {
  //     // self.setState({ 'status': 'done' });
  //     window.ymaps.ready();
  //   }).catch(() => {
  //     // self.setState({ 'status': 'error' });
  //     console.log('init Error');
  //   });
  // };

  // // return setTimeout(() => {
  // //   doLoad();
  // // }, 2000);

  // return doLoad();
};
