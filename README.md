# Pomanager

## frontend
React

https://github.com/Schukuratsu/pomar-webapp

## backend
hapijs
MongoDB

https://github.com/Schukuratsu/pomar-api

## setup

### configure your *.env*

rename the 'dotenvexample.txt' to '.env' and change it if you need a different config.

### install the dependencies

    yarn

### start the server

    yarn start

> the *pomar-api* server needs to be running to be able to do something here.

### run end-to-end tests

You can run e2e tests with

    yarn s-test

> I recommend running the tests on a clean database, check the *pomar-api* docs for more details.

## About the app

Pomanager is an app to manage and log your harvests.

It's very straight forward, add new species of plants you own, add plants individually, you can make a group out of them if you usually harvest them on the same day, then add logs of your harvests.

You can check your logs whenever you want by clicking on *generate report*. expand to see more data or filter to find what you are looking for.