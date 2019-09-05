# Deployment

## Make Port Dynamic

## Set up Continuous Deployment on Heroku

make changes > commit and push > gets deployed

### Steps

- create new app on heroku
- In "Deploy" tab, click on Github and authorize access
- Search for your repo and connect it
- choose the branch to deploy and click "Enable Automatic Deplots"
- Click "deploy branch"
- go to the "Overview" tab
- once it is deployed, click on "Open App" on top right

heroku logs --tail
npx heroku
npx heroku logs -a appname --tail (install for this app)
npm -i heroku
