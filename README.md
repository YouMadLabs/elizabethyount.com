NextJS Starter is a starter project containing every configurations you might want for your PWA Ready NextJS app.

# Installation:
The installation only requires to download the project dependencies through npm or yarn running:

```bash
$ cd nextjs-starter
$ npm install
```

Or

```bash
$ cd nextjs-starter
$ yarn install
```

# Building:
## Development:
### Hot reload

```bash
$ yarn dev-hot
```

Or

```bash
$ npm run dev-hot
```

### Server Side Rendering
```bash
$ yarn dev
```

Or

```bash
$ npm run dev
```

## Production:
For production, you first need to create an SSL certificate for your domain. The fastest and most inexpensive option is to use [Let's Encrypt](https://letsencrypt.org/). When you're done producing your SSL certificate, make sure that your domain is defined in __config/server.js__. You can modify this file the following way :
```javascript
const serverConfig = {
  domain: 'mydomain.com' // <-- your domain name here
}
```

### Testing production

```bash
$ yarn prod
```

Or

```bash
$ npm run prod
```

### Deploying production
Make sure that you have [forever](https://www.npmjs.com/package/forever) installed globally, then run :

```bash
$ yarn start-prod
```

Or

```bash
$ npm run start-prod
```

# Images support
The following lines :

```javascript
const picture = require('../static/my-picture.jpg')
console.log(picture)
```

Will produce the following result :
```javascript
{
  src:{
    preview:'data:image/svg+xml...'
    src:'...jpg'
  },
  trace:'data:image/svg+xml...'
}
```

The trace and the preview are light svg files meant to be used as placeholder during pictures lazy loading.
The trace is a flat shape which you can define the color in the project webpack settings.
The preview is a blur version of your picture.
The src is the normal url of your file.
