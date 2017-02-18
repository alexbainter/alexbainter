import axios from 'axios';

export const FETCH_SKILLS = 'FETCH_SKILLS';
export const FETCH_RATINGS = 'FETCH_RATINGS';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

function baseAPIFetch(actionType, apiRoute) {
    return function () {
        const request = axios.get(`/api/${apiRoute}`);
        return {
            type: actionType,
            payload: request
        }
    }
}

export baseAPIFetch(FETCH_SKILLS, 'skills');
export baseAPIFetch(FETCH_RATINGS, 'ratings');
