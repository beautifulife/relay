/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<553187ddaa2c7144f84c14ee1fb64d95>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type withProvidedVariablesTest4Fragment2$fragmentType: FragmentType;
export type withProvidedVariablesTest4Fragment2$ref = withProvidedVariablesTest4Fragment2$fragmentType;
export type withProvidedVariablesTest4Fragment2$data = {|
  +name?: ?string,
  +$fragmentType: withProvidedVariablesTest4Fragment2$fragmentType,
|};
export type withProvidedVariablesTest4Fragment2 = withProvidedVariablesTest4Fragment2$data;
export type withProvidedVariablesTest4Fragment2$key = {
  +$data?: withProvidedVariablesTest4Fragment2$data,
  +$fragmentSpreads: withProvidedVariablesTest4Fragment2$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "__relay_internal__pv__provideIncludeUserNames"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "withProvidedVariablesTest4Fragment2",
  "selections": [
    {
      "condition": "__relay_internal__pv__provideIncludeUserNames",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "6da58faea47b6ab2745ff2a101779058";
}

module.exports = ((node/*: any*/)/*: Fragment<
  withProvidedVariablesTest4Fragment2$fragmentType,
  withProvidedVariablesTest4Fragment2$data,
>*/);
