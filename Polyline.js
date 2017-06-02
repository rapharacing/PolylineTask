var polyline = require('@mapbox/polyline');

module.exports = function(ctx, cb) {
  // returns a string-encoded polyline from GeoJSON
  ctx.data.input.polyline = polyline.fromGeoJSON(ctx.data.input.geoJSON);

  console.log(ctx.data.input);
  cb(null, ctx.data);
};