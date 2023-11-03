import type { Schema, Attribute } from '@strapi/strapi';

export interface ActivityCardsActivityCards extends Schema.Component {
  collectionName: 'components_activity_cards_activity_cards';
  info: {
    displayName: 'activity-cards';
  };
  attributes: {
    cardsCollection: Attribute.Component<
      'activity-single-card.activity-single-card',
      true
    > &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
  };
}

export interface ActivitySingleCardActivitySingleCard extends Schema.Component {
  collectionName: 'components_activity_single_card_activity_single_cards';
  info: {
    displayName: 'activity-single-card';
    description: '';
  };
  attributes: {
    activityTitle: Attribute.String & Attribute.Required;
    nextPageSlug: Attribute.String & Attribute.Required;
    query: Attribute.String & Attribute.Required;
    currentPage: Attribute.String & Attribute.Required;
  };
}

export interface TravelerTypeContentTravelerTypeContent
  extends Schema.Component {
  collectionName: 'components_traveler_type_content_traveler_type_contents';
  info: {
    displayName: 'traveler-type-content';
    description: '';
  };
  attributes: {
    Beach: Attribute.Boolean & Attribute.Required;
    Hiking: Attribute.Boolean & Attribute.Required;
    Arthistory: Attribute.Boolean & Attribute.Required;
    Music: Attribute.Boolean & Attribute.Required;
    Casino: Attribute.Boolean & Attribute.Required;
    Fine_Dining: Attribute.Boolean & Attribute.Required;
    Casual_Dining: Attribute.Boolean & Attribute.Required;
    Family_Fun: Attribute.Boolean;
    travelerTitle: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'activity-cards.activity-cards': ActivityCardsActivityCards;
      'activity-single-card.activity-single-card': ActivitySingleCardActivitySingleCard;
      'traveler-type-content.traveler-type-content': TravelerTypeContentTravelerTypeContent;
    }
  }
}
