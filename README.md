# Base template for React

## Task

- Install `react-router-dom` library.
- Create component `HomePage` and move all content from the `App` there. 
- Use `HashRouter` or `BrowserRouter`(add `basename={process.env.PUBLIC_URL}` prop for correct work of GitHub pages) in `App`.
- Create and implement component `MoviePage` which render information about single movie.
    - fetch data about movie from this component from `http://www.omdbapi.com/?apikey=[yourkey]&i=[id]`(retrieve `id` from url)
    - choose by self which additional information about movie show on the page
    - component should have back button which redirect to the `HomePage`
    - page can have any design you want
    - you may create any additional components you want
- Add routes to the `App`.
    - render `HomePage` only on root url(`/`)
    - render `MoviePage` on `/movies/:id` url
- Redirect to the `MoviePage` when click on `MovieCard`.
- (\*) Create `PageNotFound` component for other invalid routes.
  Page should contain message and `Link` to the home page. 

## Workflow

- Fork the repository with task
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode 

- Run `npm run start` to start `http-server` on `http://localhost:3000`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- When you finished `Deploy on gh-pages`

## Deploy on gh-pages

- Build the project
  ```bash
  $ npm run build
  ```
- Commit and push all recent changes
  ```bash
  $ git add .
  $ git commit -m 'commit message'
  $ git push origin master
  ```
- Execute `npm run deploy`. This command will push the `/build` folder to branch
  `gh-pages` in your remote repository. 
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a 
  link to your index.html
- Commit and push all recent changes again.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure

- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.

### Demo link

Add link here: `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)`
