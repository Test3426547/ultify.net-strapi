'use strict';

/**
 * directive controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::directive.directive');
