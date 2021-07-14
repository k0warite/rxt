#!/usr/bin/env python

# Import the required libraries
from datetime import datetime
from time import sleep

from reportlab.graphics import renderPM
from svglib.svglib import svg2rlg
from colorama import Fore, init

# Initialize colorama
init()

# Start the timer
start = datetime.now()

# Render the main badge
print(f'{Fore.LIGHTBLUE_EX}[INFO]{Fore.RESET} Rendering first badge...')
drawing = svg2rlg('./assets/rxt.html')
renderPM.drawToFile(drawing, './assets/rxt.png', fmt='PNG')
print(f'{Fore.LIGHTBLUE_EX}[INFO]{Fore.RESET} Done')

# Sleep to avoid crash
sleep(.7)

# Render the version badge
print(f'{Fore.LIGHTBLUE_EX}[INFO]{Fore.RESET} Rendering second badge...')
drawing = svg2rlg('./assets/rxt_version.html')
renderPM.drawToFile(drawing, './assets/rxt_version.png', fmt='PNG')
print(f'{Fore.LIGHTBLUE_EX}[INFO]{Fore.RESET} Done')

# Stop the timer
end = datetime.now()
total = (end - start).total_seconds() * 1000

# Debug
print(f'{Fore.LIGHTBLACK_EX}[DEBUG]{Fore.RESET} Operation took {(round(total, 2))}ms to complete')