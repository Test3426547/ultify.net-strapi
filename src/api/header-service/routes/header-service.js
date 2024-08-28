'use strict';

/**
 * header-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::header-service.header-service');
