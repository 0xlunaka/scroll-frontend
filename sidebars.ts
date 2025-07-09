import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Lunaka Documentation Sidebar
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Game Mechanics',
      items: [
        'turnchain-combat',
        'burokku-orders',
        'card-progression',
      ],
    },
    {
      type: 'category',
      label: 'World & Lore',
      items: [
        'world-lore',
      ],
    },
    {
      type: 'category',
      label: 'Characters',
      items: [
        'meme-senshis',
      ],
    },
  ],
};

export default sidebars;
