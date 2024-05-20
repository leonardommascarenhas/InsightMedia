#!/bin/bash

# Define an array of file extensions to search for
file_extensions=(".avif" ".jpg" ".png")

# Set the command you want to execute on each file
command_to_execute="magick -quality 80"

# Use 'find' to locate files with the specified extensions
for ext in "${file_extensions[@]}"; do
    find . -type f -name "*$ext" | while read -r file; do
        # Extract the file name from the file path
        file_name=$(basename "$file")

        # Extract the file name without the extension
        file_without_extension="${file_name%.*}"

        # Change the working directory to the directory of the file
        file_directory=$(dirname "$file")
        cd "$file_directory"

        # Execute your command, passing the file name as an argument
        # $command_to_execute "$file_name" "$file_without_extension".webp
        # echo $command_to_execute "$file_name" "$file_without_extension".webp
        $command_to_execute "$file_name" "$file_without_extension".avif
        echo $command_to_execute "$file_name" "$file_without_extension".avif

        # Remove the current file
        rm ./"$file_name"
        echo rm ./"$file_name"

        # Return to the original directory
        cd -
    done
done