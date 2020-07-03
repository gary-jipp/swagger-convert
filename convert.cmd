@echo off
call node_modules\.bin\api-spec-converter -f swagger_1 -t swagger_2 %1 > %~n1-v2.json
dir /b %~n1-v2.json