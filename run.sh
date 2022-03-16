#!/bin/bash

file="$1"
chap="$2"
work_dir="chapter-$chap"

echo "Transpiling $file.ts from chapter $chap ..."
tsc "$work_dir/$file.ts"

echo "Running chapter$chap/$file.js ..."
node "$work_dir/$file.js"

echo "Done!"
