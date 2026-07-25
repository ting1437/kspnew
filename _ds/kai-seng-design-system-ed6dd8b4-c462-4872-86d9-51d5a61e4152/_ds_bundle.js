/* @ds-bundle: {"format":4,"namespace":"KaiSengDesignSystem_ed6dd8","components":[{"name":"CategoryCard","sourcePath":"components/commerce/CategoryCard.jsx"},{"name":"ContactStrip","sourcePath":"components/commerce/ContactStrip.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"SpecTable","sourcePath":"components/commerce/SpecTable.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StickerFrame","sourcePath":"components/core/StickerFrame.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TapeStrip","sourcePath":"components/core/TapeStrip.jsx"},{"name":"TornDivider","sourcePath":"components/core/TornDivider.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"CategoryTabs","sourcePath":"components/navigation/CategoryTabs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"}],"sourceHashes":{"components/commerce/CategoryCard.jsx":"25df16d08344","components/commerce/ContactStrip.jsx":"80e89ed602de","components/commerce/ProductCard.jsx":"9e004db1b9d1","components/commerce/SpecTable.jsx":"41955106eb80","components/core/Badge.jsx":"b4994fdf9399","components/core/Button.jsx":"02f0f9d1a96b","components/core/Card.jsx":"3abadbf13a1d","components/core/Eyebrow.jsx":"dc3162057d87","components/core/IconButton.jsx":"989cdf3009c2","components/core/StickerFrame.jsx":"240764a0f295","components/core/Tag.jsx":"a6157390a3f7","components/core/TapeStrip.jsx":"991f488b17e8","components/core/TornDivider.jsx":"2b2ca6844353","components/feedback/Dialog.jsx":"07ba534ced41","components/feedback/EmptyState.jsx":"e710ce5994fc","components/feedback/Toast.jsx":"241019383f96","components/feedback/Tooltip.jsx":"680651d71e11","components/forms/Checkbox.jsx":"9e62a536bb22","components/forms/Input.jsx":"faf39f0c7591","components/forms/QuantityStepper.jsx":"4bbd1d6077d0","components/forms/Radio.jsx":"23e713239f1a","components/forms/Select.jsx":"7484374ccd1e","components/forms/Switch.jsx":"cbac70482898","components/forms/Textarea.jsx":"307935168419","components/navigation/Breadcrumbs.jsx":"ae2f3f744d0e","components/navigation/CategoryTabs.jsx":"ad3edf8392c6","components/navigation/Footer.jsx":"b07365a05d81","components/navigation/NavBar.jsx":"3d4e00289791","components/navigation/Pagination.jsx":"b3808896a1ae","slides/CatalogueSlides.jsx":"eed2641a7521","ui_kits/website/AboutScreen.jsx":"0b1eeff7cdf0","ui_kits/website/CatalogueScreen.jsx":"eed1689384ff","ui_kits/website/ContactScreen.jsx":"8f0e76f3c01f","ui_kits/website/HomeScreen.jsx":"6e71e8db78a1","ui_kits/website/ProductPanel.jsx":"acb3243bdd9b","ui_kits/website/data.js":"5aaac9ed5181"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KaiSengDesignSystem_ed6dd8 = window.KaiSengDesignSystem_ed6dd8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CategoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategoryCard({
  image,
  label,
  count,
  tone = 'sage',
  onSelect,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bar = {
    sage: 'var(--ks-sage)',
    clay: 'var(--ks-terracotta)',
    kraft: 'var(--ks-sand-deep)',
    ink: 'var(--ks-ink)'
  }[tone];
  return /*#__PURE__*/React.createElement("a", _extends({
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-3)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lift)' : 'var(--shadow-sticker)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-paper), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      overflow: 'hidden',
      background: 'var(--ks-sand-light)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 14,
      background: 'var(--surface-card)',
      clipPath: 'var(--tear-top)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--pad-card) var(--pad-card)',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '800 19px/1.2 var(--font-display)',
      letterSpacing: '-.015em',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12.5px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, count, " items")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: bar
    }
  }));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ContactStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactStrip({
  phone,
  address,
  web,
  iconBase = 'assets/icons',
  style,
  ...rest
}) {
  const item = (icon, children) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      height: 22,
      opacity: .9,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13.5px/1.45 var(--font-body)'
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--ks-sage)',
      color: 'var(--text-inverse)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--gutter)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-9)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, phone && item(iconBase + '/phone.png', phone), address && item(iconBase + '/pin.png', address), web && item(iconBase + '/globe.png', web)));
}
Object.assign(__ds_scope, { ContactStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ContactStrip.jsx", error: String((e && e.message) || e) }); }

// components/commerce/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecTable({
  rows = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      font: '400 14.5px var(--font-body)',
      ...style
    }
  }, rest), rows.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.label
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      padding: '11px 20px 11px 0',
      color: 'var(--text-muted)',
      borderTop: i ? '1px dashed var(--rule-dotted)' : 'none',
      whiteSpace: 'nowrap'
    }
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      padding: '11px 0',
      margin: 0,
      color: 'var(--text-heading)',
      fontWeight: 500,
      borderTop: i ? '1px dashed var(--rule-dotted)' : 'none',
      textAlign: 'right'
    }
  }, r.value))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KS_BADGE_TONES = {
  ok: {
    background: 'var(--status-ok-bg)',
    color: 'var(--status-ok)'
  },
  warn: {
    background: 'var(--status-warn-bg)',
    color: 'var(--status-warn)'
  },
  alert: {
    background: 'var(--status-alert-bg)',
    color: 'var(--status-alert)'
  },
  neutral: {
    background: 'var(--ks-sand-light)',
    color: 'var(--text-body)'
  }
};
function Badge({
  tone = 'neutral',
  dot = true,
  children,
  style,
  ...rest
}) {
  const t = KS_BADGE_TONES[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 9px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 600,
      ...t,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: t.color
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const KS_BTN_BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  borderRadius: 'var(--radius-2)',
  textDecoration: 'none',
  transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
  whiteSpace: 'nowrap'
};
const KS_BTN_SIZES = {
  sm: {
    padding: 'var(--pad-button-sm)',
    fontSize: '13px'
  },
  md: {
    padding: 'var(--pad-button)',
    fontSize: '14px'
  },
  lg: {
    padding: 'var(--pad-button-lg)',
    fontSize: '16px'
  }
};
const KS_BTN_VARIANTS = {
  primary: {
    background: 'var(--ks-sage)',
    color: 'var(--ks-cream)',
    boxShadow: 'var(--shadow-2)'
  },
  secondary: {
    background: 'var(--ks-terracotta)',
    color: 'var(--ks-cream)',
    boxShadow: 'var(--shadow-2)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-heading)',
    boxShadow: 'inset 0 0 0 var(--stroke) var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)',
    boxShadow: 'none'
  },
  kraft: {
    background: 'var(--ks-sand)',
    color: 'var(--text-heading)',
    boxShadow: 'var(--shadow-cut)'
  }
};
const KS_BTN_HOVER = {
  primary: {
    background: 'var(--ks-sage-deep)',
    boxShadow: 'var(--shadow-lift)'
  },
  secondary: {
    background: 'var(--ks-terracotta-deep)',
    boxShadow: 'var(--shadow-lift)'
  },
  outline: {
    background: 'var(--ks-sand-light)'
  },
  ghost: {
    background: 'var(--ks-sage-wash)'
  },
  kraft: {
    background: 'var(--ks-sand-deep)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  as = 'button',
  href,
  icon,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  const s = {
    ...KS_BTN_BASE,
    ...KS_BTN_SIZES[size],
    ...KS_BTN_VARIANTS[variant],
    ...(hover && !disabled ? KS_BTN_HOVER[variant] : null),
    ...(hover && !disabled ? {
      transform: 'translateY(-2px)'
    } : null),
    ...(press && !disabled ? {
      transform: 'scale(.985)',
      boxShadow: 'var(--shadow-press)'
    } : null),
    ...(full ? {
      width: '100%'
    } : null),
    ...(disabled ? {
      opacity: .42,
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none'
    } : null),
    ...style
  };
  return React.createElement(Tag, {
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    ...rest
  }, icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  surface = 'paper',
  tear = 'none',
  tilt = 0,
  pad = 'md',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = {
    paper: 'var(--surface-card)',
    cream: 'var(--ks-cream)',
    kraft: 'var(--surface-kraft)',
    sage: 'var(--ks-sage)',
    ink: 'var(--ks-ink)'
  }[surface];
  const fg = surface === 'sage' || surface === 'ink' ? 'var(--text-inverse)' : 'var(--text-body)';
  const clip = {
    none: undefined,
    top: 'var(--tear-top)',
    bottom: 'var(--tear-bottom)',
    both: 'var(--tear-both)'
  }[tear];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: bg,
      color: fg,
      padding: {
        none: 0,
        sm: 'var(--space-4)',
        md: 'var(--pad-card)',
        lg: 'var(--pad-card-lg)'
      }[pad],
      borderRadius: clip ? 0 : 'var(--radius-3)',
      border: clip ? 'none' : 'var(--stroke-hair) solid var(--border-hairline)',
      boxShadow: interactive && hover ? 'var(--shadow-lift)' : 'var(--shadow-sticker)',
      clipPath: clip,
      transform: `rotate(${tilt}deg)${interactive && hover ? ' translateY(-3px)' : ''}`,
      transition: 'transform var(--dur-base) var(--ease-paper), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'sage',
  chip = false,
  children,
  style,
  ...rest
}) {
  const color = {
    sage: 'var(--text-accent)',
    clay: 'var(--text-accent-alt)',
    ink: 'var(--text-muted)'
  }[tone];
  const bg = {
    sage: 'var(--ks-sage)',
    clay: 'var(--ks-terracotta)',
    ink: 'var(--ks-ink)'
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--type-eyebrow)',
      fontWeight: 'var(--fw-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      ...(chip ? {
        background: bg,
        color: 'var(--ks-cream)',
        padding: '4px 10px',
        borderRadius: 'var(--radius-1)'
      } : {
        color
      }),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = 'ghost',
  size = 38,
  label,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tone = {
    ghost: {
      background: hover ? 'var(--ks-sand-light)' : 'transparent',
      color: 'var(--text-heading)',
      boxShadow: 'none'
    },
    solid: {
      background: hover ? 'var(--ks-sage-deep)' : 'var(--ks-sage)',
      color: 'var(--ks-cream)',
      boxShadow: 'var(--shadow-2)'
    },
    outline: {
      background: hover ? 'var(--ks-sand-light)' : 'var(--surface-card)',
      color: 'var(--text-heading)',
      boxShadow: 'inset 0 0 0 var(--stroke-hair) var(--border-soft)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      border: 'none',
      borderRadius: 'var(--radius-2)',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...tone,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StickerFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StickerFrame({
  tilt = -1.4,
  bleed = 10,
  tape = null,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'inline-block',
      background: 'var(--ks-paper)',
      padding: bleed,
      paddingBottom: bleed + 14,
      boxShadow: 'var(--shadow-sticker)',
      transform: `rotate(${tilt}deg)`,
      ...style
    }
  }, rest), tape && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -13,
      left: '50%',
      width: 86,
      height: 26,
      marginLeft: -43,
      background: {
        sage: 'var(--tape-sage)',
        clay: 'var(--tape-clay)',
        kraft: 'var(--tape-kraft)'
      }[tape],
      transform: 'rotate(-4deg)'
    }
  }), children);
}
Object.assign(__ds_scope, { StickerFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StickerFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KS_TAG_TONES = {
  sage: {
    background: 'var(--ks-sage-wash)',
    color: 'var(--ks-sage-deep)'
  },
  clay: {
    background: 'var(--ks-terracotta-wash)',
    color: 'var(--ks-terracotta-deep)'
  },
  kraft: {
    background: 'var(--ks-sand)',
    color: 'var(--text-heading)'
  },
  ink: {
    background: 'var(--ks-ink)',
    color: 'var(--ks-cream)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-body)',
    boxShadow: 'inset 0 0 0 var(--stroke-hair) var(--border-soft)'
  }
};
function Tag({
  tone = 'kraft',
  tilt = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: 'var(--pad-chip)',
      borderRadius: 'var(--radius-1)',
      fontFamily: 'var(--font-body)',
      fontSize: '12.5px',
      fontWeight: 600,
      lineHeight: 1.4,
      ...KS_TAG_TONES[tone],
      ...(tilt ? {
        transform: 'rotate(var(--tilt-sm))'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  image,
  name,
  sku,
  category,
  pack,
  stock,
  tilt = 0,
  onSelect,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: 'var(--stroke-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-3)',
      overflow: 'hidden',
      cursor: onSelect ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-lift)' : 'var(--shadow-sticker)',
      transform: `rotate(${tilt}deg)${hover ? ' translateY(-3px)' : ''}`,
      transition: 'transform var(--dur-base) var(--ease-paper), box-shadow var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-dot-grid)',
      backgroundSize: 'var(--tex-dot-grid-size)',
      padding: 'var(--space-6)',
      display: 'grid',
      placeItems: 'center',
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: 118,
      objectFit: 'contain',
      transform: hover ? 'scale(1.05) rotate(-1.5deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-paper)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "sage"
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 17px/1.25 var(--font-display)',
      letterSpacing: '-.01em',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, name), sku && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12.5px var(--font-mono)',
      letterSpacing: 'var(--ls-code)',
      color: 'var(--text-muted)'
    }
  }, sku), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      marginTop: 'auto',
      paddingTop: 'var(--space-3)'
    }
  }, pack && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-body)'
    }
  }, pack), stock && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: stock.tone
  }, stock.label)), footer));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TapeStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TapeStrip({
  tone = 'sage',
  width = 90,
  height = 26,
  rotate = -4,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width,
      height,
      transform: `rotate(${rotate}deg)`,
      background: {
        sage: 'var(--tape-sage)',
        clay: 'var(--tape-clay)',
        kraft: 'var(--tape-kraft)'
      }[tone],
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TapeStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TapeStrip.jsx", error: String((e && e.message) || e) }); }

// components/core/TornDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TornDivider({
  tone = 'sand',
  height = 26,
  flip = false,
  style,
  ...rest
}) {
  const bg = {
    sand: 'var(--ks-sand)',
    sage: 'var(--ks-sage)',
    clay: 'var(--ks-terracotta)',
    paper: 'var(--ks-paper)',
    ink: 'var(--ks-ink)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      height,
      background: bg,
      clipPath: flip ? 'var(--tear-top)' : 'var(--tear-bottom)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TornDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TornDivider.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 460,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(36,31,27,.42)',
      backdropFilter: 'blur(2px)',
      padding: 'var(--space-7)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-4)',
      boxShadow: 'var(--shadow-modal)',
      overflow: 'hidden',
      animation: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--ks-sage)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card-lg)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '800 22px/1.15 var(--font-display)',
      letterSpacing: '-.02em',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-4)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.62 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-7)'
    }
  }, footer))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  image,
  title,
  children,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      padding: 'var(--space-12) var(--space-7)',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      height: 120,
      objectFit: 'contain',
      opacity: .75,
      marginBottom: 'var(--space-6)',
      transform: 'rotate(-2.6deg)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '800 22px/1.2 var(--font-display)',
      letterSpacing: '-.02em',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-3)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.6 var(--font-body)',
      color: 'var(--text-body)',
      maxWidth: '380px',
      margin: '0 auto var(--space-7)'
    }
  }, children), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  tone = 'ok',
  children,
  onClose,
  style,
  ...rest
}) {
  const t = {
    ok: {
      bg: 'var(--ks-sage)',
      fg: 'var(--ks-cream)'
    },
    alert: {
      bg: 'var(--ks-terracotta)',
      fg: 'var(--ks-cream)'
    },
    neutral: {
      bg: 'var(--ks-ink)',
      fg: 'var(--ks-cream)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: t.bg,
      color: t.fg,
      padding: '12px 16px',
      borderRadius: 'var(--radius-2)',
      boxShadow: 'var(--shadow-lift)',
      font: '500 14px var(--font-body)',
      transform: 'rotate(var(--tilt-xs))',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: t.fg,
      opacity: .7,
      cursor: 'pointer',
      font: '400 16px var(--font-body)',
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [on, setOn] = React.useState(false);
  const pos = placement === 'top' ? {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false)
  }, rest), children, on && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      background: 'var(--ks-ink)',
      color: 'var(--ks-cream)',
      font: '500 12.5px var(--font-body)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-1)',
      boxShadow: 'var(--shadow-2)',
      zIndex: 40
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 19,
      height: 19,
      marginTop: 1,
      borderRadius: 'var(--radius-1)',
      display: 'grid',
      placeItems: 'center',
      background: checked ? 'var(--ks-sage)' : 'var(--surface-card)',
      boxShadow: checked ? 'none' : 'inset 0 0 0 var(--stroke) var(--border-soft)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.4 4.6 9 10 3.2",
    fill: "none",
    stroke: "var(--ks-cream)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  size = 'md',
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'sm' ? '8px 12px' : 'var(--pad-input)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2)',
      padding: pad,
      boxShadow: error ? 'inset 0 0 0 var(--stroke) var(--status-alert)' : focus ? 'inset 0 0 0 var(--stroke) var(--ks-sage), var(--shadow-focus-ring)' : 'inset 0 0 0 var(--stroke-hair) var(--border-soft)',
      transition: 'box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'grid'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: '400 15px/1.4 var(--font-body)',
      color: 'var(--text-heading)',
      minWidth: 0,
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '12.5px',
      marginTop: '5px',
      color: error ? 'var(--status-alert)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuantityStepper({
  value = 1,
  min = 1,
  max = 9999,
  step = 1,
  onChange,
  unit,
  style,
  ...rest
}) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  const btn = {
    width: 34,
    height: 34,
    border: 'none',
    background: 'var(--ks-sand-light)',
    color: 'var(--text-heading)',
    font: '600 17px var(--font-body)',
    cursor: 'pointer',
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2)',
      boxShadow: 'inset 0 0 0 var(--stroke-hair) var(--border-soft)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Decrease",
    style: btn,
    onClick: () => set(value - step)
  }, "\u2013"), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => set(parseInt(e.target.value || '0', 10) || min),
    style: {
      width: 56,
      border: 'none',
      outline: 'none',
      textAlign: 'center',
      background: 'transparent',
      font: '600 15px var(--font-body)',
      color: 'var(--text-heading)'
    }
  }), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12.5px var(--font-body)',
      color: 'var(--text-muted)',
      paddingRight: '8px'
    }
  }, unit), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Increase",
    style: btn,
    onClick: () => set(value + step)
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 19,
      height: 19,
      borderRadius: 999,
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-card)',
      boxShadow: checked ? 'inset 0 0 0 var(--stroke) var(--ks-sage)' : 'inset 0 0 0 var(--stroke) var(--border-soft)',
      transition: 'box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: 'var(--ks-sage)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      background: 'var(--surface-card)',
      border: 'none',
      outline: 'none',
      borderRadius: 'var(--radius-2)',
      padding: 'var(--pad-input)',
      paddingRight: '36px',
      font: '400 15px/1.4 var(--font-body)',
      color: 'var(--text-heading)',
      boxShadow: focus ? 'inset 0 0 0 var(--stroke) var(--ks-sage), var(--shadow-focus-ring)' : 'inset 0 0 0 var(--stroke-hair) var(--border-soft)',
      transition: 'box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '13px',
      top: '50%',
      marginTop: '-3px',
      width: 0,
      height: 0,
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '6px solid var(--text-muted)'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '12.5px',
      marginTop: '5px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      width: 40,
      height: 22,
      borderRadius: 999,
      padding: 2,
      boxSizing: 'border-box',
      display: 'flex',
      background: checked ? 'var(--ks-sage)' : 'var(--ks-sand-deep)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 999,
      background: 'var(--ks-paper)',
      boxShadow: 'var(--shadow-2)',
      transform: checked ? 'translateX(18px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-paper)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBottom: '6px'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      backgroundImage: 'var(--tex-rule)',
      border: 'none',
      outline: 'none',
      borderRadius: 'var(--radius-2)',
      padding: 'var(--pad-input)',
      font: '400 15px/28px var(--font-body)',
      color: 'var(--text-heading)',
      resize: 'vertical',
      boxShadow: focus ? 'inset 0 0 0 var(--stroke) var(--ks-sage), var(--shadow-focus-ring)' : 'inset 0 0 0 var(--stroke-hair) var(--border-soft)',
      transition: 'box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '12.5px',
      marginTop: '5px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      font: '400 13px var(--font-body)',
      color: 'var(--text-muted)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--ks-sand-deep)'
    }
  }, "/"), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)',
      fontWeight: 600
    }
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it.id);
    },
    style: {
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CategoryTabs({
  items = [],
  active,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange && onChange(it.id),
      style: {
        font: '600 13.5px var(--font-body)',
        padding: '8px 15px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-1)',
        background: on ? 'var(--ks-sage)' : 'var(--surface-card)',
        color: on ? 'var(--ks-cream)' : 'var(--text-body)',
        boxShadow: on ? 'var(--shadow-cut)' : 'inset 0 0 0 var(--stroke-hair) var(--border-soft)',
        transform: `rotate(${on ? i % 2 ? 0.8 : -0.8 : 0}deg)`,
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-paper)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { CategoryTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footer({
  logo = 'assets/logo/ks-mark.png',
  mission = ['Constantly Evolving,', 'Always Improving For You.'],
  hours = ['Mon – Sat : 8.30am – 5.30pm', 'Sunday : Off'],
  contact = {},
  links = [],
  style,
  ...rest
}) {
  const h = {
    font: '700 13px var(--font-display)',
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--ks-sand)',
    margin: '0 0 var(--space-5)'
  };
  const li = {
    font: '400 14px/1.9 var(--font-body)',
    color: 'rgba(245,239,229,.78)',
    textDecoration: 'none',
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--ks-ink)',
      color: 'var(--text-inverse)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      gap: 'var(--gutter-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Kai Seng",
    style: {
      height: 56,
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14.5px/1.7 var(--font-body)',
      color: 'rgba(245,239,229,.8)',
      margin: '0 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ks-cream)'
    }
  }, "Our Mission:"), /*#__PURE__*/React.createElement("br", null), mission.map(m => /*#__PURE__*/React.createElement(React.Fragment, {
    key: m
  }, m, /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 13.5px/1.8 var(--font-body)',
      color: 'rgba(245,239,229,.62)',
      margin: 0
    }
  }, hours.map(x => /*#__PURE__*/React.createElement(React.Fragment, {
    key: x
  }, x, /*#__PURE__*/React.createElement("br", null))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Contact Us"), contact.phone && /*#__PURE__*/React.createElement("span", {
    style: li
  }, "Hotline: ", contact.phone), contact.email && /*#__PURE__*/React.createElement("span", {
    style: li
  }, contact.email), contact.address && /*#__PURE__*/React.createElement("span", {
    style: {
      ...li,
      marginTop: 'var(--space-3)'
    }
  }, contact.address)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Products"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: li,
    onClick: e => e.preventDefault()
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(245,239,229,.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--gutter)',
      font: '400 12.5px var(--font-body)',
      color: 'rgba(245,239,229,.5)'
    }
  }, "Copyright 2024 Syarikat Perniagaan Kai Seng Sdn. Bhd.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  logo = 'assets/logo/ks-logo-full.png',
  items = [],
  active,
  onNavigate,
  action,
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-grain)',
      backgroundSize: 'var(--tex-grain-size)',
      borderBottom: 'var(--stroke-hair) solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 78,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Kai Seng",
    style: {
      height: 52
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.id);
      },
      style: {
        font: '600 14.5px var(--font-body)',
        textDecoration: 'none',
        color: on ? 'var(--text-heading)' : 'var(--text-body)',
        paddingBottom: '3px',
        boxShadow: on ? 'inset 0 -3px 0 var(--ks-terracotta)' : 'none',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it.label);
  })), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      marginLeft: 'var(--space-5)'
    }
  }, action)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pages = 1,
  onChange,
  style,
  ...rest
}) {
  const cell = on => ({
    width: 34,
    height: 34,
    display: 'grid',
    placeItems: 'center',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 'var(--radius-1)',
    font: '600 13.5px var(--font-body)',
    background: on ? 'var(--ks-ink)' : 'transparent',
    color: on ? 'var(--ks-cream)' : 'var(--text-body)'
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    style: {
      ...cell(false),
      width: 'auto',
      padding: '0 10px'
    },
    disabled: page === 1,
    onClick: () => onChange && onChange(page - 1)
  }, "Prev"), Array.from({
    length: pages
  }, (_, i) => i + 1).map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    style: cell(n === page),
    onClick: () => onChange && onChange(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    style: {
      ...cell(false),
      width: 'auto',
      padding: '0 10px'
    },
    disabled: page === pages,
    onClick: () => onChange && onChange(page + 1)
  }, "Next"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// slides/CatalogueSlides.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow,
  TapeStrip,
  StickerFrame
} = window.KaiSengDesignSystem_ed6dd8;
const KS_PAGE = {
  width: 900,
  height: 1280,
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'hidden',
  fontFamily: 'var(--font-body)',
  display: 'flex',
  flexDirection: 'column'
};
function PageFooter({
  dark = true
}) {
  const c = dark ? 'rgba(245,239,229,.86)' : 'var(--text-body)';
  const inv = dark ? 'brightness(0) invert(1)' : 'none';
  const item = (icon, text) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      maxWidth: 250
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      height: 19,
      marginTop: 2,
      filter: inv,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12.5px/1.45 var(--font-body)',
      color: c,
      letterSpacing: '.02em'
    }
  }, text));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 56px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: c,
      opacity: .75,
      textAlign: 'center',
      marginBottom: 26
    }
  }, "All photos for reference only"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      borderTop: dark ? '1px solid rgba(245,239,229,.22)' : '1px dashed var(--rule-dotted)',
      paddingTop: 22
    }
  }, item('../assets/icons/phone.png', '+603 9082 0712'), item('../assets/icons/pin.png', '15, Jalan Alam Jaya 17, Taman Alam Jaya, 43200 Cheras, Selangor'), item('../assets/icons/globe.png', 'kaiseng.com.my')));
}
function ProductPlate({
  image,
  label,
  tilt = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(' + tilt + 'deg)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-cream)',
      boxShadow: 'var(--shadow-sticker)',
      padding: '22px 18px 16px',
      flex: 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: label,
    style: {
      width: '100%',
      height: 186,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-sand)',
      padding: '11px 16px',
      font: '600 14.5px/1.3 var(--font-body)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-heading)',
      textAlign: 'center',
      clipPath: 'var(--tear-bottom)'
    }
  }, label));
}

/* 2x2 product page — the exact layout of the printed KS catalogue sheets */
function CataloguePage({
  title = [],
  items = [],
  tone = 'sage'
}) {
  const bg = {
    sage: 'var(--ks-sage)',
    clay: 'var(--ks-terracotta)',
    ink: 'var(--ks-ink)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...KS_PAGE,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 56px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/ks-mark.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 56,
      top: 56,
      height: 64,
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--ks-sand)'
    }
  }, "Product catalogue"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 62px/0.98 var(--font-display)',
      letterSpacing: '-.03em',
      color: 'var(--ks-cream)',
      margin: '18px 0 0',
      maxWidth: '9ch'
    }
  }, title.map(l => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, l, /*#__PURE__*/React.createElement("br", null))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 56px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 32
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(ProductPlate, _extends({
    key: it.label
  }, it, {
    tilt: [-1.2, 1, 0.8, -1][i]
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement(PageFooter, null));
}

/* Cover */
function CoverPage({
  title = ['Disposable', 'Packaging'],
  year = '2026'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...KS_PAGE,
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-grain)',
      backgroundSize: 'var(--tex-grain-size)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '80px 56px 0',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/ks-logo-full.png",
    alt: "Kai Seng",
    style: {
      height: 300,
      alignSelf: 'flex-start',
      marginLeft: -10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--text-accent-alt)'
    }
  }, "Catalogue ", year), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 84px/0.95 var(--font-display)',
      letterSpacing: '-.035em',
      color: 'var(--text-heading)',
      margin: '20px 0 22px'
    }
  }, title.map(l => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, l, /*#__PURE__*/React.createElement("br", null)))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 19px/1.6 var(--font-body)',
      color: 'var(--text-body)',
      maxWidth: '34ch',
      margin: 0
    }
  }, "Wholesaler and trading house supplying disposable plastic and paper products."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 360
    }
  }, /*#__PURE__*/React.createElement(StickerFrame, {
    tilt: -3,
    tape: "sage",
    style: {
      position: 'absolute',
      left: 56,
      bottom: 150,
      width: 330
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/imagery/scene-cafe.png",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../assets/products/kraft-paper-bag.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 70,
      bottom: 190,
      width: 180,
      transform: 'rotate(7deg)',
      filter: 'drop-shadow(0 10px 12px rgba(63,57,52,.22))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      background: 'var(--ks-sage)',
      clipPath: 'var(--tear-top)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-sage)'
    }
  }, /*#__PURE__*/React.createElement(PageFooter, null)))));
}

/* Section divider */
function SectionPage({
  eyebrow = 'Section',
  title = ['Kitchen', 'Consumables'],
  image = '../assets/imagery/scene-kitchen.png',
  tone = 'clay'
}) {
  const bg = {
    sage: 'var(--ks-sage)',
    clay: 'var(--ks-terracotta)',
    ink: 'var(--ks-ink)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...KS_PAGE,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '96px 56px 48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--ks-sand)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 78px/0.96 var(--font-display)',
      letterSpacing: '-.035em',
      color: 'var(--ks-cream)',
      margin: '22px 0 0'
    }
  }, title.map(l => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, l, /*#__PURE__*/React.createElement("br", null))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -1,
      height: 24,
      background: bg,
      clipPath: 'var(--tear-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -1,
      height: 24,
      background: bg,
      clipPath: 'var(--tear-top)'
    }
  })), /*#__PURE__*/React.createElement(PageFooter, null));
}

/* Contact / back page */
function ContactPage() {
  const row = (icon, label, value) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start',
      borderTop: '1px dashed var(--rule-dotted)',
      padding: '22px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      height: 30,
      opacity: .85
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11.5px var(--font-body)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 19px/1.45 var(--font-display)',
      color: 'var(--text-heading)',
      marginTop: 6
    }
  }, value)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...KS_PAGE,
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-dot-grid)',
      backgroundSize: 'var(--tex-dot-grid-size)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '88px 56px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--text-accent-alt)'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 66px/0.97 var(--font-display)',
      letterSpacing: '-.035em',
      color: 'var(--text-heading)',
      margin: '20px 0 40px'
    }
  }, "Let's get", /*#__PURE__*/React.createElement("br", null), "your order", /*#__PURE__*/React.createElement("br", null), "moving."), row('../assets/icons/phone.png', 'Hotline', '+603 9082 0712'), row('../assets/icons/pin.png', 'Warehouse', '15GF, Jalan Alam Jaya 17, Taman Alam Jaya Bt. 8 1/2, Cheras, Selangor'), row('../assets/icons/globe.png', 'Online', 'kaiseng.com.my · admin@kaiseng.com.my'), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px dashed var(--rule-dotted)',
      paddingTop: 22,
      font: '400 15px/1.8 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, "Mon \u2013 Sat : 8.30am \u2013 5.30pm", /*#__PURE__*/React.createElement("br", null), "Sunday : Off")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      position: 'relative',
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: '0 40px 30px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/products/pp-plate.png",
    style: {
      width: 150,
      transform: 'rotate(-9deg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/products/coffee-hot-cup-8oz.png",
    style: {
      width: 120,
      transform: 'rotate(5deg)',
      marginLeft: -14
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/products/plastic-fork-spoon.png",
    style: {
      width: 160,
      transform: 'rotate(-4deg)',
      marginLeft: -10
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../assets/products/pp-round-container.png",
    style: {
      width: 140,
      transform: 'rotate(8deg)',
      marginLeft: -16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      background: 'var(--ks-ink)',
      clipPath: 'var(--tear-top)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-ink)',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 56px 34px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo/ks-mark.png",
    alt: "Kai Seng",
    style: {
      height: 58
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12.5px/1.5 var(--font-body)',
      color: 'rgba(245,239,229,.66)',
      textAlign: 'right'
    }
  }, "Our Mission: Constantly Evolving,", /*#__PURE__*/React.createElement("br", null), "Always Improving For You.")))));
}
Object.assign(window, {
  CataloguePage,
  CoverPage,
  SectionPage,
  ContactPage,
  ProductPlate,
  PageFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/CatalogueSlides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  Card,
  Eyebrow,
  TornDivider,
  StickerFrame,
  TapeStrip,
  Button
} = window.KaiSengDesignSystem_ed6dd8;
function AboutScreen({
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-grain)',
      backgroundSize: 'var(--tex-grain-size)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--gutter) var(--space-10)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/ks-mark.png",
    alt: "",
    style: {
      height: 76,
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "clay"
  }, "Welcome to"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 var(--type-display-2)/1.04 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: 'var(--space-4) 0 var(--space-6)'
    }
  }, "Syarikat Perniagaan Kai Seng Sdn Bhd"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 var(--type-body-lg)/1.7 var(--font-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Your one-stop destination for all your packaging needs. We offer an extensive range of high-quality packaging materials, including food packaging, dessert containers, cooking gloves, garbage bags, and much more.")), /*#__PURE__*/React.createElement(TornDivider, {
    tone: "sand",
    height: 28
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ks-sand)',
      padding: 'var(--space-11) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter-lg)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(StickerFrame, {
    tilt: -2.2,
    tape: "sage"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/scene-kitchen.png",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(TapeStrip, {
    tone: "clay",
    rotate: 8,
    style: {
      position: 'absolute',
      right: -14,
      bottom: 36
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Elevating your packaging experience"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 var(--type-display-3)/1.06 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, "We don't just sell packaging materials \u2014 we deliver an experience."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15.5px/1.68 var(--font-body)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-5)'
    }
  }, "When you choose Kai Seng you're choosing more than a supplier \u2014 you're choosing a partner committed to your success. Our focus on high-quality products, exceptional service and competitive pricing means we keep setting new standards."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15.5px/1.68 var(--font-body)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-7)'
    }
  }, "From small local businesses to large corporations, our packaging enhances the presentation of your products while ensuring optimal protection and functionality."), /*#__PURE__*/React.createElement(Button, {
    onClick: onBrowse
  }, "See what we carry")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-11) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "clay"
  }, "Group companies"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    tilt: -0.6
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 19px/1.25 var(--font-display)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-3)'
    }
  }, "Syarikat Perniagaan Kai Seng Sdn Bhd"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14.5px/1.6 var(--font-body)',
      margin: 0
    }
  }, "Wholesaler and trading house \u2014 disposable plastic and paper products for food service across the Klang Valley.")), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    tilt: 0.6
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 19px/1.25 var(--font-display)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-3)'
    }
  }, "Yik Jing Plastic Industrial (M) Sdn Bhd"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14.5px/1.6 var(--font-body)',
      margin: 0
    }
  }, "Manufacturing arm. Details to be supplied by the brand owner \u2014 left intentionally brief."))))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatalogueScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Eyebrow,
  Input,
  Select,
  Switch,
  Checkbox,
  Breadcrumbs,
  CategoryTabs,
  Pagination,
  ProductCard,
  EmptyState,
  Tag
} = window.KaiSengDesignSystem_ed6dd8;
function FilterRail({
  categories,
  cat,
  setCat,
  stockOnly,
  setStockOnly
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 236,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Filter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      margin: 'var(--space-5) 0 var(--space-6)'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(Checkbox, {
    key: c.id,
    label: c.label,
    checked: cat === c.id,
    onChange: () => setCat(cat === c.id ? 'all' : c.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px dashed var(--rule-dotted)',
      paddingTop: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "In stock only",
    checked: stockOnly,
    onChange: e => setStockOnly(e.target.checked)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Pack size",
    options: ['Any', 'Carton', 'Bundle', 'Pack of 50']
  }))));
}
function CatalogueScreen({
  data,
  cat,
  setCat,
  onOpenProduct,
  onHome
}) {
  const [q, setQ] = React.useState('');
  const [stockOnly, setStockOnly] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const label = (data.categories.find(c => c.id === cat) || {}).label || 'All products';
  let list = data.products.filter(p => (cat === 'all' || p.cat === cat) && (!stockOnly || p.stock.tone === 'ok') && p.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-grain)',
      backgroundSize: 'var(--tex-grain-size)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'cat',
      label: 'Products'
    }, {
      label
    }],
    onNavigate: id => id === 'home' && onHome()
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-7)',
      margin: 'var(--space-5) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 var(--type-display-3)/1.05 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search products or SKU",
    value: q,
    onChange: e => setQ(e.target.value)
  }))), /*#__PURE__*/React.createElement(CategoryTabs, {
    active: cat,
    onChange: setCat,
    items: [{
      id: 'all',
      label: 'All'
    }, ...data.categories.slice(0, 6).map(c => ({
      id: c.id,
      label: c.label
    }))],
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--gutter)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(FilterRail, {
    categories: data.categories,
    cat: cat,
    setCat: setCat,
    stockOnly: stockOnly,
    setStockOnly: setStockOnly
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13.5px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, list.length, " products \xB7 all photos for reference only"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "MOQ 1 carton")), list.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(EmptyState, {
    image: "../../assets/products/kraft-paper-bag.png",
    title: "Nothing matches that",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => {
        setQ('');
        setCat('all');
        setStockOnly(false);
      }
    }, "Clear filters")
  }, "Try a broader category, or give us a call and we'll source it.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)'
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    category: (data.categories.find(c => c.id === p.cat) || {}).label,
    tilt: [-0.5, 0, 0.5][i % 3],
    onSelect: () => onOpenProduct(p)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pages: 3,
    onChange: setPage
  }))))));
}
Object.assign(window, {
  CatalogueScreen,
  FilterRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatalogueScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  Input,
  Textarea,
  Select,
  Radio,
  Checkbox,
  TornDivider,
  ContactStrip,
  StickerFrame
} = window.KaiSengDesignSystem_ed6dd8;
function ContactScreen({
  data,
  list,
  onSend
}) {
  const [ship, setShip] = React.useState('pickup');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-grain)',
      backgroundSize: 'var(--tex-grain-size)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--gutter-lg)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "clay"
  }, "Request a quote"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 var(--type-display-3)/1.05 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: 'var(--space-3) 0 var(--space-7)'
    }
  }, "Tell us what your kitchen needs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "e.g. Kopitiam Sdn Bhd"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "+60"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Main category",
    options: data.categories.map(c => c.label)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "What do you need?",
    rows: 4,
    hint: "Sizes, quantities, delivery date"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-7) 0',
      borderTop: '1px dashed var(--rule-dotted)',
      paddingTop: 'var(--space-6)',
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Collection"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "ship",
    label: "Self collect \u2014 Cheras warehouse",
    checked: ship === 'pickup',
    onChange: () => setShip('pickup')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "ship",
    label: "Delivery \u2014 Klang Valley",
    checked: ship === 'kl',
    onChange: () => setShip('kl')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "ship",
    label: "Courier \u2014 East Malaysia",
    checked: ship === 'east',
    onChange: () => setShip('east')
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Include the full price list with your reply",
    checked: true
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    full: true,
    onClick: onSend
  }, "Send enquiry", list.length ? ` · ${list.length} item${list.length > 1 ? 's' : ''}` : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "kraft",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Visit or call"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)',
      font: '400 15px/1.6 var(--font-body)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/phone.png",
    style: {
      height: 18,
      verticalAlign: '-3px',
      marginRight: 10,
      opacity: .8
    }
  }), data.contact.phone), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/globe.png",
    style: {
      height: 18,
      verticalAlign: '-3px',
      marginRight: 10,
      opacity: .8
    }
  }), data.contact.web), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/pin.png",
    style: {
      height: 18,
      marginTop: 3,
      opacity: .8
    }
  }), data.contact.address)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px dashed var(--rule-dotted)',
      font: '400 14px/1.8 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, data.contact.hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h
  }, h)))), /*#__PURE__*/React.createElement(StickerFrame, {
    tilt: 2.4,
    tape: "kraft",
    style: {
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/scene-buffet.png",
    style: {
      width: 300,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12.5px var(--font-body)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      paddingTop: 8
    }
  }, "Catering & buffet supply"))))), /*#__PURE__*/React.createElement(TornDivider, {
    tone: "sage",
    height: 28
  }), /*#__PURE__*/React.createElement(ContactStrip, {
    iconBase: "../../assets/icons",
    phone: data.contact.phone,
    address: "15, Jalan Alam Jaya 17, 43200 Cheras, Selangor",
    web: data.contact.web
  }));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Eyebrow,
  Tag,
  TornDivider,
  StickerFrame,
  TapeStrip,
  CategoryCard,
  ProductCard,
  ContactStrip
} = window.KaiSengDesignSystem_ed6dd8;
function Hero({
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-grain)',
      backgroundSize: 'var(--tex-grain-size)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-13) var(--gutter) var(--space-12)',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--gutter-lg)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "clay"
  }, "Your trusted partner in quality disposable products"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 var(--type-display-1)/var(--lh-display) var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: 'var(--space-5) 0 var(--space-6)'
    }
  }, "Supplying convenience,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ks-terracotta)'
    }
  }, "one product at a time.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 var(--type-body-lg)/1.65 var(--font-body)',
      color: 'var(--text-body)',
      maxWidth: '46ch',
      margin: '0 0 var(--space-8)'
    }
  }, "We are a wholesaler and trading house supplying disposable plastic and paper products \u2014 food packaging, dessert containers, cooking gloves, garbage bags and much more."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBrowse
  }, "Browse the catalogue"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    as: "a",
    href: "#contact"
  }, "Talk to us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "kraft"
  }, "Paper"), /*#__PURE__*/React.createElement(Tag, {
    tone: "sage",
    tilt: true
  }, "Bio"), /*#__PURE__*/React.createElement(Tag, {
    tone: "kraft"
  }, "Plastic"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "OPS"), /*#__PURE__*/React.createElement(Tag, {
    tone: "kraft"
  }, "Foam"), /*#__PURE__*/React.createElement(Tag, {
    tone: "outline"
  }, "Aluminium"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 430
    }
  }, /*#__PURE__*/React.createElement(StickerFrame, {
    tilt: -2.6,
    tape: "sage",
    style: {
      position: 'absolute',
      top: 0,
      left: 20,
      width: 330
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/scene-cafe.png",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(StickerFrame, {
    tilt: 3.4,
    tape: "clay",
    style: {
      position: 'absolute',
      bottom: 6,
      right: 0,
      width: 250
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/scene-kitchen.png",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/products/coffee-hot-cup-8oz.png",
    alt: "",
    style: {
      position: 'absolute',
      left: -24,
      bottom: 56,
      width: 150,
      transform: 'rotate(-8deg)',
      filter: 'drop-shadow(0 8px 10px rgba(63,57,52,.22))'
    }
  }))), /*#__PURE__*/React.createElement(TornDivider, {
    tone: "sand",
    height: 30
  }));
}
function Categories({
  categories,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ks-sand)',
      padding: 'var(--space-12) 0 var(--space-13)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-7)',
      marginBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Nine families, one order"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 var(--type-display-3)/1.06 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: 'var(--space-3) 0 0'
    }
  }, "Our products")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.6 var(--font-body)',
      color: 'var(--text-body)',
      maxWidth: '44ch',
      margin: 0
    }
  }, "Everything you're looking for in one store \u2014 food packaging, containers for desserts, gloves for cooking, garbage bags and many more.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(CategoryCard, {
    key: c.id,
    image: c.image,
    label: c.label,
    count: c.count,
    tone: c.tone,
    onSelect: () => onOpen(c.id)
  })))));
}
function Featured({
  products,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-dot-grid)',
      backgroundSize: 'var(--tex-dot-grid-size)',
      padding: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "clay"
  }, "Moving fast this month"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 var(--type-display-3)/1.06 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-heading)',
      margin: 'var(--space-3) 0 var(--space-9)'
    }
  }, "Popular lines"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)'
    }
  }, products.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    category: p.cat,
    tilt: [-0.6, 0, 0.6, -0.4][i],
    onSelect: () => onOpen(p)
  }))))));
}
function WhyUs() {
  const items = [{
    t: 'Efficient and cost-effective',
    b: 'Quality shouldn\u2019t come at an exorbitant price. Competitive pricing without sacrificing durability.'
  }, {
    t: 'Expert and professional service',
    b: 'From choosing the right packaging to order fulfilment, our team guides you at every step.'
  }, {
    t: 'Fast and reliable response',
    b: 'Quick replies to every enquiry and prompt fulfilment, so your kitchen never runs short.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ks-sage)',
      color: 'var(--text-inverse)',
      padding: 'var(--space-12) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.4fr',
      gap: 'var(--gutter-lg)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 var(--type-eyebrow) var(--font-body)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ks-sand)'
    }
  }, "Why choose us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 var(--type-display-3)/1.06 var(--font-display)',
      letterSpacing: 'var(--ls-display)',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, "We don't just sell packaging \u2014 we deliver an experience."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15.5px/1.7 var(--font-body)',
      color: 'rgba(245,239,229,.82)',
      margin: 0
    }
  }, "From small local businesses to large corporations, we provide solutions that fit your specific needs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, items.map((x, i) => /*#__PURE__*/React.createElement(Card, {
    key: x.t,
    surface: "paper",
    tilt: i % 2 ? 0.5 : -0.5,
    pad: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '700 18px/1.25 var(--font-display)',
      letterSpacing: '-.015em',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-3)'
    }
  }, x.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14.5px/1.62 var(--font-body)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, x.b)))))));
}
function HomeScreen({
  data,
  onOpenCategory,
  onOpenProduct
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onBrowse: () => onOpenCategory('paper')
  }), /*#__PURE__*/React.createElement(Categories, {
    categories: data.categories,
    onOpen: onOpenCategory
  }), /*#__PURE__*/React.createElement(Featured, {
    products: data.products,
    onOpen: onOpenProduct
  }), /*#__PURE__*/React.createElement(WhyUs, null), /*#__PURE__*/React.createElement(ContactStrip, {
    iconBase: "../../assets/icons",
    phone: data.contact.phone,
    address: "15, Jalan Alam Jaya 17, 43200 Cheras, Selangor",
    web: data.contact.web
  }));
}
Object.assign(window, {
  HomeScreen,
  Hero,
  Categories,
  Featured,
  WhyUs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPanel.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Eyebrow,
  SpecTable,
  QuantityStepper,
  StickerFrame,
  IconButton
} = window.KaiSengDesignSystem_ed6dd8;
function ProductPanel({
  product,
  onClose,
  onAdd
}) {
  const [qty, setQty] = React.useState(1);
  if (!product) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(36,31,27,.42)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 480,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-modal)',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: 'var(--ks-terracotta)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7) var(--pad-card-lg)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "clay"
  }, product.sku), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 27px/1.12 var(--font-display)',
      letterSpacing: '-.025em',
      color: 'var(--text-heading)',
      margin: 'var(--space-3) 0 0'
    }
  }, product.name)), /*#__PURE__*/React.createElement(IconButton, {
    label: "Close",
    variant: "ghost",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 20px var(--font-body)',
      lineHeight: 1
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ks-cream)',
      backgroundImage: 'var(--tex-dot-grid)',
      backgroundSize: 'var(--tex-dot-grid-size)',
      padding: 'var(--space-9)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(StickerFrame, {
    tilt: -1.8,
    bleed: 12
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name,
    style: {
      width: 250,
      height: 200,
      objectFit: 'contain',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card-lg)',
      display: 'grid',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: product.stock.tone
  }, product.stock.label), /*#__PURE__*/React.createElement(Tag, {
    tone: "kraft"
  }, product.pack)), /*#__PURE__*/React.createElement(SpecTable, {
    rows: [{
      label: 'Material',
      value: product.material
    }, {
      label: 'Size',
      value: product.size
    }, {
      label: 'Pack',
      value: product.pack
    }, {
      label: 'MOQ',
      value: product.moq
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Photo for reference only. Printing and custom sizes available on request."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    unit: "ctn",
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      flex: 1
    },
    onClick: () => onAdd(product, qty)
  }, "Add to enquiry list")))));
}
Object.assign(window, {
  ProductPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.KS_DATA = {
  categories: [{
    id: 'plasticbag',
    label: 'Plastic Bag',
    image: '../../assets/imagery/scene-restaurant.png',
    tone: 'sage',
    count: 38
  }, {
    id: 'plastic',
    label: 'Plastic Products',
    image: '../../assets/imagery/scene-buffet.png',
    tone: 'clay',
    count: 64
  }, {
    id: 'paper',
    label: 'Paper Products',
    image: '../../assets/imagery/scene-cafe.png',
    tone: 'kraft',
    count: 42
  }, {
    id: 'ops',
    label: 'OPS',
    image: '../../assets/imagery/scene-buffet.png',
    tone: 'ink',
    count: 19
  }, {
    id: 'bio',
    label: 'Bio Products',
    image: '../../assets/imagery/scene-cafe.png',
    tone: 'sage',
    count: 27
  }, {
    id: 'garbage',
    label: 'Garbage Bag',
    image: '../../assets/imagery/scene-kitchen.png',
    tone: 'clay',
    count: 16
  }, {
    id: 'foam',
    label: 'Foam Products',
    image: '../../assets/imagery/scene-restaurant.png',
    tone: 'kraft',
    count: 22
  }, {
    id: 'cutlery',
    label: 'Cutlery',
    image: '../../assets/imagery/scene-buffet.png',
    tone: 'ink',
    count: 31
  }, {
    id: 'aluminium',
    label: 'Aluminium',
    image: '../../assets/imagery/scene-kitchen.png',
    tone: 'sage',
    count: 14
  }],
  products: [{
    id: 'p1',
    cat: 'paper',
    name: 'Coffee Hot Cup 8oz',
    sku: 'KS-PPR-HC08',
    image: '../../assets/products/coffee-hot-cup-8oz.png',
    pack: '50 pcs × 20 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'Single-wall paper, PE lined',
    size: '8 oz / 240 ml',
    moq: '1 carton'
  }, {
    id: 'p2',
    cat: 'paper',
    name: 'Brown Paper Lunch Bag',
    sku: 'KS-PPR-LB01',
    image: '../../assets/products/brown-paper-lunch-bag.png',
    pack: '100 pcs × 10 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'Kraft paper 60 gsm',
    size: 'S / M / L',
    moq: '1 carton'
  }, {
    id: 'p3',
    cat: 'paper',
    name: 'Kraft Paper Bag',
    sku: 'KS-PPR-KB02',
    image: '../../assets/products/kraft-paper-bag.png',
    pack: '50 pcs × 10 / ctn',
    stock: {
      tone: 'warn',
      label: 'Low stock'
    },
    material: 'Kraft paper, twisted handle',
    size: '3 sizes',
    moq: '1 carton'
  }, {
    id: 'p4',
    cat: 'paper',
    name: 'Paper Container',
    sku: 'KS-PPR-PC03',
    image: '../../assets/products/paper-container-open.png',
    pack: '50 pcs × 8 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'Kraft board, greaseproof',
    size: '750 ml',
    moq: '1 carton'
  }, {
    id: 'p5',
    cat: 'plastic',
    name: 'PP Lunch Box',
    sku: 'KS-PP-LB650',
    image: '../../assets/products/pp-lunch-box.png',
    pack: '50 pcs × 8 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'PP, food grade',
    size: '650 ml',
    moq: '1 carton'
  }, {
    id: 'p6',
    cat: 'plastic',
    name: 'PP Rect. Container',
    sku: 'KS-PP-RC750',
    image: '../../assets/products/pp-rect-container.png',
    pack: '50 pcs × 10 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'PP, microwavable',
    size: '750 ml',
    moq: '1 carton'
  }, {
    id: 'p7',
    cat: 'plastic',
    name: 'PP Round Container',
    sku: 'KS-PP-RD500',
    image: '../../assets/products/pp-round-container.png',
    pack: '50 pcs × 10 / ctn',
    stock: {
      tone: 'warn',
      label: 'Low stock'
    },
    material: 'PP, food grade',
    size: '500 ml',
    moq: '1 carton'
  }, {
    id: 'p8',
    cat: 'plastic',
    name: 'PP Food Container 3-Comp',
    sku: 'KS-PP-3C900',
    image: '../../assets/products/pp-3-compartment.png',
    pack: '50 pcs × 6 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'PP, food grade',
    size: '900 ml',
    moq: '1 carton'
  }, {
    id: 'p9',
    cat: 'cutlery',
    name: 'PP Plate 7" / 9" / 10"',
    sku: 'KS-CUT-PL07',
    image: '../../assets/products/pp-plate.png',
    pack: '100 pcs × 20 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'PP',
    size: '7" / 9" / 10"',
    moq: '1 carton'
  }, {
    id: 'p10',
    cat: 'cutlery',
    name: 'PP Party Cup',
    sku: 'KS-CUT-PC22',
    image: '../../assets/products/pp-party-cup.png',
    pack: '50 pcs × 20 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'PP',
    size: '22 oz',
    moq: '1 carton'
  }, {
    id: 'p11',
    cat: 'cutlery',
    name: 'Plastic Fork & Spoon',
    sku: 'KS-CUT-FS01',
    image: '../../assets/products/plastic-fork-spoon.png',
    pack: '100 pcs × 20 / ctn',
    stock: {
      tone: 'alert',
      label: 'Back-order'
    },
    material: 'PS, individually wrapped',
    size: 'Standard',
    moq: '1 carton'
  }, {
    id: 'p12',
    cat: 'paper',
    name: 'Serviette Tissue',
    sku: 'KS-PPR-SV01',
    image: '../../assets/products/serviette-tissue.png',
    pack: '100 pcs × 30 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'Virgin pulp, 1-ply',
    size: '30 × 30 cm',
    moq: '1 carton'
  }, {
    id: 'p13',
    cat: 'bio',
    name: 'Disposable Apron',
    sku: 'KS-KC-AP01',
    image: '../../assets/products/disposable-apron.png',
    pack: '100 pcs × 10 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'HDPE',
    size: 'One size',
    moq: '1 carton'
  }, {
    id: 'p14',
    cat: 'bio',
    name: 'Hair Net',
    sku: 'KS-KC-HN01',
    image: '../../assets/products/hair-net.png',
    pack: '100 pcs × 10 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'Non-woven',
    size: '21"',
    moq: '1 carton'
  }, {
    id: 'p15',
    cat: 'bio',
    name: 'Dish Wash Liquid',
    sku: 'KS-KC-DW05',
    image: '../../assets/products/dish-wash-liquid.png',
    pack: '5 L × 4 / ctn',
    stock: {
      tone: 'ok',
      label: 'In stock'
    },
    material: 'Concentrate',
    size: '5 L',
    moq: '1 carton'
  }, {
    id: 'p16',
    cat: 'bio',
    name: 'Nitrile Powder-Free Glove',
    sku: 'KS-KC-NG01',
    image: '../../assets/products/nitrile-glove.png',
    pack: '100 pcs × 10 / ctn',
    stock: {
      tone: 'warn',
      label: 'Low stock'
    },
    material: 'Nitrile, powder-free',
    size: 'S – XL',
    moq: '1 carton'
  }],
  contact: {
    phone: '+603 9082 0712',
    email: 'admin@kaiseng.com.my',
    address: '15GF, Jalan Alam Jaya 17, Taman Alam Jaya Bt. 8 1/2, Cheras, Selangor, Malaysia',
    web: 'kaiseng.com.my',
    hours: ['Mon – Sat : 8.30am – 5.30pm', 'Sunday : Off']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.ContactStrip = __ds_scope.ContactStrip;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StickerFrame = __ds_scope.StickerFrame;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TapeStrip = __ds_scope.TapeStrip;

__ds_ns.TornDivider = __ds_scope.TornDivider;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.CategoryTabs = __ds_scope.CategoryTabs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Pagination = __ds_scope.Pagination;

})();
