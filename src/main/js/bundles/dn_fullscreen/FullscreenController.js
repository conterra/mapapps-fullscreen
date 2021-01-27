/*
 * Copyright (C) con terra GmbH
 */
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
            } else if (mapDiv.webkitRequestFullscreen) { /* Safari */
                mapDiv.webkitRequestFullscreen();
            } else if (mapDiv.msRequestFullscreen) { /* IE11 */
                mapDiv.msRequestFullscreen();
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
        tool.set("iconClass", "esri-icon-zoom-out-fixed");
        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    }
}
