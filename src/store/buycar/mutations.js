import { SYNC_UPDATE } from "./const"
export default {
    [SYNC_UPDATE](state, newcar) {
        state.cars = newcar;
    }
}