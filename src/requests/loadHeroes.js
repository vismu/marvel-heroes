import crypto from 'crypto';
import fetch from 'isomorphic-fetch';

const privateKey = 'cd9c09d1f4329020058a36e66fc8c0e135b3de43';
const publicKey = '2ff9ea15aed6c3ad46f2566878b46074';
const limit = 50;
let offset = 0;

const createHash = timestamp =>
  crypto
    .createHash('md5')
    .update(timestamp + privateKey + publicKey)
    .digest('hex');

const parseHeroes = response =>
  response.data.results.map(
    ({ id, name, description, thumbnail }) => ({
      id,
      name: name || 'Name is missing',
      description: description || 'Description is missing.',
      img: `${thumbnail.path}.${thumbnail.extension}`,
      isFavourite: false,
    }),
  );

export default () => {
  const timestamp = +new Date();
  const hash = createHash(timestamp);

  return fetch(`http://gateway.marvel.com/v1/public/characters?ts=${
    timestamp
  }&apikey=${
    publicKey
  }&hash=${
    hash
  }&limit=${
    limit
  }&offset=${
    offset
  }`)
    .then((response) => {
      offset += 50;
      return response.json();
    })
    .then(parseHeroes)
    .catch(error => new Error(error));
};
