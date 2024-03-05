
import { Strapi } from '@strapi/strapi';
/**
 * `landing-page-populate` middleware
 */
const populate_qry={
                       metadata: {
                         populate: {
                           image: {
                             populate: true,
                             fields: ["name", "alternativeText","url"],
                           }
                         }
                       },
                       blocks: {
                         populate: {
                           link:{
                             populate: true
                           },
                           image: {
                             fields: ["name", "alternativeText","url"],
                           },
                           card: {
                             populate: {
                               image: {
                                 fields: ["name", "alternativeText","url"],
                               }
                             }
                           },
                           plan: {
                             populate:["services","link" ],
                           },
                           form: {
                             populate:["input","button" ],
                           }
                         }
                       }
                     };
export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query={
      populate_qry,
      ...ctx.query
    }
    await next();
  };
};
