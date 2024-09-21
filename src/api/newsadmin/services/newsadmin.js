'use strict';

/**
 * newsadmin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsadmin.newsadmin');
