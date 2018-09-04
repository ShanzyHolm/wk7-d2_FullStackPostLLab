Planning
Identify which files in the application you are going to need to modify and how you are going to test each modification as you go.

SERVER
-- server.js --

add:  const parser = require('body parser');
add:  app.use(parser.json())

-- create-router.js --

add:  CREATE:  router.post

CLIENT
  PUBLIC > SRC > VIEWS
-- sighting_form_view.js --

write: "handleSubmit" and "createSighting"

  PUBLIC > SRC > MODELS
-- sightings.js --

write: Sightings.prototype.postSighting

========================
How to test?

checking webpack, mongo, and server for errors
checking on webpage console for error codes
  testing functionality on the webpage
using insomnia to test the POST function
