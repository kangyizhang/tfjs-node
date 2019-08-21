/**
 * @license
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {TFSavedModel} from './nodejs_kernel_backend';
import {ensureTensorflowBackend, nodeBackend} from './ops/op_utils';

/**
 * Decode a JPEG-encoded image to a 3D Tensor of dtype `int32`.
 *
 * @param path The path of the exported SavedModel
 */
/**
 * @doc {heading: 'SavedModel', namespace: 'node'}
 */
export function loadSavedModel(path: string): TFSavedModel {
  ensureTensorflowBackend();
  return nodeBackend().loadSavedModel(path);
}
