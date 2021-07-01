# Reacting to APIs Lab

## Instructions

1. Head to the REST API [https://ghibliapi.herokuapp.com/](https://ghibliapi.herokuapp.com/) and in particular, pay attention to the two endpoints we're going to be using: `/films` and `/people` in this lab. When exploring the endpoints, examine the properties each film or person has. This way when we eventually fetch this data in React, set it to state, and map through it, you'll have a good idea of the properties you'll be displaying.
    * Explore the films endpoint: [https://ghibliapi.herokuapp.com/films](https://ghibliapi.herokuapp.com/films)
    * Explore the people endpoint: [https://ghibliapi.herokuapp.com/people](https://ghibliapi.herokuapp.com/people)

2. Before we begin fetching data, let's set up our app with a conditional render. You'll want a home page that shows one button at first that says `Load Films`. Have this button change the conditional render when clicked. The eventual goal will be to render a list of Film data when the `Film` button is clicked.

3. From here, task is to retrieve all films from the Ghibli REST API, and then parse the response to display a "card" for each film. You will need to use the `fetch()` method in order to do this, and you should invoke fetch when the component is mounted to the application via a `useEffect` and set to state with a `useState` hook.
    * Remember the films data should only display when the `Load Films` button is clicked!

4. Consider styling your card at this point so that it is easier to read. Bootstrap v4/v5 should make this pretty easy for you. **At a minimum**, you should display the film title and description, but you may use as many properties as you want.

5. The next task is to add another button next to `Load Films` that says `Load People`. This button, when clicked, should trigger a different conditional render. We'll be using this new conditional render to retreive and display people data from the Ghibli REST API.

6. Finally repeat the same process froim step 3 that you did for films with this people endpoint. **At a minimum**, you should display the person's name, age, gender, and a link to that particular person's JSON response that will open in a new tab, but you may use as many properties as you want.
