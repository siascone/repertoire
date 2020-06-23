export const getUserById = userId => (
    $.ajax({
        method: `GET`,
        url: `/users/${userId}`
    })
);

export const updateUser = (user) => (
    $.ajax({
        method: `PATCH`,
        url: `/users/${user.id}`,
        data: user,
    })
);

export const getUserByQueryString = (queryString) => (
    $.ajax({
        method: `GET`,
        url: `/users/search/?${queryString}`,
    })
);