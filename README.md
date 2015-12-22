# React-Flux Todo List Example

This repo is forked from an example on [Facebook Flux](https://github.com/facebook/flux/tree/master/examples/flux-utils-todomvc) repo as a starter project. The focus of this project is to add some new features. Currently a feature is added to change the color of todo items. The feature is working and tested in latest version of Chrome but obviously there is scope for improvement and the work is in progress.

* A new component [TodoItemColor.react.js](https://github.com/varun-dev/react-flux-todolist/tree/master/js/components) is added in the /js/components/ directory and the relevant changes are done in the other parts of the project to incorporate the new color feature.
* The code is written in Ecmascript 6 and uses [Babel](babeljs.io).
* [Flow](http://flowtype.org/) is used for statically typed code.
* Just in case you are wondering how to fork a subdirectory from a repo then checkout [git subtree](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt).


## Setup

You must have [npm](https://www.npmjs.org/) installed on your computer. Run these commands at the root folder:

    npm install

This will install all dependencies.

To build the project, first run this command:

    npm start

This will perform an initial build and start a watcher process that will update bundle.js with any changes you wish to make.  This watcher is based on [Browserify](http://browserify.org/) and [Watchify](https://github.com/substack/watchify), and it transforms React's JSX syntax into standard JavaScript with [Babelify](https://github.com/babel/babelify).

To run the app, spin up an HTTP server or simply open the index.html file in a browser.