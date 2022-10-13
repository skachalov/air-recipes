import axios from "axios"
import { recipesURL } from "@/const/URL"

export const fetchGetRecipes = async () => await axios.get(recipesURL)