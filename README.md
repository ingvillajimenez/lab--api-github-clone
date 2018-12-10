# Lab - Github Clone

## Objectives

After completing this assignment, you should be able to:

* Demonstrate use of Promises and AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS
* Create an event listener for an input element.

## Deliverables

* A repository on github
* Site styles written in SCSS in the `src/`  and compiled to the dist
* JS written in `src/`
* Successful AJAX requests from the Github API

## Details

## Normal Mode

#### Part 1
Recreate the HTML and CSS for the Github tab page (https://github.com/matthiasak?tab=repositories) as your design, and using two AJAX requests/Promises, pull your own profile information from Github:

- Your profile: `https://api.github.com/users/«username»`
- Your repos: `https://api.github.com/users/«username»/repos`

After loading data from the Github API, write at least the following information to the DOM:

- name
- blog
- location
- email
- an `<img>` with its source as the avatar_url
- html_url
- for each repo that belongs by your user, create an html-component

#### Part 2
You will also need to include an `<input>` tag on your page that will allow users to search for a particular GitHub account. Once the user presses enter in the `<input>` tag, your app should change the hash, which will trigger a new request to the GitHub server, and display information for the corresponding user.

## Demo

### Functionality
![demo gif](demos/roadmap-step6.gif)

### Design
![demo gif](demos/roadmap-step7.png)

## Setup Instructions

**(1) Go to your  muktek/assignments directory and create the `lab--api-github-clone` folder for this assignment**

```sh
cd ~/muktek/assignments
mkdir lab--api-github-clone
cd lab--api-github-clone
```

---

### API Notes

Docs: https://developer.github.com/v3/

1. [Get an API key](https://github.com/settings/tokens/new)
  - Click 'Generate Token', leave all options *unselected*
2. Copy the access token
  - You won't be able to see it again from github!
3. Make sure you can fetch a user from the API with your token
  - https://api.github.com/users/muktekguest?access_token=«your-access-token»

Why all of this? Github puts a rate limit on unauthenticated requests to their API at 60 per hour *per IP address*. As a class, we will be sharing the same IP address on campus, and will exceed this threshold quickly. Therefore, we need an api key for our application (i.e. an access token).

Normally we would put our api key in a variable in `app.js`, but if we do that _Github will detect the key and delete it_ because it is usually very bad practice to push an access token to a public repository. The solution is to put our api key in a file we are hiding from version control (`secrets.js` in `.gitignore`). With these steps above, we can import the api key from another file locally without having the key getting invalidated when we push our code up to github.

## Adventure Mode

### Implement Routing

### Objectives

* Utilize routing and a controllerRouter() function to simplify your navigation code.

### Deliverables
* Client-side routing that listens to the 'hashchange' event and renders new data

## Setup Instructions

*Use [director library](https://github.com/flatiron/director) to implement routing in your app.*


### Roadmap to Success

##### Breaking Down the Problem

You will need to fetch user data for a github (ex: t3patterson) and that user's repo data from the github api. In your application, you will need to render dynamic html strings to the DOM based on the data returned from the API.

After you can fetch + render data, you will need to set up the router. When the route contains the value of another user (ex: `#/oakes`, `#/jwo`), your application should fetch that user's profile information and repositories from the github API and render it to the page.

Finally, you should create an input field in the nav bar that has an event listener that responds to the keyDown event and filters for the 'Enter' key, and changes the route with the value that

##### Access the API
1. Get your api key from github

2. In your browser, ensure that you can make successful queries for

 -  user data  
 -  a user's repo data

from the github API with your API Key

3. Access the data in `app.js`.
 -  You will need to import superagent, and use `request.get(«url»)` to request the data form the api.

 - You should console.log and inspect the data in your promise-handler callback function (
   ```
   request.get(...)
    .then(function(serverRes){
      // your code here
    })
   ```

##### Create a Data Template

1. Create a simple layout in HTML + CSS for the layout per the mockup initially build it with static hard-coded HTML to make sure that the elements are mostly in place.

2. Create 2 functions that will return an html string with data from the api.
  - One function will accept data from the users API and build the user profile HTML.
  - The other function will accept data from the repos API and build the user repos. You will need to iterate over the data from the repos API since user repos are an array of objects.

3. Fetch data from the api and pass the returned data to your template functions -- ensure that your template can render the fetched data.

##### Build the router
1. Initialize the router with 2 routes
  - the home/default route
  - and the user route

2. The user route should be a dynamic route, and the dynamic value in the route should form part of the request url to the github user profile and user repos

##### Build the 'search' feature
1. Create an event-listener on the keydown event for the `<input>` element.

2. The event listener should change the value in the route to see if the Enter/return key was pressed. You can see what key was pressed with the element's `[keycode](https://www.w3schools.com/jsref/event_key_keycode.asp)` property.

3. With the director routing library, you can change the value in the url with the router instance's [`.setRoute(...)`(https://github.com/flatiron/director#setrouteroute)] method.
