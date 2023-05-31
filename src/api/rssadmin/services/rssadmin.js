'use strict';

/**
 * rssadmin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rssadmin.rssadmin');
