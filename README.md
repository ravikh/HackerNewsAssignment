# XT Summit Web

## Local setup

- `git clone git@github.com:areai51/xts-web.git`

- `yarn`

- `yarn dev`

## Branching strategy

We follow Github Flow(https://guides.github.com/introduction/flow/), when working on a ticket,

- Checkout out master `git checkout master`
- Pull the latest master `git pull`
- Create your feature branch `git checkout -B <my-branch-name>`

## Data

For most of our static data, like about us, venue, talks etc. we will simply store them as json files in the `pages/api/data` folder.

## API

We will write all our APIs in the `pages/api` folder which is available at `http://localhost:3000/api/getTalks`
These apis will be consumed by both mobile and web to render the content.
