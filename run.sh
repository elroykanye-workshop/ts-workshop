#!/bin/bash

file="$1"
chap="$2"
work_dir="chapter-$chap"
ts_file="$work_dir/$file.ts"
js_file="$work_dir/$file.js"

echo "Transpiling $file.ts from chapter $chap ..."
tsc "$ts_file"

echo "Running $js_file ..."
echo ""
echo ""
node "$js_file"
echo ""
echo ""

rm "$work_dir/$file.js"

echo "Done!"
