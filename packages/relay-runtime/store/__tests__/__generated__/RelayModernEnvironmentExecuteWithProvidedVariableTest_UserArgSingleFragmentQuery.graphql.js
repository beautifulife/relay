/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<651b6fc3a0a3fec9acbfbeebd49f3072>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type RelayModernEnvironmentExecuteWithProvidedVariableTest_profile1$fragmentType = any;
export type RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery$variables = {|
  id: string,
|};
export type RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQueryVariables = RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery$variables;
export type RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery$data = {|
  +node: ?{|
    +$fragmentSpreads: RelayModernEnvironmentExecuteWithProvidedVariableTest_profile1$fragmentType,
  |},
|};
export type RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQueryResponse = RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery$data;
export type RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery = {|
  variables: RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQueryVariables,
  response: RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery$data,
|};
type ProvidedVariablesType = {|
  +__relay_internal__pv__RelayProvider_returnsTrue: {|
    +get: () => boolean,
  |},
|};
*/

var providedVariablesDefinition/*: ProvidedVariablesType*/ = {
  "__relay_internal__pv__RelayProvider_returnsTrue": require('./../RelayProvider_returnsTrue')
};

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RelayModernEnvironmentExecuteWithProvidedVariableTest_profile1"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "__relay_internal__pv__RelayProvider_returnsTrue"
      }
    ],
    "kind": "Operation",
    "name": "RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "uri",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "condition": "__relay_internal__pv__RelayProvider_returnsTrue",
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
              },
              {
                "condition": "__relay_internal__pv__RelayProvider_returnsTrue",
                "kind": "Condition",
                "passingValue": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "username",
                    "storageKey": null
                  }
                ]
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3233111cb3da2dc84f5963ff83c15cde",
    "id": null,
    "metadata": {},
    "name": "RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery",
    "operationKind": "query",
    "text": "query RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery(\n  $id: ID!\n  $__relay_internal__pv__RelayProvider_returnsTrue: Boolean!\n) {\n  node(id: $id) {\n    __typename\n    ...RelayModernEnvironmentExecuteWithProvidedVariableTest_profile1\n    id\n  }\n}\n\nfragment RelayModernEnvironmentExecuteWithProvidedVariableTest_profile1 on User {\n  id\n  name @include(if: $__relay_internal__pv__RelayProvider_returnsTrue)\n  username @skip(if: $__relay_internal__pv__RelayProvider_returnsTrue)\n  profilePicture {\n    uri\n  }\n}\n",
    "providedVariables": providedVariablesDefinition
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "28c63ee2f6ef93b2c67bcded12b3940e";
}

module.exports = ((node/*: any*/)/*: Query<
  RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery$variables,
  RelayModernEnvironmentExecuteWithProvidedVariableTest_UserArgSingleFragmentQuery$data,
>*/);
