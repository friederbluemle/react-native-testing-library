/// <reference path="./extend-expect.d.ts" />

import { toBeOnTheScreen } from './to-be-on-the-screen';
import { toHaveDisplayValue } from './to-have-display-value';

expect.extend({
  toBeOnTheScreen,
  toHaveDisplayValue,
});
