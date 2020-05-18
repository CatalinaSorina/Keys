import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const ParagraphsStory = () => (
  <StoryTab
    keyName={KEYS.PARAGRAPHS}
    keyProps={[
      'indent',
      'color',
      'textShadow',
      'styledComponent: a string used to add styled component',
    ]}
    examples={[
      {
        props: {
          text: `I'm baby kickstarter bitters hammock, humblebrag skateboard master cleanse kombucha sartorial venmo neutra semiotics cray raclette. Literally organic quinoa synth, mustache post-ironic shaman hella succulents waistcoat whatever next level. Fanny pack swag prism small batch, wayfarers deep v roof party tousled. Stumptown man braid 3 wolf moon enamel pin waistcoat fashion axe flannel. Hoodie shabby chic messenger bag next level gochujang chillwave. Cray selvage dreamcatcher, pinterest distillery edison bulb kinfolk. Microdosing butcher church-key you probably haven't heard of them aesthetic mustache tumeric scenester succulents gochujang pork belly health goth.

          Selvage yuccie master cleanse actually kinfolk. Lumbersexual swag tattooed leggings art party brunch. Art party narwhal truffaut, YOLO roof party salvia edison bulb chia affogato cliche messenger bag XOXO copper mug live-edge ethical. Etsy austin copper mug, artisan jianbing food truck hexagon sriracha offal enamel pin synth DIY drinking vinegar fixie. Kitsch hella sartorial kickstarter snackwave biodiesel gluten-free pour-over semiotics chillwave mlkshk lumbersexual pickled vaporware. Prism blue bottle vegan, tacos vexillologist flannel snackwave intelligentsia butcher try-hard narwhal cronut meh. DIY lo-fi waistcoat VHS flannel.`,
        },
        code: `<Paragraphs text=\`I'm baby kickstarter bitters hammock, humblebrag skateboard master cleanse kombucha sartorial venmo neutra semiotics cray raclette. Literally organic quinoa synth, mustache post-ironic shaman hella succulents waistcoat whatever next level. Fanny pack swag prism small batch, wayfarers deep v roof party tousled. Stumptown man braid 3 wolf moon enamel pin waistcoat fashion axe flannel. Hoodie shabby chic messenger bag next level gochujang chillwave. Cray selvage dreamcatcher, pinterest distillery edison bulb kinfolk. Microdosing butcher church-key you probably haven't heard of them aesthetic mustache tumeric scenester succulents gochujang pork belly health goth.

        Selvage yuccie master cleanse actually kinfolk. Lumbersexual swag tattooed leggings art party brunch. Art party narwhal truffaut, YOLO roof party salvia edison bulb chia affogato cliche messenger bag XOXO copper mug live-edge ethical. Etsy austin copper mug, artisan jianbing food truck hexagon sriracha offal enamel pin synth DIY drinking vinegar fixie. Kitsch hella sartorial kickstarter snackwave biodiesel gluten-free pour-over semiotics chillwave mlkshk lumbersexual pickled vaporware. Prism blue bottle vegan, tacos vexillologist flannel snackwave intelligentsia butcher try-hard narwhal cronut meh. DIY lo-fi waistcoat VHS flannel.\` />`,
      },
    ]}
  />
);

export default ParagraphsStory;
