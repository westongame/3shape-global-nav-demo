# 3shape-global-nav-demo

## How to use
Install packages
```
npm i 3shape-global-nav-demo @webcomponents/webcomponentsjs
```
Add polyfill import
```
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
// or dynamical
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
```
Add component import
```
import '3shape-global-nav-demo';
```
Use tag
```
<g-navigation
    username="{userName}"
    token="{token}"
    editprofileurl="{editProfileUrl}"
    logouturl="{logoutUrl}"
></g-navigation>
```
Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| {userName} | String | null | shows user name in account menu |
| {token} | String | null | the same as {userName}. component decodes token for you and gets userName from it. if you specify {userName} - {token} will not work |
| {editProfileUrl} | String | null | link to user profile page |
| {logoutUrl} | String | null | link to logout page |

## How to develop
```
npm i
```
```
npm run watch
```
```
npm run serve
```
Go to http://localhost:8000
