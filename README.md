#### Build Process
1. "npm install" to install build dependencies
2. update ./build/sf-config.js with Salesforce Credentials
3. update pkg/staticresources/*.resource-meta.xml with name to match package
4. "gulp release" to build, minify, and deploy js & css to SF instance specified in sf-config.js