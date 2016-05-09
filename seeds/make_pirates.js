exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({
        name: 'Bad Bud',
        poison: 'Taquila',
        accessory: 'hot temper',
        image_url: 'https://s-media-cache-ak0.pinimg.com/236x/0b/b7/8f/0bb78f8fe522ee4274377cbe5f0c116b.jpg'
        }),
    knex('pirates').insert({
        name: 'Likly Lincoln',
        poison: 'mead',
        accessory: 'incredible abs',
        image_url: 'https://s-media-cache-ak0.pinimg.com/236x/4d/bc/2d/4dbc2d7927e016742d94be7a406bf448.jpg'
        }),
    knex('pirates').insert({
        name: 'Cute Conrad',
        poison: 'Rum',
        accessory: 'handlebar mustache',
        image_url: 'http://rs1185.pbsrc.com/albums/z351/Madam_Valkyrie/Fantasy%20Art%20-%20Pirate/pirate_signature_by_jaguardesignfx-d5aro9e_zps716340f6.png~c200'
        })
  );
};
