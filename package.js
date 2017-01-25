Package.describe({
	name: "kilometers:bootstrap-growl"
	, version: "0.1.4"
    , summary: "Pretty simple jQuery plugin that turns standard Bootstrap alerts into Growl-like notifications."
});

Package.onUse(function (api) {
    api.use('jquery@1.0.11', 'client');
    api.addFiles([
        'lib/jquery.bootstrap-growl.js'
    ], 'client');
});
