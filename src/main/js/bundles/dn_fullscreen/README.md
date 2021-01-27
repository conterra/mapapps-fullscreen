# dn_fullscreen
This bundle adds a button that enables fullscreen-mode. Fullscreen is available for the map or the entire app (see config).

## Usage
1. First you need to add the bundle fullscreen_button to your app.
2. Then you can configure it as described in the following section.

To make the functions of this bundle available to the user, the following tool can be added to a toolset:

| Tool ID               | Component            | Description                       |
|-----------------------|----------------------|-----------------------------------|
| fullscreenToggleTool  | FullscreenToggleTool | Activate or deactivate the bundle |

## Configuration Reference

### Config

#### Sample configuration
```json
"Config": {
    "onlyMap": true
}
```

| Property    | Type    | Possible Values               | Default       | Description                                           |
|-------------|---------|-------------------------------|---------------|-------------------------------------------------------|
| onlyMap     | Boolean | ```true``` &#124; ```false``` | ```false```   | enlarge only the map (True) or the entire app (False) |
