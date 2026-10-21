# react-chrome-dino

## Usage:

![](screenshots/screenshot.png)

Demo: https://mhasbini.com/miscs/react-chrome-dino-demo/index.html

Install:

```
yarn add react-chrome-dino
```

```js
import React from 'react';
import ChromeDinoGame from 'react-chrome-dino';

const App = () => (
  <ChromeDinoGame />
);

export default App;
```

Check [`src/demo`](src/demo) for a usage example.

## Game features

The game is Chrome's offline T-Rex runner (from Chromium 72), with:

- **Pterodactyls** that fly in at different heights once you reach speed. Press **↓** to duck under the low ones.
- **Night mode**, which switches on every 700 points with a moon and stars.
- **Shield power-up**: a blue shield floats in at jump height every 8 to 16 seconds. Jump into it and the next obstacle you hit is destroyed instead of ending the run. A small shield icon in the top-left shows when it's active.

Controls: **Space**/**↑** to jump, **↓** to duck (or to drop quickly mid-jump), **Enter** to restart. Tap to jump on touch screens.

## License

This library is licensed under MIT.

The game javascript & css is licensed under BSD as follow:

```
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file here: https://cs.chromium.org/chromium/src/LICENSE. 
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test` or `yarn run test`

Runs the test watcher in an interactive mode.

### `npm run build` or `yarn build`

Builds the library for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm publish`

Publishes the library to NPM.
