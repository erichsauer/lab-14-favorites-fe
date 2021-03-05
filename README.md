# The Plan
## The Map

```
App.js (state: token)
|
+ HomePage.js (props: button handlers)
|
+ LoginOrSignUpPage.js (state: form)
|   |
|   + Form.js (props: handlers)
|
+ Search.js (props: token; state: plants[])
|   |
|   + Results.js (props: array to map)
|   |
|   + ResultItem.js (props: handler for item click)
|
+ Favorites.js (props: token, to-do [])
    |
    + Results.js (props: array to map)
    |
    + ResultItem.js (props: handler for item click)
```

## The To Do List To Do List
1. create app skeleton
1. get something rendering on each page
1. work from the bottom up, figuring out which props are are needed and passing them from parent
    - results item
        - `<p> & <img> tags`
        - click-handler `(() => handleClick(item))`
    -  results
        - `<div>s`
        - map passed-in array
    - search page
        - input & button for searching
            - remember `onSubmit` on form & `submit` on button
    - form
        - to be used on sign up/log in page; make generic and pass in the click & state handlers
    - home page is just a welcome with login & sign up buttons
    - app.js has all the routes & mega state