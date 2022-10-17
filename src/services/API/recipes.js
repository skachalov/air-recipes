<<<<<<< HEAD
import axios from "axios";

export const fetchGetRecipes = async () => await axios.get("https://test.kode-t.ru/list.json")
=======
import axios from "axios"
import { recipesURL } from "@/const/URL"

export const fetchGetRecipes = async () => await axios.get(recipesURL)
>>>>>>> recipes-5-refactoring
