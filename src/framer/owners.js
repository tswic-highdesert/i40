// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 2dd1372bde3c1fcb "I40 Shooting Range (reactexport))", do not edit manually */
"use client";
import {
  className as className2,
  css as css2,
  fonts as fonts2
} from "./chunks/chunk-QZTG3JS4.js";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-YJWJMZIF.js";

// virtual:owners
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/PfhzRiPWdVTWV7ibdPWy/opZOR7LhuK9Xnd4LJaCk/dSOyvsQHM.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var MotionDivWithFX = withFX(motion.div);
var cycleOrder = ["lWaJ6HFdD", "HG4TtZich", "DXKhRW9bU"];
var serializationHash = "framer-UccP4";
var variantClassNames = { DXKhRW9bU: "framer-v-4ra63s", HG4TtZich: "framer-v-1eud02t", lWaJ6HFdD: "framer-v-1ugu4ht" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 100 };
var transition2 = { damping: 80, delay: 0.1, mass: 1, stiffness: 400, type: "spring" };
var animation1 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 100 };
var animation2 = { opacity: 1e-3, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 };
var transition3 = { delay: 0.075, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" };
var textEffect = { effect: animation2, repeat: false, startDelay: 0, threshold: 0.5, tokenization: "line", transition: transition3, trigger: "onInView", type: "appear" };
var transition4 = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" };
var animation3 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.05, skewX: 0, skewY: 0, transition: transition4 };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { Desktop: "lWaJ6HFdD", Phone: "DXKhRW9bU", Tablet: "HG4TtZich" };
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "lWaJ6HFdD" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "lWaJ6HFdD", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className, className2];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.section, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1ugu4ht", className3, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "lWaJ6HFdD", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ DXKhRW9bU: { "data-framer-name": "Phone" }, HG4TtZich: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs(MotionDivWithFX, { __framer__animate: { transition: transition2 }, __framer__animateOnce: true, __framer__enter: animation, __framer__exit: animation1, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-j70zm0", "data-framer-name": "inner artists", layoutDependency, layoutId: "HjZiD2KZe", children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h3, { className: "framer-styles-preset-stcw69", "data-styles-preset": "CtTQj22xR", style: { "--framer-text-alignment": "center" }, children: "Our founding members" }) }), className: "framer-h2jvih", effect: textEffect, fonts: ["Inter"], layoutDependency, layoutId: "Gb5y0apAK", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ DXKhRW9bU: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h2, { className: "framer-styles-preset-stcw69", "data-styles-preset": "CtTQj22xR", style: { "--framer-text-alignment": "center" }, children: "Our founding members" }) }) }, HG4TtZich: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h2, { className: "framer-styles-preset-stcw69", "data-styles-preset": "CtTQj22xR", style: { "--framer-text-alignment": "center" }, children: "Our founding members" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-1aighhs", "data-framer-name": "Row", layoutDependency, layoutId: "L_XtdmV1E", children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1vb22n8", "data-framer-name": "Item", layoutDependency, layoutId: "IpRTgDInM", children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-1artoa1", "data-framer-name": "image", layoutDependency, layoutId: "TuzW4wDMp", style: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4 }, children: /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 200 + (((componentViewport?.height || 994) - 320 - 673.8) / 2 + 0 + 0) + 0 + 120 + 0 + 0 + 0 + 0), pixelHeight: 697, pixelWidth: 1137, sizes: `max(min(${componentViewport?.width || "100vw"} - 120px, 1200px), 1px)`, src: "https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg", srcSet: "https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg?scale-down-to=512 512w,https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg?scale-down-to=1024 1024w,https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg 1137w" }, className: "framer-1br2bk4", layoutDependency, layoutId: "Br5uW4K9m", style: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4 }, whileHover: animation3, ...addPropertyOverrides({ DXKhRW9bU: { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 80 + (((componentViewport?.height || 200) - 160 - 405.8) / 2 + 0 + 0) + 0 + 90 + 0 + 0 + 0 + 0 + 0), pixelHeight: 697, pixelWidth: 1137, sizes: `max(${componentViewport?.width || "100vw"} - 40px, 1px)`, src: "https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg", srcSet: "https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg?scale-down-to=512 512w,https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg?scale-down-to=1024 1024w,https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg 1137w" } }, HG4TtZich: { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 160 + (((componentViewport?.height || 200) - 260 - 509.8) / 2 + 0 + 0) + 0 + 100 + 0 + 0 + 0 + 0), pixelHeight: 697, pixelWidth: 1137, sizes: `max(min(${componentViewport?.width || "100vw"} - 80px, 1200px), 1px)`, src: "https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg", srcSet: "https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg?scale-down-to=512 512w,https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg?scale-down-to=1024 1024w,https://framerusercontent.com/images/M8mXFSrNzg3oQ5Qky1y9lN2fMNE.jpeg 1137w" } } }, baseVariant, gestureVariant) }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-18p26dt", "data-framer-name": "Post", layoutDependency, layoutId: "RY9kx8Yds", children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1flvzi9", layoutDependency, layoutId: "ejes0SqPo", children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h6, { className: "framer-styles-preset-1xq0an", "data-styles-preset": "HGYGIx0tx", children: "Josh McMillian (left), Brent Hottinger (middle), Robby Sims (right)" }) }), className: "framer-1n02wsk", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "dfgoreKvV", verticalAlignment: "top", withExternalLayout: true }) }) })] }) })] }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-UccP4.framer-154beoh, .framer-UccP4 .framer-154beoh { display: block; }", ".framer-UccP4.framer-1ugu4ht { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 200px 60px 120px 60px; position: relative; width: 1200px; }", ".framer-UccP4 .framer-j70zm0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-UccP4 .framer-h2jvih { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-UccP4 .framer-1aighhs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-UccP4 .framer-1vb22n8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-UccP4 .framer-1artoa1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-UccP4 .framer-1br2bk4 { flex: 1 0 0px; height: 503px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-UccP4 .framer-18p26dt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-width: 200px; padding: 4px; position: relative; width: 100%; }", ".framer-UccP4 .framer-1flvzi9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-UccP4 .framer-1n02wsk { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-UccP4.framer-1ugu4ht, .framer-UccP4 .framer-j70zm0, .framer-UccP4 .framer-1aighhs, .framer-UccP4 .framer-1vb22n8, .framer-UccP4 .framer-1artoa1, .framer-UccP4 .framer-18p26dt { gap: 0px; } .framer-UccP4.framer-1ugu4ht > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-UccP4.framer-1ugu4ht > :first-child, .framer-UccP4 .framer-j70zm0 > :first-child, .framer-UccP4 .framer-1vb22n8 > :first-child, .framer-UccP4 .framer-18p26dt > :first-child { margin-top: 0px; } .framer-UccP4.framer-1ugu4ht > :last-child, .framer-UccP4 .framer-j70zm0 > :last-child, .framer-UccP4 .framer-1vb22n8 > :last-child, .framer-UccP4 .framer-18p26dt > :last-child { margin-bottom: 0px; } .framer-UccP4 .framer-j70zm0 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-UccP4 .framer-1aighhs > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-UccP4 .framer-1aighhs > :first-child, .framer-UccP4 .framer-1artoa1 > :first-child { margin-left: 0px; } .framer-UccP4 .framer-1aighhs > :last-child, .framer-UccP4 .framer-1artoa1 > :last-child { margin-right: 0px; } .framer-UccP4 .framer-1vb22n8 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-UccP4 .framer-1artoa1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-UccP4 .framer-18p26dt > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ".framer-UccP4.framer-v-1eud02t.framer-1ugu4ht { padding: 160px 40px 100px 40px; width: 810px; }", ".framer-UccP4.framer-v-1eud02t .framer-j70zm0 { gap: 40px; }", ".framer-UccP4.framer-v-1eud02t .framer-1br2bk4 { height: 359px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-UccP4.framer-v-1eud02t .framer-j70zm0 { gap: 0px; } .framer-UccP4.framer-v-1eud02t .framer-j70zm0 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-UccP4.framer-v-1eud02t .framer-j70zm0 > :first-child { margin-top: 0px; } .framer-UccP4.framer-v-1eud02t .framer-j70zm0 > :last-child { margin-bottom: 0px; } }", ".framer-UccP4.framer-v-4ra63s.framer-1ugu4ht { padding: 80px 20px 80px 20px; width: 390px; }", ".framer-UccP4.framer-v-4ra63s .framer-j70zm0 { gap: 30px; max-width: unset; }", ".framer-UccP4.framer-v-4ra63s .framer-1aighhs { flex-direction: column; }", ".framer-UccP4.framer-v-4ra63s .framer-1vb22n8 { flex: none; width: 100%; }", ".framer-UccP4.framer-v-4ra63s .framer-1br2bk4 { height: 257px; }", ".framer-UccP4.framer-v-4ra63s .framer-18p26dt { min-width: unset; padding: 4px 4px 12px 0px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-UccP4.framer-v-4ra63s .framer-j70zm0, .framer-UccP4.framer-v-4ra63s .framer-1aighhs { gap: 0px; } .framer-UccP4.framer-v-4ra63s .framer-j70zm0 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-UccP4.framer-v-4ra63s .framer-j70zm0 > :first-child, .framer-UccP4.framer-v-4ra63s .framer-1aighhs > :first-child { margin-top: 0px; } .framer-UccP4.framer-v-4ra63s .framer-j70zm0 > :last-child, .framer-UccP4.framer-v-4ra63s .framer-1aighhs > :last-child { margin-bottom: 0px; } .framer-UccP4.framer-v-4ra63s .framer-1aighhs > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }", ...css, ...css2];
var FramerdSOyvsQHM = withCSS(Component, css3, "framer-UccP4");
var stdin_default = FramerdSOyvsQHM;
FramerdSOyvsQHM.displayName = "Owners";
FramerdSOyvsQHM.defaultProps = { height: 994, width: 1200 };
addPropertyControls(FramerdSOyvsQHM, { variant: { options: ["lWaJ6HFdD", "HG4TtZich", "DXKhRW9bU"], optionTitles: ["Desktop", "Tablet", "Phone"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerdSOyvsQHM, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// virtual:owners
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "DXKhRW9bU",
  "md": "HG4TtZich",
  "xl": "lWaJ6HFdD"
};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "augiA20Il": { "path": "/" }, "qrSduAwM5": { "path": "/404" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "2dd1372bde3c1fcb97340014582058dbe210848904165f75eb1c4a162708be6a",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "augiA20Il": {
          "path": "/"
        },
        "qrSduAwM5": {
          "path": "/404"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "2dd1372bde3c1fcb97340014582058dbe210848904165f75eb1c4a162708be6a",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
