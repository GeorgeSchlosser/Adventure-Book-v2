# Adventure-Book-v2
A MERN-based Choose-Your-Own-Adventure web application that strives to engage the reader.

## Table of Contents
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [User Interface](#user-interface)
* [API Documentation](#api-documentation)
* [Game Master's Console](#game-master's-console)
* [Libraries Used](#libraries-used)

## Prerequisites
* [MongoDb](https://www.mongodb.com/)
* [NodeJS](https://nodejs.org/)
* [NPM](https://www.npmjs.com/products)
* [Git](https://github.com/) (optional)

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
|<hostname>/api/register            | POST | Registers a new user object to the userCollection in the database|
|<hostname>/api/login               | GET | Registers a new user object to the userCollection in the database|
|<hostname>/api/seed/<key>          | GET |Seeds database with default story data|
|<hostname>/api/seed/<key>          | POST |Seeds database with new game data (sent as JSON)|
|<hostname>/api/stats               | GET | Returns database stats as JSON|
|<hostname>/api/story/<scene number>| GET | Returns requested scene/chapter as JSON. Scene number corresponds to `id` field of scene object.|
|<hostname>/api/story/all           | GET | Returns the complete game decision tree as JSON data|

## Game Master's Console
Write your own custom text-based adventures and upload them using the "Game Master's Console".

* Supported File Types: TXT, JSON
* Character Encoding: UTF-8, ANSI


### Current JSON Schema
Version 1
```
{ "story":
	[
		{
			"id": INTEGER
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

### Upcoming Version (with support for 2+ scene choices)

```json
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
    "seeds":
        "[
            {
                "id": INTEGER,
                "scene_title": STRING,
                "scene_text": STRING,
                "next_scene": STRING,
                "wrong_choice_result": STRING,
                "image_file": STRING,
                "choices": [
                    STRING
                ]
            }
        ]"
}
```