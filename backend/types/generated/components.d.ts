import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHighlights extends Schema.Component {
  collectionName: 'components_components_highlights';
  info: {
    displayName: 'Highlights';
  };
  attributes: {
    name: Attribute.String;
    videoLink: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.highlights': ComponentsHighlights;
    }
  }
}
