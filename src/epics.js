import { combineEpics } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

export const exampleEpic = action$ => action$
    .ofType('EXAMPLE')
    .map(() => {
        return of();
    });

export default combineEpics(
    exampleEpic
);
