export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS'

import { 
    $createTag,
    $getTagsByQueryString
} from '../util/tag_util';

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
});

const receiveTags = tags => ({
    type: RECEIVE_TAGS,
    tags
});

const receiveTagErrors = errors => ({
    type: RECEIVE_TAG_ERRORS,
    errors
});

export const createTag = tag => dispatch => (
    $createTag(tag)
    .then(res => dispatch(receiveTag(res.tag)))
    .fail(err => dispatch(receiveTagErrors(err)))
);

export const getTagsByQueryString = queryString => (
    $getTagsByQueryString(queryString)
    .then(res => dispatch(receiveTags(res.tags)))
    .fail(err => dispatch(receiveTagErrors(err)))
);