import {renderHook} from '@testing-library/react-hooks';
import useMap from './use-map';


let initialPositionMock = null;
let mapRefMock = null;
let fakeDomElement = null;


describe('Hook: useMap', () => {
  beforeAll(() => {
    initialPositionMock = {
      latitude: 52.361540000000005,
      longitude: 4.883976,
      zoom: 16,
    };

    fakeDomElement = document.createElement('div');

    mapRefMock = {
      current: fakeDomElement,
    };
  });

  it('should return leafletMap object with correct settings', () => {
    const {result} = renderHook(() =>
      useMap(mapRefMock, initialPositionMock),
    );
    const leafletMap = result.current;

    expect(leafletMap).toBeInstanceOf(Object);
    expect(leafletMap.getContainer()).toEqual(fakeDomElement);
    expect(leafletMap.getCenter().lat).toBe(initialPositionMock.latitude);
    expect(leafletMap.getCenter().lng).toBe(initialPositionMock.longitude);
    expect(leafletMap.getZoom()).toBe(initialPositionMock.zoom);
  });
});
