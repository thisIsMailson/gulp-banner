# Installation Steps

## Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

# Install Node Version Manager (NVM)

```bash
brew install nvm
nvm install 18.9.0
nvm alias default 18.9.0
```

# Install Global Node Packages

```bash
npm install -g gulp-cli
npm install -g pageres-cli
```

# Project Setup

Navigate to the project root and run:

```bash
npm install
```

# Create Banners

Navigate to the campaign folder and run:

```bash
cd path/to/campaign
gulp watch
```

# Generate Banner Preview Links

Navigate to the campaign folder and run:

```bash
cd path/to/campaign
gulp
```

# Deploy Banners

Navigate to the campaign folder and run:

```bash
cd path/to/campaign
gulp fallbacks
# To create fallbacks after a delay (e.g., 15 seconds), use the following command:
# gulp fallbacks --delay=15
gulp deploy
```
