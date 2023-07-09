#!/bin/bash

# Assuming you're at the root of your git repository

for i in $(seq 1 5)
do
    # Checkout the commit
    git checkout HEAD~$i

    # Run npm in a new background shell on port 3000 + commit number
    PORT=$((3000+$i)) nohup npm run dev &>/dev/null &

    # Add sleep if necessary to ensure npm has started before next iteration
    sleep 5
done

# Return to the latest commit when done
git checkout HEAD
