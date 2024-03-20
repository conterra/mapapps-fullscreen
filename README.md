⚠️ This bundle is no longer in active development.
# Fullscreen Bundle

This bundle lets you switch to fullscreen view of the app or just the map.

## Sample App

https://demos.conterra.de/mapapps/resources/apps/downloads_fullscreen/index.html

## Installation Guide
**Requirement: map.apps 4.7.0**

[dn_fullscreen Documentation](https://github.com/conterra/mapapps-fullscreen/tree/master/src/main/js/bundles/dn_fullscreen)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
