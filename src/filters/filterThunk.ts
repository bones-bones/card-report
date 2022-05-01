import { actions } from '../cards';
import { fetchCardData } from '../data-fetch';
import { actions as filterActios } from '../filters/reducer';

export const filterThunk =
    ({ expansion }: { expansion: string }) =>
    (dispatch: any) => {
        fetchCardData(expansion).then((resp) => {
            dispatch(actions.loadCards(resp));
            dispatch(filterActios.applyExpansion(expansion));
        });
    };
