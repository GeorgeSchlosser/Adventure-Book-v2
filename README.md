# Adventure-Book-v2
A MERN-based Choose-Your-Own-Adventure web application that strives to engage the reader.
Deployed Link: http://adventure-book-v2.herokuapp.com/

## Table of Contents
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [User Interface](#user-interface)
* [API Documentation](#api-documentation)
* [Game Master's Console](#game-master's-console)
* [Libraries Used](#libraries-used)
* [Future Development](#future-development)

## Prerequisites
* [MongoDb](https://www.mongodb.com/)
* [NodeJS](https://nodejs.org/)
* [NPM](https://www.npmjs.com/products)
* [Git](https://github.com/) (*optional*)

## Installation

1. Download or clone the respository
1. Run `npm install` from the repository's local root folder to install the application dependencies
1. Run `npm start` from the root of the local repository folder to start the application

## User Interface
(...screenshot here...)

### Application URLs
|URL|Description|
|---|-----------|
|<hostname>/        | Start of the applicaton, currently redirects to /story |
|<hostname>/login   | Login page for users to start their adventure |
|<hostname>/register| Registration page for users to create an account |
|<hostname>/story   | Start of the game |
|<hostname>/admin   | Game Master's Console (admin page) |

## API Documentation
The following API routes are exposed when running the React application locally. API routes may be accessed using port 3001:

|Route|Method|Description|
|-----------------------------------|-----|--------------------------------------|
|<hostname>/api/register            | POST| Registers a new user object to the userCollection in the database|
|<hostname>/api/login               | GET | Registers a new user object to the userCollection in the database|
|<hostname>/api/seed/\<key>          | GET | Seeds database with default story data; Key should match passkey as defined in /routes/seed.js|
|<hostname>/api/seed/\<key>          | POST| Seeds database with new game data (sent as JSON) Key should match passkey as defined in /routes/seed.js|
|<hostname>/api/stats               | GET | Returns current database stats as JSON|
|<hostname>/api/story/<scene number>| GET | Returns requested scene/chapter as JSON. Scene number corresponds to `id` field of scene object.|
|<hostname>/api/story/all           | GET | Returns the complete game decision tree as JSON data|

## Game Master's Console
Write your own custom text-based adventures and upload them using the "Game Master's Console". The console utilizes
the [cytoscape] javascript library, which can aid:
* Viewing the overall 'shape' of a story-board
* Spotting inconsistencies or logical errors in the story progression
* Identify errors in uploaded story json which may not be immediately apparent in testing 

### Usage Notes
* Supported File Types: txt, json
* Supported Character Encoding: UTF-8, ANSI

### Uploaded Story JSON Definitions
|Key    |   Required    |   Definition|
|-------|---------------|-------------|
|story  |   *YES*         | Uploaded JSON must consist of a single object with a key named "story" having a value of an array of objects. Each object in the array represents a single game 'scene' or 'chapter'
|id     |   *YES*         | The id is the primary identifier for each scene in a story
|scene_title|*YES*        | The scene_title may be shown at the top of each scene as a user progresses through the story
|scene_text| *YES*        | The scene_text holds the main text of each scene
|next_scene| *YES*        | The next_scene holds a number that matches the `id` of the next scene. Players may progress to the next scene if their choice is correct.
|correct_choice| *YES*    | If a user picks the `correct_choice` for a given scene, they will progress to the next scene. Example: `"correct_choice": "choice_a"`
|choice_a|  *YES*         | Text representing a possible user choice; Displayed in a button
|choice_b|  *YES*         | Text representing a possible user choice; Displayed in a button
|wrong_choice_result| *YES*| If a users picks an incorrect choice (that which does not match `correct_choice), this text will be displayed to the user as the story ends.
|image_url| *YES*          | An image per scene may be copied into /client/public/images. Each scene may specify an image to be display along with the story. Example `"image_url": "./client/public/images/chapter1.jpg"`

### Current JSON Schema
Version 1
```
{ "story":
	[
		{
			"id": INTEGER,
			"scene_title": STRING,
			"scene_text": STRING,
			"next_scene": INTEGER,
			"correct_choice": STRING,
			"choice_a": STRING,
			"choice_b": STRING,
			"wrong_choice_result": STRING,
            "image_url": STRING
		}
	]
}
```
## Libraries Used
### Front-End
* [react](https://www.npmjs.com/package/react) - JavaScript library for building user interfaces
* [react-dom](https://www.npmjs.com/package/react-dom) - React package for working with the DOM.
* [react-dropzone](https://www.npmjs.com/package/react-dropzone) - Simple HTML5 drag-drop zone with React.js
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router
* [react-scripts](https://www.npmjs.com/package/react-scripts) - Configuration and scripts for Create React App.
* [reactjs-popup](https://www.npmjs.com/package/reactjs-popup) - React Popup Component
* [cytoscape](https://www.npmjs.com/package/cytoscape) - Graph theory (a.k.a. network) library for analysis and visualisation

### Back-End
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework
* [if-env](https://www.npmjs.com/package/if-env) - Simplify npm scripts with "if-env ... && npm run this || npm run that"
* [mongoose](https://www.npmjs.com/package/mongoose) - Mongoose MongoDB ODM

## Future Development

* Extended metadata for uploaded games
* Support for 2+ choices per scene
* Support for background music/fx that accompany each scene
* Support for a game "splash" screen that appears at the start of the game progression

```
{
    "info": {
        "game_title": STRING,
        "sub_title": STRING,
        "description": STRING,
        "company": STRING,
        "copyright": INTEGER,
        "creators": [
            STRING
        ]

    },    
    "story":
        "[
            {
                "id": INTEGER,
                "scene_title": STRING,
                "scene_text": STRING,
                "next_scene": STRING,
                "wrong_choice_result": STRING,
                "image_file": STRING,
                "bg_sound": STRING,
                "choices": [
                    STRING
                ]
            }
        ]"
}
```