import { getSet } from './getSet';
import { actions } from './reducer';

export const loadSetThunk =
    ({ expansion }: { expansion: string }) =>
    (dispatch: any) => {
        getSet(expansion).then((resp) => dispatch(actions.loadSet(resp)));
    };
