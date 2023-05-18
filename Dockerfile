FROM python:3.11.3-slim-bullseye

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY ./backend /app/backend

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r /app/backend/requirements.txt
