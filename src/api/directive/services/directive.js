'use strict';

/**
 * directive service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::directive.directive');
