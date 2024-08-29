import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    Address1: Attribute.String;
    Address2: Attribute.String;
    Address3: Attribute.String;
  };
}

export interface ServiceDetailsServiceDetails extends Schema.Component {
  collectionName: 'components_service_details_service_details';
  info: {
    displayName: 'ServiceDetails';
  };
  attributes: {
    Heading: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.address': AddressAddress;
      'service-details.service-details': ServiceDetailsServiceDetails;
    }
  }
}
