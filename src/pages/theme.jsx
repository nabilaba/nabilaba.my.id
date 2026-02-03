import { extendTheme } from "@chakra-ui/react";

const cursorSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewport='0 0 32 32' style='fill:black;stroke:yellow;stroke-width:2px;'><path d='M2 2l10 24l-4-10l12-4L2 2z' /></svg>`;

const pointerSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewport='0 0 32 32' style='fill:black;stroke:yellow;stroke-width:2px;'><path d='M10 2l-2 12h-4l2 10h14l2-14h-4l2-8z' /></svg>`;

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        cursor: `url("${cursorSvg}"), auto`,
      },
      body: {
        bg: "#0a0a12",
        color: "whiteAlpha.900",
        overflowX: "hidden",
        width: "100%",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      },

      "a, button, [role='button'], .chakra-heading[onClick], .chakra-icon": {
        cursor: `url("${pointerSvg}"), pointer !important`,
      },
      "section, div[id]": {
        scrollMarginTop: "100px",
      },
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "#0a0a12",
      },
      "::-webkit-scrollbar-thumb": {
        background: "linear-gradient(to bottom, #7928CA, #FF0080)",
        borderRadius: "10px",
        border: "2px solid #0a0a12",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "linear-gradient(to bottom, #9b4de0, #ff3399)",
      },
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});