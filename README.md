How create a project to github:
1.Create Repo in GitHub
  -Login to your GitHub account
  -Create the new repo by clicking the "+" icon at the right top of the page
  -Enter the repo name as yourusername.github.io and choose whether the repo should be public or private
  -Click on the "Create repository" button
  -Now your repo has been created
2.Create React Application
3.Deploy the React Application
  -Add GitHub Pages dependency package
  -Add GitHub Pages dependency package
  -Add homepage property to package.json file
    *Add the below property to your package.json file
    "homepage": "https://{test's name}.com"
  -Add deploy scripts to package.json file
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  -Create a remote GitHub repository
    *git init
    *git remote add origin your-github-repository-url.git
  -Deploy the Application to GitHub Pages
    *npm run deploy
  -Access deployed site
    *Go to your GitHub Repo
    *Click Settings menu
    *Go to the "Pages" Section
    *You can see the "Your site is published" message
    *Select branch to "gh-pages" and click on the "Save" button
4.Commit and Push the codebase
  -git add .
  -git commit -m "commit message"
  -git push origin master
