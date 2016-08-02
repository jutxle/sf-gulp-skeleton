#### Build Process
1. "npm install" to install build dependencies
2. update sf-config.js with Salesforce Credentials
3. update pkg/staticresources/ resource-meta.xml with proper naming
4. "gulp deploy" to build, minify, and deploy js & css to SF instance specified in sf-config.js