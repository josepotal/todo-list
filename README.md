This is a complete project to develop a **TODO-LIST** app.

- Create a folder `todo-list`
    + create `README.md` and `main.js`
    + create a `public` folder, a `views` folder

### git 
- We start with a `git init` in the directory folder
- In Github, create a remote repo with the same name `todo-list` and pass the commands:
    + `git remote add origin https://github.com/josepotal/todo-list.git`
    + `git push -u origin master` --> always after a `git add` and a `git commit`
    + The following pushes will be only `git push`

- Create a `.gitignore` file and add to it:
    + node-modules 
    + bower_components


### package.json
- Also create a `package.json` to see the server-side dependencies, by typing in the cmd `npm init`
    + We install the node modules we are going to use, for instance:
        * `npm install express --save` --> the `--save` is to save it in the `package.json` dependencies.
        * Install any other node module needed similarly.


- Task runners in the `package.json` in the "scripts" tag:
    ```
    "scripts": {
        "prestart": "npm install && bower install",
        "start": "node main.js",
        "watch": "nodemon main.js"
    }
    ```

### bower.json
- By typing `bower init` to create the `bower.json` that manages the client dependencies 
- We also want to include the `bower_components` into the `.gitignore` file
- We create a **`.bowerrc`** file to configure bower, in order to indicate that the `bower_components` folder will be installed into the `public` folder.
    ```
        {"directory": "public/bower_components"}
    ```
- In the cmd: `bower install --save bootstrap jquery` to install bootstrap and jquery. We can link them into the `layout` using the path into ` bower_components`

### pug
**Pug**, https://pugjs.org/api/getting-started.html
    + Use a `layout.pug` to generate the common parts of each view in the webpage. Using **`block content`** in the place where we want to include thanother pug file, such as `index.pug`
    + The `index.pug` will start with:
    
    ```
    extends layout.pug
    block content
    [some pug code here]
    ```