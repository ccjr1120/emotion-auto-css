interface Style {
  properties: {
    [key: string]: { values: String[]; description?: string; type?: string };
  };
}

export const STYLE_PROPERTIES: Style = {
  properties: {
    width: {
      values: ['auto', 'inherit'],
      description: 'Specifies the width of an element.',
    },
    height: {
      values: ['auto', 'inherit'],
      description: 'Specifies the height of an element.',
    },
    margin: {
      values: ['auto', 'inherit'],
      description: 'Sets the margin area on all four sides of an element.',
    },
    marginLeft: {
      values: ['auto', 'inherit'],
      description: 'Sets the margin area on the left side of an element.',
    },
    marginRight: {
      values: ['auto', 'inherit'],
      description: 'Sets the margin area on the right side of an element.',
    },
    marginTop: {
      values: ['auto', 'inherit'],
      description: 'Sets the margin area on the top of an element.',
    },
    marginBottom: {
      values: ['auto', 'inherit'],
      description: 'Sets the margin area on the bottom of an element.',
    },
    padding: {
      values: ['inherit'],
      description: 'Sets the padding area on all four sides of an element.',
    },
    paddingLeft: {
      values: [],
      description:
        'Sets the width of the padding area on the left side of an element.',
    },
    paddingRight: {
      values: [],
      description:
        'Sets the width of the padding area on the right side of an element.',
    },
    paddingTop: {
      values: [],
      description:
        'Sets the height of the padding area on the top of an element.',
    },
    paddingBottom: {
      values: [],
      description:
        'Sets the height of the padding area on the bottom of an element.',
    },
    font: {
      values: [],
      description:
        "Either a shorthand property for setting font-style, font-variant, font-weight, font-size, line-height, and font-family ; or a way to set the element's font to a system font, using specific keywords.",
    },
    fontSize: {
      values: [],
      description: 'Specifies the size of the font.',
    },
    fontStyle: {
      values: ['italic', 'normal', 'oblique'],
      description:
        'Specifies whether a font should be styled with a normal, italic, or oblique face from its font-family.',
    },
    fontWeight: {
      values: [
        'bold',
        'bolder',
        'lighter',
        'normal',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        'inherit',
      ],
      description: 'Specifies the weight (or boldness) of the font.',
    },
    fontFamily: {
      values: [
        'cursive',
        'fantasy',
        'inherit',
        'monospace',
        'sans-serif',
        'serif',
      ],
      description:
        'Specifies a prioritized list of one or more font family names and/or generic family names for the selected element.',
    },
    border: {
      values: [],
      description:
        'A shorthand property for setting all individual border property values at once: border-width, border-style, and border-color.',
    },
    borderRadius: {
      values: [],
      description:
        'Allows Web authors to define how rounded border corners are.',
    },
    borderTop: {
      values: [],
      description:
        'A shorthand that sets the values of border-top-color, border-top-style, and border-top-width.',
    },
    borderBottom: {
      values: [],
      description:
        'A shorthand that sets the values of border-bottom-color, border-bottom-style, and border-bottom-width.',
    },
    borderLeft: {
      values: [],
      description:
        'A shorthand that sets the values of border-left-color, border-left-style, and border-left-width.',
    },
    borderRight: {
      values: [],
      description:
        'A shorthand that sets the values of border-right-color, border-right-style, and border-right-width.',
    },
    borderColor: {
      values: ['inherit'],
      type: 'color',
      description:
        "A shorthand property for setting the color of the four sides of an element's border: border-top-color, border-right-color, border-bottom-color, border-left-color",
    },
    borderWidth: {
      values: ['medium', 'thin', 'thick', 'inherit'],
      description:
        "A shorthand property for setting the widths on all four sides of an element's border: border-top-width, border-right-width, border-bottom-width, and border-left-width.",
    },
    position: {
      values: ['absolute', 'fixed', 'relative', 'static', 'sticky', 'inherit'],
      description: 'Specifies how an element is positioned in a document.',
    },
    textAlign: {
      values: ['center', 'left', 'justify', 'right', 'inherit'],
      description:
        'Describes how inline content like text is aligned in its parent block element.',
    },
    background: {
      values: [],
      description:
        'The CSS background shorthand property lets you adjust all of the available background style options at once, including color image, origin and size, repeat method, and other features.',
    },
    backgroundColor: {
      values: ['inherit'],
      type: 'color',
      description:
        'Sets the background color of an element, either through a color value or the keyword transparent.',
    },
    backgroundPosition: {
      values: ['left', 'center', 'right', 'bottom', 'top'],
      description:
        'Sets the initial position for each defined background image, relative to the background position layer defined by background-origin.',
    },
    backgroundRepeat: {
      values: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y', 'round', 'space'],
      description: 'Defines how background images are repeated.',
    },
    backgroundImage: {
      values: [
        'image()',
        'linear-gradient()',
        'radial-gradient()',
        'repeating-linear-gradient()',
        'repeating-radial-gradient()',
        'url()',
      ],
      description: 'Sets one or more??background images on an element.',
    },
    backgroundSize: {
      values: ['auto', 'contain', 'cover'],
      description: "Specifies the size of an element's background image.",
    },
    backgroundClip: {
      values: ['border-box', 'content-box', 'padding-box', 'inherit'],
      description:
        "Specifies if an element's background, whether a color or an image, extends underneath its border.",
    },
    right: {
      values: ['auto', 'inherit'],
      description:
        'Participates in specifying the horizontal position of a positioned element.',
    },
    left: {
      values: ['auto', 'inherit'],
      description:
        'Participates in specifying the horizontal position of a positioned element.',
    },
    top: {
      values: ['auto', 'inherit'],
      description:
        'Participates in specifying the vertical position of a positioned element.',
    },
    bottom: {
      values: ['auto', 'inherit'],
      description:
        'Participates in specifying the vertical position of a positioned element.',
    },
    overflow: {
      values: ['auto', 'hidden', 'scroll', 'visible', 'inherit'],
      description:
        'Specifies whether to clip content, show scrollbars, or display overflowing content when it is too large for its block-level container.',
    },
    overflowX: {
      values: ['auto', 'hidden', 'scroll', 'visible', 'inherit'],
      description:
        'Specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.',
    },
    overflowY: {
      values: ['auto', 'hidden', 'scroll', 'visible', 'inherit'],
      description:
        'Specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.',
    },
    opacity: {
      values: ['inherit'],
      description:
        'Specifies the level of transparency of an element, that is, the degree to which the content behind the element is visible.',
    },
    cursor: {
      values: [
        'alias',
        'all-scroll',
        'auto',
        'cell',
        'col-resize',
        'context-menu',
        'copy',
        'crosshair',
        'default',
        'e-resize',
        'ew-resize',
        'grab',
        'grabbing',
        'help',
        'inherit',
        'move',
        'n-resize',
        'ne-resize',
        'nesw-resize',
        'no-drop',
        'none',
        'not-allowed',
        'ns-resize',
        'nw-resize',
        'nwse-resize',
        'pointer',
        'progress',
        'row-resize',
        's-resize',
        'se-resize',
        'sw-resize',
        'text',
        'vertical-text',
        'w-resize',
        'wait',
        'zoom-in',
        'zoom-out',
      ],
      description:
        'Specifies which mouse cursor to display when the mouse pointer is over an element.',
    },
    display: {
      values: [
        'block',
        'contents',
        'flex',
        'flow-root',
        'grid',
        'inline',
        'inline-block',
        'inline-flex',
        'inline-grid',
        'inline-table',
        'list-item',
        'none',
        'run-in',
        'subgrid',
        'table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row',
        'table-row-group',
        'inherit',
      ],
      description: 'Specifies the type of rendering box used for an element.',
    },
    color: {
      values: ['inherit'],
      type: 'color',
      description:
        "Sets the foreground color value of an element's text content and text decorations.",
    },
    visibility: {
      values: ['collapse', 'hidden', 'visible', 'inherit'],
      description:
        'Can show or hide an element without affecting the layout of a document (i.',
    },
    float: {
      values: ['left', 'right', 'none', 'inherit'],
      description:
        'Specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it.',
    },
    textDecoration: {
      values: ['line-through', 'none', 'overline', 'underline', 'inherit'],
      description: 'Specifies the appearance of decorative lines used on text.',
    },
    lineHeight: {
      values: ['normal', 'inherit'],
      description: 'Sets the amount of space used for lines, such as in text.',
    },
    zIndex: {
      values: ['auto', 'inherit'],
      description:
        'Specifies the z-order of a positioned element and its descendants.',
    },
    verticalAlign: {
      values: [
        'baseline',
        'bottom',
        'middle',
        'sub',
        'super',
        'text-bottom',
        'text-top',
        'top',
        'inherit',
      ],
      description:
        'Specifies the vertical alignment of an inline or table-cell box.',
    },
    boxSizing: {
      values: ['border-box', 'content-box', 'inherit'],
      description:
        'Used to alter the default CSS box model used to calculate width and height of the elements.',
    },
    clear: {
      values: ['both', 'left', 'none', 'right', 'inherit'],
      description:
        'Specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them.',
    },
    whiteSpace: {
      values: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'inherit'],
      description: 'Determines how whitespace inside an element is handled.',
    },
    maxWidth: {
      values: ['none', 'inherit'],
      description: 'Sets the maximum width of an element.',
    },
    outline: {
      values: ['inherit'],
      description:
        'A shorthand property for setting one or more of the individual outline properties outline-style, outline-width, and outline-color in a single declaration.',
    },
    content: {
      values: [
        'attr()',
        'close-quote',
        'no-close-quote',
        'no-open-quote',
        'normal',
        'none',
        'open-quote',
        'inherit',
      ],
      description:
        'Used with the ::before and ::after pseudo-elements to generate content in an element.',
    },
    minWidth: {
      values: ['inherit'],
      description: 'Sets the minimum width of an element.',
    },
    minHeight: {
      values: ['inherit'],
      description: 'Sets the minimum height of an element.',
    },
    listStyle: {
      values: [
        'none',
        'inherit',
        'initial',
        'unset',
        'url()',
        'armenian',
        'circle',
        'decimal',
        'decimal-leading-zero',
        'disc',
        'georgian',
        'inside',
        'lower-alpha',
        'lower-greek',
        'lower-latin',
        'lower-roman',
        'outside',
        'square',
        'upper-alpha',
        'upper-latin',
        'upper-roman',
      ],
      description:
        'A shorthand for setting the individual values that define how a list is displayed: list-style-type, list-style-image, and list-style-position.',
    },
    boxShadow: {
      values: [],
      description:
        'Describes one or more shadow effects as a comma-separated list.',
    },
    textShadow: {
      values: [],
      description: 'Adds shadows to text.',
    },
    textIndent: {
      values: ['inherit'],
      description:
        'Specifies the amount of indentation (empty space) that is put before lines of text in a block.',
    },
    maxHeight: {
      values: ['none', 'inherit'],
      description: 'Sets the maximum height of an element.',
    },
    textOverflow: {
      values: ['clip', 'ellipsis', 'inherit'],
      description:
        'Determines how overflowed content that is not displayed is signaled to users.',
    },
    borderStyle: {
      values: [
        'dashed',
        'dotted',
        'double',
        'groove',
        'hidden',
        'inset',
        'none',
        'outset',
        'ridge',
        'solid',
        'inherit',
      ],
      description:
        "A shorthand property that sets the line style for all four sides of an element's border.",
    },
    borderSpacing: {
      values: ['inherit'],
      description:
        'Specifies the distance between the borders of adjacent table cells.',
    },
    borderCollapse: {
      values: ['collapse', 'separate', 'inherit'],
      description:
        "Specifies whether a table's borders are separated (cells have distinct borders from each other) or collapsed (adjacent cells share borders).",
    },
    borderLeftColor: {
      values: ['inherit'],
      type: 'color',
      description: "Sets the color of an element's left border.",
    },
    borderLeftStyle: {
      values: [
        'dashed',
        'dotted',
        'double',
        'groove',
        'hidden',
        'inset',
        'none',
        'outset',
        'ridge',
        'solid',
        'inherit',
      ],
      description: "Sets the line style of an element's left border.",
    },
    borderLeftWidth: {
      values: ['medium', 'thin', 'thick', 'inherit'],
      description: 'Sets the width of the left border of a box.',
    },
    borderRightColor: {
      values: ['inherit'],
      type: 'color',
      description: "Sets the color of an element's right border.",
    },
    borderRightStyle: {
      values: [
        'dashed',
        'dotted',
        'double',
        'groove',
        'hidden',
        'inset',
        'none',
        'outset',
        'ridge',
        'solid',
        'inherit',
      ],
      description: "Sets the line style of an element's right border.",
    },
    borderRightWidth: {
      values: ['medium', 'thin', 'thick', 'inherit'],
      description: 'Sets the width of the right border of a box.',
    },
    borderTopColor: {
      values: ['inherit'],
      type: 'color',
      description: "Sets the color of an element's top border.",
    },
    borderTopStyle: {
      values: [
        'dashed',
        'dotted',
        'double',
        'groove',
        'hidden',
        'inset',
        'none',
        'outset',
        'ridge',
        'solid',
        'inherit',
      ],
      description: "Sets the line style of an element's top border.",
    },
    borderTopWidth: {
      values: ['medium', 'thin', 'thick', 'inherit'],
      description: 'Sets the width of the top border of a box.',
    },
    borderBottomColor: {
      values: ['inherit'],
      type: 'color',
      description: "Sets the color of an element's bottom border.",
    },
    borderBottomStyle: {
      values: [
        'dashed',
        'dotted',
        'double',
        'groove',
        'hidden',
        'inset',
        'none',
        'outset',
        'ridge',
        'solid',
        'inherit',
      ],
      description: "Sets the line style of an element's bottom border.",
    },
    borderBottomWidth: {
      values: ['medium', 'thin', 'thick', 'inherit'],
      description: 'Sets the width of the bottom border of a box.',
    },
    borderTopLeftRadius: {
      values: [],
      description: 'Sets the rounding of the top-left corner of the element.',
    },
    borderTopRightRadius: {
      values: [],
      description: 'Sets the rounding of the top-right corner of the element.',
    },
    borderBottomLeftRadius: {
      values: [],
      description:
        'Sets the rounding of the bottom-left corner of the element.',
    },
    borderBottomRightRadius: {
      values: [],
      description:
        'Sets the rounding of the bottom-right corner of the element.',
    },
    userSelect: {
      values: ['all', 'auto', 'contain', 'none', 'text'],
      description: 'Controls whether the user can select text.',
    },
    textTransform: {
      values: [
        'capitalize',
        'full-width',
        'lowercase',
        'none',
        'uppercase',
        'inherit',
      ],
      description: "Specifies how to capitalize an element's text.",
    },
    listStyleType: {
      values: [
        'armenian',
        'circle',
        'decimal',
        'decimal-leading-zero',
        'disc',
        'georgian',
        'lower-alpha',
        'lower-greek',
        'lower-latin',
        'lower-roman',
        'none',
        'square',
        'upper-alpha',
        'upper-latin',
        'upper-roman',
        'inherit',
      ],
      description: 'Specifies the appearance of a list item element.',
    },
    wordWrap: {
      values: ['break-word', 'normal'],
    },
    transition: {
      values: [],
      description:
        'A shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.',
    },
    letterSpacing: {
      values: ['normal', 'inherit'],
      description: 'Specifies the spacing behavior between text characters.',
    },
    transform: {
      values: [
        'matrix()',
        'matrix3d()',
        'none',
        'perspective()',
        'rotate()',
        'rotate3d()',
        'rotateX()',
        'rotateY()',
        'rotateZ()',
        'scale()',
        'scale3d()',
        'scaleX()',
        'scaleY()',
        'scaleZ()',
        'skewX()',
        'skewY()',
        'translate()',
        'translate3d()',
        'translateX()',
        'translateY()',
        'translateZ()',
      ],
      description:
        'Lets you modify the coordinate space of the CSS visual formatting model.',
    },
    pointerEvents: {
      values: [
        'all',
        'auto',
        'fill',
        'inherit',
        'none',
        'painted',
        'stroke',
        'visible',
        'visibleFill',
        'visiblePainted',
        'visibleStroke',
      ],
      description:
        'Specifies under what circumstances (if any) a particular graphic element can become the target of mouse events.',
    },
    direction: {
      values: ['ltr', 'rtl', 'inherit'],
      description:
        'Sets the direction of text, table columns, and horizontal overflow.',
    },
    clip: {
      values: ['auto', 'inherit'],
      description: 'Defines what portion of an element is visible.',
    },
    tableLayout: {
      values: ['auto', 'fixed', 'inherit'],
      description:
        'Specifies the algorithm used to lay out table cells, rows, and columns.',
    },
    src: {
      values: ['url()'],
    },
    resize: {
      values: ['both', 'horizontal', 'none', 'vertical', 'inherit'],
      description:
        'The resize CSS sets whether an element is resizable, and if so, in which direction(s).',
    },
    wordBreak: {
      values: ['normal', 'break-all', 'keep-all'],
      description:
        'Specifies whether or not the browser should insert line breaks wherever the text would otherwise overflow its content box.',
    },
    filter: {
      values: [
        'blur()',
        'brightness()',
        'contrast()',
        'custom()',
        'drop-shadow()',
        'grayscale()',
        'hue-rotate()',
        'invert()',
        'none',
        'opacity()',
        'sepia()',
        'saturate()',
        'url()',
      ],
      description:
        'Lets you apply graphical effects like blurring, sharpening, or color shifting to an element.',
    },
    transformOrigin: {
      values: ['bottom', 'center', 'left', 'right', 'top'],
      description:
        'Lets you modify the origin for transformations of an element.',
    },
    fontVariant: {
      values: ['normal', 'small-caps', 'inherit'],
      description:
        'A shorthand for the longhand properties font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, and font-variant-east-asian.',
    },
    quotes: {
      values: ['none', 'inherit'],
      description: 'Indicates how user agents should render quotation marks.',
    },
    unicodeBidi: {
      values: ['bidi-override', 'embed', 'normal', 'inherit'],
      description:
        'The unicode-bidi CSS property, together with the direction property, determines how bidirectional text in a document is handled.',
    },
    wordSpacing: {
      values: ['normal', 'inherit'],
      description: 'Specifies the spacing behavior between tags and words.',
    },
    textRendering: {
      values: [
        'auto',
        'geometricPrecision',
        'optimizeLegibility',
        'optimizeSpeed',
      ],
      description:
        'Provides information to the rendering engine about what to optimize for when rendering text.',
    },
    outlineColor: {
      values: ['invert', 'inherit'],
      type: 'color',
      description: "Sets the color of an element's outline.",
    },
    listStylePosition: {
      values: ['inside', 'outside', 'inherit'],
      description:
        'Specifies the position of the marker box in the principal block box.',
    },
    outlineOffset: {
      values: ['inherit'],
      description:
        'Sets the amount of space between an outline and the edge or border of an element.',
    },
    orphans: {
      values: ['inherit'],
      description:
        'Specifies the minimum number of lines in a block container that must be shown at the bottom of a page, region, or column.',
    },
    outlineStyle: {
      values: [
        'dashed',
        'dotted',
        'double',
        'groove',
        'hidden',
        'inset',
        'none',
        'outset',
        'ridge',
        'solid',
        'inherit',
      ],
      description: "Sets the style of an element's outline.",
    },
    outlineWidth: {
      values: ['medium', 'thin', 'thick', 'inherit'],
      description: "Sets the width (thickness) of an element's outline.",
    },
    flex: {
      values: ['auto', 'initial', 'none'],
      description:
        'Specifies how a flex item will grow or shrink so as to fit the space available in its flex container.',
    },
    flexGrow: {
      values: [],
      description: 'Specifies the flex grow factor of a flex item.',
    },
    flexDirection: {
      values: ['column', 'column-reverse', 'row', 'row-reverse'],
      description:
        'Specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).',
    },
    flexFlow: {
      values: [
        'column',
        'column-reverse',
        'nowrap',
        'row',
        'row-reverse',
        'wrap',
        'wrap-reverse',
      ],
      description:
        'A shorthand property for flex-direction and flex-wrap individual properties.',
    },
    flexWrap: {
      values: ['nowrap', 'wrap', 'wrap-reverse'],
      description:
        'Specifies whether flex items are forced into a single line or can be wrapped onto multiple lines.',
    },
    flexShrink: {
      values: [],
      description: 'Specifies the flex shrink factor of a flex item.',
    },
    flexBasis: {
      values: ['auto'],
      description:
        'Specifies the flex basis which is the initial main size of a flex item.',
    },
    listStyleImage: {
      values: ['none', 'url()', 'inherit'],
      description: 'Specifies an image to be used as the list item marker.',
    },
    unicodeRange: {
      values: [],
    },
    alignItems: {
      values: ['baseline', 'center', 'flex-end', 'flex-start', 'stretch'],
      description:
        'Defines how the browser distributes space between and around flex items along the cross-axis of their container.',
    },
    transitionDelay: {
      values: [],
      description:
        'Specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the transition effect.',
    },
    transitionDuration: {
      values: [],
      description:
        'Specifies the number of seconds or milliseconds a transition animation should take to complete.',
    },
    justifyContent: {
      values: [
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
      ],
      description:
        'Defines how the browser distributes space between and around content items along the main axis of their container.',
    },
    transitionProperty: {
      values: ['all', 'none'],
      description:
        'Used to specify the names of CSS properties to which a transition effect should be applied.',
    },
    order: {
      values: [],
      description:
        'Specifies the order used to lay out flex items in their flex container.',
    },
    transitionTimingFunction: {
      values: [
        'cubic-bezier()',
        'ease',
        'ease-in',
        'ease-in-out',
        'ease-out',
        'linear',
        'step-end',
        'step-start',
        'steps()',
      ],
      description:
        'Used to describe how the intermediate values of the CSS??properties being affected by a transition effect are calculated.',
    },
    backgroundAttachment: {
      values: ['fixed', 'local', 'scroll', 'inherit'],
      description:
        "If a background-image is specified, the background-attachment CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.",
    },
    backgroundOrigin: {
      values: ['border-box', 'content-box', 'padding-box', 'inherit'],
      description: 'Sets the background positioning area, i.',
    },
    backfaceVisibility: {
      values: ['hidden', 'visible'],
      description:
        'Determines whether or not the back face of the element is visible when facing the user.',
    },
    pageBreakInside: {
      values: ['auto', 'avoid', 'inherit'],
      description: 'Adjusts page breaks inside the current element.',
    },
    pageBreakAfter: {
      values: ['always', 'auto', 'avoid', 'left', 'right', 'inherit'],
      description: 'Adjusts page breaks after the current element.',
    },
    widows: {
      values: ['inherit'],
      description:
        'Specifies the minimum number of lines in a block container that must be shown at the top of a page, region, or column.',
    },
    counterIncrement: {
      values: ['none', 'inherit'],
      description:
        'Increases or decreases the value of a CSS counter by a given amount.',
    },
    counterReset: {
      values: ['none', 'inherit'],
      description: 'Resets a CSS counter to a given value.',
    },
    perspectiveOrigin: {
      values: ['bottom', 'center', 'left', 'right', 'top'],
      description: 'Determines the position at which the viewer is looking.',
    },
    perspective: {
      values: ['none'],
      description:
        'Determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.',
    },
    emptyCells: {
      values: ['hide', 'show', 'inherit'],
      description:
        'Specifies how user agents should render borders and backgrounds around table cells that have no visible content.',
    },
    captionSide: {
      values: ['bottom', 'top', 'inherit'],
      description:
        "Puts the content of a table's caption on the specified side.",
    },
    transformStyle: {
      values: ['flat', 'preserve-3d'],
      description:
        'Determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.',
    },
    borderImage: {
      values: ['url()'],
      description: 'Allows drawing an image on the borders of elements.',
    },
    fontStretch: {
      values: [
        'condensed',
        'expanded',
        'extra-condensed',
        'extra-expanded',
        'normal',
        'semi-condensed',
        'semi-expanded',
        'ultra-condensed',
        'ultra-expanded',
      ],
      description: 'Selects a normal, condensed, or expanded face from a font.',
    },
    willChange: {
      values: [
        'auto',
        'contents',
        'opacity',
        'scroll-position',
        'transform',
        'inherit',
        'initial',
        'unset',
      ],
      description:
        'Provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed.',
    },
    animation: {
      values: [],
      description:
        'A shorthand property for the various animation properties: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.',
    },
    pageBreakBefore: {
      values: ['always', 'auto', 'avoid', 'left', 'right', 'inherit'],
      description: 'Adjusts page breaks before the current element.',
    },
    alignSelf: {
      values: [
        'auto',
        'baseline',
        'center',
        'flex-end',
        'flex-start',
        'stretch',
      ],
      description:
        'Aligns flex items of the current flex line overriding the align-items value.',
    },
    alignContent: {
      values: [
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'stretch',
      ],
      description:
        'Defines how the browser distributes space between and around content items along the cross-axis of their container, which is serving as a flexible box container.',
    },
    borderImageSlice: {
      values: [],
      description:
        'Divides the image specified by border-image-source in nine regions: the four corners, the four edges and the middle.',
    },
    borderImageWidth: {
      values: ['auto'],
      description:
        'Defines the width of the border image by defining inward offsets from the border edges.',
    },
    borderImageOutset: {
      values: [],
      description:
        'Describes by what amount the border image area extends beyond the border box.',
    },
    borderImageRepeat: {
      values: ['repeat', 'round', 'space', 'stretch'],
      description:
        'Defines how the middle part of a border image is handled so that it can match the size of the border.',
    },
    tabSize: {
      values: [],
      description: 'Used to customize the width of a tab (U+0009) character.',
    },
    objectFit: {
      values: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description:
        'Specifies how a replaced element, such as an img or video, should be resized to fit its container.',
    },
    fontKerning: {
      values: ['auto', 'none', 'normal'],
      description:
        'Controls the usage of the kerning information stored in a font.',
    },
    animationName: {
      values: ['none'],
      description:
        'Specifies one or more animations that should be applied to an element.',
    },
    animationDuration: {
      values: [],
      description:
        'Specifies the length of time that an animation should take to complete one cycle.',
    },
    borderImageSource: {
      values: [],
      description:
        'Defines the image to use instead of the style of the border.',
    },
    animationFillMode: {
      values: ['backwards', 'both', 'forwards', 'none'],
      description:
        'Specifies how a CSS animation should apply styles to its target before and after its execution.',
    },
    animationTimingFunction: {
      values: [
        'cubic-bezier()',
        'ease',
        'ease-in',
        'ease-in-out',
        'ease-out',
        'linear',
        'step-end',
        'step-start',
        'steps()',
      ],
      description:
        'Specifies how a CSS animation should progress over the duration of each cycle.',
    },
    animationIterationCount: {
      values: ['infinite'],
      description:
        'Specifies the number of times an animation cycle should be played before stopping.',
    },
    animationDelay: {
      values: [],
      description: 'Specifies when an animation should start.',
    },
    fontVariantLigatures: {
      values: ['normal', 'none'],
      description:
        'Controls which ligatures and contextual forms are used in textual content of the elements it applies to.',
    },
    backgroundBlendMode: {
      values: [
        'color',
        'color-burn',
        'color-dodge',
        'darken',
        'difference',
        'exclusion',
        'hard-light',
        'hue',
        'lighten',
        'luminosity',
        'multiply',
        'normal',
        'overlay',
        'saturation',
        'screen',
        'soft-light',
      ],
      description:
        "Describes how the element's background images should blend with each other and the element's background color.",
    },
    objectPosition: {
      values: ['left', 'center', 'right', 'bottom', 'top'],
      description:
        'Determines the alignment of the selected element inside its box.',
    },
    mixBlendMode: {
      values: [
        'color',
        'color-burn',
        'color-dodge',
        'darken',
        'difference',
        'exclusion',
        'hard-light',
        'hue',
        'lighten',
        'luminosity',
        'multiply',
        'normal',
        'overlay',
        'saturation',
        'screen',
        'soft-light',
      ],
      description:
        "Describes how an element's content should blend with the content of the element's direct parent and the element's background.",
    },
    shapeOutside: {
      values: [
        'none',
        'inherit',
        'circle()',
        'ellipse()',
        'polygon()',
        'inset()',
        'margin-box',
        'border-box',
        'padding-box',
        'content-box',
        'url()',
        'image()',
        'linear-gradient()',
        'radial-gradient()',
        'repeating-linear-gradient()',
        'repeating-radial-gradient()',
      ],
      description:
        "Uses shape values to define the float area for a float and will cause inline content to wrap around the shape instead of the float's bounding box.",
    },
    shapeMargin: {
      values: [],
      description: 'Adds a margin to shape-outside.',
    },
    isolation: {
      values: ['auto', 'isolate'],
      description: 'Defines if the element must create a new stacking context.',
    },
    shapeImageThreshold: {
      values: [],
      description:
        'Defines the alpha channel threshold used to extract the shape using an image as the value for shape-outside.',
    },
    animationDirection: {
      values: ['alternate', 'alternate-reverse', 'normal', 'reverse'],
      description:
        'Specifies whether an animation should play forwards, backwards, or alternating back and forth.',
    },
    animationPlayState: {
      values: ['paused', 'running'],
      description: 'Specifies whether an animation is running or paused.',
    },
    all: {
      values: [],
      description:
        'The CSS all shorthand property resets all properties, apart from unicode-bidi and direction, to their initial or inherited value.',
    },
    columnFill: {
      values: ['auto', 'balance'],
      description: 'Controls how contents are partitioned into columns.',
    },
    textAlignLast: {
      values: ['center', 'left', 'justify', 'right', 'inherit'],
      description:
        'Describes how the last line of a block or a line, right before a forced line break, is aligned.',
    },
    textDecorationColor: {
      values: [],
      type: 'color',
      description:
        'Sets the color of the lines specified by text-decoration-line.',
    },
    textDecorationStyle: {
      values: ['dashed', 'dotted', 'double', 'solid', 'wavy'],
      description:
        'Sets the style of the lines specified by text-decoration-line.',
    },
    textDecorationLine: {
      values: ['line-through', 'none', 'overline', 'underline'],
      description:
        'Sets the kind of decoration that is used on text in an element.',
    },
    fontSizeAdjust: {
      values: ['auto', 'none'],
      description:
        'Specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.',
    },
    textUnderlinePosition: {
      values: ['alphabetic', 'auto', 'below', 'left', 'right'],
      description:
        "Specifies the position of the underline which is set using the text-decoration property's underline value.",
    },
    scrollBehavior: {
      values: ['auto', 'smooth'],
      description:
        'Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.',
    },
    gridColumn: {
      values: ['auto'],
      description:
        "A shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
    },
    gridRow: {
      values: ['auto'],
      description:
        'A shorthand property for grid-row-start and grid-row-end specifying a grid item???s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.',
    },
    gridTemplate: {
      values: ['none'],
      description:
        'A shorthand property for defining grid columns, rows, and areas.',
    },
    caretColor: {
      values: ['auto'],
      type: 'color',
      description: 'Sets the color of the caret in an element.',
    },
    gridTemplateColumns: {
      values: ['auto'],
      description:
        'Defines the line names and track sizing functions of the grid columns.',
    },
    gridAutoColumns: {
      values: [],
      description:
        'Specifies the size of an implicitly-created grid column track.',
    },
    gridAutoFlow: {
      values: ['row', 'column', 'dense'],
      description:
        'Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.',
    },
    gridAutoRows: {
      values: [],
      description:
        'Specifies the size of an implicitly-created grid row track.',
    },
    gridColumnStart: {
      values: [],
      description:
        'Specifies a grid item???s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement.',
    },
    gridTemplateRows: {
      values: ['auto'],
      description:
        'Defines the line names and track sizing functions of the grid rows.',
    },
    gridRowEnd: {
      values: [],
      description:
        'Specifies a grid item???s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.',
    },
    gridColumnEnd: {
      values: [],
      description:
        'Specifies a grid item???s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.',
    },
    gridRowStart: {
      values: [],
      description:
        'Specifies a grid item???s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.',
    },
    boxDecorationBreak: {
      values: ['clone', 'slice'],
      description:
        'Specifies how the background, padding, border, border-image, box-shadow, margin, and clip-path of an element is applied when the box for the element is fragmented.',
    },
    breakAfter: {
      values: [
        'always',
        'auto',
        'avoid',
        'avoid-column',
        'avoid-page',
        'avoid-region',
        'column',
        'left',
        'page',
        'region',
        'right',
      ],
      description:
        'Defines how page, column, or region breaks should behave after a generated box.',
    },
    breakBefore: {
      values: [
        'always',
        'auto',
        'avoid',
        'avoid-column',
        'avoid-page',
        'avoid-region',
        'column',
        'left',
        'page',
        'region',
        'right',
      ],
      description:
        'Defines how page, column, or region breaks should behave before a generated box.',
    },
    breakInside: {
      values: ['auto', 'avoid', 'avoid-column', 'avoid-page', 'avoid-region'],
      description:
        'Defines how page, column, or region breaks should behave inside a generated box.',
    },
    columns: {
      values: [],
      description:
        'A shorthand property allowing to set both the column-width and the column-count properties at the same time.',
    },
    columnCount: {
      values: [],
      description: 'Describes the number of columns of the element.',
    },
    columnGap: {
      values: ['normal'],
      description:
        'Sets the size of the gap between columns for elements which are specified to be displayed as multi-column elements.',
    },
    columnRule: {
      values: [],
      description:
        'In multi-column layouts, the column-rule CSS property specifies a straight line, or "rule", to be drawn between each column.',
    },
    columnRuleColor: {
      values: [],
      type: 'color',
      description:
        'Lets you set the color of the "rule" or line drawn between columns in multi-column layouts.',
    },
    columnRuleStyle: {
      values: [
        'dashed',
        'dotted',
        'double',
        'groove',
        'hidden',
        'inset',
        'none',
        'outset',
        'ridge',
        'solid',
        'inherit',
      ],
      description:
        'Lets you set the style of the rule drawn between columns in multi-column layouts.',
    },
    columnRuleWidth: {
      values: ['medium', 'thin', 'thick', 'inherit'],
      description:
        'Lets you set the width of the rule drawn between columns in multi-column layouts.',
    },
    columnSpan: {
      values: ['all', 'none'],
      description:
        'Makes it possible for an element to span across all columns when its value is set to all.',
    },
    columnWidth: {
      values: ['auto', 'inherit'],
      description: 'Specifies the minimum column width.',
    },
    flowInto: {
      values: ['none'],
      type: 'named-flow',
    },
    flowFrom: {
      values: ['none', 'inherit'],
      type: 'named-flow',
    },
    fontFeatureSettings: {
      values: ['normal'],
      description:
        'Gives you control over advanced typographic features in OpenType fonts.',
    },
    fontLanguageOverride: {
      values: ['normal'],
      description:
        'Controls the usage of language-specific glyphs in a typeface.',
    },
    fontSynthesis: {
      values: ['none', 'style', 'weight'],
      description:
        'Controls which missing typefaces, bold or italic, may be synthesized by the browser.',
    },
    fontVariantAlternates: {
      values: ['normal'],
      description: 'Controls the usage of alternate glyphs.',
    },
    fontVariantCaps: {
      values: [
        'normal',
        'small-caps',
        'all-small-caps',
        'petite-caps',
        'all-petite-caps',
        'unicase',
        'titling-caps',
      ],
      description:
        'Controls the usage of alternate glyphs for capital letters.',
    },
    fontVariantEastAsian: {
      values: ['normal'],
      description:
        'Controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.',
    },
    fontVariantNumeric: {
      values: ['normal'],
      description:
        'Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.',
    },
    fontVariantPosition: {
      values: ['normal', 'sub', 'super'],
      description:
        'Controls the usage of alternate, smaller glyphs that are positioned as superscript or subscript relative to the baseline of the font (which remains unchanged).',
    },
    hyphens: {
      values: ['auto', 'manual', 'none'],
      description:
        'Specifies how words should be hyphenated when text wraps across multiple lines.',
    },
    imageOrientation: {
      values: [],
      description:
        'Describes how to correct the default orientation of an image.',
    },
    imageResolution: {
      values: ['from-image', 'snap'],
    },
    regionBreakAfter: {
      values: [
        'always',
        'auto',
        'avoid',
        'avoid-column',
        'avoid-page',
        'avoid-region',
        'column',
        'left',
        'page',
        'region',
        'right',
      ],
    },
    regionBreakBefore: {
      values: [
        'always',
        'auto',
        'avoid',
        'avoid-column',
        'avoid-page',
        'avoid-region',
        'column',
        'left',
        'page',
        'region',
        'right',
      ],
    },
    regionBreakInside: {
      values: ['auto', 'avoid', 'avoid-column', 'avoid-page', 'avoid-region'],
    },
    regionFragment: {
      values: ['auto', 'break'],
    },
    shapeInside: {
      values: [
        'auto',
        'circle()',
        'ellipse()',
        'inherit',
        'outside-shape',
        'polygon()',
        'rectangle()',
      ],
    },
    textDecorationSkip: {
      values: ['edges', 'ink', 'none', 'objects', 'spaces'],
      description:
        'Specifies what parts of the element???s content any text decoration affecting the element must skip over.',
    },
    textEmphasis: {
      values: [],
      description:
        'A shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration.',
    },
    textEmphasisColor: {
      values: [],
      type: 'color',
      description: 'Defines the color used to draw an emphasis mark.',
    },
    textEmphasisPosition: {
      values: ['above', 'below', 'left', 'right'],
      description: 'Describes where emphasis marks are drawn at.',
    },
    textEmphasisStyle: {
      values: [
        'circle',
        'dot',
        'double-circle',
        'filled',
        'none',
        'open',
        'sesame',
        'triangle',
      ],
      description: 'Defines the type of emphasis used.',
    },
    fontDisplay: {
      values: ['auto', 'block', 'swap', 'fallback', 'optional'],
    },
    grid: {
      values: [],
      description:
        'A shorthand property that sets all of the explicit grid properties (grid-template-rows, grid-template-columns, and grid-template-areas), all the implicit grid properties (grid-auto-rows, grid-auto-columns, and grid-auto-flow), and the gutter properties (grid-column-gap and grid-row-gap) in a single declaration.',
    },
    gridArea: {
      values: [],
      description:
        'A shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end, specifying a grid item???s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.',
    },
    gridColumnGap: {
      values: [],
      description: 'Specifies the gutter between grid columns.',
    },
    gridGap: {
      values: [],
      description:
        'A shorthand property for grid-row-gap and grid-column-gap specifying the gutters between grid rows and columns.',
    },
    gridRowGap: {
      values: [],
      description: 'Specifies the gutter between grid rows.',
    },
    gridTemplateAreas: {
      values: [],
      description: 'Specifies named grid areas.',
    },
    hangingPunctuation: {
      values: ['allow-end', 'first', 'force-end', 'last', 'none'],
      description:
        'Specifies whether a punctuation mark, at the start or end of a line of text, hangs and may be placed outside the line box.',
    },
  },
};
