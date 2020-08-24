# AngularSPA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Creating project structure

### I create the following folders: 

* Components / Shared (for the parts of the project)
··* Navbar: (to search users) and back link to home. (This is also responsive).
··* User-Card: to display the card dynamicly anywhere we need.
··* Seeker: to display the results from the search.

* Interfaces
··* User Interface with user atributes

* Services
··* Service with a HttpClient call to API to getUsers
··* I was trying to do a method in service to get only one User with param

* Views
··* Home: when you go into the app (I separate the search results from the home to another component because we want to have a different url to each search and it must be friendly with search/:term)
··* Detail: to display the user data after to click on card.

#### Note:

I made this layout in Bootstrap and my own styles in scss, to make the aplication responsive. 
I am used routing in this project.

## Code 

1. I fetch the data in the service with an all users call from the GitHub API url.
2. I subscribe to data in the seeker.component.ts because I wanted to leave the home polite and we need an unique url. 
3. I subscribe to data by an async function and I set all content on localStorage to keep data persistant while the is still running.
4. In the search input and button in navbar I active the function to search Users by term.
5. In the seeker.component.ts, after to subscribe to data from the User Service, I filter this data with the function searchUsers looping the users array and find the term coincidence. The term in this case is the login.value from the search input. Here I was trying another way making the method in the service by term but I finally didn't choose it (I leave the function commented below). I was trying also the insert a debouncetime to display filtered data on change event, but I didn't find ther right way.
6. I've made a function to link the card to the detail by parameter. In this case Id.
7. The card is a separated component becaus it may can be reusable in the future and I comunicate it through @Input and @Output with the components.
8. Finally I insert in the footer of the seeker.component.html a ngf page navigation from Bootstrap ngx, to match with Bootstrap that I installed before. Here we can paginate and also set a limit of items per page, in a range from 6, 9 to 18.




