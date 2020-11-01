import Presensi from "./presensi"
import {combineReducers} from "redux"

const AllReducers = combineReducers({
    presensi : Presensi
})
export default AllReducers