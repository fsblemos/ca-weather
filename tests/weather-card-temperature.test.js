import Vue from 'vue';
import WeatherCardTemperature from '../src/pages/WeatherNow/WeatherCardTemperature.vue';

const Ctor = Vue.extend(WeatherCardTemperature);
const mockCard = ({ city = '', country = '', temperature = 0 }) => ({ city, country, temperature });

describe("WeatherCardTemperature", () => {
  it("shoud be cold when temperature is lower or equal to 5", () => {
    const vm = new Ctor({ propsData: mockCard({ temperature: 5 }) });

    expect(vm.isCold).toBeTruthy();
    expect(vm.isNormal).toBeFalsy();
    expect(vm.isWarm).toBeFalsy();
    expect(vm.weather).toBe('cold');
  });

  it("shoud be normal when temperature is greater than 5 and lower than 26", () => {
    const vm = new Ctor({ propsData: mockCard({ temperature: 6 }) });

    expect(vm.isCold).toBeFalsy();
    expect(vm.isNormal).toBeTruthy();
    expect(vm.isWarm).toBeFalsy();
    expect(vm.weather).toBe('normal');
  });

  it("shoud be warm when temperature is greater or equal to 26", () => {
    const vm = new Ctor({ propsData: mockCard({ temperature: 26 }) });

    expect(vm.isCold).toBeFalsy();
    expect(vm.isNormal).toBeFalsy();
    expect(vm.isWarm).toBeTruthy();
    expect(vm.weather).toBe('warm');
  });
});
