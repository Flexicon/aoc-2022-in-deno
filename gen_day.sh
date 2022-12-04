#!/bin/bash

if [ -z "$1" ]; then
  echo "usage: gen_day.sh 1-25"
  exit 1
fi

PADDED_DAY=$(printf '%02d' $1)
FOLDER="Day$PADDED_DAY"

mkdir $FOLDER
cp ./tpl/day_template.ts "./$FOLDER/day_$1.ts"
touch "./$FOLDER/day_$1_input.txt"
touch "./$FOLDER/day_$1_test_input.txt"
sed -i '' "s/\"__DAY__\"/$1/g" "./$FOLDER/day_$1.ts"

echo "Day $1 setup! Happy coding 🎄"
