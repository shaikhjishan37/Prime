import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import IcomoonConfig  from "./../../assets/fonts/iconFont/selection.json";

const expoAssetId = require("./../../assets/fonts/iconFont/icomoon.ttf");
const Icomoon = createIconSetFromIcoMoon(IcomoonConfig, 'FontName', expoAssetId);

export default Icomoon;