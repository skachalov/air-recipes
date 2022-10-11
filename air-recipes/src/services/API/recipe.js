import axios from "axios"
import { recipeURL } from "@/const/URL"

export const fetchGetRecipe = async id => await axios.get(recipeURL + `${id}.json`)