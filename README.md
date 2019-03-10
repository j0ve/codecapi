# CodeCapi Assessment

## Packages used

- enzyme for unit testing
- react-router-dom
- reactstrap for some basic layout
- moment to format timestamps in the github response
- axios for api calls

## Containers:

SearchGit (route /)
UserDetails (route /userdetails/:id)

## Components:

SearchGitForm (form for entering search details)
SearchGesultList (displays list of returned results from github api after form submit)
PageNav (page navigation control to refresh github api results)

## Libs:

api.js (contains 2 functions for 2 Github api endpoints)

## Tests: for npm run test (changed package.json to always use verbosed mode)

api.test.js (checks if github api functions send results back)
searchGit.test.js (checks if renders properly, checks if form component is rendered, checks if submithandler function in parent container is called after button submit in child form component)
searchGitForm.test.js (checks if renders properly)
searchGitResultlist.test.js (checks if renders properly)
UserDetails.test.js (checks if renders properly)
