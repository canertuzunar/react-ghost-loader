import { configure } from '@storybook/react';
import "./storiesStyle.css"

const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}


configure(loadStories, module)