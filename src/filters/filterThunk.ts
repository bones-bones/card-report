import { actions } from '../cards';
import { fetchCardData } from '../data-fetch';
import { RootState } from '../store';
import { actions as filterActios } from '../filters/reducer';

export const filterThunk =
    ({ expansion }: { expansion: string }) =>
    (dispatch: any, _getState: () => RootState) => {
        fetchCardData(expansion).then((resp) => {
            dispatch(actions.loadCards(resp));
            dispatch(filterActios.applyExpansion(expansion));
        });
    };
