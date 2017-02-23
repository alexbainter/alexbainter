import axios from 'axios';

export const FETCH_SKILLS = 'FETCH_SKILLS';
export const FETCH_RATINGS = 'FETCH_RATINGS';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_NEW_SNIPPET = 'FETCH_NEW_SNIPPET';
export const CHANGE_SNIPPET = 'CHANGE_SNIPPET';

export function fetchSkills() {
    return baseAPIFetch(FETCH_SKILLS, 'skills');
}

export function fetchRatings() {
    return baseAPIFetch(FETCH_RATINGS, 'ratings');
}

function baseAPIFetch(actionType, apiRoute) {
    const request = axios.get(`/api/${apiRoute}`);
    return {
        type: actionType,
        payload: request
    }
}

export function fetchNewSnippet(currentSnippetId) {
    const request = axios.post(`/api/snippet`, { currentSnippetId });
    return {
        type: FETCH_NEW_SNIPPET,
        payload: request
    }
}

export function changeSnippet() {
    return {
        type: CHANGE_SNIPPET
    }
}
