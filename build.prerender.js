module.exports = (api, options) => {
  api.registerCommand('build:prerender', async (args) => {
    const path = require('path')
    const axios = require('axios')
    const PrerenderSPAPlugin = require('prerender-spa-plugin')
    const jobs = await axios.get('https://esteemed-api-97dnt.ondigitalocean.app/jobs')
    api.chainWebpack(config => {
      config.plugin('prerender').use(PrerenderSPAPlugin, [{
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, 'dist'),
          // Required - Routes to render.
          routes: ['/jobs/']
            .concat(jobs.data.map(job => `/jobs/${job.id}`))
        }])
    })
    
    await api.service.run('build', args)
  })
}

module.exports.defaultModes = {
  'build:prerender': 'production'
}
