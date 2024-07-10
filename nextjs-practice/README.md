# Next.js Practice

## Overview

- The document will describe in detail the technical stack and how init this source.
- Design for Products Shop: [link](https://www.figma.com/design/WZCuDfoVSQkG8pEMWzqvR3/Core---Dashboard-Builder-(Copy)?node-id=0-1&t=Rze3fxqKfK4LEQWz-0)

## Technical

- Typescript: v5
- React: v18
- Next: v14
- Next-auth: v5
- react-hook-form: v7
- Material UI: v5
- storybook: v8
- vitest: v1


## Editor

- Vs Code

## Folder Structure

```
public
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
src
|
+-- api               # exported API request declarations and api hooks related to a specific feature
|
+-- components        # shared components used across the entire application
    |
    +-- forms         # shared forms components used some places
    |
    +-- layouts       # layout components used some places
    |
    +-- ui            # common components used across the entire application
|
+-- app               # application routes
|
+-- lib               # library folder contain validation rules and actions
|
+-- hooks             # shared hooks used across the entire application
|
+-- mocks             # mocking data
|
+-- contexts          # global context
|
+-- constants         # global constants
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
|
+-- services          # client service
```

## Target

- Learn and practice with Next.js
- Next-auth for users authentication and authorized 
- Optimizing Page Speed Score Performance


## Getting Started

Clone Repository

```
    git clone git@gitlab.asoft-python.com:tung.nguyen/nextjs-training.git
```

Checkout branch

```
    git checkout develop
```

Install Dependencies

```
    npm install
```

Run the development server:

```
    npm run dev
```

Run Unit Test:

```
    npm run test
```

Start test coverage

```
    npm run test:coverage
```

Run Storybook:

```
    npm run storybook
```

Open with browser

```
    Web app runs locally on port 3000: http://localhost:3000/
```

Testing app with user seeded

```
    Email: user1@gmail.com
    Password: User123@
```

## Author

- Tung Nguyen
