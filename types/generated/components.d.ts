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

export interface CategorySliderCategorySlider extends Schema.Component {
  collectionName: 'components_category_slider_category_sliders';
  info: {
    displayName: 'category-slider';
    description: '';
  };
  attributes: {
    categoryType: Attribute.String & Attribute.Required;
    sliderGuideTitle: Attribute.String & Attribute.Required;
    sliderGuideDescription: Attribute.String & Attribute.Required;
    sliderGuideImage: Attribute.Media & Attribute.Required;
    SingleCategoryCard: Attribute.Component<
      'single-category-card.single-category-card',
      true
    > &
      Attribute.Required;
  };
}

export interface SingleCategoryCardSingleCategoryCard extends Schema.Component {
  collectionName: 'components_single_category_card_single_category_cards';
  info: {
    displayName: 'single-category-card';
  };
  attributes: {
    sliderTitle: Attribute.String & Attribute.Required;
    sliderShortDescription: Attribute.String & Attribute.Required;
    sliderLongDescription: Attribute.Text & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    slideImage: Attribute.Media & Attribute.Required;
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
      'category-slider.category-slider': CategorySliderCategorySlider;
      'single-category-card.single-category-card': SingleCategoryCardSingleCategoryCard;
      'traveler-type-content.traveler-type-content': TravelerTypeContentTravelerTypeContent;
    }
  }
}
