import { Mongo } from 'meteor/mongo';

export default (Links = new Mongo.Collection('links'));

export const grapherLinks = Links.createQuery(
  'grapher-links',
  {
    url: 1,
    title: 1
  },
  { scoped: true }
);
