#! python3
# Launches a map in the browser

import webbrowser, sys

if len(sys.argv) > 1:
    addr = " ".join(sys.argv[1:])
