export const getUserById = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: `GET`,
    })
);

export const updateUser = (user) => (
    $.ajax({
        url: `/api/users/${user.id}`,
        method: `PATCH`,
        data: user,
    })
);

export const getUsersByQueryString = (queryString) => (
    $.ajax({
        url: `/api/users/search/?${queryString}`,
        method: `GET`,
    })
);