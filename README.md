# Swagger Convert

Node app to convert swagger v1 json files to swagger v2.  This is a basic example app that takes filenames as command line arguments and converts those files in their directories. You can enhance this app to provide more functionality, for example recurse directories.<br><br>
The v2 files generated are suitable for import into SwaggerHub:
https://swagger.io/tools/swaggerhub/

## Usage

```
# npm install
# node main.js <filename1.json> <filename2.json> ...
```
Will create filename-v2.jason files in the same directory as the original file






