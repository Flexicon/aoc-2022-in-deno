#!/bin/bash

if [ -z "$1" ]; then
  echo "usage: gen_day.sh 1-25"
  exit 1
fi

cp day_template.ts day_$1.ts
touch day_$1_input.txt
touch day_$1_test_input.txt
sed -i '' "s/\"__DAY__\"/$1/g" "day_$1.ts"

echo "Day $1 setup! Happy coding 🎄"
