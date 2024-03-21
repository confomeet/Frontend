# Local deployment for development
To have a usable dev experience you must have live reload provided by webpack dev server.
In order to start one _package.json_ provides you with a script _start_. So you type command
```
$ yarn run start
```
It takes some time to transpile the whole project to a single bundle and then opens a new tab in your
system default browser where the application is opened.

Since authorization dependes on browser cookies you need to have your backend and frontend avaialable
on the same host:port pair. For local deployment it is localhost. But since backend is hosted separately
you also need to configure dev server api proxy. It has been done in `package.json`: since
backend is started on port 5000 by default, the variable `proxy` in `package.json` contains the value
`http://localhost:5000`, feel free to change it appropriately if it is desired.
