export const $createTrack = formData => (
    $.ajax({
        url: `/api/tracks`,
        method: `POST`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const $getTracksByUserId = userId => (
    $.ajax({
        url: `/api/tracks/users/${userId}`,
        method: `GET`
    })
);

export const $updateTrack = formData => (
    $.ajax({
        url: `/api/tracks`,
        method: `PATCH`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const $deleteTrack = trackId => (
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: `DELETE`
    })
);

export const $getTrackById = trackId => (
    $.ajax({
        url: `/api/tracks/${trackId}`,
        method: `GET`
    })
);

export const $getTracksByProjectId = projectId => (
    $.ajax({
        url: `/api/tracks/projects/${projectId}`,
        method: `GET`
    })
);


