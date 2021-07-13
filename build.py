#!/usr/bin/env python

from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM


# Render the main badge
drawing = svg2rlg('./assets/rxt.html')
renderPM.drawToFile(drawing, './assets/rxt.png', fmt='PNG')

# Render the version badge
drawing = svg2rlg('./assets/rxt_version.html')
renderPM.drawToFile(drawing, './assets/rxt_version.png', fmt='PNG')