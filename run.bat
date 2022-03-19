@echo off

set file=%1
set chap=%2
set work_dir=chapter-%chap%
set ts_file=%work_dir%\%file%.ts
set js_file=%work_dir%\%file%.js

echo Transpiling %file%.ts from chapter %chap%
call tsc %ts_file%

echo Running %js_file%
echo ''
echo ''
node %js_file%
echo ''
echo ''

del %js_file%

echo "Done!"
