This is a complete project to develop a **TODO-LIST** app.

- Create a folder `todo-list`
    + create `README.md` and `main.js`
- We start with a `git init` in the directory folder
- In Github, create a remote repo with the same name `todo-list` and pass the commands:
    + `git remote add origin https://github.com/josepotal/todo-list.git`
    + `git push -u origin master` --> always after a `git add` and a `git commit`
    + The following pushes will be only `git push`

- Also create a `package.json` to see the server-side dependencies, by typing in the cmd `npm init`
    + We install the node modules we are going to use, for instance:
        * `npm install express --save` --> the `--save` is to save it in the `package.json` dependencies.
        * Install any other node module needed similarly.

- Create a `.gitignore` file and add to it:
    + node-modules 
    + bower_components

- Task runners in the `package.json` in the "scripts" tag