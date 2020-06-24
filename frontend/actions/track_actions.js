export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const REMOVE_TRACK = 'REMOVE_TRACK';

import {
    $getTrackById,
    $getTracksByUserId,
    $getTracksByProjectId,
    $createTrack,
    $deleteTrack,
    $updateTrack,
} from '../util/track_api_util'

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

const receiveTracks = tracks => ({
    type: RECEIVE_TRACKS,
    tracks
});

const removeTrack = id => ({
    type: REMOVE_TRACK,
    id
});

const receiveTrackErrors = errors => ({
    type: RECEIVE_TRACK_ERRORS,
    errors
});

export const getTrackById = trackId => dispatch => (
    $getTrackById(trackId)
    .then(res => dispatch(receiveTrack(res.track)))
    .fail(err => dispatch(receiveTrackErrors(err)))
);

export const getTracksByUserId = userId => dispatch => (
    $getTracksByUserId(userId)
    .then(res => dispatch(receiveTracks(res.tracks)))
    .fail(err => dispatch(receiveTrackErrors(err)))
);

export const updateTrack = track => dispatch => (
    $updateTrack(track)
    .then(res => dispatch(receiveTrack(res.track)))
    .fail(err => dispatch(receiveTrackErrors(err)))
);

export const createTrack = track => dispatch => (
    $createTrack(track)
    .then(res => dispatch(receiveTrack(res.track)))
    .fail(err => dispatch(receiveTrackErrors(err)))
);

export const deleteTrack = trackId => dispatch => (
    $deleteTrack(trackId)
    .then(res => dispatch(removeTrack(trackId)))
    .fail(err => dispatch(receiveTrackErrors(err)))
);

export const getTracksByProjectId = projectId => dispatch => (
    $getTracksByProjectId(projectId)
    .then(res => dispatch(receiveTracks(res.tracks)))
    .fail(err => dispatch(receiveTrackErrors(err)))
);
