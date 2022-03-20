#!/bin/bash

file="$1"
chap="$2"
work_dir="chapter-$chap"

echo "Creating $file.ts in chapter $chap ..."
touch "$work_dir/$file.ts"

echo "Done!"
