# Graeme's Social Network API
  ## By Graeme Montrose!

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Contributors](#contributors)
- [License](#license)

  <a id="description"></a>
  ## Project Description
  ---------------------------------
  ### This server structure is intended to be the back-end of a social media app, with routes for performing CRUD operations on users, their friends, their thoughts, and reactions to said thoughts.

  <a id="installation"></a>
  ## Installation Instructions
  -----------------
  ### run npm i

  <a id="usage"></a>
  ## User Instructions
  -----------------
  ### all routes start with /api. adding /user onto that will enable 'get all' and 'post' routes, while adding a specific user's MONGODB id allows for geting a single user, updating or deleting. To add or delete a friend, the route is /api/user/:userId/friends/:friendId. For thoughts, /thought allows for creating and getting all, while adding a thought's id allows for getting a single thought, updating or deleting. Adding a reaction requires /api/thought/:thoughtId/reactions, while deleting it requires adding that reaction's MONGODB id onto that.

  <a id="demonstration"></a>
  ## Demonstration
-----------------------------------
  ### Links and Screenshots go here

  <a id="contributors"></a>
  ## Contribution Credits
  -----------------------
  ### Graeme Montrose, George Yoo, Daniel Mrva.

  <a id="questions"></a>
  ## For Questions
---------------------------------
  ### My Github Profile is here: (https://github.com/ThreeBrainCells)
  ### My email is here: [Graeme's Email](mailto:teentrose@gmail.com)
  
  <a id="license"></a>
  ## Licensing
  ----------------------------
  ## ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
        More info: https://opensource.org/licenses/MIT