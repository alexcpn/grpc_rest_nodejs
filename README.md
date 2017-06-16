# grpc_rest_nodejs
A simple TypeScipt - Node.Js based GRPC clinet that also exposes a RESTful North bound interface of Front end client.This illistrates simple Gulp file and TSLint integration. IDE use VS Code

#Steps Followed

Create an empty director ianywhere for Code

Use VS Code and Open the folder

Use the instructions here to create a TSConfig , but using Gulp 
https://code.visualstudio.com/docs/languages/typescript

Read and follow basic gulp file creation from here https://www.typescriptlang.org/docs/handbook/gulp.html; do not install browserify ; we are creating a backend Node.JS module. No need to mix front end and backend together.

Now we have setup Gulp

Install tslint; follow  https://palantir.github.io/tslint/usage/cli/

Do tslint --init to create configuraiton file; 
 
Adding tslint support to GULP follow http://kerryritter.com/getting-started-with-typescript-and-gulp/
 
 https://github.com/panuhorsmalahti/gulp-tslint
 
The gulp-tslint plugin outputs to conosle. To output to check_style.xml for better integration to build tools use https://www.npmjs.com/package/gulp-tslint-jenkins-reporter

Now run Gulp; It should compile; If you un-comment the ovveriden rule in tslint.json  "no-console": false, when you run Gulp build should thorw an error

Console.log is okay for backend Node.js applications



