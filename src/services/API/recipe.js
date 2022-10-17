<<<<<<< HEAD
import axios from "axios";

export const fetchGetRecipe = async id => await axios.get(`https://test.kode-t.ru/detail_${id}.json`)
=======
import axios from "axios"
import { recipeURL } from "@/const/URL"

export const fetchGetRecipe = async id => await axios.get(recipeURL + `${id}.json`)
>>>>>>> recipes-5-refactoring
