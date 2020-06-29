export const $createTag = tag => (
    $.ajax({
        url: `/app/tags/`,
        method: `POST`,
        data: tag,
    })
);

export const $getTagsByQueryString = queryString => (
    $.ajax({
        url: `/app/tags/${queryString}`,
        method: `GET`,
    })
);