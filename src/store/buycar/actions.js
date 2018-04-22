import { SYNC_UPDATE } from './const';

export default {
    initCars({ commit }) {
        setTimeout(() => {
            let cars = getCars();
            commit(SYNC_UPDATE, cars)
        }, 300)
    },
    addGoodInCar({ commit }, goodinfo) {
        setTimeout(() => {
            let cars = getCars();
            let isHas = cars.some((item) => {
                if (item.id === goodinfo.id) {
                    item.num++
                        return true
                }
            })
            if (!isHas) {
                goodinfo.num = 1;
                cars.push(goodinfo)
            }
            localStorage.cars = JSON.stringify(cars);
            commit(SYNC_UPDATE, cars);
        }, 500);
    },
    reduceGoodInCar({ commit }, goodinfo) {
        setTimeout(() => {
            let cars = getCars()
            cars = cars.filter((item) => {
                if (item.id === goodinfo.id) {
                    item.num--;
                    if (item.num <= 0) {
                        return false;
                    }
                    return true
                }
                return true
            })
            localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE, cars)
        }, 300)
    }
}

function getCars() {
    return JSON.parse(localStorage.cars ? localStorage.cars : "[]");
}