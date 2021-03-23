/*
 * Copyright (C) 2021 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function hideOmnisearch(root) {
    const omnisearchDivs = root.getElementsByClassName("ct-omnisearch")
    omnisearchDivs.forEach(element => {
        element.style.display = "None";
    })
}

function showOmnisearch(root) {
    const omnisearchDivs = root.getElementsByClassName("ct-omnisearch")
    omnisearchDivs.forEach(element => {
        element.style.display = "";
    })
}

export default class {
    requestFullscreen(event) {
        const tool = (event || {}).tool || {};
        tool.set("iconClass", "esri-icon-zoom-in-fixed");
        const root = this._appCtx.getApplicationRootNode();
        const properties = this._properties;
        const mapDiv = (properties.onlyMap) ? root.getElementsByClassName("mainMap")[0] : root;
        if(mapDiv) {
            if (mapDiv.requestFullscreen) {
                mapDiv.requestFullscreen();
                if (properties.hideOmnisearch) {
                    hideOmnisearch(root);
                }
            } else if (mapDiv.webkitRequestFullscreen) { /* Safari */
                mapDiv.webkitRequestFullscreen();
                if (properties.hideOmnisearch) {
                    hideOmnisearch(root);
                }
            } else if (mapDiv.msRequestFullscreen) { /* IE11 */
                mapDiv.msRequestFullscreen();
                if (properties.hideOmnisearch) {
                    hideOmnisearch(root);
                }
            } else {
                console.warn("Fullscreen mode cannot be requested.");
                tool.set("iconClass", "esri-icon-zoom-out-fixed");
            }
        } else {
            console.warn("No HTML element found to request fullscreen mode.");
            tool.set("iconClass", "esri-icon-zoom-out-fixed");
        }
    }

    exitFullscreen(event) {
        const tool = (event || {}).tool || {};
        const root = this._appCtx.getApplicationRootNode();
        const properties = this._properties;
        tool.set("iconClass", "esri-icon-zoom-out-fixed");
        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                if (properties.hideOmnisearch) {
                    showOmnisearch(root)
                }
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
                if (properties.hideOmnisearch) {
                    showOmnisearch(root)
                }
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
                if (properties.hideOmnisearch) {
                    showOmnisearch(root)
                }
            }
        }
    }
}
