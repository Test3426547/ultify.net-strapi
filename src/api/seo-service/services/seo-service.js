'use strict';

/**
 * seo-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seo-service.seo-service');
