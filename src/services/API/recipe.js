import axios from "axios";

export const fetchGetRecipe = async id => await axios.get(`https://test.kode-t.ru/detail_${id}.json`)