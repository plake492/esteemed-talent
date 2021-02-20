module.exports = {

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/jobs'],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true
    }
  }
}
