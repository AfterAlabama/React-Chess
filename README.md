# React-Chess
Building Chess with React + Typescript + Sass + Webpack on the OOP basis

To start a development server:
```bash
  npm run dev
```

To launch production: 
```bash
  #to create the prod build
  npm run build
  #then off to the build folder
  cd <build directory>
  #and finally start a server
  npx serve
```

To test The app:
```bash
  npm run test
```

Live Demo : https://remarkable-sorbet-0aa2be.netlify.app/



# Info
1) Chess + Checkers Games is built using the OOP and, configured with webpack. Style is done with scss modules.
2) [Types](https://github.com/AfterAlabama/React-Chess/tree/master/src/types) foolder contains all the props and enums, and mixins
3) Hooks folder contains two hooks: [imagePreloader](https://github.com/AfterAlabama/React-Chess/blob/master/src/hooks/imagePreloader.ts) hook that is used to first load pics and then display the component content, and [isSecondRender](https://github.com/AfterAlabama/React-Chess/blob/master/src/hooks/isSecondRender.ts) hook that gauges if the first render has passed. It's mainly used for checkmate logic in checkers
4) [Game](https://github.com/AfterAlabama/React-Chess/tree/master/src/game) folder contains all the logic and piece objects neccessary for the game
5) The project is wrapped in [Error Boundary](https://github.com/AfterAlabama/React-Chess/blob/master/src/components/ErrorBoundary/ErrorBoundary.tsx)
6) The project uses [React Suspense](https://github.com/AfterAlabama/React-Chess/blob/master/src/components/Main%20Page/Router/AppRouter.tsx) for game components
7) The project is tested with Jest, and currently has 139 unit + integrational tests
