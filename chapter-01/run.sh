#!/bin/bash

file="$1"
echo "Transpiling $file.ts ..."
tsc "$file.ts"

echo "Running $file.js ..."
node "$file.js"
