# 2022 Google Solutions Challenge Project

setup

in bash

```
# Download Git, Git Bash (or any terminal, but Git comes with this and it's
# pretty decent), and NPM and Node.js

# Git - https://git-scm.com/
# Node.js/NPM - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
# -- See the section "Using a Node installer to install Node.js and npm", its simplest

cd Some/Folder/On/Your/Computer

# Download all the files from this repository into a folder called Google-Solutions
git clone https://GITHUB_USERNAME@github.com/MichaelLin12/Google-Solutions.git
# If you don't have a github account and don't plan on writing any code, you can
# leave out the 'GITHUB_USERNAME@' part, and just write 'https://github.com etc'
# If you don't have a github account but DO plan on writing code... get one!

cd Google-Solutions

# Set up your username and email -- this should be the same as used for your github account
# As above, if you don't have a github account and don't plan on writing code, you can skip this step
git config user.name 'Your Name'
git config user.email 'YourEmail@example.com'

# Set up the files used for the web app
cd solutions
npm install
# above command might take a bit, it has to download all the things used by our web app

npm start
# Start our web app. Open your browser and type in localhost:3000 to try it out!
```

## Tips and useful links for working on the app

### Git / GitHub

[Guide for Git](https://www.atlassian.com/git/tutorials/what-is-version-control)

GitHub is a website that hosts your Git repository/project

### Progressive Web App (PWA)

A PWA is basically just a website that has a bunch of extra features that let it have the same powers
as a normal application on your computer or phone. E.g. Appearing as a link on your home screen,
sending notifications, or working even if you are not connected to the internet. We are still researching
exactly how to make a website into a PWA and use all of the features so this section will be expanded upon
once we know what the heck we're even talking about.

### Offline mode

One feature of progressive web apps is being able to work offline. Normally, if you load a website
and you aren't connected to the internet, you can't see it (obviously) because your computer has no way
to actually connect to the website's servers and ask it what the webpage is supposed to have in it. However,
with PWA you can ask the web browser to automatically save the webpage on the user's computer so that
when they open it again, the browser can simply load the page from disk instead of having to ask for it over
network, thus providing offline capability

ask max if you have any questions

For offline mode to work (and thus, for you to verify that it is working), you need 2 things:
-The web app is hosted on a specific domain, that is also specified in
the source code
-Built in production mode(for whatever reason) -- i.e. It won't work if
you use 'npm start'; you have to use 'npm build'

For the first one: The domain is stored in the solutions/.env file with
the key PUBLIC_URL. For now I left it as http://localhost:3000, so we
are expecting that the PWA will be hosted on port 3000. Once we get an
actual domain(theoretically) we would update PUBLIC_URL to e.g.
https://our-domain-for-google-solutions.com.

For the second note: This is where it gets slightly more complicated to
test the PWA, because you can't simply do "npm start" and it immediately
works. Instead, you must first run "npm build" which will do a
production build of the app and store it in the "solutions/build"
folder. This will take around 30 seconds or so (at least on my
computer). Then, you have to find a way to host these built files on the
port 3000 (or, once we have the domain, upload it to the web server).

The way I hosted it on 3000 was to download 'serve' from npm, i.e. 'npm
add --global serve'. This is a program that makes a webserver hosting
the files from a directory on your computer. Cd into the build folder
and run 'serve -l 3000' and navigate to localhost:3000 in your browser.
You should see the app! Now for the offline part-- this is how you know
it is working. Stop(Ctrl+C) the 'serve' so now its no longer hosting the
files. If yo refresh the page in the browser you will still see the app,
even though localhost:3000 no longer exists! Let me know if you have any
trouble testing this

For reference (Dont worry about the exact code too much because we
copied ours from create-react-app and its gonna be slightly different,
just useful for the concepts)
https://codingthesmartway.com/getting-started-with-progressive-web-apps-pwa/
