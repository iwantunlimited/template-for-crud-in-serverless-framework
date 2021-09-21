# Template for CRUD Serverless Framework for AWS in NodeJS Example

This template is for demonstrating how can the crud functions is created in node js and deploy on aws for serverless framework.

## Usage

## Some commands that you need to remember:

```
1.  git clone                   for cloning git
2.  npm i -f                    for installing package for node.js
3.  serverless offline          for testing your rest api locally
4.  serverless deploy           for deploying your api
```

### Clone

. First you need to clone the repo from git after that you need to run following command:

```
$ npm i -f
```

## In the clone you will find :

```

. node_modules
.src > controller > CRUD Files
.src > models --------------------------------------------------- CRUD model file
.src > utils > dataHandler > Error handler & Success Handler
.src > utils > dbAccess ----------------------------------------- db configuration file
.gitignore ------------------------------------------------------ git file
package.json ---------------------------------------------------- npm configuration file
README.md ------------------------------------------------------- documentation file
serverless.yml  ------------------------------------------------- serverless configuration file

```

### In controller folder you will find :

```
File          Method    Url

create.js     POST      /<prefix-url>
update.js     PUT       /<prefix-url>/{id}
delete.js     DELETE    /<prefix-url>/{id}
getById.js    GET       /<prefix-url>/{id}
getAll.js     GET       /<prefix-url>
active.js     GET       /<prefix-url>/active/{id}
inactive.js   GET       /<prefix-url>/deactive/{id}
```

## After cloning the git you need to do some configuration in your `serverless.yml` file

```
By removing <prefix-url> to your actual urls
```

## when you run `serverless offline` you will see such things in your cmd or terminal

```
Serverless: Running "serverless" installed locally (in service node_modules)
Serverless: Configuration warning:
Serverless:   at 'provider.region': should be equal to one of the allowed values [us-east-1, us-east-2, us-gov-east-1, us-gov-west-1, us-west-1, us-west-2, af-south-1, ap-east-1, ap-northeast-1, ap-northeast-2, ap-northeast-3, ap-south-1, ap-southeast-1, ap-southeast-2, ca-central-1, cn-north-1, cn-northwest-1, eu-central-1, eu-north-1, eu-south-1, eu-west-1, eu-west-2, eu-west-3, me-south-1, sa-east-1]
Serverless:   at 'resources.Resources': unrecognized property '<TableName>'
Serverless:
Serverless: Learn more about configuration validation here: http://slss.io/configuration-validation
Serverless:
Serverless: Deprecation warning: Starting with next major, Serverless will throw on configuration errors by default. Adapt to this behavior now by adding "configValidationMode: error" to service configuration
            More Info: https://www.serverless.com/framework/docs/deprecations/#CONFIG_VALIDATION_MODE_DEFAULT
offline: Starting Offline: dev/<aws-region>.
offline: Offline [http for lambda] listening on http://localhost:3002
offline: Function names exposed for local invocation by aws-sdk:
           * create: template-for-serverless-crud-rest-api-dev-create
           * update: template-for-serverless-crud-rest-api-dev-update
           * getById: template-for-serverless-crud-rest-api-dev-getById
           * delete: template-for-serverless-crud-rest-api-dev-delete
           * active: template-for-serverless-crud-rest-api-dev-active
           * deactive: template-for-serverless-crud-rest-api-dev-deactive
           * getAll: template-for-serverless-crud-rest-api-dev-getAll

   ┌──────────────────────────────────────────────────────────────────────────────┐
   │                                                                              │
   │   POST   | http://localhost:3000/dev/prefix-url                              │
   │   POST   | http://localhost:3000/2015-03-31/functions/create/invocations     │
   │   PUT    | http://localhost:3000/dev/prefix-url/update/{id}                  │
   │   POST   | http://localhost:3000/2015-03-31/functions/update/invocations     │
   │   GET    | http://localhost:3000/dev/prefix-url/{id}                         │
   │   POST   | http://localhost:3000/2015-03-31/functions/getById/invocations    │
   │   DELETE | http://localhost:3000/dev/prefix-url/{id}                         │
   │   POST   | http://localhost:3000/2015-03-31/functions/delete/invocations     │
   │   GET    | http://localhost:3000/dev/prefix-url/active/{id}                  │
   │   POST   | http://localhost:3000/2015-03-31/functions/active/invocations     │
   │   GET    | http://localhost:3000/dev/prefix-url/deactive/{id}                │
   │   POST   | http://localhost:3000/2015-03-31/functions/deactive/invocations   │
   │   GET    | http://localhost:3000/dev/prefix-url                              │
   │   POST   | http://localhost:3000/2015-03-31/functions/getAll/invocations     │
   │                                                                              │
   └──────────────────────────────────────────────────────────────────────────────┘

offline: [HTTP] server ready: http://localhost:3000 🚀
offline:
offline: Enter "rp" to replay the last request
```

## This is your crusd function where you need to write your businness logic

```
* create: template-for-serverless-crud-rest-api-dev-create
* update: template-for-serverless-crud-rest-api-dev-update
* getById: template-for-serverless-crud-rest-api-dev-getById
* delete: template-for-serverless-crud-rest-api-dev-delete
* active: template-for-serverless-crud-rest-api-dev-active
* deactive: template-for-serverless-crud-rest-api-dev-deactive
* getAll: template-for-serverless-crud-rest-api-dev-getAll
```

## Given below is the local end-points where you can test your api

```
  ┌──────────────────────────────────────────────────────────────────────────────┐
  │                                                                              │
  │   POST   | http://localhost:3000/dev/prefix-url                              │
  │   POST   | http://localhost:3000/2015-03-31/functions/create/invocations     │
  │   PUT    | http://localhost:3000/dev/prefix-url/update/{id}                  │
  │   POST   | http://localhost:3000/2015-03-31/functions/update/invocations     │
  │   GET    | http://localhost:3000/dev/prefix-url/{id}                         │
  │   POST   | http://localhost:3000/2015-03-31/functions/getById/invocations    │
  │   DELETE | http://localhost:3000/dev/prefix-url/{id}                         │
  │   POST   | http://localhost:3000/2015-03-31/functions/delete/invocations     │
  │   GET    | http://localhost:3000/dev/prefix-url/active/{id}                  │
  │   POST   | http://localhost:3000/2015-03-31/functions/active/invocations     │
  │   GET    | http://localhost:3000/dev/prefix-url/deactive/{id}                │
  │   POST   | http://localhost:3000/2015-03-31/functions/deactive/invocations   │
  │   GET    | http://localhost:3000/dev/prefix-url                              │
  │   POST   | http://localhost:3000/2015-03-31/functions/getAll/invocations     │
  │                                                                              │
  └──────────────────────────────────────────────────────────────────────────────┘

```

# When you writting your business logic in this code you should inintilize your empty repo via `git init`
