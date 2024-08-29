'use strict';

/**
 * digital-world service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::digital-world.digital-world');
