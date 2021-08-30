# Scripts for managing Netlify sites using the Netlify API

### Get started

- Requires: [Node.js](https://nodejs.org/en/)
- Install: `npm install`
- Create a [.env](.env) file and add your [Netlify Access Token](https://app.netlify.com/user/applications/personal) (see [.env.example](.env.example))

### Scripts

- [update-build-images.js](update-build-images.js) - Update the build image (Ubuntu) for all Trusty sites, or defined sites. Based on [this Netlify Forums answer](https://answers.netlify.com/t/please-read-end-of-support-for-trusty-build-image-everything-you-need-to-know/39004/25?u=jinksi)by [@hrishikesh](https://answers.netlify.com/u/hrishikesh). Adjust variables in the script file and then run `node update-build-images.js`.
