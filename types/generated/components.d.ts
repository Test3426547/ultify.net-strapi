import type { Schema, Attribute } from '@strapi/strapi';

export interface PhotoLinkPhotoLink extends Schema.Component {
  collectionName: 'components_photo_link_photo_links';
  info: {
    displayName: 'PhotoLink';
  };
  attributes: {
    Photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Attribute.String;
  };
}

export interface PhotoLinkCards extends Schema.Component {
  collectionName: 'components_photo_link_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Attribute.String;
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

export interface ServiceCardServiceCard extends Schema.Component {
  collectionName: 'components_service_card_service_cards';
  info: {
    displayName: 'ServiceCard';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Body: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Link: Attribute.String;
  };
}

export interface PillPill extends Schema.Component {
  collectionName: 'components_pill_pills';
  info: {
    displayName: 'Pill';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Text: Attribute.String;
    Link: Attribute.String;
  };
}

export interface GuaranteesGuarantees extends Schema.Component {
  collectionName: 'components_guarantees_guarantees';
  info: {
    displayName: 'Guarantees';
  };
  attributes: {
    Heading: Attribute.String;
    Body: Attribute.Text;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Question: Attribute.String;
    Answer: Attribute.Text;
  };
}

export interface FieldsOptions extends Schema.Component {
  collectionName: 'components_fields_options';
  info: {
    displayName: 'Options';
  };
  attributes: {
    Heading: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subheading: Attribute.String;
    Body: Attribute.Text;
    Points: Attribute.Component<'body.body', true>;
  };
}

export interface CardsSeo extends Schema.Component {
  collectionName: 'components_cards_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.String;
  };
}

export interface CardsBlog extends Schema.Component {
  collectionName: 'components_cards_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Badge: Attribute.String;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Text: Attribute.String;
    Link: Attribute.String;
  };
}

export interface BodyTitle extends Schema.Component {
  collectionName: 'components_body_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    Heading: Attribute.String;
    Body: Attribute.Text;
  };
}

export interface BodyBody extends Schema.Component {
  collectionName: 'components_body_bodies';
  info: {
    displayName: 'Body';
  };
  attributes: {
    Body: Attribute.Text;
  };
}

export interface AboutUsCardAboutUsCard extends Schema.Component {
  collectionName: 'components_about_us_card_about_us_cards';
  info: {
    displayName: 'AboutUsCard';
  };
  attributes: {
    Number: Attribute.Integer;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'Address';
    description: '';
  };
  attributes: {
    Address1: Attribute.String;
    Address2: Attribute.String;
    Address3: Attribute.String;
    Link: Attribute.Component<'link.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'photo-link.photo-link': PhotoLinkPhotoLink;
      'photo-link.cards': PhotoLinkCards;
      'service-details.service-details': ServiceDetailsServiceDetails;
      'service-card.service-card': ServiceCardServiceCard;
      'pill.pill': PillPill;
      'link.link': LinkLink;
      'guarantees.guarantees': GuaranteesGuarantees;
      'faq.faq': FaqFaq;
      'fields.options': FieldsOptions;
      'cards.seo': CardsSeo;
      'cards.blog': CardsBlog;
      'body.title': BodyTitle;
      'body.body': BodyBody;
      'about-us-card.about-us-card': AboutUsCardAboutUsCard;
      'address.address': AddressAddress;
    }
  }
}
