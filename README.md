## Build Process
#### 1. "npm install" to install build dependencies

#### 2. update ./build/sf-config.js with Salesforce Credentials and name of static resource

#### 3. update ./pkg/staticresources/*.resource-meta.xml with name to match package

#### 4. "gulp build" to build

#### 5. "gulp deploy" to build and deploy js & css to SF instance specified in sf-config.js

#### 6. "gulp release" to build, minify, and deploy js & css to SF instance specified in sf-config.js