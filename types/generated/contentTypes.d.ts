import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEzformsSubmission extends Schema.CollectionType {
  collectionName: 'ezforms_submission';
  info: {
    tableName: 'submission';
    singularName: 'submission';
    pluralName: 'submissions';
    displayName: 'Form Submissions';
    description: 'A Place for all your form submissions';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    score: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    formName: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    data: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::ezforms.submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::ezforms.submission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginEzformsRecipient extends Schema.CollectionType {
  collectionName: 'ezforms_recipient';
  info: {
    tableName: 'recipients';
    singularName: 'recipient';
    pluralName: 'recipients';
    displayName: 'Notification Recipients';
    description: 'List of Notification Recipients';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    email: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    number: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::ezforms.recipient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::ezforms.recipient',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsDetailAboutUsDetail extends Schema.CollectionType {
  collectionName: 'about_us_details';
  info: {
    singularName: 'about-us-detail';
    pluralName: 'about-us-details';
    displayName: 'AboutUsDetail';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    AboutUsCard: Attribute.Component<'about-us-card.about-us-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us-detail.about-us-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us-detail.about-us-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BlogCards: Attribute.Component<'cards.blog', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCarouselCarousel extends Schema.CollectionType {
  collectionName: 'carousels';
  info: {
    singularName: 'carousel';
    pluralName: 'carousels';
    displayName: 'Carousel';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Cards: Attribute.Component<'photo-link.cards', true>;
    Text: Attribute.String;
    Description: Attribute.Component<'body.title', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::carousel.carousel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::carousel.carousel',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCaseStudyCaseStudy extends Schema.CollectionType {
  collectionName: 'case_studies';
  info: {
    singularName: 'case-study';
    pluralName: 'case-studies';
    displayName: 'Case Study';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    PhotoLink: Attribute.Component<'photo-link.photo-link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationConsultation extends Schema.CollectionType {
  collectionName: 'consultations';
  info: {
    singularName: 'consultation';
    pluralName: 'consultations';
    displayName: 'Consultation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Field: Attribute.Component<'body.body', true>;
    Button: Attribute.String;
    Description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationContactConsultationContact
  extends Schema.CollectionType {
  collectionName: 'consultation_contacts';
  info: {
    singularName: 'consultation-contact';
    pluralName: 'consultation-contacts';
    displayName: 'ConsultationContact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Fields: Attribute.Component<'body.body', true>;
    Text: Attribute.String;
    ServiceSelection: Attribute.Component<'body.body', true>;
    Button: Attribute.String;
    Subtitle: Attribute.Text;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Body: Attribute.Text;
    Phone: Attribute.String;
    Email: Attribute.String;
    SocialLinks: Attribute.Component<'link.link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation-contact.consultation-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation-contact.consultation-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactFormContactForm extends Schema.CollectionType {
  collectionName: 'contact_forms';
  info: {
    singularName: 'contact-form';
    pluralName: 'contact-forms';
    displayName: 'Contact Form';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Placeholder: Attribute.Component<'body.body', true>;
    Button: Attribute.String;
    Description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactFormCategoryContactFormCategory
  extends Schema.CollectionType {
  collectionName: 'contact_form_categories';
  info: {
    singularName: 'contact-form-category';
    pluralName: 'contact-form-categories';
    displayName: 'Contact Form Category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Category: Attribute.String;
    Name: Attribute.String;
    Email: Attribute.Email;
    Company: Attribute.String;
    Message: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-form-category.contact-form-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-form-category.contact-form-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactFormFullContactFormFull
  extends Schema.CollectionType {
  collectionName: 'contact_form_fulls';
  info: {
    singularName: 'contact-form-full';
    pluralName: 'contact-form-fulls';
    displayName: 'Contact Form Full';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Business: Attribute.String;
    Name: Attribute.String;
    Email: Attribute.Email;
    Phone: Attribute.String;
    Category: Attribute.String;
    Message: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-form-full.contact-form-full',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-form-full.contact-form-full',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactFormMessageContactFormMessage
  extends Schema.CollectionType {
  collectionName: 'contact_form_messages';
  info: {
    singularName: 'contact-form-message';
    pluralName: 'contact-form-messages';
    displayName: 'Contact Form Message';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Email: Attribute.Email;
    Company: Attribute.String;
    Message: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-form-message.contact-form-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-form-message.contact-form-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactUsFormContactUsForm extends Schema.CollectionType {
  collectionName: 'contact_us_forms';
  info: {
    singularName: 'contact-us-form';
    pluralName: 'contact-us-forms';
    displayName: 'ContactUsForm';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Services: Attribute.Component<'body.body', true>;
    Fields: Attribute.Component<'body.body', true>;
    Message: Attribute.Text;
    Button: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-us-form.contact-us-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-us-form.contact-us-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContentCreationDetailContentCreationDetail
  extends Schema.CollectionType {
  collectionName: 'content_creation_details';
  info: {
    singularName: 'content-creation-detail';
    pluralName: 'content-creation-details';
    displayName: 'ContentCreationDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ContentCreationDetails: Attribute.Component<
      'service-details.service-details',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::content-creation-detail.content-creation-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::content-creation-detail.content-creation-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContentCreationHeaderContentCreationHeader
  extends Schema.CollectionType {
  collectionName: 'content_creation_headers';
  info: {
    singularName: 'content-creation-header';
    pluralName: 'content-creation-headers';
    displayName: 'ContentCreationHeader';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Text: Attribute.Component<'pill.pill', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::content-creation-header.content-creation-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::content-creation-header.content-creation-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCtaCta extends Schema.CollectionType {
  collectionName: 'ctas';
  info: {
    singularName: 'cta';
    pluralName: 'ctas';
    displayName: 'CTA';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.String;
    Link: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cta.cta', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cta.cta', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiDigitalWorldDigitalWorld extends Schema.CollectionType {
  collectionName: 'digital_worlds';
  info: {
    singularName: 'digital-world';
    pluralName: 'digital-worlds';
    displayName: 'Digital World';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Address: Attribute.Component<'address.address'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::digital-world.digital-world',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::digital-world.digital-world',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDirectiveDirective extends Schema.CollectionType {
  collectionName: 'directives';
  info: {
    singularName: 'directive';
    pluralName: 'directives';
    displayName: 'Directive';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Body: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::directive.directive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::directive.directive',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDnaDna extends Schema.CollectionType {
  collectionName: 'dnas';
  info: {
    singularName: 'dna';
    pluralName: 'dnas';
    displayName: 'DNA';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Body: Attribute.Component<'body.body', true>;
    ReadMore: Attribute.Component<'body.body', true>;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::dna.dna', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::dna.dna', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiEnquiryEnquiry extends Schema.CollectionType {
  collectionName: 'enquiries';
  info: {
    singularName: 'enquiry';
    pluralName: 'enquiries';
    displayName: 'Enquiry';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Business: Attribute.String;
    Name: Attribute.String;
    Email: Attribute.Email;
    Phone: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::enquiry.enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::enquiry.enquiry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'FAQ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.Text;
    FAQ: Attribute.Component<'faq.faq', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.CollectionType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Email: Attribute.String;
    Link: Attribute.Component<'link.link', true>;
    Text: Attribute.String;
    Pill: Attribute.Component<'link.link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGuaranteeGuarantee extends Schema.CollectionType {
  collectionName: 'guarantees';
  info: {
    singularName: 'guarantee';
    pluralName: 'guarantees';
    displayName: 'Guarantee';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Guarantees: Attribute.Component<'guarantees.guarantees', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::guarantee.guarantee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::guarantee.guarantee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderHeader extends Schema.CollectionType {
  collectionName: 'headers';
  info: {
    singularName: 'header';
    pluralName: 'headers';
    displayName: 'Header';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.Text;
    Heading: Attribute.String;
    Subheading: Attribute.Text;
    Link: Attribute.Component<'link.link', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header.header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderContactHeaderContact extends Schema.CollectionType {
  collectionName: 'header_contacts';
  info: {
    singularName: 'header-contact';
    pluralName: 'header-contacts';
    displayName: 'HeaderContact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Subtitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-contact.header-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-contact.header-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderOtherHeaderOther extends Schema.CollectionType {
  collectionName: 'header_others';
  info: {
    singularName: 'header-other';
    pluralName: 'header-others';
    displayName: 'HeaderOther';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Link: Attribute.Component<'link.link'>;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-other.header-other',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-other.header-other',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeaderServiceHeaderService extends Schema.CollectionType {
  collectionName: 'header_services';
  info: {
    singularName: 'header-service';
    pluralName: 'header-services';
    displayName: 'HeaderService';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.Text;
    Heading: Attribute.String;
    Subheading: Attribute.Text;
    Pill: Attribute.Component<'pill.pill', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::header-service.header-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::header-service.header-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMapMap extends Schema.CollectionType {
  collectionName: 'maps';
  info: {
    singularName: 'map';
    pluralName: 'maps';
    displayName: 'Map';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Body: Attribute.String;
    Phone: Attribute.String;
    Email: Attribute.String;
    SocialLinks: Attribute.Component<'body.body', true>;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::map.map', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::map.map', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNavbarNavbar extends Schema.CollectionType {
  collectionName: 'navbars';
  info: {
    singularName: 'navbar';
    pluralName: 'navbars';
    displayName: 'Navbar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Logo: Attribute.Component<'photo-link.photo-link'>;
    Page: Attribute.Component<'link.link', true>;
    Text: Attribute.String;
    Services: Attribute.Component<'link.link', true>;
    TItle: Attribute.String;
    Placeholder: Attribute.Component<'body.body', true>;
    Message: Attribute.Text;
    Button: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOurServiceOurService extends Schema.CollectionType {
  collectionName: 'our_services';
  info: {
    singularName: 'our-service';
    pluralName: 'our-services';
    displayName: 'OurService';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.Text;
    ServiceCard: Attribute.Component<'service-card.service-card', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-service.our-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-service.our-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaidMediaDetailPaidMediaDetail
  extends Schema.CollectionType {
  collectionName: 'paid_media_details';
  info: {
    singularName: 'paid-media-detail';
    pluralName: 'paid-media-details';
    displayName: 'PaidMediaDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PaidMediaDetails: Attribute.Component<
      'service-details.service-details',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::paid-media-detail.paid-media-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::paid-media-detail.paid-media-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaidMediaHeaderPaidMediaHeader
  extends Schema.CollectionType {
  collectionName: 'paid_media_headers';
  info: {
    singularName: 'paid-media-header';
    pluralName: 'paid-media-headers';
    displayName: 'PaidMediaHeader';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Text: Attribute.Component<'pill.pill', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::paid-media-header.paid-media-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::paid-media-header.paid-media-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaidMediaTechnologyLeftPaidMediaTechnologyLeft
  extends Schema.CollectionType {
  collectionName: 'paid_media_technology_lefts';
  info: {
    singularName: 'paid-media-technology-left';
    pluralName: 'paid-media-technology-lefts';
    displayName: 'PaidMediaTechnologyLeft';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::paid-media-technology-left.paid-media-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::paid-media-technology-left.paid-media-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaidMediaTechnologyRightPaidMediaTechnologyRight
  extends Schema.CollectionType {
  collectionName: 'paid_media_technology_rights';
  info: {
    singularName: 'paid-media-technology-right';
    pluralName: 'paid-media-technology-rights';
    displayName: 'PaidMediaTechnologyRight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::paid-media-technology-right.paid-media-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::paid-media-technology-right.paid-media-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrintAdvertisingDetailPrintAdvertisingDetail
  extends Schema.CollectionType {
  collectionName: 'print_advertising_details';
  info: {
    singularName: 'print-advertising-detail';
    pluralName: 'print-advertising-details';
    displayName: 'PrintAdvertisingDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PrintAdvertisingDetails: Attribute.Component<
      'service-details.service-details',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::print-advertising-detail.print-advertising-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::print-advertising-detail.print-advertising-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrintAdvertisingHeaderPrintAdvertisingHeader
  extends Schema.CollectionType {
  collectionName: 'print_advertising_headers';
  info: {
    singularName: 'print-advertising-header';
    pluralName: 'print-advertising-headers';
    displayName: 'PrintAdvertisingHeader';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Text: Attribute.Component<'pill.pill', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::print-advertising-header.print-advertising-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::print-advertising-header.print-advertising-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQneQne extends Schema.CollectionType {
  collectionName: 'qnes';
  info: {
    singularName: 'qne';
    pluralName: 'qnes';
    displayName: 'qne';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Body: Attribute.Component<'body.body', true>;
    Text: Attribute.String;
    Link: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::qne.qne', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::qne.qne', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiSeoDetailSeoDetail extends Schema.CollectionType {
  collectionName: 'seo_details';
  info: {
    singularName: 'seo-detail';
    pluralName: 'seo-details';
    displayName: 'SeoDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SeoDetails: Attribute.Component<'service-details.service-details', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seo-detail.seo-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seo-detail.seo-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeoHeaderSeoHeader extends Schema.CollectionType {
  collectionName: 'seo_headers';
  info: {
    singularName: 'seo-header';
    pluralName: 'seo-headers';
    displayName: 'SeoHeader';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Text: Attribute.Component<'pill.pill', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seo-header.seo-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seo-header.seo-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeoServiceSeoService extends Schema.CollectionType {
  collectionName: 'seo_services';
  info: {
    singularName: 'seo-service';
    pluralName: 'seo-services';
    displayName: 'SeoService';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    SeoCards: Attribute.Component<'cards.seo', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seo-service.seo-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seo-service.seo-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeoTechnologyLeftSeoTechnologyLeft
  extends Schema.CollectionType {
  collectionName: 'seo_technology_lefts';
  info: {
    singularName: 'seo-technology-left';
    pluralName: 'seo-technology-lefts';
    displayName: 'SeoTechnologyLeft';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seo-technology-left.seo-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seo-technology-left.seo-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSeoTechnologyRightSeoTechnologyRight
  extends Schema.CollectionType {
  collectionName: 'seo_technology_rights';
  info: {
    singularName: 'seo-technology-right';
    pluralName: 'seo-technology-rights';
    displayName: 'SeoTechnologyRight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::seo-technology-right.seo-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::seo-technology-right.seo-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceDetailServiceDetail extends Schema.CollectionType {
  collectionName: 'service_details';
  info: {
    singularName: 'service-detail';
    pluralName: 'service-details';
    displayName: 'ServiceDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ServiceDetails: Attribute.Component<
      'service-details.service-details',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-detail.service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-detail.service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceTechnologyLeftServiceTechnologyLeft
  extends Schema.CollectionType {
  collectionName: 'service_technology_lefts';
  info: {
    singularName: 'service-technology-left';
    pluralName: 'service-technology-lefts';
    displayName: 'ServiceTechnologyLeft';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-technology-left.service-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-technology-left.service-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceTechnologyRightServiceTechnologyRight
  extends Schema.CollectionType {
  collectionName: 'service_technology_rights';
  info: {
    singularName: 'service-technology-right';
    pluralName: 'service-technology-rights';
    displayName: 'ServiceTechnologyRight';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service-technology-right.service-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service-technology-right.service-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialMediaDetailSocialMediaDetail
  extends Schema.CollectionType {
  collectionName: 'social_media_details';
  info: {
    singularName: 'social-media-detail';
    pluralName: 'social-media-details';
    displayName: 'SocialMediaDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SocialMediaDetails: Attribute.Component<
      'service-details.service-details',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-media-detail.social-media-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::social-media-detail.social-media-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialMediaHeaderSocialMediaHeader
  extends Schema.CollectionType {
  collectionName: 'social_media_headers';
  info: {
    singularName: 'social-media-header';
    pluralName: 'social-media-headers';
    displayName: 'SocialMediaHeader';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Text: Attribute.Component<'pill.pill', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-media-header.social-media-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::social-media-header.social-media-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWebsiteDetailWebsiteDetail extends Schema.CollectionType {
  collectionName: 'website_details';
  info: {
    singularName: 'website-detail';
    pluralName: 'website-details';
    displayName: 'WebsiteDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    WebsiteDetails: Attribute.Component<
      'service-details.service-details',
      true
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::website-detail.website-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::website-detail.website-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWebsiteHeaderWebsiteHeader extends Schema.CollectionType {
  collectionName: 'website_headers';
  info: {
    singularName: 'website-header';
    pluralName: 'website-headers';
    displayName: 'WebsiteHeader';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Heading: Attribute.String;
    Subheading: Attribute.String;
    Text: Attribute.Component<'pill.pill', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::website-header.website-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::website-header.website-header',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWebsiteTechnologyLeftWebsiteTechnologyLeft
  extends Schema.CollectionType {
  collectionName: 'website_technology_lefts';
  info: {
    singularName: 'website-technology-left';
    pluralName: 'website-technology-lefts';
    displayName: 'WebsiteTechnologyLeft';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::website-technology-left.website-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::website-technology-left.website-technology-left',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWebsiteTechnologyRightWebsiteTechnologyRight
  extends Schema.CollectionType {
  collectionName: 'website_technology_rights';
  info: {
    singularName: 'website-technology-right';
    pluralName: 'website-technology-rights';
    displayName: 'WebsiteTechnologyRight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Attribute.String;
    Body: Attribute.Text;
    Subheading: Attribute.String;
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Options: Attribute.Component<'fields.options', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::website-technology-right.website-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::website-technology-right.website-technology-right',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::ezforms.submission': PluginEzformsSubmission;
      'plugin::ezforms.recipient': PluginEzformsRecipient;
      'api::about-us-detail.about-us-detail': ApiAboutUsDetailAboutUsDetail;
      'api::blog.blog': ApiBlogBlog;
      'api::carousel.carousel': ApiCarouselCarousel;
      'api::case-study.case-study': ApiCaseStudyCaseStudy;
      'api::consultation.consultation': ApiConsultationConsultation;
      'api::consultation-contact.consultation-contact': ApiConsultationContactConsultationContact;
      'api::contact-form.contact-form': ApiContactFormContactForm;
      'api::contact-form-category.contact-form-category': ApiContactFormCategoryContactFormCategory;
      'api::contact-form-full.contact-form-full': ApiContactFormFullContactFormFull;
      'api::contact-form-message.contact-form-message': ApiContactFormMessageContactFormMessage;
      'api::contact-us-form.contact-us-form': ApiContactUsFormContactUsForm;
      'api::content-creation-detail.content-creation-detail': ApiContentCreationDetailContentCreationDetail;
      'api::content-creation-header.content-creation-header': ApiContentCreationHeaderContentCreationHeader;
      'api::cta.cta': ApiCtaCta;
      'api::digital-world.digital-world': ApiDigitalWorldDigitalWorld;
      'api::directive.directive': ApiDirectiveDirective;
      'api::dna.dna': ApiDnaDna;
      'api::enquiry.enquiry': ApiEnquiryEnquiry;
      'api::faq.faq': ApiFaqFaq;
      'api::footer.footer': ApiFooterFooter;
      'api::guarantee.guarantee': ApiGuaranteeGuarantee;
      'api::header.header': ApiHeaderHeader;
      'api::header-contact.header-contact': ApiHeaderContactHeaderContact;
      'api::header-other.header-other': ApiHeaderOtherHeaderOther;
      'api::header-service.header-service': ApiHeaderServiceHeaderService;
      'api::map.map': ApiMapMap;
      'api::navbar.navbar': ApiNavbarNavbar;
      'api::our-service.our-service': ApiOurServiceOurService;
      'api::paid-media-detail.paid-media-detail': ApiPaidMediaDetailPaidMediaDetail;
      'api::paid-media-header.paid-media-header': ApiPaidMediaHeaderPaidMediaHeader;
      'api::paid-media-technology-left.paid-media-technology-left': ApiPaidMediaTechnologyLeftPaidMediaTechnologyLeft;
      'api::paid-media-technology-right.paid-media-technology-right': ApiPaidMediaTechnologyRightPaidMediaTechnologyRight;
      'api::print-advertising-detail.print-advertising-detail': ApiPrintAdvertisingDetailPrintAdvertisingDetail;
      'api::print-advertising-header.print-advertising-header': ApiPrintAdvertisingHeaderPrintAdvertisingHeader;
      'api::qne.qne': ApiQneQne;
      'api::seo-detail.seo-detail': ApiSeoDetailSeoDetail;
      'api::seo-header.seo-header': ApiSeoHeaderSeoHeader;
      'api::seo-service.seo-service': ApiSeoServiceSeoService;
      'api::seo-technology-left.seo-technology-left': ApiSeoTechnologyLeftSeoTechnologyLeft;
      'api::seo-technology-right.seo-technology-right': ApiSeoTechnologyRightSeoTechnologyRight;
      'api::service-detail.service-detail': ApiServiceDetailServiceDetail;
      'api::service-technology-left.service-technology-left': ApiServiceTechnologyLeftServiceTechnologyLeft;
      'api::service-technology-right.service-technology-right': ApiServiceTechnologyRightServiceTechnologyRight;
      'api::social-media-detail.social-media-detail': ApiSocialMediaDetailSocialMediaDetail;
      'api::social-media-header.social-media-header': ApiSocialMediaHeaderSocialMediaHeader;
      'api::website-detail.website-detail': ApiWebsiteDetailWebsiteDetail;
      'api::website-header.website-header': ApiWebsiteHeaderWebsiteHeader;
      'api::website-technology-left.website-technology-left': ApiWebsiteTechnologyLeftWebsiteTechnologyLeft;
      'api::website-technology-right.website-technology-right': ApiWebsiteTechnologyRightWebsiteTechnologyRight;
    }
  }
}
