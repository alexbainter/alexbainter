import { FETCH_NEW_SNIPPET, CHANGE_SNIPPET} from '../actions';

const INITIAL_STATE = {
    currentSnippet: null,
    nextSnippet: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_NEW_SNIPPET:
            return { ...state, nextSnippet: action.payload.data };
        case CHANGE_SNIPPET:
            return { ...state, currentSnippet: state.nextSnippet };
        default:
            return state;
    }
}
