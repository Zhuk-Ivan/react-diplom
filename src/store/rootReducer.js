import { combineReducers } from "redux";
import { CHARACTERS, characterReducer } from "./characters";
import { CHARACTER_DETAILS, characterDetailsReducer } from "./characterDetails";
import { CHARACTER_DEATH, characterDeathReducer } from "./deaths";
import { CHARACTER_QUOTES, characterQuotesReducer} from './characterQuotes';
import { EPISODES, episodesReducer } from "./episodes";

export const rootReducer = combineReducers({
  [CHARACTERS]: characterReducer,
  [CHARACTER_DETAILS]: characterDetailsReducer,
  [CHARACTER_DEATH] : characterDeathReducer,
  [CHARACTER_QUOTES] : characterQuotesReducer,
  [EPISODES] : episodesReducer
});
