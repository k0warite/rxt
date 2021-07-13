from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM

drawing = svg2rlg('./assets/rxt.xml')
renderPM.drawToFile(drawing, './assets/rxt.png', fmt='PNG')