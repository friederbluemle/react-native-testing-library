/// <reference path="./extend-expect.d.ts" />

import { toBeOnTheScreen } from './to-be-on-the-screen';
import { toBeDisabled } from './to-be-disabled';

expect.extend({
  toBeOnTheScreen,
  toBeDisabled,
});
