---
headline: Wave
---
Wave is a pen that I made to learn more about the \<canvas\> element. My goal was to render a complex animation as quickly as possible. I did this by rendering the shape to a buffer. The basic shape consisted of a large ring with an outer black circle on the edge. Instead of drawing both of these shapes at each point, I drew it once on a hidden "buffer" canvas and copied the image data. After that, I could draw it again at every other point, slightly modifying the rotation each time. The result is much more efficient, running smoothly at full screen while [the original attempt](http://codepen.io/reccanti/pen/YwYQab) struggles to run in a small window.
