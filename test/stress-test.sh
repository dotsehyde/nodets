#!bin/bash

target=${1:-"http://localhost:8080"}

while true
do
	for i in $(seq 100)
	do
		curl $target > /dev/null 2>&1 &
	done

	wait
done

# Warning - this script will run forever until you kill it with Ctrl+C
# Run this script in a separate terminal window