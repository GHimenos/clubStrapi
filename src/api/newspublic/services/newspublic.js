'use strict';

/**
 * newspublic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newspublic.newspublic');
