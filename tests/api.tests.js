const { it } = require('mocha');
const { spec } = require('pactum');

it('blog api request could be fetched', async () => {
    await spec()
    .get('https://dummyjson.com/posts/1')
    .expectStatus(200);
})

it('images are not broken', async () => {
    await spec()
    .get('https://picsum.photos/960/400?random={id}')
    .withPathParams('id',1)
    .expectStatus(403);
})