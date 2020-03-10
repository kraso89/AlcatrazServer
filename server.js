const Koa = require('koa');
const app = new Koa();
const weather = require('./controllers/weather');
const route = require('koa-route');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
require('dotenv').config()

app.use(route.get('/weather', async (ctx, next) => {
  try {
    const { city } = ctx.request.query
    let result
    if( myCache.has(city) ) {
      result = myCache.get(city)
    } else {
      result = await weather.fetch(ctx.request.query.city);
      // ttl 3 hours(10800) ( datapoint difference in openweather )
      myCache.set( city, result, 10800 )
    }
    ctx.body = result;
  } catch (err) {
    ctx.throw(400, 'Could not fetch weather');
  }
}));

app.listen(3700);
