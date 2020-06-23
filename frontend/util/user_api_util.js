export const getUserById = userId => (
    $.ajax({
        url: `/users/${userId}`,
        method: `GET`,
    })
);

export const updateUser = (user) => (
    $.ajax({
        url: `/users/${user.id}`,
        method: `PATCH`,
        data: user,
    })
);

export const getUsersByQueryString = (queryString) => (
    $.ajax({
        url: `/users/search/?${queryString}`,
        method: `GET`,
    })
);