# soundclient

`soundclient` is a simple, unofficial, Electron-based desktop client for accessing SoundCloud (per web interface). It provides a streamlined and dedicated window for SoundCloud, enhancing your music listening experience on desktop environments.


## Features

- Simple and clean user interface.
- Dedicated desktop client for SoundCloud.
- Easy to install and use.

## Installation

### Debian/Ubuntu (`.deb` Package)

1. Download the `.deb` file from the latest release (...if provided)
2. Install the package using:

   ```bash
   sudo dpkg -i path_to_downloaded_file.deb
   ```

   In case of missing dependencies:

   ```bash
   sudo apt-get install -f
   ```

3. Launch soundclient from your application menu or using the command `soundClient`.

### Building from Source

#### Prerequisites

- Node.js (Version 12 or later)
- npm (Usually comes with Node.js)

#### Steps

1. Clone the Repository:
   
   ```bash
   git clone https://github.com/VeniVidiVinzi/soundclient
   cd soundclient
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Build the Application:

   For Linux x64:

   ```bash
   npm run build
   ```

   This will create a `.deb` package in the `dist` directory.

4. Install the Built Package (Linux):

   Navigate to the `dist` directory and install the `.deb` package:

   ```bash
   sudo dpkg -i soundclient_1.0.0_amd64.deb
   ```

   Fix any dependency issues:

   ```bash
   sudo apt-get install -f
   ```

## Usage

After installation, you can start soundclient from your application menu or via the command line:

```bash
soundclient
```

The application will open a dedicated window for SoundCloud, allowing you to listen to your favorite tracks without the need for a web browser.

## Contributing

Contributions to soundclient are welcome! Feel free to report issues or submit pull requests.

## License

soundclient is released under the ISC License. See the LICENSE file for more details.
