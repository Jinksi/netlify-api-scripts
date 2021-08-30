const fetch = require('node-fetch')
const NetlifyAPI = require('netlify')
require('dotenv').config()

const AccessToken = process.env.NETLIFY_ACCESS_TOKEN
const buildImage = '"focal"' // xenial for default, focal for latest
const sitesToChange = [] // leave blank to change all websites using Trusty

function manageChange(site) {
  new Promise((resolve) => {
    fetch(`https://api.netlify.com/api/v1/sites/${site.id}`, {
      method: 'PUT',
      body: `{"build_image": ${buildImage}}`,
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw response.statusText
        }
      })
      .then(() => {
        console.log(`Build image for ${site.name} is now set to ${buildImage}`)
        resolve(site)
      })
      .catch((error) => {
        console.log(error)
      })
  })
}

new NetlifyAPI(AccessToken).listSites().then((sites) => {
  sites.forEach((site) => {
    if (sitesToChange.length > 0) {
      if (sitesToChange.includes(site.name)) {
        manageChange(site)
      }
    } else if (site.build_image === null) {
      manageChange(site)
    }
  })
})
