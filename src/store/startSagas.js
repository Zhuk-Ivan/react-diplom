import { charactersSaga } from "./characters";
import { characterDetailsSaga } from "./characterDetails";
import { characterDeathSaga} from './deaths';
import { characterQuotesSaga} from './characterQuotes';
import { episodesSaga } from './episodes';

export const startSagas = (sagaMiddleware) => {
  [charactersSaga, characterDetailsSaga, characterDeathSaga, characterQuotesSaga, episodesSaga].forEach(sagaMiddleware.run);
};
