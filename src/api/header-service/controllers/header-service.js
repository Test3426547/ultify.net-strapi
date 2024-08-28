'use strict';

/**
 * header-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::header-service.header-service');
