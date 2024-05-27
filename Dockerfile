FROM node:22-alpine3.20

WORKDIR /usr/src

# Copy custom resolv.conf early to ensure DNS resolution
COPY custom-resolv.conf /etc/resolv.conf

# Debugging: check DNS resolution and network connectivity
RUN cat /etc/resolv.conf

# Install pnpm globally
RUN npm install -g pnpm

# Set PNPM_HOME and add pnpm's global bin directory to PATH
ENV PNPM_HOME=/root/.pnpm
ENV PATH="$PNPM_HOME/global/bin:$PATH"

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Now that pnpm is correctly set up, install TypeScript and Nodemon globally
RUN pnpm install typescript nodemon

# Copy all files from the current directory to the working directory in the container
COPY . .

# Compile TypeScript to JavaScript
RUN npx tsc

# Expose the port your app runs on
EXPOSE 5000

# Command to run your application
CMD ["pnpm", "start:local"]
