import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    icon: 'alien';
  };
  attributes: {
    Header: Attribute.String;
    Body: Attribute.Text;
    Link: Attribute.String;
  };
}

export interface LinksLinks extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Links';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Pill_text: Attribute.String;
    Link: Attribute.String;
  };
}

export interface PillsPills extends Schema.Component {
  collectionName: 'components_pills_pills';
  info: {
    displayName: 'Pills';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.header': HeaderHeader;
      'links.links': LinksLinks;
      'pills.pills': PillsPills;
    }
  }
}
