#!/bin/bash

# Set the image name (replace with your actual image name)
IMAGE_NAME="chat-image"

# Set the path to your resources folder on the host machine (replace with your actual path)
HOST_RESOURCES_PATH="/Users/jesse/Documents/CountyChat/chat_model/chat/storage_resources"

# Set the mount path for resources within the container (adjust if needed)
CONTAINER_RESOURCES_PATH="/app/storage_resources"

docker run -v $HOST_RESOURCES_PATH:$CONTAINER_RESOURCES_PATH $IMAGE_NAME