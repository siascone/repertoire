export const getUserById = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: `GET`,
    })
);

export const updateUser = formData => (
    $.ajax({
        url: `/api/users/${formData.get('user[id]')}`,
        method: `PATCH`,
        data: formData,
        contentType: false,
        processData: false
    })
)

export const getUsersByQueryString = (queryString) => (
    $.ajax({
        url: `/api/users/search/?${queryString}`,
        method: `GET`,
    })
);