import {GeneralApiProblem} from "./api-problem"
import {Character} from "../../models/character/character"

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
