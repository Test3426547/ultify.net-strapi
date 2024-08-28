'use strict';

/**
 * header-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-service.header-service');
