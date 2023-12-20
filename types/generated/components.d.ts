import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoPanelInfoPanel extends Schema.Component {
  collectionName: 'components_info_panel_info_panels';
  info: {
    displayName: 'Info Panel';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Body: Attribute.Text;
    ButtonText: Attribute.String;
    ButtonURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'info-panel.info-panel': InfoPanelInfoPanel;
    }
  }
}
