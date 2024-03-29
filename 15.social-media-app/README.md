## Introduction

## Project checklist

In this project, you're supposed to work on a basic React app with all the functionalities listed below.

-   [ ] Build a landing page for the social media
-   [ ] Build a login page at `/login`
-   [ ] Build a registration page at `/register`
-   [ ] When the user registers a new account, the details of user is stored in `localStorage`. `localStorage` should have a key called "allUsers" and value as a JSON stringified array of `username` and `password` of all users.

Example of what object should be stored in `localStorage`:

```
[{
    username: 'admin',
    password: '123'
}, {
    username: 'john',
    password: '456'
}]
```

-   [ ] Add basic validation to the registration: Usernames should be unique, alphanumeric only. Passwords should be strong.

-   [ ] When a user logs in, you should iterate on this key and figure out if `allUsers` contains the user. If yes, check if username and password matches. If they match, redirect the user to `/dashboard` screen.

-   [ ] Store logged in user's username inside localStorage too. You may use `loggedIn` as the key and the username of the user logged in as the value.

-   [ ] The dashboard should load feed from all the users. This feed should be also stored in `localStorage` as `feed` as the localStorage key, and the following structure as the value (feel free to change it to add more features):

```
[{
    postID: '', // a unique post ID
    contents: '', // contents of the post
    postAuthor: '', // username of the author of the post
    createdOn: 0, // a unix timestamp (stored in seconds) of the time it was created
    updatedOn: 0, // a unix timestamp (stored in seconds) of time it was updated
}]
```

-   [ ] Whenever a user creates a new post, it is added into the localStorage key `feed` as an individual post.
-   [ ] All posts inside `feed` localStorage should be visible to everyone in random order who create an account and visits `/dashboard`
-   [ ] Only the post author should see the option to edit or delete the post.
-   [ ] Only the post author can edit and delete the post. Put proper checks in place.
-   [ ] Take design inspiration from `assets` folder, but you have to build the design + logic on your own.

All the best!
