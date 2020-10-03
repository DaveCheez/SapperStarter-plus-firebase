import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';


const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const sapperServer = express()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
if (dev) {
  sapperServer.listen(PORT, err => {
    if (err) console.log('error', err);
  });
}

export { sapperServer }


// You can also use Polka
// polka()
// 	.use(
// 		compression({ threshold: 0 }),
// 		sirv('static', { dev }),
// 		sapper.middleware()
// 	)
// 	.listen(PORT, err => {
// 		if (err) console.log('error', err);
// 	});
