Package.describe({
  summary: 'Wrapper for Raphael.js'
});

Package.on_use(function(api) {
  api.use(['jquery']);
  api.add_files(['graphael.js','gbar.js','gdot.js','gline.js','gpie.js'], ['client']);
  api.export('Raphael', 'client');
});
