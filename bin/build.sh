babel src --watch --ignore src/styles --out-dir dist --copy-files && babel src -d dist
nodemon -e scss -x \"yarn build-css\"