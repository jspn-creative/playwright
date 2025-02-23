/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import type { ActionTraceEvent } from '@trace/trace';
import * as modelUtil from './modelUtil';
import { NetworkResourceDetails } from './networkResourceDetails';
import './networkTab.css';

export const NetworkTab: React.FunctionComponent<{
  model: modelUtil.MultiTraceModel | undefined,
  action: ActionTraceEvent | undefined,
}> = ({ model, action }) => {
  const actionResources = action ? modelUtil.resourcesForAction(action) : [];
  const resources = model?.resources || [];
  return <div className='network-tab'>{
    resources.map((resource, index) => {
      return <NetworkResourceDetails
        resource={resource}
        key={index}
        highlighted={actionResources.includes(resource)}
      />;
    })
  }</div>;
};
