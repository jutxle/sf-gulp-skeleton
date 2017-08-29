## Build Process
#### 1. "npm install" to install build dependencies

#### 2. update ./build/sf-config.js with Salesforce Credentials and name of static resource

#### 3. update ./pkg/staticresources/*.resource-meta.xml with name to match package

#### 4. put all JS/CSS under src/

#### 5. `npm run build` to build

#### 6. `npm run deploy` to build and deploy development env js & css to SF instance specified in sf-config.js

#### 7. `npm run release` to build, minify, and deploy js & css to SF instance specified in sf-config.js
