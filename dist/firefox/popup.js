var Ku=Object.defineProperty;var Gu=(e,t)=>{for(var n in t)Ku(e,n,{get:t[n],enumerable:!0})};var x={BUILD_TIME:"2023-01-27T00:31:19.075Z",VERSION:"0.2.26",PROD:"1",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}
.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper
  span {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: block;
}
.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper {
}
.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid #72ece9 !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed #ff374f !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    currentColor 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      #59c1bd 0%,
      #59c1bd 50%,
      transparent 50%,
      transparent 100%
    )
    repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed currentColor;
  padding-top: 0.5em;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: rgb(255, 255, 0);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(
    to right,
    rgba(255, 225, 0, 0.1),
    rgba(251, 218, 65, 0.9) 3%,
    rgba(252, 210, 23, 0.9) 35%,
    rgba(251, 218, 65, 0.9) 70%,
    rgba(251, 218, 65, 0.8) 95%,
    rgba(255, 225, 0, 0.3)
  );
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.4 !important;
}

.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid #cc3355 !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}
.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}
.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error {
  color: red;
}
.immersive-translate-clickable-button {
  align-items: normal;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 238);
  border-style: none;
  box-sizing: content-box;
  color: rgb(0, 0, 238);
  cursor: pointer;
  display: inline;
  font: inherit;
  height: auto;
  padding: 0;
  perspective-origin: 0 0;
  text-align: start;
  transform-origin: 0 0;
  width: auto;
  -moz-appearance: none;
  appearance: none;
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
}

.immersive-translate-loading {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(0, 0, 0, 0.25) solid !important;
  border-top: 2px rgba(0, 0, 0, 1) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}
/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }

  .immersive-translate-target-translation-theme-marker-inner {
    background: linear-gradient(
      to right,
      rgba(255, 225, 0, 0.1),
      rgba(102, 99, 78, 0.9) 3%,
      rgba(102, 99, 78, 0.8) 97%,
      rgba(255, 225, 0, 0.3)
    );
  }
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}
.immersive-translate-tooltip:before {
  content: attr(data-immersive-translate-tooltip-text); /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}
.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}

/*# sourceMappingURL=custom.css.map */
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0;
  max-width: 128px;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  background-position: center right 0;
  background-size: 16px auto;
  text-overflow: ellipsis;
  text-align: right;
  color: var(--color);
}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 17px;
  --font-size: 17px;
}

body {
  max-width: 100%;
  padding: 0;
  margin: 0;
  min-width: 250px;
  border-radius: 10px;
}
.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}
.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}
#mount {
  min-width: 250px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
}

.pt-4 {
  padding-top: 24px;
}
.p-2 {
  padding: 8px;
}
.pl-5 {
  padding-left: 48px;
}
.p-0 {
  padding: 0;
}
.pl-2 {
  padding-left: 8px;
}
.pl-4 {
  padding-left: 24px;
}
.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}
.text-sm {
  font-size: 14px;
}

.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}
.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}
.ml-4 {
  margin-left: 24px;
}
.ml-3 {
  margin-left: 16px;
}
.ml-2 {
  margin-left: 8px;
}
.mr-1 {
  margin-right: 4px;
}
.pl-3 {
  padding-left: 12px;
}
.pr-3 {
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}
.mt-4 {
  margin-top: 24px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}
.max-h-30 {
  max-height: 120px;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-2 {
  flex: 2;
}
.mt-3 {
  margin-top: 16px;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}
.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.pt-3 {
  padding-top: 12px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.pt-2 {
  padding-top: 8px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.pt-1 {
  padding-top: 4px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.pb-2 {
  padding-bottom: 8px;
}
.justify-end {
  justify-content: flex-end;
}
.w-auto {
  width: auto;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<style>
  html {
    font-size: 17px;
  }
  .immersive-translate-popup-container {
    position: fixed;
    padding: 0;
    z-index: 999999;
  }
  .immersive-translate-popup-btn {
    background-color: #ea4c89;
    font-size: 18px;
    opacity: 0.5;
    width: 36px;
    height: 36px;
    border-radius: 9999999px;
  }
  .immersive-translate-popup-btn > svg {
  }
  #mount#mount {
    position: absolute;
    display: none;
    min-width: 250px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    --font-size: 17px;
    font-size: 17px;
  }
</style>

<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,MOCK:"0",DEBUG:"0"};var Yu=Object.create,Ps=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,Ms=Object.getOwnPropertyNames,Qu=Object.getPrototypeOf,Zu=Object.prototype.hasOwnProperty,eg=(e,t)=>function(){return t||(0,e[Ms(e)[0]])((t={exports:{}}).exports,t),t.exports},tg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ms(t))!Zu.call(e,o)&&o!==n&&Ps(e,o,{get:()=>t[o],enumerable:!(r=Xu(t,o))||r.enumerable});return e},ng=(e,t,n)=>(n=e!=null?Yu(Qu(e)):{},tg(t||!e||!e.__esModule?Ps(n,"default",{value:e,enumerable:!0}):n,e)),rg=eg({"esm-build-dd657b4e6dab36bb0fd61c19cb6f770fbc7804f6-18dd0343/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(n,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof e<"u")r(t);else{var o={exports:{}};r(o),n.browser=o.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",o=a=>{let i={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(i).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(w,E=void 0){super(E),this.createItem=w}get(w){return this.has(w)||this.set(w,this.createItem(w)),super.get(w)}}let c=v=>v&&typeof v=="object"&&typeof v.then=="function",u=(v,w)=>(...E)=>{a.runtime.lastError?v.reject(new Error(a.runtime.lastError.message)):w.singleCallbackArg||E.length<=1&&w.singleCallbackArg!==!1?v.resolve(E[0]):v.resolve(E)},l=v=>v==1?"argument":"arguments",f=(v,w)=>function(A,...F){if(F.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${l(w.minArgs)} for ${v}(), got ${F.length}`);if(F.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${l(w.maxArgs)} for ${v}(), got ${F.length}`);return new Promise(($,z)=>{if(w.fallbackToNoCallback)try{A[v](...F,u({resolve:$,reject:z},w))}catch(N){console.warn(`${v} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,N),A[v](...F),w.fallbackToNoCallback=!1,w.noCallback=!0,$()}else w.noCallback?(A[v](...F),$()):A[v](...F,u({resolve:$,reject:z},w))})},d=(v,w,E)=>new Proxy(w,{apply(A,F,$){return E.call(F,v,...$)}}),g=Function.call.bind(Object.prototype.hasOwnProperty),m=(v,w={},E={})=>{let A=Object.create(null),F={has(z,N){return N in v||N in A},get(z,N,G){if(N in A)return A[N];if(!(N in v))return;let Y=v[N];if(typeof Y=="function")if(typeof w[N]=="function")Y=d(v,v[N],w[N]);else if(g(E,N)){let we=f(N,E[N]);Y=d(v,v[N],we)}else Y=Y.bind(v);else if(typeof Y=="object"&&Y!==null&&(g(w,N)||g(E,N)))Y=m(Y,w[N],E[N]);else if(g(E,"*"))Y=m(Y,w[N],E["*"]);else return Object.defineProperty(A,N,{configurable:!0,enumerable:!0,get(){return v[N]},set(we){v[N]=we}}),Y;return A[N]=Y,Y},set(z,N,G,Y){return N in A?A[N]=G:v[N]=G,!0},defineProperty(z,N,G){return Reflect.defineProperty(A,N,G)},deleteProperty(z,N){return Reflect.deleteProperty(A,N)}},$=Object.create(v);return new Proxy($,F)},h=v=>({addListener(w,E,...A){w.addListener(v.get(E),...A)},hasListener(w,E){return w.hasListener(v.get(E))},removeListener(w,E){w.removeListener(v.get(E))}}),y=new s(v=>typeof v!="function"?v:function(E){let A=m(E,{},{getContent:{minArgs:0,maxArgs:0}});v(A)}),p=new s(v=>typeof v!="function"?v:function(E,A,F){let $=!1,z,N=new Promise(oe=>{z=function(ee){$=!0,oe(ee)}}),G;try{G=v(E,A,z)}catch(oe){G=Promise.reject(oe)}let Y=G!==!0&&c(G);if(G!==!0&&!Y&&!$)return!1;let we=oe=>{oe.then(ee=>{F(ee)},ee=>{let te;ee&&(ee instanceof Error||typeof ee.message=="string")?te=ee.message:te="An unexpected error occurred",F({__mozWebExtensionPolyfillReject__:!0,message:te})}).catch(ee=>{console.error("Failed to send onMessage rejected reply",ee)})};return we(Y?G:N),!0}),b=({reject:v,resolve:w},E)=>{a.runtime.lastError?a.runtime.lastError.message===r?w():v(new Error(a.runtime.lastError.message)):E&&E.__mozWebExtensionPolyfillReject__?v(new Error(E.message)):w(E)},T=(v,w,E,...A)=>{if(A.length<w.minArgs)throw new Error(`Expected at least ${w.minArgs} ${l(w.minArgs)} for ${v}(), got ${A.length}`);if(A.length>w.maxArgs)throw new Error(`Expected at most ${w.maxArgs} ${l(w.maxArgs)} for ${v}(), got ${A.length}`);return new Promise((F,$)=>{let z=b.bind(null,{resolve:F,reject:$});A.push(z),E.sendMessage(...A)})},L={devtools:{network:{onRequestFinished:h(y)}},runtime:{onMessage:h(p),onMessageExternal:h(p),sendMessage:T.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:T.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},R={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return i.privacy={network:{"*":R},services:{"*":R},websites:{"*":R}},m(a,L,i)};n.exports=o(chrome)}else n.exports=globalThis.browser})}}),ag=ng(rg()),{default:ks,...og}=ag,ya=ks!==void 0?ks:og;globalThis.immersiveTranslateBrowserAPI=ya;function rn(){let e,t="pending",n=new Promise((r,o)=>{e={async resolve(a){await a,t="fulfilled",r(a)},reject(a){t="rejected",o(a)}}});return Object.defineProperty(n,"state",{get:()=>t}),Object.assign(n,e)}var xa=class extends Error{constructor(){super("Deadline"),this.name="DeadlineError"}};function ur(e,t){let n=rn(),r=setTimeout(()=>n.reject(new xa),t);return Promise.race([e,n]).finally(()=>clearTimeout(r))}function Ln(e,t={}){let{signal:n,persistent:r}=t;return n?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((o,a)=>{let i=()=>{clearTimeout(c),a(new DOMException("Delay was aborted.","AbortError"))},c=setTimeout(()=>{n?.removeEventListener("abort",i),o()},e);if(n?.addEventListener("abort",i,{once:!0}),r===!1)try{Deno.unrefTimer(c)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var Rs=class{#e=0;#t=[];#n=[];#r=rn();add(t){++this.#e,this.#a(t[Symbol.asyncIterator]())}async#a(t){try{let{value:n,done:r}=await t.next();r?--this.#e:this.#t.push({iterator:t,value:n})}catch(n){this.#n.push(n)}this.#r.resolve()}async*iterate(){for(;this.#e>0;){await this.#r;for(let t=0;t<this.#t.length;t++){let{iterator:n,value:r}=this.#t[t];yield r,this.#a(n)}if(this.#n.length){for(let t of this.#n)throw t;this.#n.length=0}this.#t.length=0,this.#r=rn()}}[Symbol.asyncIterator](){return this.iterate()}};var ze={};Gu(ze,{bgBlack:()=>Rg,bgBlue:()=>Ig,bgBrightBlack:()=>Bg,bgBrightBlue:()=>zg,bgBrightCyan:()=>Vg,bgBrightGreen:()=>jg,bgBrightMagenta:()=>qg,bgBrightRed:()=>Ug,bgBrightWhite:()=>Kg,bgBrightYellow:()=>Wg,bgCyan:()=>Hg,bgGreen:()=>Dg,bgMagenta:()=>Fg,bgRed:()=>Ng,bgRgb24:()=>Xg,bgRgb8:()=>Jg,bgWhite:()=>$g,bgYellow:()=>Og,black:()=>hg,blue:()=>Tg,bold:()=>cg,brightBlack:()=>Os,brightBlue:()=>Cg,brightCyan:()=>Pg,brightGreen:()=>Lg,brightMagenta:()=>kg,brightRed:()=>Ag,brightWhite:()=>Mg,brightYellow:()=>_g,cyan:()=>vg,dim:()=>ug,getColorEnabled:()=>ig,gray:()=>Eg,green:()=>yg,hidden:()=>mg,inverse:()=>dg,italic:()=>gg,magenta:()=>wg,red:()=>bg,reset:()=>lg,rgb24:()=>Yg,rgb8:()=>Gg,setColorEnabled:()=>sg,strikethrough:()=>pg,stripColor:()=>Zg,underline:()=>fg,white:()=>Sg,yellow:()=>xg});var{Deno:Ns}=globalThis,Ds=typeof Ns?.noColor=="boolean"?Ns.noColor:!0,Ta=!Ds;function sg(e){Ds||(Ta=e)}function ig(){return Ta}function j(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function W(e,t){return Ta?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function lg(e){return W(e,j([0],0))}function cg(e){return W(e,j([1],22))}function ug(e){return W(e,j([2],22))}function gg(e){return W(e,j([3],23))}function fg(e){return W(e,j([4],24))}function dg(e){return W(e,j([7],27))}function mg(e){return W(e,j([8],28))}function pg(e){return W(e,j([9],29))}function hg(e){return W(e,j([30],39))}function bg(e){return W(e,j([31],39))}function yg(e){return W(e,j([32],39))}function xg(e){return W(e,j([33],39))}function Tg(e){return W(e,j([34],39))}function wg(e){return W(e,j([35],39))}function vg(e){return W(e,j([36],39))}function Sg(e){return W(e,j([37],39))}function Eg(e){return Os(e)}function Os(e){return W(e,j([90],39))}function Ag(e){return W(e,j([91],39))}function Lg(e){return W(e,j([92],39))}function _g(e){return W(e,j([93],39))}function Cg(e){return W(e,j([94],39))}function kg(e){return W(e,j([95],39))}function Pg(e){return W(e,j([96],39))}function Mg(e){return W(e,j([97],39))}function Rg(e){return W(e,j([40],49))}function Ng(e){return W(e,j([41],49))}function Dg(e){return W(e,j([42],49))}function Og(e){return W(e,j([43],49))}function Ig(e){return W(e,j([44],49))}function Fg(e){return W(e,j([45],49))}function Hg(e){return W(e,j([46],49))}function $g(e){return W(e,j([47],49))}function Bg(e){return W(e,j([100],49))}function Ug(e){return W(e,j([101],49))}function jg(e){return W(e,j([102],49))}function Wg(e){return W(e,j([103],49))}function zg(e){return W(e,j([104],49))}function qg(e){return W(e,j([105],49))}function Vg(e){return W(e,j([106],49))}function Kg(e){return W(e,j([107],49))}function xt(e,t=255,n=0){return Math.trunc(Math.max(Math.min(e,t),n))}function Gg(e,t){return W(e,j([38,5,xt(t)],39))}function Jg(e,t){return W(e,j([48,5,xt(t)],49))}function Yg(e,t){return typeof t=="number"?W(e,j([38,2,t>>16&255,t>>8&255,t&255],39)):W(e,j([38,2,xt(t.r),xt(t.g),xt(t.b)],39))}function Xg(e,t){return typeof t=="number"?W(e,j([48,2,t>>16&255,t>>8&255,t&255],49)):W(e,j([48,2,xt(t.r),xt(t.g),xt(t.b)],49))}var Qg=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function Zg(e){return e.replace(Qg,"")}function gr(e,t){let n=null,r=null,o=(...a)=>{o.clear(),r=()=>{o.clear(),e.call(o,...a)},n=setTimeout(r,t)};return o.clear=()=>{typeof n=="number"&&(clearTimeout(n),n=null,r=null)},o.flush=()=>{r?.()},Object.defineProperty(o,"pending",{get:()=>typeof n=="number"}),o}var br,q,Bs,ef,_n,Is,Us,mr={},js=[],tf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Tt(e,t){for(var n in t)e[n]=t[n];return e}function Ws(e){var t=e.parentNode;t&&t.removeChild(e)}function zs(e,t,n){var r,o,a,i={};for(a in t)a=="key"?r=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?br.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return fr(e,i,r,o,null)}function fr(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Bs};return o==null&&q.vnode!=null&&q.vnode(a),a}function it(e){return e.children}function dr(e,t){this.props=e,this.context=t}function an(e,t){if(t==null)return e.__?an(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?an(e):null}function qs(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return qs(e)}}function wa(e){(!e.__d&&(e.__d=!0)&&_n.push(e)&&!pr.__r++||Is!==q.debounceRendering)&&((Is=q.debounceRendering)||setTimeout)(pr)}function pr(){for(var e;pr.__r=_n.length;)e=_n.sort(function(t,n){return t.__v.__b-n.__v.__b}),_n=[],e.some(function(t){var n,r,o,a,i,s;t.__d&&(i=(a=(n=t).__v).__e,(s=n.__P)&&(r=[],(o=Tt({},a)).__v=a.__v+1,va(s,a,o,n.__n,s.ownerSVGElement!==void 0,a.__h!=null?[i]:null,r,i??an(a),a.__h),Js(r,a),a.__e!=i&&qs(a)))})}function Vs(e,t,n,r,o,a,i,s,c,u){var l,f,d,g,m,h,y,p=r&&r.__k||js,b=p.length;for(n.__k=[],l=0;l<t.length;l++)if((g=n.__k[l]=(g=t[l])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?fr(null,g,null,null,g):Array.isArray(g)?fr(it,{children:g},null,null,null):g.__b>0?fr(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)!=null){if(g.__=n,g.__b=n.__b+1,(d=p[l])===null||d&&g.key==d.key&&g.type===d.type)p[l]=void 0;else for(f=0;f<b;f++){if((d=p[f])&&g.key==d.key&&g.type===d.type){p[f]=void 0;break}d=null}va(e,g,d=d||mr,o,a,i,s,c,u),m=g.__e,(f=g.ref)&&d.ref!=f&&(y||(y=[]),d.ref&&y.push(d.ref,null,g),y.push(f,g.__c||m,g)),m!=null?(h==null&&(h=m),typeof g.type=="function"&&g.__k===d.__k?g.__d=c=Ks(g,c,e):c=Gs(e,g,d,p,m,c),typeof n.type=="function"&&(n.__d=c)):c&&d.__e==c&&c.parentNode!=e&&(c=an(d))}for(n.__e=h,l=b;l--;)p[l]!=null&&(typeof n.type=="function"&&p[l].__e!=null&&p[l].__e==n.__d&&(n.__d=an(r,l+1)),Xs(p[l],p[l]));if(y)for(l=0;l<y.length;l++)Ys(y[l],y[++l],y[++l])}function Ks(e,t,n){for(var r,o=e.__k,a=0;o&&a<o.length;a++)(r=o[a])&&(r.__=e,t=typeof r.type=="function"?Ks(r,t,n):Gs(n,r,r,o,r.__e,t));return t}function Gs(e,t,n,r,o,a){var i,s,c;if(t.__d!==void 0)i=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),i=null;else{for(s=a,c=0;(s=s.nextSibling)&&c<r.length;c+=2)if(s==o)break e;e.insertBefore(o,a),i=a}return i!==void 0?i:o.nextSibling}function nf(e,t,n,r,o){var a;for(a in n)a==="children"||a==="key"||a in t||hr(e,a,null,n[a],r);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||hr(e,a,t[a],n[a],r)}function Fs(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||tf.test(t)?n:n+"px"}function hr(e,t,n,r,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Fs(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Fs(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?r||e.addEventListener(t,a?$s:Hs,a):e.removeEventListener(t,a?$s:Hs,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Hs(e){this.l[e.type+!1](q.event?q.event(e):e)}function $s(e){this.l[e.type+!0](q.event?q.event(e):e)}function va(e,t,n,r,o,a,i,s,c){var u,l,f,d,g,m,h,y,p,b,T,L,R,v=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,a=[s]),(u=q.__b)&&u(t);try{e:if(typeof v=="function"){if(y=t.props,p=(u=v.contextType)&&r[u.__c],b=u?p?p.props.value:u.__:r,n.__c?h=(l=t.__c=n.__c).__=l.__E:("prototype"in v&&v.prototype.render?t.__c=l=new v(y,b):(t.__c=l=new dr(y,b),l.constructor=v,l.render=af),p&&p.sub(l),l.props=y,l.state||(l.state={}),l.context=b,l.__n=r,f=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),v.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Tt({},l.__s)),Tt(l.__s,v.getDerivedStateFromProps(y,l.__s))),d=l.props,g=l.state,f)v.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(v.getDerivedStateFromProps==null&&y!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,b),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,b)===!1||t.__v===n.__v){l.props=y,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(w){w&&(w.__=t)}),l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,b),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,g,m)})}if(l.context=b,l.props=y,l.__v=t,l.__P=e,T=q.__r,L=0,"prototype"in v&&v.prototype.render)l.state=l.__s,l.__d=!1,T&&T(t),u=l.render(l.props,l.state,l.context);else do l.__d=!1,T&&T(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++L<25);l.state=l.__s,l.getChildContext!=null&&(r=Tt(Tt({},r),l.getChildContext())),f||l.getSnapshotBeforeUpdate==null||(m=l.getSnapshotBeforeUpdate(d,g)),R=u!=null&&u.type===it&&u.key==null?u.props.children:u,Vs(e,Array.isArray(R)?R:[R],t,n,r,o,a,i,s,c),l.base=t.__e,t.__h=null,l.__h.length&&i.push(l),h&&(l.__E=l.__=null),l.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=rf(n.__e,t,n,r,o,a,i,c);(u=q.diffed)&&u(t)}catch(w){t.__v=null,(c||a!=null)&&(t.__e=s,t.__h=!!c,a[a.indexOf(s)]=null),q.__e(w,t,n)}}function Js(e,t){q.__c&&q.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){q.__e(r,n.__v)}})}function rf(e,t,n,r,o,a,i,s){var c,u,l,f=n.props,d=t.props,g=t.type,m=0;if(g==="svg"&&(o=!0),a!=null){for(;m<a.length;m++)if((c=a[m])&&"setAttribute"in c==!!g&&(g?c.localName===g:c.nodeType===3)){e=c,a[m]=null;break}}if(e==null){if(g===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,d.is&&d),a=null,s=!1}if(g===null)f===d||s&&e.data===d||(e.data=d);else{if(a=a&&br.call(e.childNodes),u=(f=n.props||mr).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!s){if(a!=null)for(f={},m=0;m<e.attributes.length;m++)f[e.attributes[m].name]=e.attributes[m].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(nf(e,d,f,o,s),l)t.__k=[];else if(m=t.props.children,Vs(e,Array.isArray(m)?m:[m],t,n,r,o&&g!=="foreignObject",a,i,a?a[0]:n.__k&&an(n,0),s),a!=null)for(m=a.length;m--;)a[m]!=null&&Ws(a[m]);s||("value"in d&&(m=d.value)!==void 0&&(m!==e.value||g==="progress"&&!m||g==="option"&&m!==f.value)&&hr(e,"value",m,f.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==e.checked&&hr(e,"checked",m,f.checked,!1))}return e}function Ys(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){q.__e(r,n)}}function Xs(e,t,n){var r,o;if(q.unmount&&q.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ys(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){q.__e(a,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Xs(r[o],t,typeof e.type!="function");n||e.__e==null||Ws(e.__e),e.__=e.__e=e.__d=void 0}function af(e,t,n){return this.constructor(e,n)}function Sa(e,t,n){var r,o,a;q.__&&q.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,a=[],va(t,e=(!r&&n||t).__k=zs(it,null,[e]),o||mr,mr,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?br.call(t.childNodes):null,a,!r&&n?n:o?o.__e:t.firstChild,r),Js(a,e)}function Ea(e,t){var n={__c:t="__cC"+Us++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a;return this.getChildContext||(o=[],(a={})[t]=this,this.getChildContext=function(){return a},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&o.some(wa)},this.sub=function(i){o.push(i);var s=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),s&&s.call(i)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}br=js.slice,q={__e:function(e,t,n,r){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(s){e=s}throw e}},Bs=0,ef=function(e){return e!=null&&e.constructor===void 0},dr.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Tt({},this.state),typeof e=="function"&&(e=e(Tt({},n),this.props)),e&&Tt(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),wa(this))},dr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),wa(this))},dr.prototype.render=it,_n=[],pr.__r=0,Us=0;var kn,ye,Aa,Qs,Cn=0,oi=[],yr=[],Zs=q.__b,ei=q.__r,ti=q.diffed,ni=q.__c,ri=q.unmount;function Tr(e,t){q.__h&&q.__h(ye,e,Cn||t),Cn=0;var n=ye.__H||(ye.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:yr}),n.__[e]}function xe(e){return Cn=1,of(li,e)}function of(e,t,n){var r=Tr(kn++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):li(void 0,t),function(a){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,a);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=ye,!ye.u)){ye.u=!0;var o=ye.shouldComponentUpdate;ye.shouldComponentUpdate=function(a,i,s){if(!r.__c.__H)return!0;var c=r.__c.__H.__.filter(function(l){return l.__c});if(c.every(function(l){return!l.__N}))return!o||o.call(this,a,i,s);var u=!1;return c.forEach(function(l){if(l.__N){var f=l.__[0];l.__=l.__N,l.__N=void 0,f!==l.__[0]&&(u=!0)}}),!!u&&(!o||o.call(this,a,i,s))}}return r.__N||r.__}function Ze(e,t){var n=Tr(kn++,3);!q.__s&&ii(n.__H,t)&&(n.__=e,n.i=t,ye.__H.__h.push(n))}function _a(e){return Cn=5,si(function(){return{current:e}},[])}function si(e,t){var n=Tr(kn++,7);return ii(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Pn(e,t){return Cn=8,si(function(){return e},t)}function Ca(e){var t=ye.context[e.__c],n=Tr(kn++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(ye)),t.props.value):e.__}function sf(){for(var e;e=oi.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(xr),e.__H.__h.forEach(La),e.__H.__h=[]}catch(t){e.__H.__h=[],q.__e(t,e.__v)}}q.__b=function(e){typeof e.type!="function"||e.o||e.type===it?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),ye=null,Zs&&Zs(e)},q.__r=function(e){ei&&ei(e),kn=0;var t=(ye=e.__c).__H;t&&(Aa===ye?(t.__h=[],ye.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=yr,n.__N=n.i=void 0})):(t.__h.forEach(xr),t.__h.forEach(La),t.__h=[])),Aa=ye},q.diffed=function(e){ti&&ti(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(oi.push(t)!==1&&Qs===q.requestAnimationFrame||((Qs=q.requestAnimationFrame)||lf)(sf)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==yr&&(n.__=n.__V),n.i=void 0,n.__V=yr})),Aa=ye=null},q.__c=function(e,t){t.some(function(n){try{n.__h.forEach(xr),n.__h=n.__h.filter(function(r){return!r.__||La(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],q.__e(r,n.__v)}}),ni&&ni(e,t)},q.unmount=function(e){ri&&ri(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{xr(r)}catch(o){t=o}}),n.__H=void 0,t&&q.__e(t,n.__v))};var ai=typeof requestAnimationFrame=="function";function lf(e){var t,n=function(){clearTimeout(r),ai&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);ai&&(t=requestAnimationFrame(n))}function xr(e){var t=ye,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),ye=t}function La(e){var t=ye;e.__c=e.__(),ye=t}function ii(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function li(e,t){return typeof t=="function"?t(e):t}var ch=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var uf=class extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}};function wr({limit:e,interval:t,strict:n}){if(!Number.isFinite(e))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(t))throw new TypeError("Expected `interval` to be a finite number");let r=new Map,o=0,a=0;function i(){let l=Date.now();return l-o>t?(a=1,o=l,0):(a<e?a++:(o+=t,a=1),o-l)}let s=[];function c(){let l=Date.now();if(s.length<e)return s.push(l),0;let f=s.shift()+t;return l>=f?(s.push(l),0):(s.push(f),f-l)}let u=n?c:i;return l=>{let f=function(...d){if(!f.isEnabled)return(async()=>l.apply(this,d))();let g;return new Promise((m,h)=>{g=setTimeout(()=>{m(l.apply(this,d)),r.delete(g)},u()),r.set(g,h)})};return f.abort=()=>{for(let d of r.keys())clearTimeout(d),r.get(d)(new uf);r.clear(),s.splice(0,s.length)},f.isEnabled=!0,f}}var ka;function Ha(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function mi(e,t=","){return e.map(Ha).join(t)}var pi=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function vr(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function hi(e,t="@media "){return t+mt(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function mt(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function gf(){}var ke={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function bi(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Oa(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(bi(e),15)<<18}var ff=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function $a({n:e,i:t,v:n=[]},r,o,a){for(let s of(e&&(e=Ha({n:e,i:t,v:n})),a=[...mt(a)],n)){let c=r.theme("screens",s);for(let u of mt(c&&hi(c)||r.v(s))){var i;a.push(u),o|=c?67108864|Oa(u):s=="dark"?1073741824:u[0]=="@"?Oa(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~ff.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Ba=new Map;function ci(e){if(e.d){let t=[],n=Pa(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?Pa(r,a=>Pa(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=a.indexOf(s[1]);return~c?a.slice(0,c)+s[0]+a.slice(c+s[1].length):Ma(a,i)}return Ma(i,a)})):r,"&"),r=>Ma(r,e.n?"."+pi(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function Pa(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function Ma(e,t){return e.replace(/&/g,t)}var df=new Intl.Collator("en",{numeric:!0});function mf(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=yi(e[o],t)?n=o+1:r=o}return r}function yi(e,t){let n=e.p&ke.o;return n==(t.p&ke.o)&&(n==ke.b||n==ke.o)?0:e.p-t.p||e.o-t.o||df.compare(e.n,t.n)}function Ra(e,t){return Math.round(parseInt(e,16)*t)}function pf(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[Ra(e.substr(1,a),i),Ra(e.substr(1+a,a),i),Ra(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function xi(e,t,n,r,o=[]){return function a(i,{n:s,p:c,r:u=[],i:l},f){let d=[],g="",m=0,h=0;for(let b in i||{}){var y,p;let T=i[b];if(b[0]=="@"){if(!T)continue;if(b[1]=="a"){d.push(...Ti(s,c,ja(""+T),f,c,u,l,!0));continue}if(b[1]=="l"){for(let L of mt(T))d.push(...a(L,{n:s,p:(y=ke[b[7]],c&~ke.o|y),r:u,i:l},f));continue}if(b[1]=="i"){d.push(...mt(T).map(L=>({p:-1,o:0,r:[],d:b+" "+L})));continue}if(b[1]=="k"){d.push({p:ke.d,o:0,r:[b],d:a(T,{p:ke.d},f).map(ci).join("")});continue}if(b[1]=="f"){d.push(...mt(T).map(L=>({p:ke.d,o:0,r:[b],d:a(L,{p:ke.d},f).map(ci).join("")})));continue}}if(typeof T!="object"||Array.isArray(T))b=="label"&&T?s=T+vr(JSON.stringify([c,l,i])):(T||T===0)&&(b=b.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),h+=1,m=Math.max(m,(p=b)[0]=="-"?0:bi(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+mt(T).map(L=>f.s(b,hf(""+L,f.theme)+(l?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let L=c;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,(R,v)=>{let w=f.theme("screens",v);return w?(L|=67108864,hi(w,"")):R}),L|=Oa(b)),d.push(...a(T,{n:s,p:L,r:[...u,b],i:l},f))}else d.push(...a(T,{p:c,r:[...u,b]},f))}return d.unshift({n:s,p:c,o:Math.max(0,15-h)+1.5*Math.min(m||15,15),r:u,d:g}),d.sort(yi)}(e,$a(t,n,r,o),n)}function hf(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i)=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?pf(s):""+s})}function Ua(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Ia(e,t,n=ke.u,r,o){let a=[];for(let i of e)for(let s of function(c,u,l,f,d){var g;c={...c,i:c.i||d};let m=function(h,y){let p=Ba.get(h.n);return p?p(h,y):y.r(h.n,h.v[0]=="dark")}(c,u);return m?typeof m=="string"?({r:f,p:l}=$a(c,u,l,f),Ua(Ia(ja(m),u,l,f,c.i),c.n)):Array.isArray(m)?m.map(h=>{var y,p;return{o:0,...h,r:[...mt(f),...mt(h.r)],p:(y=l,p=(g=h.p)!=null?g:l,y&~ke.o|p)}}):xi(m,c,u,l,f):[{c:Ha(c),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(mf(a,s),0,s);return a}function Ti(e,t,n,r,o,a,i,s){return Ua((s?n.flatMap(c=>Ia([c],r,o,a,i)):Ia(n,r,o,a,i)).map(c=>c.p&ke.o&&(c.n||t==ke.b)?{...c,p:c.p&~ke.o|t,o:0}:c),e)}function bf(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:c,r:u,i:l}=$a(a,i,t);return n&&Ti(s,t,n,i,c,u,l,r)},Ba.set(e,o),e}function Na(e,t){if(e[e.length-1]!="("){let n=[],r=!1,o=!1,a="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),r=!r),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),o=!o),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(a+=(a&&"-")+i)}a&&(o&&(a="-"+a),t[0].push({n:a,v:n.filter(yf),i:r}))}}function yf(e,t,n){return n.indexOf(e)==t}var ui=new Map;function ja(e){let t=ui.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,c=(u,l=0)=>{o!=s&&(n.push(e.slice(o,s+l)),u&&Na(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let f=n[l-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=l,Na([...n,"#"],r);let{v:g}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(g[0]=="dark"),g.length);Na([...n,bf(f.length>1?f.slice(0,-1)+vr(JSON.stringify([f,d])):f+"("+mi(d)+")",ke.a,d,/@$/.test(f))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),ui.set(e,t=r[0])}return t}function wi(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function vi(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?wi(e,t,n=>Da(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Da(r),e?Da(e):"")}function Da(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=vi(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var Sh=Si("@"),Eh=Si("~");function Si(e){return new Proxy(function(n,...r){return t("",n,r)},{get:(n,r)=>r in n?n[r]:function(o,...a){return t(r,o,a)}});function t(n,r,o){return mi(ja(n+e+"("+vi(r,o)+")"))}}function Fa(e,t){return Array.isArray(e)?gi(wi(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?gi(e):[e]}var xf=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function gi(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=xf.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function Ei(e,...t){var n,r;let o=Fa(e,t),a=(((n=o.find(i=>i.label))==null?void 0:n.label)||"css")+vr(JSON.stringify(o));return r=(i,s)=>Ua(o.flatMap(c=>xi(c,i,s,ke.o)),a),Ba.set(a,r),a}var Ah=new Proxy(function(e,t){return fi("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(n,r){return fi(t,n,r)}});function fi(e,t,n){return{toString:()=>Ei({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}var Lh=Symbol();var Ai=new Proxy(gf,{apply:(e,t,n)=>ka(n[0]),get(e,t){let n=ka[t];return typeof n=="function"?function(){return n.apply(ka,arguments)}:n}});var _h=function e(t){return new Proxy(function(n,...r){return di(t,"",n,r)},{get:(n,r)=>r==="bind"?e:r in n?n[r]:function(o,...a){return di(t,r,o,a)}})}();function di(e,t,n,r){return{toString(){let o=Fa(n,r),a=pi(t+vr(JSON.stringify([t,o])));return(typeof e=="function"?e:Ai)(Ei({[`@keyframes ${a}`]:Fa(n,r)})),a}}}var Wa;function Za(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Di(e,t=","){return e.map(Za).join(t)}var Oi=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Er(e){for(var t=9,n=e.length;n--;)t=Math.imul(t^e.charCodeAt(n),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Ar(e,t="@media "){return t+qe(e).map(n=>(typeof n=="string"&&(n={min:n}),n.raw||Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")}function qe(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function wf(){}var Pe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function Ii(e){return e.match(/[-=:;]/g)?.length||0}function Ja(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(Ii(e),15)<<18}var vf=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function eo({n:e,i:t,v:n=[]},r,o,a){e&&(e=Za({n:e,i:t,v:n})),a=[...qe(a)];for(let s of n){let c=r.theme("screens",s);for(let u of qe(c&&Ar(c)||r.v(s))){var i;a.push(u),o|=c?67108864|Ja(u):s=="dark"?1073741824:u[0]=="@"?Ja(u):(i=u,1<<~(/:([a-z-]+)/.test(i)&&~vf.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var to=new Map;function Li(e){if(e.d){let t=[],n=za(e.r.reduce((r,o)=>o[0]=="@"?(t.push(o),r):o?za(r,a=>za(o,i=>{let s=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(i);if(s){let c=a.indexOf(s[1]);return~c?a.slice(0,c)+s[0]+a.slice(c+s[1].length):qa(a,i)}return qa(i,a)})):r,"&"),r=>qa(r,e.n?"."+Oi(e.n):""));return n&&t.push(n.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((r,o)=>o+"{"+r+"}",e.d)}}function za(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(n,r,o)=>t(r)+o)}function qa(e,t){return e.replace(/&/g,t)}var _i=new Intl.Collator("en",{numeric:!0});function Sf(e,t){for(var n=0,r=e.length;n<r;){let o=r+n>>1;0>=Fi(e[o],t)?n=o+1:r=o}return r}function Fi(e,t){let n=e.p&Pe.o;return n==(t.p&Pe.o)&&(n==Pe.b||n==Pe.o)?0:e.p-t.p||e.o-t.o||_i.compare(Ci(e.n),Ci(t.n))||_i.compare(ki(e.n),ki(t.n))}function Ci(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function ki(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Va(e,t){return Math.round(parseInt(e,16)*t)}function wt(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:n="1",opacityVariable:r}=t,o=r?`var(${r})`:n;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,i=[17,1,.062272][a-1];return`rgba(${[Va(e.substr(1,a),i),Va(e.substr(1+a,a),i),Va(e.substr(1+2*a,a),i),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function Hi(e,t,n,r,o=[]){return function a(i,{n:s,p:c,r:u=[],i:l},f){let d=[],g="",m=0,h=0;for(let b in i||{}){var y,p;let T=i[b];if(b[0]=="@"){if(!T)continue;if(b[1]=="a"){d.push(...Bi(s,c,ro(""+T),f,c,u,l,!0));continue}if(b[1]=="l"){for(let L of qe(T))d.push(...a(L,{n:s,p:(y=Pe[b[7]],c&~Pe.o|y),r:u,i:l},f));continue}if(b[1]=="i"){d.push(...qe(T).map(L=>({p:-1,o:0,r:[],d:b+" "+L})));continue}if(b[1]=="k"){d.push({p:Pe.d,o:0,r:[b],d:a(T,{p:Pe.d},f).map(Li).join("")});continue}if(b[1]=="f"){d.push(...qe(T).map(L=>({p:Pe.d,o:0,r:[b],d:a(L,{p:Pe.d},f).map(Li).join("")})));continue}}if(typeof T!="object"||Array.isArray(T))b=="label"&&T?s=T+Er(JSON.stringify([c,l,i])):(T||T===0)&&(b=b.replace(/[A-Z]/g,L=>"-"+L.toLowerCase()),h+=1,m=Math.max(m,(p=b)[0]=="-"?0:Ii(p)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(p)?+!!RegExp.$1||-!!RegExp.$2:0)+1),g+=(g?";":"")+qe(T).map(L=>f.s(b,$i(""+L,f.theme)+(l?" !important":""))).join(";"));else if(b[0]=="@"||b.includes("&")){let L=c;b[0]=="@"&&(b=b.replace(/\bscreen\(([^)]+)\)/g,(R,v)=>{let w=f.theme("screens",v);return w?(L|=67108864,Ar(w,"")):R}),L|=Ja(b)),d.push(...a(T,{n:s,p:L,r:[...u,b],i:l},f))}else d.push(...a(T,{p:c,r:[...u,b]},f))}return d.unshift({n:s,p:c,o:Math.max(0,15-h)+1.5*Math.min(m||15,15),r:u,d:g}),d.sort(Fi)}(e,eo(t,n,r,o),n)}function $i(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(n,r,o,a,i="")=>{let s=t(o,i);return typeof s=="function"&&/color|fill|stroke/i.test(o)?wt(s):""+qe(s).filter(c=>Object(c)!==c)})}function no(e,t){let n,r=[];for(let o of e)o.d&&o.n?n?.p==o.p&&""+n.r==""+o.r?(n.c=[n.c,o.c].filter(Boolean).join(" "),n.d=n.d+";"+o.d):r.push(n={...o,n:o.n&&t}):r.push({...o,n:o.n&&t});return r}function Ya(e,t,n=Pe.u,r,o){let a=[];for(let i of e)for(let s of function(c,u,l,f,d){c={...c,i:c.i||d};let g=function(m,h){let y=to.get(m.n);return y?y(m,h):h.r(m.n,m.v[0]=="dark")}(c,u);return g?typeof g=="string"?({r:f,p:l}=eo(c,u,l,f),no(Ya(ro(g),u,l,f,c.i),c.n)):Array.isArray(g)?g.map(m=>{var h,y;return{o:0,...m,r:[...qe(f),...qe(m.r)],p:(h=l,y=m.p??l,h&~Pe.o|y)}}):Hi(g,c,u,l,f):[{c:Za(c),p:0,o:0,r:[]}]}(i,t,n,r,o))a.splice(Sf(a,s),0,s);return a}function Bi(e,t,n,r,o,a,i,s){return no((s?n.flatMap(c=>Ya([c],r,o,a,i)):Ya(n,r,o,a,i)).map(c=>c.p&Pe.o&&(c.n||t==Pe.b)?{...c,p:c.p&~Pe.o|t,o:0}:c),e)}function Ef(e,t,n,r){var o;return o=(a,i)=>{let{n:s,p:c,r:u,i:l}=eo(a,i,t);return n&&Bi(s,t,n,i,c,u,l,r)},to.set(e,o),e}function Ka(e,t,n){if(e[e.length-1]!="("){let r=[],o=!1,a=!1,i="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),o=!o),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),a=!a),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(i+=(i&&"-")+s)}i&&(a&&(i="-"+i),t[0].push({n:i,v:r.filter(Af),i:o}))}}function Af(e,t,n){return n.indexOf(e)==t}var Pi=new Map;function ro(e){let t=Pi.get(e);if(!t){let n=[],r=[[]],o=0,a=0,i=null,s=0,c=(u,l=0)=>{o!=s&&(n.push(e.slice(o,s+l)),u&&Ka(n,r)),o=s+1};for(;s<e.length;s++){let u=e[s];if(a)e[s-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(i)e[s-1]!="\\"&&i.test(e.slice(s))&&(i=null,o=s+RegExp.lastMatch.length);else if(u=="/"&&e[s-1]!="\\"&&(e[s+1]=="*"||e[s+1]=="/"))i=e[s+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),n.push(u);else if(u==":")e[s+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=n.lastIndexOf("(");if(u==")"){let f=n[l-1];if(/[~@]$/.test(f)){let d=r.shift();n.length=l,Ka([...n,"#"],r);let{v:g}=r[0].pop();for(let m of d)m.v.splice(+(m.v[0]=="dark")-+(g[0]=="dark"),g.length);Ka([...n,Ef(f.length>1?f.slice(0,-1)+Er(JSON.stringify([f,d])):f+"("+Di(d)+")",Pe.a,d,/@$/.test(f))],r)}l=n.lastIndexOf("(",l-1)}n.length=l+1}else/[~@]/.test(u)&&e[s+1]=="("&&r.unshift([])}c(!0),Pi.set(e,t=r[0])}return t}function Ui(e,t,n){return t.reduce((r,o,a)=>r+n(o)+e[a+1],e[0])}function ji(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Ui(e,t,n=>Ga(n).trim()):t.filter(Boolean).reduce((n,r)=>n+Ga(r),e?Ga(e):"")}function Ga(e){let t,n="";if(e&&typeof e=="object")if(Array.isArray(e))(t=ji(e[0],e.slice(1)))&&(n+=" "+t);else for(let r in e)e[r]&&(n+=" "+r);else e!=null&&typeof e!="boolean"&&(n+=" "+e);return n}var qh=Wi("@"),Vh=Wi("~");function Wi(e){return new Proxy(function(n,...r){return t("",n,r)},{get(n,r){return r in n?n[r]:function(o,...a){return t(r,o,a)}}});function t(n,r,o){return Di(ro(n+e+"("+ji(r,o)+")"))}}function Xa(e,t){return Array.isArray(e)?Mi(Ui(e,t,n=>n!=null&&typeof n!="boolean"?n:"")):typeof e=="string"?Mi(e):[e]}var Lf=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Mi(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let n=[{}],r=[n[0]],o=[];for(;t=Lf.exec(e);)t[4]&&(n.shift(),o.shift()),t[3]?(o.unshift(t[3]),n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))):t[4]||(n[0][t[1]]&&(n.unshift({}),r.push(o.reduce((a,i)=>({[i]:a}),n[0]))),n[0][t[1]]=t[2]);return r}function zi(e,...t){var n;let r=Xa(e,t),o=(r.find(a=>a.label)?.label||"css")+Er(JSON.stringify(r));return n=(a,i)=>no(r.flatMap(s=>Hi(s,a,i,Pe.o)),o),to.set(o,n),o}var Kh=new Proxy(function(e,t){return Ri("animation",e,t)},{get(e,t){return t in e?e[t]:function(n,r){return Ri(t,n,r)}}});function Ri(e,t,n){return{toString(){return zi({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+n}})}}}function C(e,t,n){return[e,_f(t,n)]}function _f(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(n,r)=>({[e]:t?t(n,r):Qa(n,1)}):n=>e||{[n[1]]:Qa(n,2)}}function Qa(e,t,n=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${n} * -1)`:n}function k(e,t,n,r){return[e,Cf(t,n,r)]}function Cf(e,t,n){let r=typeof t=="string"?(o,a)=>({[t]:n?n(o,a):o._}):t||(({1:o,_:a},i,s)=>({[o||s]:a}));return(o,a)=>{let i=qi(e||o[1]),s=a.theme(i,o.$$)??Mn(o.$$,i,a);if(s!=null)return o._=Qa(o,0,s),r(o,a,i)}}function Ee(e,t={},n){return[e,kf(t,n)]}function kf(e={},t){return(n,r)=>{let{section:o=qi(n[0]).replace("-","")+"Color"}=e,[a,i]=Pf(n.$$);if(!a)return;let s=r.theme(o,a)||Mn(a,o,r);if(!s||typeof s=="object")return;let{opacityVariable:c=`--tw-${n[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:l=o,selector:f}=e,d=r.theme(u,i||"DEFAULT")||i&&Mn(i,u,r),g=t||(({_:h})=>{let y=Rn(l,h);return f?{[f]:y}:y});n._={value:wt(s,{opacityVariable:c||void 0,opacityValue:d||void 0}),color:h=>wt(s,h),opacityVariable:c||void 0,opacityValue:d||void 0};let m=g(n,r);if(!n.dark){let h=r.d(o,a,s);h&&h!==s&&(n._={value:wt(h,{opacityVariable:c||void 0,opacityValue:d||"1"}),color:y=>wt(h,y),opacityVariable:c||void 0,opacityValue:d||void 0},m={"&":m,[r.v("dark")]:g(n,r)})}return m}}function Pf(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function Rn(e,t){let n={};return typeof t=="string"?n[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(n[t.opacityVariable]=t.opacityValue||"1"),n[e]=t.value),n}function Mn(e,t,n){if(e[0]=="["&&e.slice(-1)=="]"){if(e=Sr($i(e.slice(1,-1),n.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function qi(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function Sr(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,n="",r,o="")=>Sr(n)+r+Sr(o)):e.replace(/(^|[^\\])_+/g,(t,n)=>n+" ".repeat(t.length-n.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var Gh=Symbol();var Mf=new Proxy(wf,{apply(e,t,n){return Wa(n[0])},get(e,t){let n=Wa[t];return typeof n=="function"?function(){return n.apply(Wa,arguments)}:n}});var Jh=function e(t){return new Proxy(function(n,...r){return Ni(t,"",n,r)},{get(n,r){return r==="bind"?e:r in n?n[r]:function(o,...a){return Ni(t,r,o,a)}}})}();function Ni(e,t,n,r){return{toString(){let o=Xa(n,r),a=Oi(t+Er(JSON.stringify([t,o])));return(typeof e=="function"?e:Mf)(zi({[`@keyframes ${a}`]:Xa(n,r)})),a}}}var Rf="inherit",Nf="currentColor",Df="transparent",Of="#000",If="#fff",Ff={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Hf={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},$f={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},Bf={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},Uf={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},jf={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},Wf={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},zf={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},qf={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},Vf={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},Kf={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},Gf={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},Jf={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},Yf={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},Xf={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},Qf={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},Zf={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},ed={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},td={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},nd={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},rd={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},ad={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},od={__proto__:null,inherit:Rf,current:Nf,transparent:Df,black:Of,white:If,slate:Ff,gray:Hf,zinc:$f,neutral:Bf,stone:Uf,red:jf,orange:Wf,amber:zf,yellow:qf,lime:Vf,green:Kf,emerald:Gf,teal:Jf,cyan:Yf,sky:Xf,blue:Qf,indigo:Zf,violet:ed,purple:td,fuchsia:nd,pink:rd,rose:ad},Vi={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:od,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...We(4,"rem",4,.5,.5),...We(12,"rem",4,5),14:"3.5rem",...We(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:Z("blur"),backdropBrightness:Z("brightness"),backdropContrast:Z("contrast"),backdropGrayscale:Z("grayscale"),backdropHueRotate:Z("hueRotate"),backdropInvert:Z("invert"),backdropOpacity:Z("opacity"),backdropSaturate:Z("saturate"),backdropSepia:Z("sepia"),backgroundColor:Z("colors"),backgroundImage:{none:"none"},backgroundOpacity:Z("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...We(200,"",100,0,50),...We(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:Z("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:Z("spacing"),borderWidth:{DEFAULT:"1px",...Ve(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:Z("colors"),caretColor:Z("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...We(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:Z("borderColor"),divideOpacity:Z("borderOpacity"),divideWidth:Z("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:Z("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...Nn(2,6),...Nn(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:Z("spacing"),gradientColorStops:Z("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...Nn(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...Nn(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...We(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...We(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:Z("spacing"),placeholderColor:Z("colors"),placeholderOpacity:Z("opacity"),outlineColor:Z("colors"),outlineOffset:Ve(8,"px"),outlineWidth:Ve(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:Z("colors"),ringOffsetWidth:Ve(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ve(8,"px")},rotate:{...Ve(2,"deg"),...Ve(12,"deg",3),...Ve(180,"deg",45)},saturate:We(200,"",100,0,50),scale:{...We(150,"",100,0,50),...We(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:Z("spacing"),scrollPadding:Z("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ve(2,"deg"),...Ve(12,"deg",3)},space:Z("spacing"),stroke:Z("colors"),strokeWidth:We(2),textColor:Z("colors"),textDecorationColor:Z("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ve(8,"px")},textUnderlineOffset:{auto:"auto",...Ve(8,"px")},textIndent:Z("spacing"),textOpacity:Z("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:Z("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...Nn(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...We(50,"",1,0,10),auto:"auto"}};function Nn(e,t){let n={};do for(var r=1;r<e;r++)n[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%";while(++e<=t);return n}function Ve(e,t,n=0){let r={};for(;n<=e;n=2*n||1)r[n]=n+t;return r}function We(e,t="",n=1,r=0,o=1,a={}){for(;r<=e;r+=o)a[r]=r/n+t;return a}function Z(e){return({theme:t})=>t(e)}var Qh={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${Vi.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${Vi.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},e0=[C("\\[([-\\w]+):(.+)]",({1:e,2:t},n)=>({"@layer overrides":{"&":{[e]:Mn(`[${t}]`,e,n)}}})),C("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),k("aspect-","aspectRatio"),C("container",(e,{theme:t})=>{let{screens:n=t("screens"),center:r,padding:o}=t("container"),a={width:"100%",marginRight:r&&"auto",marginLeft:r&&"auto",...i("xs")};for(let s in n){let c=n[s];typeof c=="string"&&(a[Ar(c)]={"&":{maxWidth:c,...i(s)}})}return a;function i(s){let c=o&&(typeof o=="string"?o:o[s]||o.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),k("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),C("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),C("box-(border|content)","boxSizing",({1:e})=>e+"-box"),C("hidden",{display:"none"}),C("table-(auto|fixed)","tableLayout"),C(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",C("isolate","isolation"),C("object-(contain|cover|fill|none|scale-down)","objectFit"),k("object-","objectPosition"),C("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",Lr),C("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),C("(static|fixed|absolute|relative|sticky)","position"),k("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),k("-?(top|bottom|left|right)(?:$|-)","inset"),C("visible","visibility"),C("invisible",{visibility:"hidden"}),k("-?z-","zIndex"),C("flex-((row|col)(-reverse)?)","flexDirection",Ki),C("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),k("(flex-(?:grow|shrink))(?:$|-)"),k("(flex)-"),k("grow(?:$|-)","flexGrow"),k("shrink(?:$|-)","flexShrink"),k("basis-","flexBasis"),k("-?(order)-"),"-?(order)-(\\d+)",k("grid-cols-","gridTemplateColumns"),C("grid-cols-(\\d+)","gridTemplateColumns",Xi),k("col-","gridColumn"),C("col-(span)-(\\d+)","gridColumn",Yi),k("col-start-","gridColumnStart"),C("col-start-(auto|\\d+)","gridColumnStart"),k("col-end-","gridColumnEnd"),C("col-end-(auto|\\d+)","gridColumnEnd"),k("grid-rows-","gridTemplateRows"),C("grid-rows-(\\d+)","gridTemplateRows",Xi),k("row-","gridRow"),C("row-(span)-(\\d+)","gridRow",Yi),k("row-start-","gridRowStart"),C("row-start-(auto|\\d+)","gridRowStart"),k("row-end-","gridRowEnd"),C("row-end-(auto|\\d+)","gridRowEnd"),C("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>Lr(Ki(e))),C("grid-flow-(dense)","gridAutoFlow"),k("auto-cols-","gridAutoColumns"),k("auto-rows-","gridAutoRows"),k("gap-x(?:$|-)","gap","columnGap"),k("gap-y(?:$|-)","gap","rowGap"),k("gap(?:$|-)","gap"),"(justify-(?:items|self))-",C("justify-","justifyContent",Gi),C("(content|items|self)-",e=>({["align-"+e[1]]:Gi(e)})),C("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),k("p([xytrbl])?(?:$|-)","padding",on("padding")),k("-?m([xytrbl])?(?:$|-)","margin",on("margin")),k("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),C("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),k("w-","width"),k("min-w-","minWidth"),k("max-w-","maxWidth"),k("h-","height"),k("min-h-","minHeight"),k("max-h-","maxHeight"),k("font-","fontWeight"),k("font-","fontFamily","fontFamily",lt),C("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),C("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),C("italic","fontStyle"),C("not-italic",{fontStyle:"normal"}),C("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:n})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(n?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),k("tracking-","letterSpacing"),k("leading-","lineHeight"),C("list-(inside|outside)","listStylePosition"),k("list-","listStyleType"),C("list-","listStyleType"),k("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),Ee("placeholder-",{property:"color",selector:"&::placeholder"}),C("text-(left|center|right|justify|start|end)","textAlign"),C("text-(ellipsis|clip)","textOverflow"),k("text-opacity-","textOpacity","--tw-text-opacity"),Ee("text-",{property:"color"}),k("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),k("indent-","textIndent"),C("(overline|underline|line-through)","textDecorationLine"),C("no-underline",{textDecorationLine:"none"}),k("underline-offset-","textUnderlineOffset"),Ee("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),k("decoration-","textDecorationThickness"),C("decoration-","textDecorationStyle"),C("(uppercase|lowercase|capitalize)","textTransform"),C("normal-case",{textTransform:"none"}),C("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),C("align-","verticalAlign"),C("whitespace-","whiteSpace"),C("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),C("break-words",{overflowWrap:"break-word"}),C("break-all",{wordBreak:"break-all"}),Ee("caret-",{opacityVariable:!1,opacitySection:"opacity"}),Ee("accent-",{opacityVariable:!1,opacitySection:"opacity"}),C("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Nt(e," ")},var(--tw-gradient-stops))`),Ee("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),Ee("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),Ee("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),C("bg-(fixed|local|scroll)","backgroundAttachment"),C("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),C(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),C("bg-blend-","backgroundBlendMode"),C("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),k("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),Ee("bg-",{section:"backgroundColor"}),k("bg-","backgroundImage"),k("bg-","backgroundPosition"),C("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",Lr),k("bg-","backgroundSize"),k("rounded(?:$|-)","borderRadius"),k("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let n={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Nt(n[0])}-radius`]:t,[`border-${Nt(n[1])}-radius`]:t}}),C("border-(collapse|separate)","borderCollapse"),k("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),C("border-(solid|dashed|dotted|double|none)","borderStyle"),k("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),Ee("border-([xytrbl])-",{section:"borderColor"},on("border","Color")),Ee("border-"),k("border-([xytrbl])(?:$|-)","borderWidth",on("border","Width")),k("border(?:$|-)","borderWidth"),k("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),C("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),C("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),k("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let n={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Nt(n[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Nt(n[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),Ee("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),k("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),Ee("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),k("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),C("ring-inset",{"--tw-ring-inset":"inset"}),Ee("ring-",{property:"--tw-ring-color"}),k("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":wt(t("ringOffsetColor","","#fff")),"--tw-ring-color":wt(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),Ee("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),k("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":lt(e),"--tw-shadow-colored":lt(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),k("(opacity)-"),C("mix-blend-","mixBlendMode"),...Ji(),...Ji("backdrop-"),k("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:lt(e),transitionTimingFunction:e._=="none"?void 0:lt(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:lt(t("transitionDuration",""))})),k("duration(?:$|-)","transitionDuration","transitionDuration",lt),k("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",lt),k("delay(?:$|-)","transitionDelay","transitionDelay",lt),k("animate(?:$|-)","animation",(e,{theme:t,h:n})=>{let r=lt(e),o=r.split(" "),a=t("keyframes",o[0]);return a?{["@keyframes "+(o[0]=n(o[0]))]:a,animation:o.join(" ")}:{animation:r}}),"(transform)-(none)",C("transform",oo),C("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Qi(e=="gpu")})),k("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...oo()})),k("-?(rotate)-","rotate",ao),k("-?(translate-[xy])-","translate",ao),k("-?(skew-[xy])-","skew",ao),C("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",Lr),"(appearance)-",k("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",k("(cursor)-"),"(cursor)-",C("snap-(none)","scroll-snap-type"),C("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),C("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),C("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),C("snap-(normal|always)","scroll-snap-stop"),C("scroll-(auto|smooth)","scroll-behavior"),k("scroll-p([xytrbl])?(?:$|-)","padding",on("scroll-padding")),k("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",on("scroll-margin")),C("touch-(auto|none|manipulation)","touch-action"),C("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:n})=>({[`--tw-${t?"pan-x":n?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),C("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),C("outline",{outlineStyle:"solid"}),C("outline-(dashed|dotted|double|hidden)","outlineStyle"),k("(outline-offset)-"),Ee("outline-",{opacityVariable:!1,opacitySection:"opacity"}),k("outline-","outlineWidth"),"(pointer-events)-",k("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],C("select-(none|text|all|auto)","userSelect"),Ee("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),Ee("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),k("stroke-","strokeWidth"),C("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),C("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function Lr(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Ki(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Nt(e,t="-"){let n=[];for(let r of e)n.push({t:"top",r:"right",b:"bottom",l:"left"}[r]);return n.join(t)}function lt(e){return e&&""+(e._||e)}function Gi({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function on(e,t=""){return({1:n,_:r})=>{let o={x:"lr",y:"tb"}[n]||n+n;return o?{...Rn(e+"-"+Nt(o[0])+t,r),...Rn(e+"-"+Nt(o[1])+t,r)}:Rn(e+t,r)}}function Ji(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),n={};for(let r of t)n[`--tw-${e}${r}`]="var(--tw-empty,/*!*/ /*!*/)";return n={[`${e}filter`]:t.map(r=>`var(--tw-${e}${r})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":n}},[`(${e}filter)-(none)`,C(`${e}filter`,n),...t.map(r=>k(`${r[0]=="h"?"-?":""}(${e}${r})(?:$|-)`,r,({1:o,_:a})=>({[`--tw-${o}`]:qe(a).map(i=>`${r}(${i})`).join(" "),...n})))]}function ao({1:e,_:t}){return{["--tw-"+e]:t,...oo()}}function oo(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Qi()}}}}function Qi(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Yi({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Xi({1:e}){return`repeat(${e},minmax(0,1fr))`}var id=Object.create,el=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,cd=Object.getOwnPropertyNames,ud=Object.getPrototypeOf,gd=Object.prototype.hasOwnProperty,fd=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),dd=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of cd(t))!gd.call(e,o)&&o!==n&&el(e,o,{get:()=>t[o],enumerable:!(r=ld(t,o))||r.enumerable});return e},md=(e,t,n)=>(n=e!=null?id(ud(e)):{},dd(t||!e||!e.__esModule?el(n,"default",{value:e,enumerable:!0}):n,e)),pd=fd((e,t)=>{(function(n,r){typeof e=="object"&&typeof t=="object"?t.exports=r():typeof define=="function"&&define.amd?define([],r):typeof e=="object"?e.notie=r():n.notie=r()})(e,function(){return function(n){function r(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var o={};return r.m=n,r.c=o,r.i=function(a){return a},r.d=function(a,i,s){r.o(a,i)||Object.defineProperty(a,i,{configurable:!1,enumerable:!0,get:s})},r.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(i,"a",i),i},r.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},r.p="",r(r.s=1)}([function(n,r){n.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}},function(n,r,o){"use strict";(function(a){var i,s,c,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,f){u(r)==="object"&&u(a)==="object"?a.exports=f():(s=[],i=f,c=typeof i=="function"?i.apply(r,s):i,c!==void 0&&(a.exports=c))})(void 0,function(){return function(l){function f(g){if(d[g])return d[g].exports;var m=d[g]={i:g,l:!1,exports:{}};return l[g].call(m.exports,m,m.exports,f),m.l=!0,m.exports}var d={};return f.m=l,f.c=d,f.i=function(g){return g},f.d=function(g,m,h){f.o(g,m)||Object.defineProperty(g,m,{configurable:!1,enumerable:!0,get:h})},f.n=function(g){var m=g&&g.__esModule?function(){return g.default}:function(){return g};return f.d(m,"a",m),m},f.o=function(g,m){return Object.prototype.hasOwnProperty.call(g,m)},f.p="",f(f.s=0)}([function(l,f,d){function g(S,D){var O={};for(var X in S)D.indexOf(X)>=0||Object.prototype.hasOwnProperty.call(S,X)&&(O[X]=S[X]);return O}Object.defineProperty(f,"__esModule",{value:!0});var m=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(S){return typeof S>"u"?"undefined":u(S)}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S>"u"?"undefined":u(S)},h=Object.assign||function(S){for(var D=1;D<arguments.length;D++){var O=arguments[D];for(var X in O)Object.prototype.hasOwnProperty.call(O,X)&&(S[X]=O[X])}return S},y={top:"top",bottom:"bottom"},p={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:y.top,force:y.top,confirm:y.top,input:y.top,select:y.bottom,date:y.top}},b=f.setOptions=function(S){p=h({},p,S,{classes:h({},p.classes,S.classes),ids:h({},p.ids,S.ids),positions:h({},p.positions,S.positions)})},T=function(){return new Promise(function(S){return setTimeout(S,0)})},L=function(S){return new Promise(function(D){return setTimeout(D,1e3*S)})},R=function(){document.activeElement&&document.activeElement.blur()},v=function(){var S="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(D){var O=16*Math.random()|0,X=D==="x"?O:3&O|8;return X.toString(16)});return"notie-"+S},w={1:p.classes.backgroundSuccess,success:p.classes.backgroundSuccess,2:p.classes.backgroundWarning,warning:p.classes.backgroundWarning,3:p.classes.backgroundError,error:p.classes.backgroundError,4:p.classes.backgroundInfo,info:p.classes.backgroundInfo,5:p.classes.backgroundNeutral,neutral:p.classes.backgroundNeutral},E=function(){return p.transitionSelector+" "+p.transitionDuration+"s "+p.transitionCurve},A=function(S){return S.keyCode===13},F=function(S){return S.keyCode===27},$=function(S,D){S.classList.add(p.classes.container),S.style[D]="-10000px",document.body.appendChild(S),S.style[D]="-"+S.offsetHeight+"px",S.listener&&window.addEventListener("keydown",S.listener),T().then(function(){S.style.transition=E(),S.style[D]=0})},z=function(S,D){var O=document.getElementById(S);O&&(O.style[D]="-"+O.offsetHeight+"px",O.listener&&window.removeEventListener("keydown",O.listener),L(p.transitionDuration).then(function(){O.parentNode&&O.parentNode.removeChild(O)}))},N=function(S,D){var O=document.createElement("div");O.id=p.ids.overlay,O.classList.add(p.classes.overlay),O.classList.add(p.classes.backgroundOverlay),O.style.opacity=0,S&&p.overlayClickDismiss&&(O.onclick=function(){z(S.id,D),G()}),document.body.appendChild(O),T().then(function(){O.style.transition=E(),O.style.opacity=p.overlayOpacity})},G=function(){var S=document.getElementById(p.ids.overlay);S.style.opacity=0,L(p.transitionDuration).then(function(){S.parentNode&&S.parentNode.removeChild(S)})},Y=f.hideAlerts=function(S){var D=document.getElementsByClassName(p.classes.alert);if(D.length){for(var O=0;O<D.length;O++){var X=D[O];z(X.id,X.position)}S&&L(p.transitionDuration).then(function(){return S()})}},we=f.alert=function(S){var D=S.type,O=D===void 0?4:D,X=S.text,V=S.time,he=V===void 0?p.alertTime:V,de=S.stay,Ce=de!==void 0&&de,me=S.position,ce=me===void 0?p.positions.alert||ce.top:me;R(),Y();var _=document.createElement("div"),H=v();_.id=H,_.position=ce,_.classList.add(p.classes.textbox),_.classList.add(w[O]),_.classList.add(p.classes.alert),_.innerHTML='<div class="'+p.classes.textboxInner+'">'+X+"</div>",_.onclick=function(){return z(H,ce)},_.listener=function(P){(A(P)||F(P))&&Y()},$(_,ce),he&&he<1&&(he=1),!Ce&&he&&L(he).then(function(){return z(H,ce)})},oe=f.force=function(S,D){var O=S.type,X=O===void 0?5:O,V=S.text,he=S.buttonText,de=he===void 0?"OK":he,Ce=S.callback,me=S.position,ce=me===void 0?p.positions.force||ce.top:me;R(),Y();var _=document.createElement("div"),H=v();_.id=H;var P=document.createElement("div");P.classList.add(p.classes.textbox),P.classList.add(p.classes.backgroundInfo),P.innerHTML='<div class="'+p.classes.textboxInner+'">'+V+"</div>";var I=document.createElement("div");I.classList.add(p.classes.button),I.classList.add(w[X]),I.innerHTML=de,I.onclick=function(){z(H,ce),G(),Ce?Ce():D&&D()},_.appendChild(P),_.appendChild(I),_.listener=function(K){A(K)&&I.click()},$(_,ce),N()},ee=f.confirm=function(S,D,O){var X=S.text,V=S.submitText,he=V===void 0?"Yes":V,de=S.cancelText,Ce=de===void 0?"Cancel":de,me=S.submitCallback,ce=S.cancelCallback,_=S.position,H=_===void 0?p.positions.confirm||H.top:_;R(),Y();var P=document.createElement("div"),I=v();P.id=I;var K=document.createElement("div");K.classList.add(p.classes.textbox),K.classList.add(p.classes.backgroundInfo),K.innerHTML='<div class="'+p.classes.textboxInner+'">'+X+"</div>";var se=document.createElement("div");se.classList.add(p.classes.button),se.classList.add(p.classes.elementHalf),se.classList.add(p.classes.backgroundSuccess),se.innerHTML=he,se.onclick=function(){z(I,H),G(),me?me():D&&D()};var B=document.createElement("div");B.classList.add(p.classes.button),B.classList.add(p.classes.elementHalf),B.classList.add(p.classes.backgroundError),B.innerHTML=Ce,B.onclick=function(){z(I,H),G(),ce?ce():O&&O()},P.appendChild(K),P.appendChild(se),P.appendChild(B),P.listener=function(ue){A(ue)?se.click():F(ue)&&B.click()},$(P,H),N(P,H)},te=function(S,D,O){var X=S.text,V=S.submitText,he=V===void 0?"Submit":V,de=S.cancelText,Ce=de===void 0?"Cancel":de,me=S.submitCallback,ce=S.cancelCallback,_=S.position,H=_===void 0?p.positions.input||H.top:_,P=g(S,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);R(),Y();var I=document.createElement("div"),K=v();I.id=K;var se=document.createElement("div");se.classList.add(p.classes.textbox),se.classList.add(p.classes.backgroundInfo),se.innerHTML='<div class="'+p.classes.textboxInner+'">'+X+"</div>";var B=document.createElement("input");B.classList.add(p.classes.inputField),B.setAttribute("autocapitalize",P.autocapitalize||"none"),B.setAttribute("autocomplete",P.autocomplete||"off"),B.setAttribute("autocorrect",P.autocorrect||"off"),B.setAttribute("autofocus",P.autofocus||"true"),B.setAttribute("inputmode",P.inputmode||"verbatim"),B.setAttribute("max",P.max||""),B.setAttribute("maxlength",P.maxlength||""),B.setAttribute("min",P.min||""),B.setAttribute("minlength",P.minlength||""),B.setAttribute("placeholder",P.placeholder||""),B.setAttribute("spellcheck",P.spellcheck||"default"),B.setAttribute("step",P.step||"any"),B.setAttribute("type",P.type||"text"),B.value=P.value||"",P.allowed&&(B.oninput=function(){var Re=void 0;if(Array.isArray(P.allowed)){for(var Be="",yt=P.allowed,dt=0;dt<yt.length;dt++)yt[dt]==="an"?Be+="0-9a-zA-Z":yt[dt]==="a"?Be+="a-zA-Z":yt[dt]==="n"&&(Be+="0-9"),yt[dt]==="s"&&(Be+=" ");Re=new RegExp("[^"+Be+"]","g")}else m(P.allowed)==="object"&&(Re=P.allowed);B.value=B.value.replace(Re,"")});var ue=document.createElement("div");ue.classList.add(p.classes.button),ue.classList.add(p.classes.elementHalf),ue.classList.add(p.classes.backgroundSuccess),ue.innerHTML=he,ue.onclick=function(){z(K,H),G(),me?me(B.value):D&&D(B.value)};var je=document.createElement("div");je.classList.add(p.classes.button),je.classList.add(p.classes.elementHalf),je.classList.add(p.classes.backgroundError),je.innerHTML=Ce,je.onclick=function(){z(K,H),G(),ce?ce(B.value):O&&O(B.value)},I.appendChild(se),I.appendChild(B),I.appendChild(ue),I.appendChild(je),I.listener=function(Re){A(Re)?ue.click():F(Re)&&je.click()},$(I,H),B.focus(),N(I,H)};f.input=te;var ft=f.select=function(S,D){var O=S.text,X=S.cancelText,V=X===void 0?"Cancel":X,he=S.cancelCallback,de=S.choices,Ce=S.position,me=Ce===void 0?p.positions.select||me.top:Ce;R(),Y();var ce=document.createElement("div"),_=v();ce.id=_;var H=document.createElement("div");H.classList.add(p.classes.textbox),H.classList.add(p.classes.backgroundInfo),H.innerHTML='<div class="'+p.classes.textboxInner+'">'+O+"</div>",ce.appendChild(H),de.forEach(function(I,K){var se=I.type,B=se===void 0?1:se,ue=I.text,je=I.handler,Re=document.createElement("div");Re.classList.add(w[B]),Re.classList.add(p.classes.button),Re.classList.add(p.classes.selectChoice);var Be=de[K+1];Be&&!Be.type&&(Be.type=1),Be&&Be.type===B&&Re.classList.add(p.classes.selectChoiceRepeated),Re.innerHTML=ue,Re.onclick=function(){z(_,me),G(),je()},ce.appendChild(Re)});var P=document.createElement("div");P.classList.add(p.classes.backgroundNeutral),P.classList.add(p.classes.button),P.innerHTML=V,P.onclick=function(){z(_,me),G(),he?he():D&&D()},ce.appendChild(P),ce.listener=function(I){F(I)&&P.click()},$(ce,me),N(ce,me)},bt=f.date=function(S,D,O){var X=S.value,V=X===void 0?new Date:X,he=S.submitText,de=he===void 0?"OK":he,Ce=S.cancelText,me=Ce===void 0?"Cancel":Ce,ce=S.submitCallback,_=S.cancelCallback,H=S.position,P=H===void 0?p.positions.date||P.top:H;R(),Y();var I="&#9662",K=document.createElement("div"),se=document.createElement("div"),B=document.createElement("div"),ue=function(be){K.innerHTML=p.dateMonths[be.getMonth()],se.innerHTML=be.getDate(),B.innerHTML=be.getFullYear()},je=function(be){var st=new Date(V.getFullYear(),V.getMonth()+1,0).getDate(),nn=be.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(nn)>st&&(nn=st.toString()),be.target.textContent=nn,Number(nn)<1&&(nn="1"),V.setDate(Number(nn))},Re=function(be){var st=be.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);be.target.textContent=st,V.setFullYear(Number(st))},Be=function(be){ue(V)},yt=function(be){var st=new Date(V.getFullYear(),V.getMonth()+be+1,0).getDate();V.getDate()>st&&V.setDate(st),V.setMonth(V.getMonth()+be),ue(V)},dt=function(be){V.setDate(V.getDate()+be),ue(V)},Cs=function(be){var st=V.getFullYear()+be;st<0?V.setFullYear(0):V.setFullYear(V.getFullYear()+be),ue(V)},Pt=document.createElement("div"),ha=v();Pt.id=ha;var ba=document.createElement("div");ba.classList.add(p.classes.backgroundInfo);var Qe=document.createElement("div");Qe.classList.add(p.classes.dateSelectorInner);var Zt=document.createElement("div");Zt.classList.add(p.classes.button),Zt.classList.add(p.classes.elementThird),Zt.classList.add(p.classes.dateSelectorUp),Zt.innerHTML=I;var en=document.createElement("div");en.classList.add(p.classes.button),en.classList.add(p.classes.elementThird),en.classList.add(p.classes.dateSelectorUp),en.innerHTML=I;var tn=document.createElement("div");tn.classList.add(p.classes.button),tn.classList.add(p.classes.elementThird),tn.classList.add(p.classes.dateSelectorUp),tn.innerHTML=I,K.classList.add(p.classes.element),K.classList.add(p.classes.elementThird),K.innerHTML=p.dateMonths[V.getMonth()],se.classList.add(p.classes.element),se.classList.add(p.classes.elementThird),se.setAttribute("contentEditable",!0),se.addEventListener("input",je),se.addEventListener("blur",Be),se.innerHTML=V.getDate(),B.classList.add(p.classes.element),B.classList.add(p.classes.elementThird),B.setAttribute("contentEditable",!0),B.addEventListener("input",Re),B.addEventListener("blur",Be),B.innerHTML=V.getFullYear();var Sn=document.createElement("div");Sn.classList.add(p.classes.button),Sn.classList.add(p.classes.elementThird),Sn.innerHTML=I;var En=document.createElement("div");En.classList.add(p.classes.button),En.classList.add(p.classes.elementThird),En.innerHTML=I;var An=document.createElement("div");An.classList.add(p.classes.button),An.classList.add(p.classes.elementThird),An.innerHTML=I,Zt.onclick=function(){return yt(1)},en.onclick=function(){return dt(1)},tn.onclick=function(){return Cs(1)},Sn.onclick=function(){return yt(-1)},En.onclick=function(){return dt(-1)},An.onclick=function(){return Cs(-1)};var Mt=document.createElement("div");Mt.classList.add(p.classes.button),Mt.classList.add(p.classes.elementHalf),Mt.classList.add(p.classes.backgroundSuccess),Mt.innerHTML=de,Mt.onclick=function(){z(ha,P),G(),ce?ce(V):D&&D(V)};var Rt=document.createElement("div");Rt.classList.add(p.classes.button),Rt.classList.add(p.classes.elementHalf),Rt.classList.add(p.classes.backgroundError),Rt.innerHTML=me,Rt.onclick=function(){z(ha,P),G(),_?_(V):O&&O(V)},Qe.appendChild(Zt),Qe.appendChild(en),Qe.appendChild(tn),Qe.appendChild(K),Qe.appendChild(se),Qe.appendChild(B),Qe.appendChild(Sn),Qe.appendChild(En),Qe.appendChild(An),ba.appendChild(Qe),Pt.appendChild(ba),Pt.appendChild(Mt),Pt.appendChild(Rt),Pt.listener=function(be){A(be)?Mt.click():F(be)&&Rt.click()},$(Pt,P),N(Pt,P)};f.default={alert:we,force:oe,confirm:ee,input:te,select:ft,date:bt,setOptions:b,hideAlerts:Y}}])})}).call(r,o(0)(n))}])})}),hd=md(pd()),{default:Zi,...bd}=hd,so=Zi!==void 0?Zi:bd;var m0=Symbol("clean");var p0=Symbol();function io(e,t){if(typeof e=="string")return t(e);{let n={};for(let r in e)n[r]=io(e[r],t);return n}}function nl(e){return t=>{if(t.transform){let n=t.transform;return t=t.input,{input:t,transform(r,o,a){let i=e(r,o,...a);return(...s)=>n(r,i,s)}}}else return{input:t,transform(n,r,o){return e(n,r,...o)}}}}var E0=nl((e,t,n)=>io(t,r=>{for(let o in n)r=r.replace(new RegExp(`{${o}}`,"g"),n[o]);return r})),A0=nl((e,t,n)=>{let r=new Intl.PluralRules(e).select(n);return r in t||(r="many"),io(t[r],o=>o.replace(/{count}/g,n))});var lo=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function co(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),function(){n(window.event)})}function il(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function ll(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function Td(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(o=!1);return o}var On={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":lo?173:189,"=":lo?61:187,";":lo?59:186,"'":222,"[":219,"]":221,"\\":220},ut={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},fo={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Me={16:!1,18:!1,17:!1,91:!1},ve={};for(Dn=1;Dn<20;Dn++)On["f".concat(Dn)]=111+Dn;var Dn,fe=[],rl=!1,cl="all",ul=[],Cr=function(e){return On[e.toLowerCase()]||ut[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},wd=function(e){return Object.keys(On).find(function(t){return On[t]===e})},vd=function(e){return Object.keys(ut).find(function(t){return ut[t]===e})};function gl(e){cl=e||"all"}function In(){return cl||"all"}function Sd(){return fe.slice(0)}function Ed(){return fe.map(function(e){return wd(e)||vd(e)||String.fromCharCode(e)})}function Ad(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return(t.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(r=!1),r}function Ld(e){return typeof e=="string"&&(e=Cr(e)),fe.indexOf(e)!==-1}function _d(e,t){var n,r;e||(e=In());for(var o in ve)if(Object.prototype.hasOwnProperty.call(ve,o))for(n=ve[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;In()===e&&gl(t||"all")}function Cd(e){var t=e.keyCode||e.which||e.charCode,n=fe.indexOf(t);if(n>=0&&fe.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&fe.splice(0,fe.length),(t===93||t===224)&&(t=91),t in Me){Me[t]=!1;for(var r in ut)ut[r]===t&&(ct[r]=!1)}}function kd(e){if(typeof e>"u")Object.keys(ve).forEach(function(i){return delete ve[i]});else if(Array.isArray(e))e.forEach(function(i){i.key&&uo(i)});else if(typeof e=="object")e.key&&uo(e);else if(typeof e=="string"){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],a=n[1];typeof o=="function"&&(a=o,o=""),uo({key:e,scope:o,method:a,splitKey:"+"})}}var uo=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,a=o===void 0?"+":o,i=ll(t);i.forEach(function(s){var c=s.split(a),u=c.length,l=c[u-1],f=l==="*"?"*":Cr(l);if(ve[f]){n||(n=In());var d=u>1?il(ut,c):[];ve[f]=ve[f].filter(function(g){var m=r?g.method===r:!0;return!(m&&g.scope===n&&Td(g.mods,d))})}})};function al(e,t,n,r){if(t.element===r){var o;if(t.scope===n||t.scope==="all"){o=t.mods.length>0;for(var a in Me)Object.prototype.hasOwnProperty.call(Me,a)&&(!Me[a]&&t.mods.indexOf(+a)>-1||Me[a]&&t.mods.indexOf(+a)===-1)&&(o=!1);(t.mods.length===0&&!Me[16]&&!Me[18]&&!Me[17]&&!Me[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function ol(e,t){var n=ve["*"],r=e.keyCode||e.which||e.charCode;if(ct.filter.call(this,e)){if((r===93||r===224)&&(r=91),fe.indexOf(r)===-1&&r!==229&&fe.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(m){var h=fo[m];e[m]&&fe.indexOf(h)===-1?fe.push(h):!e[m]&&fe.indexOf(h)>-1?fe.splice(fe.indexOf(h),1):m==="metaKey"&&e[m]&&fe.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(fe=fe.slice(fe.indexOf(h))))}),r in Me){Me[r]=!0;for(var o in ut)ut[o]===r&&(ct[o]=!0);if(!n)return}for(var a in Me)Object.prototype.hasOwnProperty.call(Me,a)&&(Me[a]=e[fo[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(fe.indexOf(17)===-1&&fe.push(17),fe.indexOf(18)===-1&&fe.push(18),Me[17]=!0,Me[18]=!0);var i=In();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&(e.type==="keydown"&&n[s].keydown||e.type==="keyup"&&n[s].keyup)&&al(e,n[s],i,t);if(r in ve){for(var c=0;c<ve[r].length;c++)if((e.type==="keydown"&&ve[r][c].keydown||e.type==="keyup"&&ve[r][c].keyup)&&ve[r][c].key){for(var u=ve[r][c],l=u.splitKey,f=u.key.split(l),d=[],g=0;g<f.length;g++)d.push(Cr(f[g]));d.sort().join("")===fe.sort().join("")&&al(e,u,i,t)}}}}function Pd(e){return ul.indexOf(e)>-1}function ct(e,t,n){fe=[];var r=ll(e),o=[],a="all",i=document,s=0,c=!1,u=!0,l="+",f=!1;for(n===void 0&&typeof t=="function"&&(n=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(i=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(f=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey)),typeof t=="string"&&(a=t);s<r.length;s++)e=r[s].split(l),o=[],e.length>1&&(o=il(ut,e)),e=e[e.length-1],e=e==="*"?"*":Cr(e),e in ve||(ve[e]=[]),ve[e].push({keyup:c,keydown:u,scope:a,mods:o,shortcut:r[s],method:n,key:r[s],splitKey:l,element:i});typeof i<"u"&&!Pd(i)&&window&&(ul.push(i),co(i,"keydown",function(d){ol(d,i)},f),rl||(rl=!0,co(window,"focus",function(){fe=[]},f)),co(i,"keyup",function(d){ol(d,i),Cd(d)},f))}function Md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(ve).forEach(function(n){var r=ve[n].filter(function(o){return o.scope===t&&o.shortcut===e});r.forEach(function(o){o&&o.method&&o.method()})})}var go={getPressedKeyString:Ed,setScope:gl,getScope:In,deleteScope:_d,getPressedKeyCodes:Sd,isPressed:Ld,filter:Ad,trigger:Md,unbind:kd,keyMap:On,modifier:ut,modifierMap:fo};for(_r in go)Object.prototype.hasOwnProperty.call(go,_r)&&(ct[_r]=go[_r]);var _r;typeof document<"u"&&(sl=window.hotkeys,ct.noConflict=function(e){return e&&window.hotkeys===ct&&(window.hotkeys=sl),ct},window.hotkeys=ct);var sl;var U0=so.alert;function fl(e,t,n){let r=[];n||(n={}),t!=="auto"&&!n[t]&&(n[t]={matches:[],excludeMatches:[]}),r=t!=="auto"?n[t].matches:[];let o={},a=Object.keys(n);for(let u of a){let f=n[u].matches;for(let d of f)o[d]||(o[d]=[]),o[d].push(u)}let i=o[e];if(i&&i.length>0)for(let u of i)n[u].matches.indexOf(e)>-1&&(n[u]={...n[u],matches:n[u].matches.filter(f=>f!==e)});let s=new Set(r);if(t==="auto")return{...n};s.add(e);let c=Array.from(s);return{...n,[t]:{...n[t],matches:c}}}var mo="DENO",po="CHROME",kr="FIREFOX";function Rd(e){let t=po;try{let n=navigator?.userAgent||"";/firefox/i.test(n)?t=kr:/deno/i.test(n)&&(t=mo)}catch{}return e===po&&t===po||e===kr&&t===kr||e===mo&&t===mo}function dl(){return typeof Deno<"u"}function Pr(){return Rd(kr)}function ml(){return!!navigator.maxTouchPoints||"ontouchstart"in document.documentElement}var pl={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},hl={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:pl,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:pl,query:()=>{},sendMessage:()=>{}}};var Q;dl()?Q=hl:Q=globalThis.immersiveTranslateBrowserAPI;var bl={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",translationLineBreakSettingDescription:"\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u8FDB\u884C\u6362\u884C\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF(\u5F53\u524D\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF)",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF(\u5F53\u524D\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF)",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8BD1(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00"};var yl={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",changelog:"\u66F4\u65B0\u65E5\u8A8C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00"};var xl={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.translateLocalPdfFile":"Translate local PDF files",changelog:"Change Log",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",toggleDebug:"Print debug logs on the console",document:"Document",resetSuccess:"All settings reset successful",goAdvancedSettings:"Go to Advanced Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",translationEngine:"Engine Options",sourceLanguage:"Original language",popupTarget:"Target",popupService:"Service",target:"Target Language",popupSourceLanguage:"Source",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language"};var Nd=[{code:"zh-CN",messages:bl},{code:"zh-TW",messages:yl},{code:"en",messages:xl}],Dt={};for(let e of Nd)Dt[e.code]=e.messages;var Ot="Immersive Translate",pe="immersive-translate",Mr="pdf/index.html",ge="immersiveTranslate",Sb=ge+"IframeMessage",ho=`${ge}Container`,It=`${ge}SpecifiedContainer`,Rr="buildinConfig",Fn="localConfig";var Tl=`${ge}PageTranslatedStatus`,wl=`${ge}PageUrlChanged`,Eb=`${ge}ReceiveCommand`,Hn=`${ge}PopupReceiveMessage`,vl="immersive-translate.owenyoung.com",Ab=`https://${vl}/`,Lb=`https://${vl}/buildin_config.json`,Ft=`${ge}Mark`,bo="immersiveTranslateEffect",Ae=`${ge}Root`,yo=`data-${pe}-effect`,Ht=`${ge}TranslatedMark`,$t=`${ge}ParagraphId`,Ke=`${ge}AtomicBlockMark`,Ge=`${ge}ExcludeMark`,Nr=`${ge}StayOriginalMark`,sn=`${ge}PreWhitespaceMark`,pt=`${ge}InlineMark`,Bt=`${ge}BlockMark`,$n=`${ge}Left`,Dr=`${ge}Right`,_b=`${ge}Width`,Cb=`${ge}Height`,Sl=`${ge}Top`,El=`${ge}FontSize`;var xo=`${ge}GlobalStyleMark`,Al=["@","#"],Or=" --- ",To=`
`,Je=`${pe}-target-wrapper`,Ir=`${pe}-pdf-target-container`,Ll=`${pe}-target-inner`,kb=`${pe}-source-wrapper`,wo=`${pe}-target-translation-block-wrapper`,_l=`${pe}-target-translation-pdf-block-wrapper`,Cl=`${pe}-target-translation-pre-whitespace`,vo=`${pe}-target-translation-inline-wrapper`;var vt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"],So={af:"Afrikaans",am:"Amharic",ar:"Arabic",auto:"Detect Language",az:"Azerbaijani",be:"Belarusian",bg:"Bulgarian",tn:"Zana",bn:"Bengali",bs:"Bosnian",ca:"Catalan",ceb:"Cebuano",co:"Corsican",cs:"Czech",cy:"Welsh",da:"Danish",de:"German",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Farsi",fi:"Finnish",fil:"Filipino",fj:"Fijian",fr:"French",fy:"Frisian",ga:"Irish",gd:"Scottish Gaelic",gl:"Galician",gu:"Gujarati",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",hi:"Hindi",hmn:"Hmong",hr:"Croatian",ht:"Haitian Creole",hu:"Hungarian",hy:"Armenian",id:"Indonesian",ig:"Igbo",is:"Icelandic",it:"Italian",ja:"\u65E5\u672C\u8A9E",jw:"Javanese",ka:"Georgian",kk:"Kazakh",km:"Khmer",kn:"Kannada",ko:"Korean",ku:"Kurdish",ky:"Kyrgyz",la:"Latin",lb:"Luxembourgish",lo:"Lao",lt:"Lithuanian",lv:"Latvian",mg:"Malagash",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",mww:"Bai Miao",my:"Burmese",ne:"Nepali",nl:"Dutch",no:"Norwegian",ny:"Nyanza (Chichewa)",otq:"Quer\xE9taro Otomi",pa:"Punjabi",pl:"Polish",ps:"Pashto",pt:"Portuguese (Portugal, Brazil)",ro:"Romanian",ru:"Russian",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian","sr-Cyrl":"Serbian (Cyrillic)","sr-Latn":"Serbian (Latin)",st:"Sesotho",su:"Sundanese",sv:"Swedish",sw:"Swahili",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",tlh:"Klingon","tlh-Qaak":"Klingon (piqaD)",to:"Tongan",tr:"Turkish",ty:"Tahiti",ug:"Uyghur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",vi:"Vietnamese",wyw:"Classical Chinese",xh:"Bantu",yi:"Yiddish",yo:"Yoruba",yua:"Yucatan Mayan",yue:"Cantonese (Traditional)","zh-CN":"\u7B80\u4F53\u4E2D\u6587","zh-TW":"\u7E41\u9AD4\u4E2D\u6587",zu:"Zulu"};var kl=["https://immersive-translate.owenyoung.com/options/","http://localhost:8000/dist/userscript/options/","http://192.168.50.9:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com"];var Eo="zh-CN";function Pl(e){let t=Q.runtime.getURL(Mr),n=new URL(t);return(e.startsWith("http")||!Pr())&&n.searchParams.set("file",e),n.href}var Ao=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let n=performance.now(),r=Math.round(n-this.#e),o=ze.green;r>1e4?o=ze.red:r>1e3&&(o=ze.yellow),console.debug(ze.dim(Ot+" TIMING:"),t,"in",o(r+"ms")),this.#e=n}},Bn=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(ze.dim(Ot+" DEBUG:"),...t)}info(...t){this.#e<=1&&console.log(ze.green(Ot+" INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(ze.yellow(Ot+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(ze.red(Ot+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(ze.red(Ot+" FATAL:"),...t)}timing(){return this.level===0?new Ao:{reset:()=>{},stop:()=>{}}}},J=new Bn;var Ml=["*://*/*","*","*://*"],Nl="immersive-translate-wildcard-placeholder.com";function Lo(e,t){let n=[];if(!t||(t&&!Array.isArray(t)?n=[t]:n=t,n.length===0))return null;if(n.some(i=>Ml.includes(i)))return e;let r=new URL(e);r.hash="",r.search="";let o=r.href,a=r.hostname;if(n&&n.length>0){let i=n.find(s=>{let c=s;if(s===a)return!0;if(Ml.includes(s))return!0;if(!s.includes("*")&&s.includes("://")){try{let u=new URL(s);return u.pathname==="/"&&!s.endsWith("/")?u.hostname===a:Od(o,s)}catch{}return!1}else{let u,l=s;s.includes("://")?u=s.split("://")[0]:(u="*",s="https://"+s);let f=s.replace(/\*/g,Nl),d;try{d=new URL(f)}catch{return J.debug("invalid match pattern",f,"raw match value:",l),!1}let g=d.hostname,m=d.pathname;m==="/"&&(l.replace("://","").includes("/")||(m="/*"));let h=Dd(u+":",Rl(g),Rl(m));if(h){let y=new URL(o);return y.port="",h.test(y.href)}else return!1}});if(i)return i}return null}function Rl(e){return e.replace(Nl,"*")}function Dd(e,t,n){let r="^";return e==="*:"?r+="(http:|https:|file:)":r+=e,r+="//",t&&(e==="file:"||(t==="*"?r+="[^/]+?":(t.match(/^\*\./)&&(r+="[^/]*?",t=t.substring(2)),r+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),n?n==="*"||n==="/*"?r+="(/.*)?":n.includes("*")?(r+=n.replace(/\*/g,".*?"),r+="/?"):r+=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):r+="/?",r+="$",new RegExp(r)}function Un(e,t){return Lo(e,t)!==null}function Od(e,t){let n=new URL(e),r=new URL(t);return n.hostname===r.hostname&&n.pathname===r.pathname&&n.protocol===r.protocol&&n.port===r.port}function _o(e){return Array.isArray(e)?e:e?[e]:[]}function Co(e,t){return t?(Array.isArray(t)||(t=[t]),Array.from(new Set([...t,e]))):[e]}function St(e,t){return t?(Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),t.filter(n=>!e.includes(n))):[]}function Fr(e,t){let n=[],r=Object.keys(e);for(let i of r){let s=e[i];Array.isArray(s)&&n.push(i)}let o={...e};return Object.keys(t).forEach(i=>{let s=t[i];if(s!==void 0)if(!n.includes(i))o[i]=s;else if(i.startsWith("additional")){let c=_o(s);o[i]=Array.from(new Set([...o[i],...c]))}else o[i]=_o(s)}),o}var ln="input is invalid type",ko=typeof window=="object",Et=ko?window:{};Et.JS_SHA256_NO_WINDOW&&(ko=!1);var Id=!ko&&typeof self=="object",Fd=!Et.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Fd?Et=global:Id&&(Et=self);var ey=!Et.JS_SHA256_NO_COMMON_JS&&typeof module=="object"&&module.exports,ty=typeof define=="function"&&define.amd,jn=!Et.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",M="0123456789abcdef".split(""),Hd=[-2147483648,8388608,32768,128],et=[24,16,8,0],Hr=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],$r=["hex","array","digest","arrayBuffer"],Le=[];(Et.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});jn&&(Et.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return typeof e=="object"&&e.buffer&&e.buffer.constructor===ArrayBuffer});var Dl=function(e,t){return function(n){return new _e(t,!0).update(n)[e]()}},Il=function(e){var t=Dl("hex",e);t.create=function(){return new _e(e)},t.update=function(o){return t.create().update(o)};for(var n=0;n<$r.length;++n){var r=$r[n];t[r]=Dl(r,e)}return t},Ol=function(e,t){return function(n,r){return new Br(n,t,!0).update(r)[e]()}},Fl=function(e){var t=Ol("hex",e);t.create=function(o){return new Br(o,e)},t.update=function(o,a){return t.create(o).update(a)};for(var n=0;n<$r.length;++n){var r=$r[n];t[r]=Ol(r,e)}return t};function _e(e,t){t?(Le[0]=Le[16]=Le[1]=Le[2]=Le[3]=Le[4]=Le[5]=Le[6]=Le[7]=Le[8]=Le[9]=Le[10]=Le[11]=Le[12]=Le[13]=Le[14]=Le[15]=0,this.blocks=Le):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}_e.prototype.update=function(e){if(!this.finalized){var t,n=typeof e;if(n!=="string"){if(n==="object"){if(e===null)throw new Error(ln);if(jn&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!jn||!ArrayBuffer.isView(e)))throw new Error(ln)}else throw new Error(ln);t=!0}for(var r,o=0,a,i=e.length,s=this.blocks;o<i;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),t)for(a=this.start;o<i&&a<64;++o)s[a>>2]|=e[o]<<et[a++&3];else for(a=this.start;o<i&&a<64;++o)r=e.charCodeAt(o),r<128?s[a>>2]|=r<<et[a++&3]:r<2048?(s[a>>2]|=(192|r>>6)<<et[a++&3],s[a>>2]|=(128|r&63)<<et[a++&3]):r<55296||r>=57344?(s[a>>2]|=(224|r>>12)<<et[a++&3],s[a>>2]|=(128|r>>6&63)<<et[a++&3],s[a>>2]|=(128|r&63)<<et[a++&3]):(r=65536+((r&1023)<<10|e.charCodeAt(++o)&1023),s[a>>2]|=(240|r>>18)<<et[a++&3],s[a>>2]|=(128|r>>12&63)<<et[a++&3],s[a>>2]|=(128|r>>6&63)<<et[a++&3],s[a>>2]|=(128|r&63)<<et[a++&3]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=s[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}};_e.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=Hd[t&3],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}};_e.prototype.hash=function(){var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,c=this.blocks,u,l,f,d,g,m,h,y,p,b,T;for(u=16;u<64;++u)g=c[u-15],l=(g>>>7|g<<25)^(g>>>18|g<<14)^g>>>3,g=c[u-2],f=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,c[u]=c[u-16]+l+c[u-7]+f<<0;for(T=t&n,u=0;u<64;u+=4)this.first?(this.is224?(y=300032,g=c[0]-1413257819,s=g-150054599<<0,r=g+24177077<<0):(y=704751109,g=c[0]-210244248,s=g-1521486534<<0,r=g+143694565<<0),this.first=!1):(l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),f=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),y=e&t,d=y^e&n^T,h=o&a^~o&i,g=s+f+h+Hr[u]+c[u],m=l+d,s=r+g<<0,r=g+m<<0),l=(r>>>2|r<<30)^(r>>>13|r<<19)^(r>>>22|r<<10),f=(s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7),p=r&e,d=p^r&t^y,h=s&o^~s&a,g=i+f+h+Hr[u+1]+c[u+1],m=l+d,i=n+g<<0,n=g+m<<0,l=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),f=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),b=n&r,d=b^n&e^p,h=i&s^~i&o,g=a+f+h+Hr[u+2]+c[u+2],m=l+d,a=t+g<<0,t=g+m<<0,l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),f=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),T=t&n,d=T^t&r^b,h=a&i^~a&s,g=o+f+h+Hr[u+3]+c[u+3],m=l+d,o=e+g<<0,e=g+m<<0;this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0,this.h5=this.h5+a<<0,this.h6=this.h6+i<<0,this.h7=this.h7+s<<0};_e.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,c=M[e>>28&15]+M[e>>24&15]+M[e>>20&15]+M[e>>16&15]+M[e>>12&15]+M[e>>8&15]+M[e>>4&15]+M[e&15]+M[t>>28&15]+M[t>>24&15]+M[t>>20&15]+M[t>>16&15]+M[t>>12&15]+M[t>>8&15]+M[t>>4&15]+M[t&15]+M[n>>28&15]+M[n>>24&15]+M[n>>20&15]+M[n>>16&15]+M[n>>12&15]+M[n>>8&15]+M[n>>4&15]+M[n&15]+M[r>>28&15]+M[r>>24&15]+M[r>>20&15]+M[r>>16&15]+M[r>>12&15]+M[r>>8&15]+M[r>>4&15]+M[r&15]+M[o>>28&15]+M[o>>24&15]+M[o>>20&15]+M[o>>16&15]+M[o>>12&15]+M[o>>8&15]+M[o>>4&15]+M[o&15]+M[a>>28&15]+M[a>>24&15]+M[a>>20&15]+M[a>>16&15]+M[a>>12&15]+M[a>>8&15]+M[a>>4&15]+M[a&15]+M[i>>28&15]+M[i>>24&15]+M[i>>20&15]+M[i>>16&15]+M[i>>12&15]+M[i>>8&15]+M[i>>4&15]+M[i&15];return this.is224||(c+=M[s>>28&15]+M[s>>24&15]+M[s>>20&15]+M[s>>16&15]+M[s>>12&15]+M[s>>8&15]+M[s>>4&15]+M[s&15]),c};_e.prototype.toString=_e.prototype.hex;_e.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,n=this.h2,r=this.h3,o=this.h4,a=this.h5,i=this.h6,s=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,e&255,t>>24&255,t>>16&255,t>>8&255,t&255,n>>24&255,n>>16&255,n>>8&255,n&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255,a>>24&255,a>>16&255,a>>8&255,a&255,i>>24&255,i>>16&255,i>>8&255,i&255];return this.is224||c.push(s>>24&255,s>>16&255,s>>8&255,s&255),c};_e.prototype.array=_e.prototype.digest;_e.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e};function Br(e,t,n){var r,o=typeof e;if(o==="string"){var a=[],i=e.length,s=0,c;for(r=0;r<i;++r)c=e.charCodeAt(r),c<128?a[s++]=c:c<2048?(a[s++]=192|c>>6,a[s++]=128|c&63):c<55296||c>=57344?(a[s++]=224|c>>12,a[s++]=128|c>>6&63,a[s++]=128|c&63):(c=65536+((c&1023)<<10|e.charCodeAt(++r)&1023),a[s++]=240|c>>18,a[s++]=128|c>>12&63,a[s++]=128|c>>6&63,a[s++]=128|c&63);e=a}else if(o==="object"){if(e===null)throw new Error(ln);if(jn&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!Array.isArray(e)&&(!jn||!ArrayBuffer.isView(e)))throw new Error(ln)}else throw new Error(ln);e.length>64&&(e=new _e(t,!0).update(e).array());var u=[],l=[];for(r=0;r<64;++r){var f=e[r]||0;u[r]=92^f,l[r]=54^f}_e.call(this,t,n),this.update(l),this.oKeyPad=u,this.inner=!0,this.sharedMemory=n}Br.prototype=new _e;Br.prototype.finalize=function(){if(_e.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();_e.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),_e.prototype.finalize.call(this)}};var cn=Il();cn.sha256=cn;cn.sha224=Il(!0);cn.sha256.hmac=Fl();cn.sha224.hmac=Fl(!0);var Hl=cn;var $l=Hl.sha256;function tt(e){return Promise.resolve($l(e))}function Ur(e){return Array.from(new Uint8Array(e)).map(r=>r.toString(16).padStart(2,"0")).join("")}function At(e,t){let n=$l.hmac.create(t);return n.update(e),Promise.resolve(n.array())}async function Bl(e,t){let n=await At(e,t);return Ur(n)}async function jr(e,t){let n=$d(t),r=await At(e,n);return Ur(r)}function $d(e){let t=[];return e.replace(/../g,function(n){return t.push(parseInt(n,16)),""}),new Uint8Array(t).buffer}function Wn(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():x}var ne=Wn();function $e(){return ne.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Ul(){return typeof Deno<"u"}var Bd=Wn(),zn=Bd.PROD==="1";function jl(e,t,n){let r=e.querySelectorAll("footer"),o=e.querySelectorAll("aside"),a=Array.from(r).concat(Array.from(o)),i=e.querySelectorAll("header"),s=e.querySelectorAll("main"),c=[];for(let l of i)s.length>0&&s[0].contains(l)||c.push(l);for(let l=0;l<t.length;l++){let f=t[l].element;for(let d=l+1;d<t.length;d++){let g=t[d].element;if(f.contains(g))t.splice(d,1),d--;else if(g.contains(f)){t.splice(l,1),l--;break}else f===g&&(t.splice(d,1),d--)}}return t.filter(l=>{let f=l.element;if(l.reserve)return!0;let d=!1,g=!1;for(let m of a)if(f===m||m.contains(f)){d=!0;break}if(d)return!1;for(let m of c){if(f.nodeName==="H1")continue;let h=m.querySelector("h1");if(!(h&&Vl(h.textContent||"",n.paragraphMinTextCount,n.paragraphMinWordCount))&&(f===m||m.contains(f))){g=!0;break}}return!g}).map(l=>l.element)}function un(e){for(let t=e.length-1;t>=0;t--){let n=e[t].element||e[t];if(typeof n!="string")return n}return null}function Wr(e){let t=[];for(let n=e.length-1;n>=0;n--){let r=e[n].element||e[n];typeof r!="string"&&t.push(r)}return t}function Po(e){for(let t=0;t<e.length;t++){let n=e[t];if(typeof n!="string")return n}return null}function qn(e,t){return e&&e.nodeType===Node.TEXT_NODE&&e.textContent&&e.textContent?.length>0?t?e.textContent:" ":null}function Ye(e,t){let n=[];for(let r of t){let o=e.querySelectorAll(r);for(let a of o)n.push(a)}return n}function Ud(e,t){let n=function(a){return a.nodeType===Node.ELEMENT_NODE||a.nodeType===Node.TEXT_NODE?a.nodeType===Node.ELEMENT_NODE&&Ue(a,t,!0)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,n),o=!0;for(;r.nextNode();){let a=r.currentNode;if(a.nodeType===Node.ELEMENT_NODE){if(re(a,pt)){if(o===!0)return!0;continue}if(!t.inlineTags.includes(a.nodeName))return!1}}return!0}function nt(e,t){let n=t.inlineTags;return e.nodeType===Node.ELEMENT_NODE?n.includes(e.nodeName)?re(e,Bt)||e.nodeName==="BR"?!1:re(e,pt)?!0:Ud(e,t):re(e,pt):!1}function Wl(e,t){for(let n of t)if(n===e)return!0;return!1}function zl(e,t){return!!t.metaTags.includes(e.nodeName)}function Ue(e,t,n){if(!(e.nodeType===Node.ELEMENT_NODE||e.nodeType===Node.TEXT_NODE))return!0;let{stayOriginalTags:r,excludeTags:o}=t,a=[];return n&&o&&o.length>0?a=o||[]:a=o.filter(i=>!r.includes(i)),e.nodeType===Node.ELEMENT_NODE&&e.isContentEditable||e.nodeType===Node.ELEMENT_NODE&&re(e,Ge)?!0:e.nodeType===Node.ELEMENT_NODE&&re(e,It)?!1:!!a.includes(e.nodeName)}function ql(e,t,n,r){let o=Kn(r),a=new RegExp(`^${o[0]}(\\d+)${o[1]}$`),i=e.text,s=i.trim();return s===""||s.length===1&&s.charCodeAt(0)===8203||/^\d+(,\d+)*(\.\d+)?$/.test(i)||s.includes("</style>")||s.includes("< styles>")||No(s)||Mo(s)||Ro(s)||a.test(s)?!1:Vl(i,t,n)}function Vl(e,t,n){let r=e.trim();return r.length>=t||r.split(" ").length>=n}function Mo(e){if(e&&e.includes("://"))try{return new URL(e),!0}catch{return!1}else return!1}function Ro(e){return!!(e&&e.startsWith("#")&&e.indexOf(" ")===-1)}function No(e){return!!(e&&e.startsWith("@")&&e.indexOf(" ")===-1)}function Kl(e){return!!(e&&e.startsWith("$")&&e.indexOf(" ")===-1)}function re(e,t){return jd(e,t,"1")}function jd(e,t,n){return zn?e[Ae]?!!(e[Ae]&&e[Ae][t]===n):!1:e.dataset[t]===n}function Gl(e,t){return zn?e[Ae]?!!(e[Ae]&&e[Ae][t]):!1:e.dataset[t]!==void 0}function Vn(e){return(e.innerText||e.textContent||"").trim()}function zr(e){return e?typeof e=="string"?document.querySelector(e)!==null:e.some(t=>document.querySelector(t)):!1}function le(e,t,n){e.isContentEditable||(e.dataset[bo]||(e.dataset[bo]="1"),zn?(e[Ae]||(e[Ae]={}),e[Ae][t]||(e[Ae][t]=n)):e.dataset[t]!==n&&(e.dataset[t]=n))}function Jl(e,t){if(zn){if(!e[Ae]||!e[Ae][t])return;delete e[Ae][t]}else delete e.dataset[t]}function Lt(e,t){return zn?!e[Ae]||!e[Ae][t]?void 0:e[Ae][t]:e.dataset[t]}function gn(e,t){let n=!1;return(t.stayOriginalTags.includes(e.nodeName)||re(e,Nr))&&(n=!0),n}function Yl(e,t){return!t.allBlockTags.concat(t.inlineTags).concat(t.excludeTags).includes(e.nodeName)}function Kn(e){let{config:t}=e,n=Al;return t.translationServices[e.translationService]&&t.translationServices[e.translationService].placeholderDelimiters&&(n=t.translationServices[e.translationService].placeholderDelimiters),n}function qr(e,t){if(!t)return!1;Array.isArray(t)||(t=[t]);for(let n of t)if(e.querySelector(n))return!0;return!1}function Xl(e){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,r=>r.textContent&&r.textContent.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT),n=null;for(;t.nextNode();)n=t.currentNode;return n?n.parentElement:null}function Ut(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let n=vt.map(o=>o.toLowerCase()),r=n.indexOf(t);if(r===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let o=n.indexOf(t);return o===-1?"auto":vt[o]}else return"auto";else return vt[r]}var Do={minVersion:"0.0.20",immediateTranslationTextCount:4e3,interval:36e5,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","META"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","BDO","MARK","BIG","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:[],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],excludeSelectors:["[role=button]"],translationClasses:"immersive-translate-text",detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br>",wrapperSuffix:"<br><br>"},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["div[class='truncate text-xl font-bold']","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]}]};function Wd(){if(ne.PROD==="1")return{};let e={};if(ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:ne.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:ne.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:ne.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:ne.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:ne.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:ne.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(ne.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:ne.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return ne.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=ne.IMMERSIVE_TRANSLATE_SERVICE),ne.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),ne.MOCK==="1"&&(e.translationService="mock"),e}async function Vr(){let e=await Q.storage.local.get(Fn);if(e[Fn]){let t=e[Fn],n=t.tempTranslationUrlMatches||[],r=n.filter(i=>i.expiredAt>Date.now()),o=!1;r.length!==n.length&&(n=r,o=!0);let a={...t,tempTranslationUrlMatches:[...n]};return o&&await Kr(a),a}else return{}}async function Kr(e){await Q.storage.local.set({[Fn]:e})}async function jt(){let e=await Q.storage.local.get(Rr),t={...Do,buildinConfigUpdatedAt:ne.BUILD_TIME};if(e[Rr]){let m=e[Rr],h=new Date(m.buildinConfigUpdatedAt),y=new Date(t.buildinConfigUpdatedAt);h>y&&(t=m)}let n={};if(!$e()&&Q.commands&&Q.commands.getAll){let m=await Q.commands.getAll();for(let h of m)h.name&&h.shortcut&&(n[h.name]=h.shortcut)}let r=qd(),o=Wd(),i=(await Q.storage.sync.get("userConfig")||{}).userConfig||{},s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},c=await Vr(),u=new Date;if(c&&c.tempTranslationUrlMatches&&c.tempTranslationUrlMatches.length>0){let m=c.tempTranslationUrlMatches.filter(h=>new Date(h.expiredAt)>u);if(m.length>0){let h=i.translationUrlPattern?i.translationUrlPattern?.matches||[]:[],y=Array.isArray(h)?h:[h],p=Array.from(new Set(y.concat(m.map(b=>b.match))));i.translationUrlPattern={...i.translationUrlPattern,matches:p}}}let l=Object.assign({},s,o,i);if(!l.interfaceLanguage){let m=await zd();l.interfaceLanguage=m}let f=Object.assign(r,t),d=Object.keys(f),g=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let m of d){let h=m;if(h==="generalRule")typeof l[h]=="object"&&(f[h]=Fr(r[h],l[h]));else if(h==="translationServices"){let y=l[h]||{},p=t[h]||{},b=Object.keys(p),T=Object.keys(y),L=[...new Set([...b,...T])],R={};for(let v of L)R[v]={...p[v],...y[v]};f[h]=R}else if(typeof l[h]!="string"&&typeof l[h]!="boolean"&&typeof l[h]!="number"&&g.includes(h))l[h]&&(f[h]=Object.assign(f[h],l[h])),h==="shortcuts"&&(f[h]={...f[h],...n});else if(h==="rules"){if(Array.isArray(l[h])&&(f[h]=[...l[h],...f[h]]),ne.PROD==="0"&&ne.DEV_RULES){let y=JSON.parse(ne.DEV_RULES);f[h]=[...y,...f[h]]}}else l[h]!==void 0&&(f[h]=l[h])}return f.donateUrl=t.donateUrl,f.minVersion=t.minVersion,f.feedbackUrl=t.feedbackUrl,f}var zd=async()=>{let n=(await Q.i18n.getAcceptLanguages()).map(r=>Ut(r)).find(r=>Dt[r]);return n||"en"},qd=()=>{let e={...Do,buildinConfigUpdatedAt:ne.BUILD_TIME};return{...e,targetLanguage:Eo,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};var Zl="auto",Gr="auto",Ql="auto";function ec(e){Zl=e}function fn(e){Gr=e}function Gn(){return Gr!=="auto"?Gr:Ql!=="auto"?Ql:Zl}function Jr(){return Gr}async function Jn(e){let{url:t,config:n,state:r}=e,o=new URL(t),a="auto",{translationParagraphLanguagePattern:i,translationService:s,translationServices:c,translationTheme:u,translationThemePatterns:l,translationUrlPattern:f,targetLanguage:d,sourceLanguageUrlPattern:g,immediateTranslationPattern:m}=n,h=dn(t,i),y=dn(t,m),p=s,b=Object.keys(c);for(let D of b){let O=c[D];if(dn(t,O)){p=D;break}}let T=u,L=Object.keys(l);for(let D of L){let O=l[D];if(dn(t,O)){T=D;break}}let R=dn(t,f),v=Vd(t,f);v||(v=Un(t,kl));let w=Object.keys(g),E={};for(let D of w){let O=g[D];if(O&&O.matches)for(let X of O.matches)E[X]=D}let A=Object.keys(E),F=Lo(t,A);F&&(a=E[F]??"auto",E[F]&&E[F]!=="auto"&&fn(E[F]));let $=d||"zh-CN",z=o.hostname,N=await tt(z),G=o.pathname+o.search+o.hash,Y=await tt(G),we=`https://${N}.com/${Y}`,oe=await Vr(),ee=n.translationStartMode;ee==="dynamic"&&y&&(ee="immediate");let te={targetLanguage:$,config:n,translationService:p,translationTheme:T,isTranslateUrl:R,sourceLanguage:a,isTranslateExcludeUrl:v,rule:n.generalRule,url:t,encryptedUrl:we,state:r||{translationArea:n.translationArea,translationStartMode:ee,isAutoTranslate:!1,isNeedClean:!1,isDetectParagraphLanguage:h},localConfig:oe};te.state.translationArea==="body"&&(te.config.generalRule.excludeTags=te.config.generalRule.excludeTags.filter(D=>D!=="BUTTON"&&D!=="LABEL"),te.config.generalRule.additionalExcludeSelectors=te.config.generalRule.additionalExcludeSelectors.filter(D=>D!==".btn")),te.translationService==="d"&&(n.immediateTranslationTextCount=0);let ft=n.rules,bt;globalThis.PDFViewerApplication?bt=ft.find(D=>D.isPdf):bt=ft.find(D=>dn(t,D));let S=n.generalRule;return bt&&(te.rule=Fr(S,bt)),te.rule.isPdf&&(te.state.translationArea="main"),te.state.translationArea==="body"&&(te.rule.paragraphMinTextCount=1,te.rule.paragraphMinWordCount=1),te}function dn(e,t){if(!t)return!1;let{matches:n,excludeMatches:r,selectorMatches:o,excludeSelectorMatches:a}=t;return r&&r.length>0&&Un(e,r)?!1:n&&n.length>0&&Un(e,n)?!0:a&&a.length>0&&zr(a)?!1:!!(o&&o.length>0&&zr(o))}function Vd(e,t){if(!t)return!1;let{excludeMatches:n,excludeSelectorMatches:r}=t;return!!(n&&n.length>0&&Un(e,n)||r&&r.length>0&&zr(r))}function Yr(e){let t;try{t=new URL(e)}catch{return!1}let n=t.pathname;return n.endsWith(".html")||n.endsWith(".htm")?!0:!(t.protocol!=="http:"&&t.protocol!=="https:"&&t.protocol!=="file:"&&t.protocol!=="data:")}var Oo={get:(e,t,n)=>{let r=t===void 0?e:{[e]:t};return Q.storage[n].get(r)},set:(e,t,n)=>Q.storage[n].set({[e]:t})};function Xr(e,t,n){let[r]=xe(()=>typeof t=="function"?t():t),[o]=xe(n),[a,i]=xe(r),[s,c]=xe(!0),[u,l]=xe("");Ze(()=>{Oo.get(e,r,o).then(d=>{d[e]&&i(d[e]),c(!0),l("")}).catch(d=>{c(!1),l(d)})},[e,r,o]);let f=Pn(d=>{let g=typeof d=="function"?d(a):d;J.debug("new settings",g),Oo.set(e,g,o).then(()=>{i(g),c(!0),l("")}).catch(m=>{i(g),c(!1),l(m)})},[o,e,a]);return[a,f,s,u]}function Io(e,t,n){let r=[];return function(){let[a,i,s,c]=Xr(e,t,n),u=Pn(l=>{for(let f of r)f(l)},[]);return Ze(()=>(r.push(i),()=>{r.splice(r.indexOf(i),1)}),[i]),[a,u,s,c]}}function tc(e,t){return Io(e,t,"sync")}var Kd="userConfig",Gd={},nc=tc(Kd,Gd);var Ne=class extends Error{constructor(n,r,o){super(r);this.name=n,o&&(this.details=o)}};var Yn=new Map,Wt=class{constructor(t,n=!1){this.logger=new Bn,n&&this.logger.setLevel("debug"),this.fromType=t,Yn.has(t)||(Yn.set(t,new Map),Q.runtime.onMessage.addListener((r,o,a)=>{let i=r.from,s=r.to,c,u,l;o.tab&&o.tab.id&&(c=o.tab.id,i=`${i}:${c}`,u=o.tab.url,l=o.tab.active),this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`,r.payload.data?r.payload.data:" ");let f=Ho(s),{type:d,name:g}=f;if(d!==t)return!1;let m=Ho(i),y=Yn.get(d).get(g);if(!y)return this.logger.debug(`no message handler for ${d}:${s}, but it's ok`),!1;let{messageHandler:p,sync:b}=y,T={type:t,name:m.name,id:c,url:u,active:l};if(b){try{let L=p(r.payload,T);a({ok:!0,data:L})}catch(L){a({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}return!1}else return p(r.payload,T).then(L=>{a({ok:!0,data:L})}).catch(L=>{a({ok:!1,errorName:L.name,errorMessage:L.message,errorDetails:L.details})}),!0}))}getConnection(t,n,r){let o=!1;r&&r.sync&&(o=!0);let a=this.fromType,i=Yn.get(a);if(i.has(t))return i.get(t).connectionInstance;{let s=new Fo(`${a}:${t}`,this.logger);return Yn.get(a).set(t,{messageHandler:n,sync:o,connectionInstance:s}),s}}},Fo=class{constructor(t,n){this.from=t,this.logger=n}async sendMessage(t,n){let r=Ho(t),{type:o,id:a}=r;if(o!=="content_script"){let i={to:t,from:this.from,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");try{let s=await Q.runtime.sendMessage(i);return rc(i,s,this.logger)}catch(s){if(o==="popup"){let c=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;return this.logger.debug(c,n,t,s),Promise.resolve({message:c})}else throw s}}else{let i={from:this.from,to:t,payload:n};this.logger.debug(`${i.from} send message [${i.payload.method}] to ${i.to}`,i.payload.data?i.payload.data:" ");let s=await Q.tabs.sendMessage(a,i);return rc(i,s,this.logger)}}};function rc(e,t,n){if(t.ok)return n.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new Ne(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function Ho(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let n={type:t[0],name:t[1]};if(t[0]==="content_script"){let r=parseInt(t[2]);if(!isNaN(r))n.id=r;else throw new Error("tab id not a valid number")}return n}var Jd=function(e,t){let{method:n,data:r}=e;J.debug(`popup received message: ${n}`,r||" ");let o;t.active&&(o=t.id,globalThis.document.dispatchEvent(new CustomEvent(Hn,{detail:{tabId:o,payload:e}})))},Qr;function ac(){Xn()}function Xn(){return Qr||(Qr=new Wt("popup",!1).getConnection("main_sync",Jd),Qr)}function oc(e,t=2e3){return n=>{let r,o=0;return a=>{++o==e&&(n(a),o=0),clearTimeout(r),r=setTimeout(()=>o=0,t)}}}function sc(e){let t=e.split(".");return t.length>2?(t[0]="*",t.join(".")):null}function ic(e){let t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function lc(){return Q.runtime.getManifest().version}var Yd=0;function U(e,t,n,r,o){var a,i,s={};for(i in t)i=="ref"?a=t[i]:s[i]=t[i];var c={type:e,props:s,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Yd,__source:o,__self:r};if(typeof e=="function"&&(a=e.defaultProps))for(i in a)s[i]===void 0&&(s[i]=a[i]);return q.vnode&&q.vnode(c),c}function _t(e){let{items:t,maxWidth:n}=e;return n=n||128,U("select",{autoComplete:"off",class:"min-select",style:{maxWidth:`${n}px`},value:t.find(r=>r.selected)?.value,onChange:r=>{let o=r.target.value,a=t.find(i=>i.value===o);a&&a.onSelected(a)},children:t.map(r=>U("option",{value:r.value,selected:r.selected,children:r.label}))})}var Zr="DROP_DOWN_DEFAULT_VALUE";function $o(e){let{showArrow:t,onSelected:n,className:r,menus:o,maxWidth:a}=e;r=r||"",t=t??!0,a=a||60;let i=_a(null);return U("select",{ref:i,autoComplete:"off",class:`min-select ${t?"":"min-select-no-arrow"} ${r||""}`,value:Zr,style:{maxWidth:`${a}px`},onChange:s=>{s.preventDefault();let c=s.target.value;if(i.current&&c!==Zr){i.current.value=Zr,i.current?.dispatchEvent(new Event("change"));let u=o.find(l=>l.value===c);u&&n(u)}},children:[{value:Zr,label:e.label}].concat(o).map(s=>U("option",{value:s.value,children:s.label}))})}function cc(e,t){return[e,!e||e.endsWith("/")?"":"/",t,".json"].join("")}function Bo(e,t){let n=e;return t&&Object.keys(t).forEach(r=>{let o=t[r],a=new RegExp("{"+r+"}","gm");n=n.replace(a,o.toString())}),n}function Qn(e,t,n){let r=e[t];if(!r)return n;let o=n.split("."),a="";do{a+=o.shift();let i=r[a];i!==void 0&&(typeof i=="object"||!o.length)?(r=i,a=""):o.length?a+=".":r=n}while(o.length);return r}function uc(e,t,n,r,o){if(!e.hasOwnProperty(n))return t;let a=Qn(e,n,t);return a===t&&n!==r&&(a=Qn(e,r,t)),Bo(a,o)}var mn={},Xd={root:"",lang:"en",fallbackLang:"en"};function Uo(e,t){let n=Object.assign({},Xd,e);mn=t||mn;let[r,o]=xe(n.lang),[a,i]=xe(mn),[s,c]=xe(!1),u=f=>{if(a.hasOwnProperty(f))return;c(!1);let d=cc(n.root||"",f);n.getUrl&&(d=n.getUrl(n.root||"",f),fetch(d).then(g=>g.json()).then(g=>{mn[f]=g,i({...mn}),c(!0)}).catch(g=>{i({...mn}),c(!0)}))};return Ze(()=>{u(n.fallbackLang||"en"),u(r)},[r]),{lang:r,setLang:o,t:(f,d)=>{if(!a.hasOwnProperty(r))return f;let g=Qn(a,r,f);return g===f&&r!==n.fallbackLang&&(g=Qn(a,n.fallbackLang,f)),Bo(g,d)},isReady:s}}var Wo=Ea(null),jo={root:"assets",lang:"en",fallbackLang:"en"},gc=e=>{let{t,setLang:n,lang:r,isReady:o}=Uo({root:e.root||jo.root,lang:e.lang||jo.lang,fallbackLang:e.fallbackLang||jo.fallbackLang,getUrl:e.getUrl},e.translations);return U(Wo.Provider,{value:{t,setLang:n,lang:r,isReady:o},children:e.children})};function ea(){return Ca(Wo)}function zo(e){let{field:t,onChange:n,value:r}=e;r=r||t.default||"";let{t:o}=ea();return t.type==="select"?U("div",{class:"flex justify-between mb-2",children:[U("label",{class:"inline-block",children:[t.label?o(t.label):t.name,"\uFF1A"]}),U(_t,{items:t.options.map(a=>({label:`${a.label?o(a.label):a.value}`,value:r,selected:r===a.value,onSelected:()=>{n(a.value)}}))})]}):null}function fc(e,t,n){let r=Qd(e,t),o=[],a={from:e[0].from,fromByClient:e[0].fromByClient,to:e[0].to,tempSentences:[],url:e[0].url};for(let i of r)(a.tempSentences.reduce((c,u)=>c+u.text.length,0)+i.text.length>t||a.tempSentences.length>=n)&&(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}),(a.from!==i.from||a.to!==i.to)&&(a.tempSentences.length>0?(o.push(a),a={fromByClient:a.fromByClient,from:i.from,to:i.to,tempSentences:[],url:i.url}):(a.from=i.from,a.to=i.to)),a.tempSentences.push(i);return a.tempSentences.length>0&&o.push(a),o}function Qd(e,t){let n=[];for(let r=0;r<e.length;r++){let o=e[r],{from:a,to:i,text:s,url:c}=o,u=s.split(/\r?\n/),l=[],f="";for(let d=0;d<u.length;d++){let g=u[d];if(g===""){l.length>0?d<u.length-1&&(l[l.length-1].suffix+=`
`):f+=`
`;continue}else if(g.length>t){let m=[];qo(g,t,m);for(let h=0;h<m.length;h++){let y=m[h],{text:p,prefix:b,suffix:T}=y;l.push({from:a,to:i,text:p,prefix:b,suffix:T,index:r,url:c})}}else l.push({text:g,prefix:f,suffix:"",from:a,to:i,index:r,url:c});l.length>0&&d<u.length-1&&(l[l.length-1].suffix+=`
`)}n.push(...l)}return n}function Zn(e,t){let n=Ut(e),r=Ut(t),o=n===r;return o?!0:(o=n.startsWith("zh")&&r.startsWith("zh"),o)}function qo(e,t,n){let o=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((a,i)=>{let s=e.lastIndexOf(i,t);return s>a?s:a},-1);if(o===-1)n.push({text:e.slice(0,t),prefix:"",suffix:""}),e.length>t&&qo(e.slice(t),t,n);else{let a=e.slice(0,o+1);a.startsWith(" ")?n.push({text:a.slice(1),prefix:" ",suffix:""}):n.push({text:a,prefix:"",suffix:""}),o+1<e.length&&qo(e.slice(o+1),t,n)}return n}async function dc(e){e.body;let{url:t,responseType:n,...r}=e;n||(n="json"),r={mode:"cors",...r};let a=await(e.fetchPolyfill||fetch)(t,r);if(a.ok&&a.status>=200&&a.status<400){if(n==="json")return await a.json();if(n==="text")return await a.text();if(n==="raw"){let i=await a.text(),s=Object.fromEntries([...a.headers.entries()]),c=a.url;return c||(a.headers.get("X-Final-URL")?c=a.headers.get("X-Final-URL"):c=t),{body:i,headers:s,status:a.status,statusText:a.statusText,url:c}}}else{let i;try{i=await a.text()}catch(s){J.error("parse response failed",s)}throw new Ne("fetchError",a.status+": "+a.statusText||"",i)}}function Ct(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function Zd(e,t){return e<<t|e>>>32-t}function na(e,t,n,r,o,a){return Ct(Zd(Ct(Ct(t,e),Ct(r,a)),o),n)}function De(e,t,n,r,o,a,i){return na(t&n|~t&r,e,t,o,a,i)}function Oe(e,t,n,r,o,a,i){return na(t&r|n&~r,e,t,o,a,i)}function Ie(e,t,n,r,o,a,i){return na(t^n^r,e,t,o,a,i)}function Fe(e,t,n,r,o,a,i){return na(n^(t|~r),e,t,o,a,i)}function ta(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,o,a,i,s=1732584193,c=-271733879,u=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)r=s,o=c,a=u,i=l,s=De(s,c,u,l,e[n],7,-680876936),l=De(l,s,c,u,e[n+1],12,-389564586),u=De(u,l,s,c,e[n+2],17,606105819),c=De(c,u,l,s,e[n+3],22,-1044525330),s=De(s,c,u,l,e[n+4],7,-176418897),l=De(l,s,c,u,e[n+5],12,1200080426),u=De(u,l,s,c,e[n+6],17,-1473231341),c=De(c,u,l,s,e[n+7],22,-45705983),s=De(s,c,u,l,e[n+8],7,1770035416),l=De(l,s,c,u,e[n+9],12,-1958414417),u=De(u,l,s,c,e[n+10],17,-42063),c=De(c,u,l,s,e[n+11],22,-1990404162),s=De(s,c,u,l,e[n+12],7,1804603682),l=De(l,s,c,u,e[n+13],12,-40341101),u=De(u,l,s,c,e[n+14],17,-1502002290),c=De(c,u,l,s,e[n+15],22,1236535329),s=Oe(s,c,u,l,e[n+1],5,-165796510),l=Oe(l,s,c,u,e[n+6],9,-1069501632),u=Oe(u,l,s,c,e[n+11],14,643717713),c=Oe(c,u,l,s,e[n],20,-373897302),s=Oe(s,c,u,l,e[n+5],5,-701558691),l=Oe(l,s,c,u,e[n+10],9,38016083),u=Oe(u,l,s,c,e[n+15],14,-660478335),c=Oe(c,u,l,s,e[n+4],20,-405537848),s=Oe(s,c,u,l,e[n+9],5,568446438),l=Oe(l,s,c,u,e[n+14],9,-1019803690),u=Oe(u,l,s,c,e[n+3],14,-187363961),c=Oe(c,u,l,s,e[n+8],20,1163531501),s=Oe(s,c,u,l,e[n+13],5,-1444681467),l=Oe(l,s,c,u,e[n+2],9,-51403784),u=Oe(u,l,s,c,e[n+7],14,1735328473),c=Oe(c,u,l,s,e[n+12],20,-1926607734),s=Ie(s,c,u,l,e[n+5],4,-378558),l=Ie(l,s,c,u,e[n+8],11,-2022574463),u=Ie(u,l,s,c,e[n+11],16,1839030562),c=Ie(c,u,l,s,e[n+14],23,-35309556),s=Ie(s,c,u,l,e[n+1],4,-1530992060),l=Ie(l,s,c,u,e[n+4],11,1272893353),u=Ie(u,l,s,c,e[n+7],16,-155497632),c=Ie(c,u,l,s,e[n+10],23,-1094730640),s=Ie(s,c,u,l,e[n+13],4,681279174),l=Ie(l,s,c,u,e[n],11,-358537222),u=Ie(u,l,s,c,e[n+3],16,-722521979),c=Ie(c,u,l,s,e[n+6],23,76029189),s=Ie(s,c,u,l,e[n+9],4,-640364487),l=Ie(l,s,c,u,e[n+12],11,-421815835),u=Ie(u,l,s,c,e[n+15],16,530742520),c=Ie(c,u,l,s,e[n+2],23,-995338651),s=Fe(s,c,u,l,e[n],6,-198630844),l=Fe(l,s,c,u,e[n+7],10,1126891415),u=Fe(u,l,s,c,e[n+14],15,-1416354905),c=Fe(c,u,l,s,e[n+5],21,-57434055),s=Fe(s,c,u,l,e[n+12],6,1700485571),l=Fe(l,s,c,u,e[n+3],10,-1894986606),u=Fe(u,l,s,c,e[n+10],15,-1051523),c=Fe(c,u,l,s,e[n+1],21,-2054922799),s=Fe(s,c,u,l,e[n+8],6,1873313359),l=Fe(l,s,c,u,e[n+15],10,-30611744),u=Fe(u,l,s,c,e[n+6],15,-1560198380),c=Fe(c,u,l,s,e[n+13],21,1309151649),s=Fe(s,c,u,l,e[n+4],6,-145523070),l=Fe(l,s,c,u,e[n+11],10,-1120210379),u=Fe(u,l,s,c,e[n+2],15,718787259),c=Fe(c,u,l,s,e[n+9],21,-343485551),s=Ct(s,r),c=Ct(c,o),u=Ct(u,a),l=Ct(l,i);return[s,c,u,l]}function mc(e){var t,n="",r=e.length*32;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function Vo(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=e.length*8;for(t=0;t<r;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function em(e){return mc(ta(Vo(e),e.length*8))}function tm(e,t){var n,r=Vo(e),o=[],a=[],i;for(o[15]=a[15]=void 0,r.length>16&&(r=ta(r,e.length*8)),n=0;n<16;n+=1)o[n]=r[n]^909522486,a[n]=r[n]^1549556828;return i=ta(o.concat(Vo(t)),512+t.length*8),mc(ta(a.concat(i),512+128))}function pc(e){var t="0123456789abcdef",n="",r,o;for(o=0;o<e.length;o+=1)r=e.charCodeAt(o),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function Ko(e){return unescape(encodeURIComponent(e))}function hc(e){return em(Ko(e))}function nm(e){return pc(hc(e))}function bc(e,t){return tm(Ko(e),Ko(t))}function rm(e,t){return pc(bc(e,t))}function pn(e,t,n){return t?n?bc(t,e):rm(t,e):n?hc(e):nm(e)}var hn=[];async function ra(e,t){return await new Promise((n,r)=>{let o=e,a=1,i=indexedDB.open(o,a);i.onsuccess=s=>{n(i.result)},i.onerror=s=>{console.error("onerror: Error opening the database, switching to non-database mode",s),r()},i.onupgradeneeded=s=>{let c=i.result,u=t||"cache";c.createObjectStore(u,{keyPath:"key"})}})}async function yc(e){let t=`${pe}-${e.service}@${e.from}->${e.to}`;return await om(t,e)}async function xc(e){let t=pn(e.originalText),n=`${pe}-${e.service}@${e.from}->${e.to}`;return await am(n,t)}async function am(e,t){let n=await ra(e);return await new Promise((r,o)=>{if(!n)return o();let a="cache",s=n.transaction([a],"readonly").objectStore(a).get(t);s.onsuccess=c=>{n.close();let u=s.result;r(u)},s.onerror=c=>{n.close(),console.error("queryInDB->onerror:",c),o()}})}async function om(e,t){let n=await ra(e);return(await im()).includes(e)||await sm(e),await new Promise(o=>{if(!n)return o(!1);let a="cache",s=n.transaction([a],"readwrite").objectStore(a).put(t);s.onsuccess=c=>{n.close(),o(!0)},s.onerror=c=>{console.error("addInDB->onerror:",c),n.close(),o(!1)}})}async function sm(e){let t="cache_list",n=await ra(pe+"-cacheList",t),o=n.transaction([t],"readwrite").objectStore(t).put({key:e});o.onsuccess=a=>{n.close(),hn.push(e)},o.onerror=a=>{n.close(),console.error(a)}}async function im(){if(hn&&hn.length>0)return hn;let e=await ra(pe+"-cacheList","cache_list");return hn=await new Promise(t=>{let n="cache_list",o=e.transaction([n],"readonly").objectStore(n).getAllKeys();o.onsuccess=a=>{e.close(),t(o.result)},o.onerror=a=>{e.close(),console.error(a),t([])}}),hn}var lm=/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]/g,cm=/[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1F\uDD32\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD55\uDD64-\uDD67]|[㐀-䶵一-龯]/g,um=/[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,gm=/(\s+)|([\p{P}\p{S}])/gu,fm=[["zh-CN",lm],["ja",cm],["ko",um]];function Tc(e){if(!e)return"auto";let t="auto",n=0,r=0,o=e.match(gm);o&&(r=o.reduce((i,s)=>i+s.length,0));let a=e.length-r;for(let i of fm){let s=i[1],c=i[0],u=e.match(s),l=u?u.length:0;l>n&&(n=l,t=c)}return n*2.5/a>.5?t:"auto"}function Go(){try{return globalThis.self!==globalThis.top}catch{return!0}}function Jo(e,t){let{excludeSelectors:n,additionalExcludeSelectors:r,extraInlineSelectors:o,additionalInlineSelectors:a,extraBlockSelectors:i,atomicBlockSelectors:s,atomicBlockTags:c,globalStyles:u,stayOriginalTags:l,stayOriginalSelectors:f,globalAttributes:d}=t,g=Object.keys(u);if(g.length>0)for(let A of g){let F=Ye(document.body,[A]);for(let $ of F)if(!re($,xo)){le($,xo,"1");let z=u[A];$.style.cssText+=z}}let m=Object.keys(d);if(m.length>0)for(let A of m){let F=d[A],$=Object.keys(F),z=Ye(document.body,[A]);for(let N of z)for(let G of $){let Y=F[G];N.getAttribute(G)!==Y&&(Y===null?N.removeAttribute(G):N.setAttribute(G,Y))}}let h=[...n,...r],y=[...o,...a],p=[...s],b=c.map(A=>A.toLowerCase()),T=i;Ye(document.body,h).forEach(A=>{re(A,Ge)||le(A,Ge,"1")});let R=[];if(p.length>0&&(R=Ye(document.body,p).filter(A=>!re(A,Ke))),b.length>0){let A=l.reduce((z,N)=>{let G=N.toLowerCase();return z.push(`<${G}>`,`</${G}>`,`<${G} />`),z},[]),F=[">http://",">https://"];A.push(...F);let $=Ye(document.body,b).filter(z=>{if(re(z,Ke))return!1;{let G=z.innerHTML;return!A.some(we=>G.includes(we))}});R.push(...$)}R.forEach(A=>{re(A,Ke)||le(A,Ke,"1")});let v=[];if(y.length>0)for(let A of e)v.push(...Ye(A,y));v.forEach(A=>{le(A,pt,"1")});let w=[];if(T.length>0)for(let A of e)w.push(...Ye(A,T));w.forEach(A=>{le(A,Bt,"1")});let E=[];if(f.length>0)for(let A of e)E.push(...Ye(A,f));E.forEach(A=>{le(A,Nr,"1")})}function wc(e,t){let n=t.matches||[];if(n&&!Array.isArray(n)&&(n=[n]),n.length===0)return!1;if(n.length>0){if(n.includes(e))return!0;for(let r of n)if(r.includes("*")&&new RegExp(r).test(e))return!0}return!1}async function vc(){let e="auto";return document.body&&document.body.textContent&&document.body.textContent.trim()&&(e=await Xe({text:Vn(document.body)})),e==="auto"&&document.documentElement&&document.documentElement.lang&&(e=Ut(document.documentElement.lang)),e}function Yo(e,t){if(!(e&&e.textContent&&e.textContent.trim()))return[];let{rule:n,state:{translationArea:r}}=t,o=[];if(r==="body")return[e];if(n&&n.selectors.length>0){let i=n.selectors.map(s=>{let c=e.matches(s),u=[];c?u=[e]:u=e.querySelectorAll(s);for(let l of u)re(l,It)||le(l,It,"1");return Array.from(u)}).flat();o.push(...i.map(s=>({element:s,reserve:!0})))}else{if(n&&n.additionalSelectors.length>0){let f=Ye(e,n.additionalSelectors);for(let d of f)re(d,It)||le(d,It,"1");o.push(...f.map(d=>({element:d,reserve:!0})))}let i=Ye(e,["article"]);o.push(...i.map(f=>({element:f,reserve:!0})));let s;if(o.length===0&&(s=e.querySelectorAll("[role=main]"),s.length===0&&(s=e.querySelectorAll("main")),s.length===0&&(s=e.querySelectorAll(".main")),s.length>0)){let f=Array.from(s);o=o.concat(f.map(d=>({element:d,reserve:!0})))}let c=[],u=f=>{if(f.nodeType===Node.ELEMENT_NODE&&Ue(f,t.rule,!1))return NodeFilter.FILTER_REJECT;if(f.nodeType===Node.TEXT_NODE&&(f.textContent?f.textContent.trim():"").length>=n.containerMinTextCount){let g=f.parentNode;g&&g.parentNode&&(g=g.parentNode),g&&g.nodeType===Node.ELEMENT_NODE&&(c.includes(g)||c.push(g))}return NodeFilter.FILTER_ACCEPT},l=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,u);for(;l.nextNode(););o.push(...c.map(f=>({element:f,reserve:!1})))}let a=jl(e,o,n);return a.sort(function(i,s){return i.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}),a}var Xo=[];function Sc(e){Xo.push(e)}function Qo(){Xo.forEach(e=>e()),Xo=[]}function rt(e,t,n){let r=[],{rule:o}=n,a=Kn(n);if(e.length===0)return null;e=e.map(d=>d.element?d:{element:d});let i="",s=!1;for(let d=0;d<e.length;d++){let m=e[d].element;if(typeof m=="string"){i+=m;continue}let h="";qr(m,`[${Ge}]`)?h=dm(m):h=m.innerText;let y=h.startsWith(" "),p=h.endsWith(" ");m.tagName==="A"&&(y=!0,p=!0);let b=gn(m,o);if(h===""||b){b&&(y=!0,p=!0);let T={type:"element",value:m};r.push(T);let L=r.length-1,R=`${a[0]}${L}${a[1]}`;i+=(y?" ":"")+R+(p?" ":"");continue}if(!Ue(m,o,!0)){{let T=t?h:h.trim().replace(/\n/g," ");if(Mo(T)||Ro(T)||No(T)||Kl(T)){let L={type:"element",value:m};r.push(L);let R=r.length-1,v=`${a[0]}${R}${a[1]}`;i+=(y?" ":"")+v+(p?" ":"")}else s=!0,i+=(y?" ":"")+T+(p?" ":"")}if(typeof m!="string"){let T=qn(m.nextSibling,t);T&&(i+=T)}}}if(!s)return null;let c=!1,u=i.split(" ").length,l=i.split(`
`).length;u<=o.blockMinWordCount&&i.length<=o.blockMinTextCount&&l<2&&(c=!0);let f={elements:e.map(d=>d.element),text:i,variables:r,inline:c,preWhitespace:t};return ql(f,n.state.translationArea==="body"?2:o.paragraphMinTextCount,n.state.translationArea==="body"?1:o.paragraphMinWordCount,n)?f:null}function dm(e){let t="",n=o=>o.nodeType===Node.ELEMENT_NODE?re(o,Ge)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT:o.nodeType===Node.TEXT_NODE?(o.textContent&&o.textContent.trim()!==""&&(t+=o.textContent.replace(/\s+/g," ")),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT,r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,n);for(;r.nextNode(););return t}var mm=1,bn=new Map;function Lc(){return bn}function zt(e){return bn.get(e)}function er(e,t){bn.set(e,t)}function _c(){bn.clear()}function Ec(e){if(!re(e,Ft))return!1;if(re(e,Ht))return!0;let t=Lt(e,$t);if(!t)return!1;let n=parseInt(t),r=bn.has(n);if(!r){let o=document.getElementById(`${Je}-${n}`);o&&o.remove()}return r}function ht(e,t){let n={...e,id:mm++,languageByClient:"auto",languageByLocal:"auto"};n.elements.forEach(r=>{r instanceof HTMLElement&&(le(r,Ft,"1"),le(r,$t,`${n.id}`))}),t.push(n),bn.set(n.id,{...n,state:"Original",observers:[]})}async function Cc(e,t,n){let r=[],{targetLanguage:o,rule:a}=n;for(let d of t){if(Ue(d,a,!1))continue;let g=re(d,sn),m=[];if(re(d,Ke)){if(!Ec(d)){let b=rt([d],g,n);b&&ht(b,r)}continue}let h=b=>{if(!(b.nodeType===Node.TEXT_NODE||b.nodeType===Node.ELEMENT_NODE))return NodeFilter.FILTER_REJECT;if(b.nodeType===Node.ELEMENT_NODE){let T=b;if(T.isContentEditable||Ec(b))return NodeFilter.FILTER_REJECT;if(le(T,Ft,"1"),re(T,Ke)){if(m.length>0){let R=rt([...m],g,n);R&&ht(R,r),m.length=0}m.push(T);let L=rt([...m],g,n);return L&&ht(L,r),m.length=0,NodeFilter.FILTER_REJECT}}if(Ue(b,a,!0)){if((b.nodeName==="CODE"||b.nodeName==="TT")&&b.parentNode?.nodeName==="PRE")return NodeFilter.FILTER_REJECT;if(nt(b,a))return Ac(b,m,r,g,n),NodeFilter.FILTER_REJECT;if(m.length>0){let T=rt([...m],g,n);T&&ht(T,r),m.length=0}return NodeFilter.FILTER_REJECT}return b.nodeName==="PRE"?(b.classList.contains("code"),NodeFilter.FILTER_REJECT):nt(b,a)?(Ac(b,m,r,g,n),NodeFilter.FILTER_REJECT):NodeFilter.FILTER_ACCEPT},y=document.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,h),p=y.nextNode();for(;p;){if(m.length>0){let b=rt([...m],g,n);b&&ht(b,r),m.length=0}p=y.nextNode()}if(m.length>0){let b=rt([...m],g,n);b&&ht(b,r),m.length=0}}let i=r.map(d=>{let{text:g}=d;return Xe({text:g})}),s=await Promise.all(i),c=[],u=n?.config?.translationLanguagePattern?.excludeMatches||[],l="auto";n.state.isDetectParagraphLanguage||(l=Jr());let f=Gn();return s.forEach((d,g)=>{let m=d;m==="auto"&&(m=f);let h={...r[g],languageByLocal:m,languageByClient:l};if(!Zn(d,o)){if(u.length>0&&u.some(b=>Zn(d,b)))return;c.push(h)}}),c}function pm(e,t){let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null),o=null,a=!1;for(;o=r.nextNode();){let s=o.textContent||"",c=s.trim();if(!a&&s.length>0&&c.length===0){a=!0,n.push(" ");continue}c.length>0&&(n.push(o.parentElement),a=!1)}let i=n[n.length-1];if(i&&typeof i!="string"){let s=qn(i.nextSibling,t);s&&n.push(s)}if(typeof n[n.length-1]!="string"){let s=qn(e.nextSibling,t);s&&n.push(s)}return n}function Ac(e,t,n,r,o){let a=e.previousElementSibling;if(a&&!nt(a,o.rule)&&t.length>0){let s=rt([...t],r,o);s&&ht(s,n),t.length=0}Ue(e,o.rule,!1)?zl(e,o.rule)||t.push(e):gn(e,o.rule)?t.push(e):qr(e,["code","tt"])?t.push(...pm(e,r)):t.push(e)}async function Rc(e,t,n,r){let o=[],{rule:a}=n;for(let i=0;i<t.length;i++){let s=t[i],c=r[i];if(!c)throw new Error("targetContainer is null");let u=[],l=!0,f=null,d=function(h){let y=h;if(["DIV","BR"].includes(y.nodeName))return l=!0,NodeFilter.FILTER_REJECT;if(y.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(bm(h))return NodeFilter.FILTER_REJECT;if(le(y,Ft,"1"),nt(y,a)){let p=un(u),b=globalThis.getComputedStyle(y);if(!p)u.push(Mc(y,b));else{let T=globalThis.getComputedStyle(p),L=Zo(T),R=Zo(b),v=Pc(R,L),w=!1;if(l&&f&&Pc(R,f).left>=1.2&&(w=!0),!w&&l){let A=(y.innerText||y.textContent||"").trim();(A.startsWith("\u2022")||A.charCodeAt(0)===61623||/^\d+\./.test(A))&&(w=!0)}!w&&l&&un(u)&&Wr(u).reduce(($,z)=>{let N=Zo(globalThis.getComputedStyle(z));return Math.max($,N.right)},0)-L.right>a.pdfNewParagraphIndentRightIndentPx&&(w=!0),l&&(f=R,l=!1),w||(w=hm(v,a)),w&&kc(u,o,n,c),u.push(Mc(y,b)),u.push(" ")}return NodeFilter.FILTER_REJECT}return NodeFilter.FILTER_ACCEPT},g=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,d),m=g.nextNode();for(;m;)m=g.nextNode();kc(u,o,n,c)}return o}function kc(e,t,n,r){if(e.length>0){let o=rt([...e],!1,n);o&&(o.isPdf=!0,o.targetContainer=r,o.inline=!1,ht(o,t)),e.length=0}}function Zo(e){return{top:parseFloat(e.top.slice(0,-2)),left:parseFloat(e.left.slice(0,-2)),right:parseFloat(e.left.slice(0,-2))+parseFloat(e.width.slice(0,-2)),fontSize:parseFloat(e.fontSize.slice(0,-2))}}function hm(e,t){return e.fontSize>2||e.fontSize<-2||e.top>=t.pdfNewParagraphLineHeight||e.top<0}function Pc(e,t){let n=t.fontSize,r=e.fontSize;return{top:(e.top-t.top)/n,left:(e.left-t.left)/n,fontSize:r-n}}function Mc(e,t){return t.fontFamily==="monospace"?{element:e,isStayOriginal:!0,targetTagName:"code"}:e}function bm(e){if(!re(e,Ft))return!1;if(re(e,Ht))return!0;let t=Lt(e,$t);if(!t)return!1;let n=parseInt(t),o=Lc().has(n);if(!o){let a=document.getElementById(`${Je}-${n}`);a&&a.remove()}return o}function Nc(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ym(e,t,n=[],r,o){let a=["notranslate"];return r&&a.push(Cl),e&&(a.push(`${pe}-target-translation-theme-${e}`),t?a.push(`${vo}-theme-${e}`):a.push(`${wo}-theme-${e}`)),n.length>0&&a.push(...n),t?a.push(vo):(a.push(wo),o&&a.push(_l)),a}function xm(e){let t=["notranslate",Ll];return e&&t.push(`${pe}-target-translation-theme-${e}-inner`),t}function Dc(e,t,n){let{rule:r,translationTheme:o}=n,{variables:a}=e;a=a||[];let{text:i}=t,{wrapperPrefix:s,wrapperSuffix:c}=r,u=Kn(n),l="afterend",f=new RegExp(`${u[0]}(\\d+)${u[1]}`,"g"),d=0,g=Nc(i);a.length>0&&(g=g.replace(f,y=>{let p=g.indexOf(y),b=g[p-1]===" ",T=g[p+y.length]===" ",L=a[Number(d)];if(d++,L.type==="element"){let R=L.value.outerHTML;return b||(R=" "+R),T||(R=R+" "),R}else J.error("variable type not supported",L);return y}));let m=ym(o,e.inline,r.translationClasses||[],e.preWhitespace,n.rule.isPdf),h=xm(o);return g=`<span class="${m.join(" ")}"><span class="${h.join(" ")}">${g}</span></span>`,e.inline||(s==="smart"?g=`<br>${g}`:g=`${s}${g}`,c==="smart"?g=`${g}`:g=`${g}${c}`),e.inline&&(g=`<span class="notranslate">&nbsp;</span>${g}`),{html:g,position:l}}function Ic(e,t){let n=[];for(let r of e){if(re(r,Ke))continue;if(le(r,ho,"1"),r.normalize(),t.lineBreakMaxTextCount>0){let a=s=>s.nodeType===Node.ELEMENT_NODE&&Ue(s,t,!0)?NodeFilter.FILTER_REJECT:(s.nodeType===Node.TEXT_NODE&&(s.textContent?s.textContent.trim():"").length>=t.lineBreakMaxTextCount&&ts(s,t.lineBreakMaxTextCount),NodeFilter.FILTER_ACCEPT),i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,a);for(;i.nextNode(););}if(!(t.excludeTags.includes("PRE")||t.additionalExcludeTags.includes("PRE"))&&t.isTransformPreTagNewLine){let a=r.querySelectorAll("pre");for(let i of a)Oc(i)}t.preWhitespaceDetectedTags.includes(r.tagName)&&(Gl(r,sn)||(Tm(r)?(le(r,sn,"1"),t.isTransformPreTagNewLine&&Oc(r)):le(r,sn,"0"))),es(0,r,t,n)}return{hiddenElements:n}}function es(e,t,n,r=[]){if(re(t,Ke))return;let o=!1;if(e===0){let a=gn(t,n);t.childNodes&&t.childNodes.length===1&&t.nodeType===Node.ELEMENT_NODE&&nt(t,n)&&!a&&(o=!0)}if(t&&t.childNodes&&t.childNodes.length>0){for(let a of t.childNodes)if(a.nodeType===Node.ELEMENT_NODE){if(Ue(a,n,!1))continue;{let i=globalThis.getComputedStyle(a),s=!1;if(i.display==="none"&&(r.push(a),s=!0),!s){let c=i.clip,u=i.zIndex,l=i.height,f=i.width,d=0;if(u.startsWith("-")){let g=parseInt(u);isNaN(g)||(d=g)}if((c==="rect(1px, 1px, 1px, 1px)"||d<0)&&(s=!0),!s&&a.nodeName!=="BR"){let g=parseInt(l),m=parseInt(f);!isNaN(g)&&!isNaN(m)&&(g>0&&g<8||m>0&&m<=8)&&(s=!0)}}if(s){le(a,Ge,"1");continue}else{if(a.nodeName==="DIV"||Yl(a,n)){if((i.display==="inline"||i.display==="inline-flex")&&!re(a,Bt)){le(a,pt,"1");continue}}else if((a.nodeName==="SPAN"||a.nodeName==="A")&&!i.display.startsWith("inline")){re(a,pt)||(le(a,Bt,"1"),es(e+1,a,n,r));continue}if(nt(a,n)&&!o)continue;es(e+1,a,n,r)}}}else if(a.nodeType===Node.TEXT_NODE){let i=a.textContent;if(i&&i.trim().length>0){let s=document.createElement("span");a.after(s),s.appendChild(a)}}}}function Tm(e){let t=window.getComputedStyle(e);return t.whiteSpace.startsWith("pre")||t.whiteSpace==="break-spaces"}function Oc(e){let n=e.innerHTML.replace(/\n/g,"<br>");e.innerHTML=n}function ts(e,t){let n=e.textContent||"";if(n.trim().length<=t)return;let a=[".","?","!","\u3002","\uFF1F","\uFF01"].reduce((i,s)=>{let c=n.lastIndexOf(s,t);return c>i?c:i},-1);if(a===-1)n.length>t+20&&ts(e,t+20);else{let i=n.slice(a+1);a++,i.startsWith(" ")&&a++;let s=e.splitText(a),c=document.createElement("br");s.parentNode?.insertBefore(c,s),a+1<n.length&&ts(s,t)}}function Fc(e,t){let n=[];for(let r of e){let o=0,a=1e5,i=document.createElement("div"),s=l=>{let f=l;if(["DIV","BR"].includes(f.nodeName))return NodeFilter.FILTER_REJECT;if(f.classList.contains("markedContent"))return NodeFilter.FILTER_ACCEPT;if(f.nodeName==="SPAN"){let d=f.getBoundingClientRect(),g=globalThis.getComputedStyle(f),m=d.right,h=d.left,y=g.top.slice(0,-2),p=g.fontSize.slice(0,-2);return m>o&&(o=m),h<a&&(a=h),le(f,$n,`${h}`),le(f,Dr,`${m}`),le(f,Sl,y),le(f,El,p),NodeFilter.FILTER_ACCEPT}else return NodeFilter.FILTER_ACCEPT},c=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,s);for(;c.nextNode(););let u=o-a;u<600&&(u=600),n.push(i),i.style.left=o+"px",i.style.width=u+"px",i.classList.add(Ir),r.childNodes.length>0&&r.insertBefore(i,r.childNodes[0])}return{targetContainers:n}}var oa="Original",aa=[],os=new Set,ns=[],sa=[],$c=[],ia=[],Hc=globalThis.location.href.split("#")[0],ss=0,Se,wm=gr(Pm,300),vm=gr(jc,200),Sm=Wn(),Em=Sm.PROD==="1",tr,nr,rr="";async function Bc(){gt()==="Original"?await kt():(gt()==="Translated"||gt()==="Error")&&yn()}function Uc(){let e=document.querySelectorAll(`[${Ht}="1"]`);for(let t of e)t.style.display="none"}function yn(){Qo(),as(),He("Translating"),rr&&(document.title=rr),document.querySelectorAll("."+Je).forEach(r=>{r.remove()}),document.querySelectorAll("."+Ir).forEach(r=>{r.remove()}),document.querySelectorAll("["+yo+"]").forEach(r=>{if(Em)delete r[Ae];else{let a=Object.keys(r.dataset).filter(i=>i.startsWith(ge));for(let i of a)delete r.dataset[i]}r.removeAttribute(yo)}),He("Original")}function Am(e,t){let n=!1,r=Po(e.elements),o=un(e.elements);os.add(e.id);let a=[];if(r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});sa.push(s),a.push(s),s.observe(r)}if(o&&o!==r){let s=new IntersectionObserver((c,u)=>{c.forEach(l=>{l.intersectionRatio>0&&(u.disconnect(),n||(n=!0,t(e)))})});sa.push(s),a.push(s),s.observe(o)}let i=zt(e.id);i&&(i.observers=a,er(e.id,i))}function Lm(e,t){if(e){let n=new ResizeObserver((r,o)=>{for(let a of r)a.contentRect.width>10&&(o.disconnect(),t(a.target))});n.observe(e),$c.push(n)}}async function jc(e){let t=[...ia];ia=[];try{let n=[];for(let r of t){let o=Yo(r,e);if(o.length===0)continue;let a=o;n.push(...a)}await ls(n,e)}catch(n){J.error(`translateNewDynamicNodes error: ${n.message}`)}}function rs(e,t){os.delete(e.id);let n=zt(e.id);n&&(n.observers&&n.observers.length>0&&n.observers.forEach(a=>{a.disconnect()}),n.observers=[],n.state="Translating",er(e.id,n));let r=e.id;ss+=e.text.length;let o=Wr(e.elements);if(e.isPdf){let a=Po(e.elements),i=window.getComputedStyle(a),s=i.top,c=i.fontSize,u=parseFloat(c.slice(0,-2));isNaN(u)||u>28&&(c="28px");let l=e.targetContainer,f=document.createElement("span");o.length===1&&(f.style.fontSize=c),f.id=`${Je}-${r}`,f.style.top=s;let d=Lt(a,$n),g=o.reduce((y,p)=>{let b=Lt(p,$n);return b&&b<y?b:y},1e3),h=o.reduce((y,p)=>{let b=Lt(p,Dr);return b&&b>y?b:y},0)-g;h<30,h>600&&(h=600),d<200&&(d=10),d&&d<0&&(d=0),f.style.left=`${d||10}px`,g<400?f.style.width=h+"px":f.style.width=`calc(100% - ${g}px)`,f.classList.add("notranslate",`${Je}`),l.appendChild(f)}else{let a=un(e.elements),i="afterend";e.elements.length>0&&a&&(o.length===1?i="beforeend":nt(e.elements[0],t.rule)||(i="beforeend"));let s=document.createElement("span");if(s.classList.add("notranslate",Je),s.id=`${Je}-${r}`,s.innerHTML=Cm(),i==="beforeend"){let c=Xl(a);c?c.appendChild(s):a.appendChild(s)}else if(i==="afterend")a.insertAdjacentElement(i,s);else throw new Error("not support position")}aa.push(r),wm(t)}function _m(e,t){t.state.translationStartMode==="dynamic"&&ss>t.config.immediateTranslationTextCount?Am(e,n=>{rs(n,t)}):rs(e,t)}async function kt(){if(oa==="Translating")return;He("Translating");let e=await qt(globalThis.location.href);if(!e.state.isAutoTranslate&&e.config.tempTranslateDomainMinutes>0){let r=Date.now(),a=new URL(e.url).hostname,i=e.localConfig.tempTranslationUrlMatches||[],s=i.findIndex(u=>u.match===a&&u.expiredAt>r),c=!1;s>-1||(i.push({match:a,expiredAt:r+e.config.tempTranslateDomainMinutes*60*1e3}),c=!0),c&&await Kr({...e.localConfig,tempTranslationUrlMatches:[...i]})}e.state.isAutoTranslate=!0;let t=globalThis.scrollY,n=globalThis.innerHeight;t>=n&&(e.config.immediateTranslationTextCount=0),J.debug("ctx",e),e.state.isNeedClean?yn():Se.state.isNeedClean=!0,e.rule.normalizeBody&&document.querySelector(e.rule.normalizeBody)&&(document.body=document.body.cloneNode(!0)),Sc(()=>{ss=0,_c(),sa.forEach(r=>{r.disconnect()}),$c.forEach(r=>{r.disconnect()}),sa=[],os.clear()}),He("Translating");try{Jo([document.body],e.rule);let r=Yo(document.body,e);J.debug("detect containers",r),He("Translating");let{rule:o}=e;r.length>0&&await ls(r,e),Vc(e).catch(a=>{J.error("translateTitle error:",a.name,a.message,a.details||"")}),Mm(o,e),r.length===0&&He("Translated")}catch(r){He("Error"),J.error(r)}}async function qt(e){let t=await Kc();if(!Se)Se=await Jn({url:e,config:t});else{let n={url:e,config:t,state:Se.state};Se=await Jn(n)}return Se}async function Wc(){gt()==="Original"?await la():(gt()==="Translated"||gt()==="Error")&&(Se=await qt(globalThis.location.href),Se.state.translationArea!=="main"?await la():yn())}async function la(){Se=await qt(globalThis.location.href),Se.state.translationArea="main",await kt()}async function is(){Se=await qt(globalThis.location.href),Se.state.translationArea="body",await kt()}async function zc(){gt()==="Original"?await is():(gt()==="Translated"||gt()==="Error")&&(Se=await qt(globalThis.location.href),Se.state.translationArea!=="body"?(Se.state.translationArea="body",await kt()):yn())}async function qc(){Se=await qt(globalThis.location.href),Se.state.translationArea="body",Se.state.translationStartMode="immediate",await kt(),await jc(Se)}async function Vc(e){let t=document.title;if(!t||t.includes(Or))return;rr!==t&&(rr=t);let n="auto";if(e.state.isDetectParagraphLanguage||(n=Jr()),n==="auto"){let r=await Xe({text:t});if(Zn(r,e.targetLanguage))return}try{let r=await Yc({text:t,from:n,to:e.targetLanguage},e);r&&r.text&&(document.title=rr+Or+r.text)}catch(r){throw r}}function Cm(){return`&nbsp;<span class="${pe}-loading notranslate"></span>`}async function ls(e,t){let{rule:n}=t;Jo(e,n);let r=[];if(t.rule.isPdf)e.length>0&&(He("Translating"),r=Fc(e,n).targetContainers);else{He("Translating");let a=Ic(e,n),{hiddenElements:i}=a;for(let s of i)Lm(s,()=>{Jl(s,Ge),ls([s],t)});He("Translating")}let o=[];if(t.rule.isPdf?o=await Rc(document.body,e,t,r):(e=e.filter(a=>!Ue(a,n,!1)),o=await Cc(document.body,e,t)),He("Translating"),o.length===0){He("Translated");return}J.debug("detect paragraphs",o);for(let a of o)_m(a,t);He("Translated")}function km(e,t,n,r){let o=zt(n.id);if(e||!t){e||(J.error("translate error",t),e=new Error("no response from server"));let a=n.id,i=document.getElementById(`${Je}-${a}`),s=e.message.replaceAll(`
`,"");s=s.replaceAll('"',"&quot;"),o&&(o.state="Error",er(o.id,o));let c=`<span class="${pe}-error notranslate"> <span class="immersive-translate-tooltip" data-immersive-translate-tooltip-text="${s}"><button class="${pe}-clickable-button notranslate" title="${s}">\u2757</button></span> <button class="${pe}-clickable-button notranslate" data-${pe}-paragraph-id="${a}" data-${pe}-action="retry">\u{1F504}</button></span>`;i&&(i.innerHTML=c)}else{let a=zt(n.id);if(a){a.state="Translated",er(a.id,a);let i=Dc(a,t,r),s=t.id,c=document.getElementById(`${Je}-${s}`);c&&(c.innerHTML=i.html,document.querySelectorAll(`[${$t}="${s}"]`).forEach(l=>{le(l,Ht,"1")}))}else J.error("paragraph not found",n.id)}}async function Pm(e){if(aa.length===0)return Promise.resolve();let t=[...aa];aa=[];let n="auto";e.state.isDetectParagraphLanguage||(n=Gn());let r={sentences:t.filter(a=>zt(a)).map(a=>{let i=zt(a),s=i.languageByLocal;return s==="auto"&&(s=n),{id:i.id,url:e.encryptedUrl,text:i.text,from:s,fromByClient:i.languageByClient,to:e.targetLanguage}})};if(r.sentences.length>0){He("Translating");try{await cs(r,e,(a,i,s)=>{km(a,i,s,e)})}catch(a){He("Error"),J.error("translateCurrentQueue error",a.name,a.message,a.details||" ");return}}He("Translated")}function He(e){oa=e,Jc(oa)}function Mm(e,t){J.debug("enableMutatinObserver"),as(),ns=[],ia=[];let n=e.inlineTags.concat(e.excludeTags).concat("#text","BR");tr=new MutationObserver(function(o){o.forEach(a=>{let i=globalThis.location.href;if(i.split("#")[0]!==Hc&&e.observeUrlChange){Hc=i.split("#")[0],Qo(),as(),setTimeout(()=>{J.debug("url changed, reinit page"),Nm()},e.urlChangeDelay);let c=new Event(wl);document.dispatchEvent(c);return}a.addedNodes.forEach(c=>{if(c.nodeType===Node.ELEMENT_NODE){let u=c;if(Rm(e,u)||!n.includes(u.nodeName)){if(u.classList.contains("notranslate"))return;Wl(u,ns)||(ia.push(u),ns.push(u),vm(t))}}})})}),tr.observe(document.body,{childList:!0,subtree:!0});let r=document.querySelector("title");r&&(nr=new MutationObserver(function(o){o.length>0&&(o[0].target.text.includes(Or)||Vc(t).catch(i=>{J.error("translateTitle error:",i.name,i.message,i.details||"")}))}),nr.observe(r,{subtree:!0,characterData:!0,childList:!0}))}function Rm(e,t){if(e.extraBlockSelectors){for(let n of e.extraBlockSelectors)if(t.matches(n))return!0}return!1}async function Nm(){let e=Go(),t=await qt(globalThis.location.href);t.rule.urlChangeDelay&&await Ln(t.rule.urlChangeDelay);let n=t.sourceLanguage;n==="auto"?($e()?n=await Xe({text:Vn(document.body).slice(0,1e3)}):e?n=await Xe({text:Vn(document.body).slice(0,1e3)}):n=await Gc(),n==="auto"&&(n=await vc()),ec(n)):fn(n);let r=t.state.isAutoTranslate||t.isTranslateUrl||t.rule.isPdf;!r&&!t.isTranslateExcludeUrl&&(J.debug(`detect page language: ${n}`),wc(n,t.config.translationLanguagePattern)&&(r=!0,J.debug(`match language pattern ${n}, auto translate`))),r?(Se.state.isAutoTranslate=!0,await kt()):J.debug("do not auto translate",t)}function as(){tr&&(tr.disconnect(),tr.takeRecords()),nr&&(nr.disconnect(),nr.takeRecords())}function gt(){return oa}var Dm=async function(e,t){let{method:n,data:r}=e;n==="translateTheWholePage"?await is():n==="translateTheMainPage"?await la():n==="translateToThePageEndImmediately"?await qc():n==="toggleTranslatePage"?await Bc():n==="toggleTranslateTheWholePage"?await zc():n==="toggleTranslateTheMainPage"?await Wc():n==="translatePage"?await kt():n==="restorePage"?yn():n==="showTranslationOnly"?Uc():n==="setCurrentPageLanguageByClient"&&fn(r)};var ca;function us(){return ca||(ca=new Wt("content_script",!1).getConnection("main",Dm),ca)}async function Vt(e){return await us().sendMessage("background:main",e)}function ie(e){return $e()||Ul()?(e.fetchPolyfill=globalThis.GM_fetch,dc(e)):Vt({method:"fetch",data:e})}function Kc(){return $e()?jt():Vt({method:"getConfig"})}function Xe(e){if(e.text){let t=Tc(e.text);if(t!=="auto")return Promise.resolve(t)}else return Promise.resolve("auto");if($e()){let t=Q.extra.detectLanguage(e.text);return Promise.resolve(t)}return Vt({method:"detectLanguage",data:e})}function Gc(){return Vt({method:"detectTabLanguage"})}function Jc(e){if($e()){let n=new CustomEvent(Tl,{detail:e});document.dispatchEvent(n);return}us().sendMessage("popup:main_sync",{method:"setPageStatus",data:e}).catch(n=>{})}function Xc(e){return $e()?xc(e):Vt({method:"queryParagraphCache",data:e})}async function Qc(e){if($e()){await yc(e);return}return Vt({method:"setParagraphCache",data:e})}async function gs(){if($e())return Promise.resolve();await Vt({method:"mockRequest"})}var ae=class{constructor(t,n){this.maxTextLength=1800;this.throttleLimit=3;this.isSupportList=!0;this.maxTextGroupLength=200;this.serviceConfig=t,this.generalConfig=n}static getAllProps(){return[]}static getProps(){return[]}async init(){}getMaxTextGroupLength(){return this.maxTextGroupLength}translate(t){throw new Error("Not implemented")}translateList(t){throw new Error("Not implemented")}async multipleTranslate(t,n){if(t.sentences.length===0)return{sentences:[]};let{sentences:r}=t,o=[],a=[],i=0,s=new Set,c=null,u=r[0].from,l=!1;r.some(d=>d.from!==u)&&(l=!0);try{a=fc(r,this.maxTextLength,this.maxTextGroupLength)}catch(d){if(n){s.has(i)&&i++;for(let g=i;g<r.length;g++){let m=r[g];n(d,null,m)}c=d}else c=d}let f=wr({limit:this.throttleLimit,interval:1e3});J.debug("tempSentenceGroups",a.map(d=>d));for(let d=0;d<a.length;d++){let g=a[d],m=g.url,h=f(async()=>{let b=g.from;if(l&&(b="auto"),g.fromByClient!=="auto"&&(b=g.fromByClient),this.isSupportList)return await this.translateList({text:g.tempSentences.map(L=>L.text),from:b,to:g.to,url:m});{let T=g.tempSentences.map(w=>w.text).join(To),L=await this.translate({text:T,from:b,to:g.to,url:m}),{text:R}=L;return{text:R.split(To),from:L.from,to:L.to}}}),y;try{y=await h()}catch(b){if(n){s.has(i)&&i++;for(let T=i;T<r.length;T++){let L=r[T];n(b,null,L)}c=b;continue}else{c=b;continue}}let{text:p}=y;for(let b=0;b<p.length;b++)try{let T=p[b],L=g.tempSentences[b],{index:R,prefix:v,suffix:w}=L;o[R]===void 0?o[R]={...r[R],from:g.from,to:g.to,text:v+T+w}:o[R].text+=v+T+w,R!==i&&n&&(s.add(i),n(null,o[i],r[i])),i=R}catch(T){if(n){s.has(i)&&i++;for(let L=i;L<r.length;L++){let R=r[L];n(T,null,R)}throw T}else throw T}}if(n&&!s.has(i)&&o[i]&&r[i]&&n(null,o[i],r[i]),c)throw c;return{sentences:o}}detectLanguageLocally(t){return Xe({text:t})}detectLanguageRemotely(t){return Promise.resolve("auto")}detectLanguage(t){return t.length>=32?this.detectLanguageLocally(t):this.detectLanguageRemotely(t)}};var Zc=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","jp"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],at=class extends ae{constructor(n,r){super(n,r);this.secretId="";this.secretKey="";this.isSupportList=!0;if(!n||!n.secretId||!n.secretKey)throw new Error("secretId and secretKey are required");this.secretId=n.secretId,this.secretKey=n.secretKey}static getUTCDate(n){let r=n.getUTCFullYear(),o=`${n.getUTCMonth()+1}`.padStart(2,"0"),a=`${n.getUTCDate()}`.padStart(2,"0");return`${r}-${o}-${a}`}static getAllProps(){return[{name:"secretId",required:!0,type:"text"},{name:"secretKey",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:at.langMap.get(o),SourceText:r,Target:at.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslate",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetText,from:at.langMapReverse.get(s.Response.Source)||o,to:at.langMapReverse.get(s.Response.Target)||a}}async translateList(n){let{text:r,from:o,to:a}=n,i=JSON.stringify({ProjectId:0,Source:at.langMap.get(o),SourceTextList:r,Target:at.langMap.get(a)}),s=await this.signedRequest({secretId:this.secretId,secretKey:this.secretKey,action:"TextTranslateBatch",payload:i,service:"tmt",version:"2018-03-21"});return{text:s.Response.TargetTextList,from:at.langMapReverse.get(s.Response.Source)||o,to:at.langMapReverse.get(s.Response.Target)||a}}async signedRequest({secretId:n,secretKey:r,action:o,payload:a,service:i,version:s}){let c=`${i}.tencentcloudapi.com`,u=new Date,l=`${new Date().valueOf()}`.slice(0,10),f=["POST","/","","content-type:application/json; charset=utf-8",`host:${c}`,"","content-type;host",await tt(a)].join(`
`),d=at.getUTCDate(u),g=["TC3-HMAC-SHA256",l,`${d}/${i}/tc3_request`,await tt(f)].join(`
`),m=await Bl(d,`TC3${r}`),h=await jr(i,m),y=await jr("tc3_request",h),p=await jr(g,y),b=await ie({url:`https://${i}.tencentcloudapi.com`,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Host:c,"X-TC-Action":o,"X-TC-Timestamp":l,"X-TC-Region":"ap-beijing","X-TC-Version":s,Authorization:`TC3-HMAC-SHA256 Credential=${n}/${d}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${p}`},body:a});if(b instanceof Error)throw b;if(b.Response&&b.Response.Error&&b.Response.Error.Message)throw new Error(b.Response.Error.Message);return b}},Kt=at;Kt.langMap=new Map(Zc),Kt.langMapReverse=new Map(Zc.map(([n,r])=>[r,n]));var eu=[["auto","auto"],["zh-CN","zh-CN"],["zh-TW","zh-TW"],["en","en"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["ceb","ceb"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["haw","haw"],["he","he"],["hi","hi"],["hmn","hmn"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["jw","jw"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["fil","tl"],["tr","tr"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zu","zu"]],ar=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.throttleLimit=100}async translate(n){let{text:r,from:o,to:a}=n;if(!r)return{...n};let i=ar.langMap.get(o)||"auto",s=ar.langMap.get(a)||"zh-CN",c=await this.fetchWithoutToken(r,i,s);if(!c)throw new Error("google translate NETWORK_ERROR");if(!c.data[0]||c.data[0].length<=0)throw new Error("google translate API_SERVER_ERROR");return{text:c.data[0].map(l=>l[0]).filter(Boolean).join(""),from:ar.langMapReverse.get(c.data[2])||"auto",to:a}}async fetchWithoutToken(n,r,o){let a=new URLSearchParams({client:"gtx",dt:"t",sl:r,tl:o,q:n}),i="https://translate.googleapis.com/translate_a/single?"+a.toString();return{data:await ie({url:i})}}},Gt=ar;Gt.langMap=new Map(eu),Gt.langMapReverse=new Map(eu.map(([n,r])=>[r,n]));function tu(e){return e.result.texts}function Om(e,t){return t?e+(t-e%t):e}function Im(e,t){return e.split(t).length-1}function nu(e){let t=Date.now(),n=1;for(let r of e)n+=Im(r,"i");return Om(t,n)}function Fm(e,t){return Math.floor(Math.random()*(t-e+1))+e}function fs(){return Fm(1e6,1e8)}var ds="https://www2.deepl.com/jsonrpc",ua="auto",ru=[{code:"BG",language:"Bulgarian"},{code:"ZH",language:"Chinese"},{code:"CS",language:"Czech"},{code:"DA",language:"Danish"},{code:"NL",language:"Dutch"},{code:"EN",language:"English"},{code:"ET",language:"Estonian"},{code:"FI",language:"Finnish"},{code:"FR",language:"French"},{code:"DE",language:"German"},{code:"EL",language:"Greek"},{code:"HU",language:"Hungarian"},{code:"IT",language:"Italian"},{code:"JA",language:"Japanese"},{code:"LV",language:"Latvian"},{code:"LT",language:"Lithuanian"},{code:"PL",language:"Polish"},{code:"PT",language:"Portuguese"},{code:"RO",language:"Romanian"},{code:"RU",language:"Russian"},{code:"SK",language:"Slovak"},{code:"SL",language:"Slovenian"},{code:"ES",language:"Spanish"},{code:"SV",language:"Swedish"}],au=["formal","informal"];function su(e,t=ua,n=fs()){return{jsonrpc:"2.0",method:"LMT_split_text",params:{commonJobParams:{mode:"translate"},lang:{lang_user_selected:t,user_preferred_langs:[]},texts:e},id:n}}function Hm(e,t=1){let n=[],r=0;for(let o=0;o<e.length;o++){let a=e[o].chunks;for(let i=0;i<a.length;i++){let s=a[i];n.push({kind:"default",_index:o,sentences:[{id:r,text:s.sentences[0].text,prefix:s.sentences[0].prefix}],raw_en_context_before:a.slice(0,r).map(c=>c.sentences[0].text),raw_en_context_after:r+1<a.length?[a[r+1].sentences[0].text]:[],preferred_num_beams:t}),r++}}return n}function ou(e){return e.reduce((t,n)=>{let r=n.chunks;for(let o of r)t.push(o.sentences[0].text);return t},[])}function $m(e){if(!e)return{};if(!au.includes(e))throw new Error("Formality tone '{formality_tone}' not supported.");return{formality:e}}function iu(e,t,n,r=fs(),o=1,a){let i=ou(n);return{jsonrpc:"2.0",method:"LMT_handle_jobs",params:{jobs:Hm(n,o),lang:{user_preferred_langs:[t,e],source_lang_computed:e,target_lang:t},priority:1,commonJobParams:$m(a),timestamp:nu(ou(n))},id:r}}function Bm(e=ru){return e.reduce((t,n)=>(t[n.code.toLowerCase()]=n.code,t[n.language.toLowerCase()]=n.code,t),{})}function ms(e){return Bm()[e.toLowerCase()]}var lu={Accept:"*/*","Accept-Language":"en-US;q=0.8,en;q=0.7",Authority:"www2.deepl.com","Content-Type":"application/json",Origin:"https://www.deepl.com",Referer:"https://www.deepl.com/translator","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"same-site"};function cu(e){return JSON.stringify(e).replace('"method":"',()=>{let t=e;return(t.id+3)%13===0||(t.id+5)%29===0?'"method" : "':'"method": "'})}async function Um(e,t,n){let r=su(e,t,n);return await ie({method:"POST",url:ds+"?method=LMT_split_text",headers:lu,body:cu(r)})}async function jm(e,t,n,r,o,a){let i=await Um(e,n,r),s=iu(n==="auto"?i.result.lang.detected:n,t,tu(i),r,o,a),c=s.params.jobs.map(f=>f._index);s.params.jobs=s.params.jobs.map(f=>{let d={...f};return delete d._index,d});let u=await ie({method:"POST",url:ds+"?method=LMT_handle_jobs",body:cu(s),headers:lu}),l={from:i.result.lang.detected,to:t,text:[]};return u.result.translations.forEach((f,d)=>{let g=c[d];l.text[g]===void 0&&(l.text[g]="");let m=s.params.jobs[d].sentences[0].prefix,h=s.params.jobs[d].sentences[0].prefix;l.text[g]=l.text[g]+m+f.beams[0].sentences[0].text}),l}async function uu(e,t,n=ua,r,o,a){return e?e&&e.length===1&&e[0]===""?{text:[""],from:n,to:t}:jm(e,ms(t),ms(n)??"auto",r,o,a):{text:[],from:n,to:t}}var gu=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],xn=class extends ae{constructor(n,r){super(n,r);this.maxTextGroupLength=3;this.maxTextLength=800;this.isSupportList=!0}async translateList(n){let{text:r,to:o,from:a}=n,i=await uu(r,xn.langMap.get(o),xn.langMap.get(a));return{text:i.text,from:xn.langMapReverse.get(i.from),to:xn.langMapReverse.get(i.to)}}},Jt=xn;Jt.langMap=new Map(gu),Jt.langMapReverse=new Map(gu.map(([n,r])=>[r,n]));var fu=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],p1=new Map(fu),h1=new Map(fu.map(([e,t])=>[t,e]));var du=[["auto","auto"],["zh-CN","zh"],["zh-TW","zh-TW"],["de","de"],["en","en"],["es","es"],["fr","fr"],["id","id"],["it","it"],["ja","ja"],["ko","kr"],["ms","ms"],["pt","pt"],["ru","ru"],["th","th"],["tr","tr"],["vi","vi"]],ps="https://transmart.qq.com/api/imt",Yt=class extends ae{constructor(n,r){super(n,r);this.maxTextGroupLength=50;this.maxTextLength=1e3;this.throttleLimit=1e3;this.isSupportList=!1;this.clientKey=btoa("transmart_crx_"+navigator.userAgent).slice(0,100)}async translate(n){let{text:r,to:o}=n,a=await this.detectLanguage(r),i=Yt.langMap.get(a)||a,s=Yt.langMap.get(o)||o;if(a===o)return{text:r,from:a,to:o};let c=JSON.stringify({header:{fn:"auto_translation_block",client_key:this.clientKey},source:{text_block:r,lang:i,orig_url:n.url},target:{lang:s}}),u=await ie({url:ps,body:c,method:"POST"});if(u.header.ret_code!=="succ")throw new Error(u.message||u.header.ret_code);return{text:u.auto_translation,from:a||"auto",to:o}}async translateList(n){let{from:r,text:o,to:a}=n;if(o.length===1){let f=await this.translate({from:r,text:o[0],to:a,url:n.url});return{text:[f.text],from:f.from,to:f.to}}let i=await this.detectLanguage(o.join(`
`));if(i===a)return{text:o,from:i,to:a};let s=Yt.langMap.get(i)||i,c=Yt.langMap.get(a)||a,u=JSON.stringify({header:{fn:"auto_translation",client_key:this.clientKey},source:{text_list:o,lang:s,orig_url:n.url},target:{lang:c},type:"plain"}),l=await ie({url:ps,body:u,method:"POST"});if(l.header.ret_code!=="succ")throw new Error(l.message||l.header.ret_code);return{text:l.auto_translation,from:i||"auto",to:a}}detectLanguageLocally(n){return this.detectLanguageRemotely(n)}async detectLanguageRemotely(n){let r={header:{fn:"text_analysis",client_key:this.clientKey},text:n.slice(0,280)},o=await ie({url:ps,method:"POST",body:JSON.stringify(r)});if(o.header.ret_code!=="succ")throw new Error(o.message||o.header.ret_code);let a=o.language,i=Yt.langMapReverse.get(a);return i||a}},Xt=Yt;Xt.langMap=new Map(du),Xt.langMapReverse=new Map(du.map(([n,r])=>[r,n]));function mu(){return Math.random()>=0}var Tn=class extends ae{constructor(){super(...arguments);this.isSupportList=!0}async translate(n){let{text:r}=n;await gs(),await Ln(5e3);let o=r.match(/^\s*/)[0].length;return{text:r.slice(0,o)+"\u6A21\u62DF\uFF1A"+r.slice(o,-6),from:n.from,to:n.to}}async translateList(n){let{text:r,from:o,to:a}=n;if(await gs(),!mu())throw new Error("\u6A21\u62DF\u9519\u8BEF");return r.length===0?{from:o,to:a,text:[""]}:{from:o,to:a,text:r.map(i=>{let s=i.match(/^\s*/)[0].length;return i.slice(0,s)+"\u6A21\u62DF\uFF1A"+i.slice(s,-6)})}}};var bu=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"],["de","de"],["fr","fr"],["it","it"],["es","es"],["nl","nl"],["pl","pl"],["pt","pt"],["ru","ru"]],pu=new Map(bu),hu=new Map(bu.map(([e,t])=>[t,e])),or=class extends ae{constructor(n,r){super(n,r);this.apikey="";this.codename=or.DEFAULT_CODENAME;this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.apikey)throw new Error("apikey are required");this.apikey=n.apikey,n.codename&&(this.codename=n.codename)}static getAllProps(){return[...or.getProps(),{type:"password",name:"apikey",required:!0}]}static getProps(){return[{type:"select",name:"codename",label:"translationEngine",default:or.DEFAULT_CODENAME,required:!1,options:[{label:"translationServices.deepl",value:"deepl"},{label:"translationServices.youdao",value:"youdao"},{label:"translationServices.tencent",value:"tencent"},{label:"translationServices.aliyun",value:"aliyun"},{label:"translationServices.baidu",value:"baidu"},{label:"translationServices.caiyun",value:"caiyun"},{label:"translationServices.wechat",value:"wechat"},{label:"translationServices.azure",value:"azure"},{label:"translationServices.ibm",value:"ibm"},{label:"translationServices.aws",value:"aws"},{label:"translationServices.google",value:"google"}]}]}async translate(n){let{text:r,from:o,to:a}=n,i=await ie({url:`https://api.openl.club/services/${this.codename}/translate`,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({apikey:this.apikey,text:r,source_lang:pu.get(o)||"auto",target_lang:pu.get(a)})});if(i.status){let s=i;return{text:s.result,from:hu.get(s.source_lang),to:hu.get(s.target_lang)}}else throw new Error(i.msg)}},ga=or;ga.DEFAULT_CODENAME="deepl";var fa=ga;var xu=[["auto",""],["zh-CN","ZH"],["zh-TW","ZH"],["en","EN"],["de","DE"],["fr","FR"],["it","IT"],["ja","JA"],["es","ES"],["nl","NL"],["pl","PL"],["pt","PT"],["ru","RU"]],yu=new Map(xu),Wm=new Map(xu.map(([e,t])=>[t,e])),hs=class extends ae{constructor(n,r){super(n,r);this.authKey="";this.maxTextGroupLength=10;this.maxTextLength=1200;if(!n||!n.authKey)throw new Error("authKey are required");this.authKey=n.authKey}static getAllProps(){return[{name:"authKey",required:!0,type:"password"}]}async translateList(n){let{from:r,to:o,text:a}=n,i={source_lang:yu.get(r),target_lang:yu.get(o)},s=new URLSearchParams(i);a.forEach(g=>{s.append("text",g)});let c=s.toString(),u="https://api-free.deepl.com/v2/translate";this.authKey.includes(":fx")||(u="https://api.deepl.com/v2/translate");let l=await ie({url:u,method:"POST",body:c,headers:{Authorization:"DeepL-Auth-Key "+this.authKey,"content-type":"application/x-www-form-urlencoded"}}),{translations:f}=l;return{text:f.map(g=>g.text),from:f[0]&&Wm.get(f[0].detected_source_language)||r,to:o}}},Tu=hs;var zm=["authorization","content-type","content-length","user-agent","presigned-expires","expect"],Te={algorithm:"HMAC-SHA256",v4Identifier:"request",dateHeader:"X-Date",tokenHeader:"X-Security-Token",contentSha256Header:"X-Content-Sha256",notSignBody:"X-NotSignBody",kDatePrefix:"",credential:"X-Credential",algorithmKey:"X-Algorithm",signHeadersKey:"X-SignedHeaders",signQueriesKey:"X-SignedQueries",signatureKey:"X-Signature"},bs=e=>{try{return encodeURIComponent(e).replace(/[^A-Za-z0-9_.~\-%]+/g,escape).replace(/[*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)}catch{return""}},ys=e=>Object.keys(e).map(t=>{let n=e[t];if(typeof n>"u"||n===null)return;let r=bs(t);if(!!r)return Array.isArray(n)?`${r}=${n.map(bs).sort().join(`&${r}=`)}`:`${r}=${bs(n)}`}).filter(t=>t).join("&"),sr=class{constructor(t,n,r){this.request=t,this.request.headers=t.headers||{},this.serviceName=n,r=r||{},this.bodySha256=r.bodySha256,this.request.params=this.sortParams(this.request.params)}sortParams(t){let n={};return t&&Object.keys(t).filter(r=>{let o=t[r];return typeof o<"u"&&o!==null}).sort().map(r=>{n[r]=t[r]}),n}async addAuthorization(t,n){let r=this.getDateTime(n);await this.addHeaders(t,r),this.request.headers.Authorization=await this.authorization(t,r)}async authorization(t,n){let r=[],o=this.credentialString(n);return r.push(`${Te.algorithm} Credential=${t.accessKeyId}/${o}`),r.push(`SignedHeaders=${this.signedHeaders()}`),r.push(`Signature=${await this.signature(t,n)}`),r.join(", ")}async getSignUrl(t,n){let r=this.getDateTime(n),o={...this.request.params},a=this.request.params,i=this.request.headers;t.sessionToken&&(o[Te.tokenHeader]=t.sessionToken),o[Te.dateHeader]=r,o[Te.notSignBody]="",o[Te.credential]=`${t.accessKeyId}/${this.credentialString(r)}`,o[Te.algorithmKey]=Te.algorithm,o[Te.signHeadersKey]="",o[Te.signQueriesKey]=void 0,o[Te.signatureKey]=void 0,o=this.sortParams(o),this.request.params=o,this.request.headers={};let s=await this.signature(t,r);return this.request.params=a,this.request.headers=i,o[Te.signQueriesKey]=Object.keys(o).sort().join(";"),o[Te.signatureKey]=s,ys(o)}getDateTime(t){return this.iso8601(t).replace(/[:\-]|\.\d{3}/g,"")}async addHeaders(t,n){if(this.request.headers[Te.dateHeader]=n,t.sessionToken&&(this.request.headers[Te.tokenHeader]=t.sessionToken),this.request.body){let r=this.request.body;this.request.headers[Te.contentSha256Header]=await tt(r)}}async signature(t,n){let r=await this.getSigningKey(t,n.substr(0,8),this.request.region,this.serviceName);return Ur(await At(await this.stringToSign(n),r))}async stringToSign(t){let n=[];n.push(Te.algorithm),n.push(t),n.push(this.credentialString(t));let r=await this.canonicalString();return n.push(await this.hexEncodedHash(r)),n.join(`
`)}async canonicalString(){let t=[],n=this.request.pathname||"/";t.push(this.request.method.toUpperCase()),t.push(n);let r=ys(this.request.params)||"";return t.push(r),t.push(`${this.canonicalHeaders()}
`),t.push(this.signedHeaders()),t.push(await this.hexEncodedBodyHash()),t.join(`
`)}canonicalHeaders(){let t=[];Object.keys(this.request.headers).forEach(r=>{t.push([r,this.request.headers[r]])}),t.sort((r,o)=>r[0].toLowerCase()<o[0].toLowerCase()?-1:1);let n=[];return t.forEach(r=>{let o=r[0].toLowerCase();if(this.isSignableHeader(o)){let a=r[1];if(typeof a>"u"||a===null||typeof a.toString!="function")throw new Error(`Header ${o} contains invalid value`);n.push(`${o}:${this.canonicalHeaderValues(a.toString())}`)}}),n.join(`
`)}canonicalHeaderValues(t){return t.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")}signedHeaders(){let t=[];return Object.keys(this.request.headers).forEach(n=>{n=n.toLowerCase(),this.isSignableHeader(n)&&t.push(n)}),t.sort().join(";")}signedQueries(){return Object.keys(this.request.params).join(";")}credentialString(t){return this.createScope(t.substr(0,8),this.request.region,this.serviceName)}async hexEncodedHash(t){return await tt(t)}async hexEncodedBodyHash(){return this.request.headers[Te.contentSha256Header]?this.request.headers[Te.contentSha256Header]:this.request.body?await this.hexEncodedHash(ys(this.request.body)):await this.hexEncodedHash("")}isSignableHeader(t){return zm.indexOf(t)<0}iso8601(t){return t===void 0&&(t=new Date),t.toISOString().replace(/\.\d{3}Z$/,"Z")}async getSigningKey(t,n,r,o){let a=await At(n,`${Te.kDatePrefix}${t.secretKey}`),i=await At(r,a),s=await At(o,i);return At(Te.v4Identifier,s)}createScope(t,n,r){return[t.substr(0,8),n,r,Te.v4Identifier].join("/")}};var vu=[["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],wu=new Map(vu),qm=new Map(vu.map(([e,t])=>[t,e])),xs=class extends ae{constructor(n,r){super(n,r);this.accessKeyId="";this.secretAccessKey="";this.maxTextGroupLength=8;if(!n||!n.accessKeyId||!n.secretAccessKey)throw new Error("accessKeyId and secretAccessKey are required");this.accessKeyId=n.accessKeyId,this.secretAccessKey=n.secretAccessKey}static getAllProps(){return[{name:"accessKeyId",required:!0,type:"text"},{name:"secretAccessKey",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n,i=wu.get(o),s={TargetLanguage:wu.get(a)||a,TextList:r};i&&(s.SourceLanguage=i);let c={region:"cn-north-1",method:"POST",params:{Action:"TranslateText",Version:"2020-06-01"},pathname:"/",headers:{"Content-Type":"application/json",host:"open.volcengineapi.com"},body:JSON.stringify(s)},u=new sr(c,"translate");await u.addAuthorization({accessKeyId:this.accessKeyId,secretKey:this.secretAccessKey});let l=new URLSearchParams(c.params),f=await ie({url:"https://open.volcengineapi.com"+c.pathname+"?"+l.toString(),headers:u.request.headers,method:c.method,body:c.body});if(f.TranslationList){let d=f.TranslationList.map(m=>m.Translation),g=o;return f.TranslationList.length>0&&f.TranslationList[0].DetectedSourceLanguage&&(g=qm.get(f.TranslationList[0].DetectedSourceLanguage)||o),{text:d,from:g,to:a}}else{let d=f.ResponseMetaData.Error;throw new Ne(d.Code,d.Message)}}},Su=xs;var Eu=[["auto","detect"],["af","af"],["am","am"],["ar","ar"],["az","az"],["be","be"],["bg","bg"],["bn","bn"],["bs","bs"],["ca","ca"],["co","co"],["cs","cs"],["cy","cy"],["da","da"],["de","de"],["el","el"],["en","en"],["eo","eo"],["es","es"],["et","et"],["eu","eu"],["fa","fa"],["fi","fi"],["fj","fj"],["fr","fr"],["fy","fy"],["ga","ga"],["gd","gd"],["gl","gl"],["gu","gu"],["ha","ha"],["he","he"],["hi","hi"],["hr","hr"],["ht","ht"],["hu","hu"],["hy","hy"],["id","id"],["ig","ig"],["is","is"],["it","it"],["ja","ja"],["ka","ka"],["kk","kk"],["km","km"],["kn","kn"],["ko","ko"],["ku","ku"],["ky","ky"],["la","la"],["lb","lb"],["lo","lo"],["lt","lt"],["lv","lv"],["mg","mg"],["mi","mi"],["mk","mk"],["ml","ml"],["mn","mn"],["mr","mr"],["ms","ms"],["mt","mt"],["my","my"],["ne","ne"],["nl","nl"],["no","no"],["ny","ny"],["pa","pa"],["pl","pl"],["ps","ps"],["pt","pt"],["ro","ro"],["ru","ru"],["sd","sd"],["si","si"],["sk","sk"],["sl","sl"],["sm","sm"],["sn","sn"],["so","so"],["sq","sq"],["sr","sr"],["st","st"],["su","su"],["sv","sv"],["sw","sw"],["ta","ta"],["te","te"],["tg","tg"],["th","th"],["tn","tn"],["to","to"],["tr","tr"],["ty","ty"],["ug","ug"],["uk","uk"],["ur","ur"],["uz","uz"],["vi","vi"],["xh","xh"],["yi","yi"],["yo","yo"],["zh-CN","zh"],["zh-TW","zh-Hans"],["zu","zu"]],Vm=new Map(Eu),Km=new Map(Eu.map(([e,t])=>[t,e])),ir=class extends ae{constructor(){super(...arguments);this.maxTextGroupLength=50;this.isSupportList=!1}async translate(n){let{text:r,from:o,to:a}=n,s={source_language:Vm.get(o)||"detect",target_language:"zh",text:r},c=await ie({url:"https://translate.volcengine.com/crx/translate/v1/",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(c.base_resp&&c.base_resp.status_code===0){let u=c.translation,l=o;return c.detected_language&&(l=Km.get(c.detected_language)||o),{text:u,from:l,to:a}}else{let u=c.base_resp;throw new Ne(u.status_code.toString(),u.status_message)}}};var Gm=[["auto","auto"],["zh-CN","ZH"],["zh-TW","ZH"],["de","DE"],["en","EN"],["es","ES"],["fr","FR"],["it","IT"],["ja","JA"],["pt","PT"],["ru","RU"],["tr","tr"]],Au=new Map(Gm),lr=class extends ae{constructor(n,r){super(n,r);this.url="";this.isSupportList=!1;this.maxTextGroupLength=1;if(!n||!n.url)throw new Error("deeplx custom url are required, please check your settings.");this.url=n.url}static getAllProps(){return[{name:"url",required:!0,type:"text"}]}async translate(n){let{text:r,from:o,to:a}=n,s=await ie({url:this.url,headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify({source_lang:Au.get(o)||o,target_lang:Au.get(a)||a,text:r})});if(s.code===200)return{text:s.data,from:o,to:a};throw new Error(s.message||s.message||"API Error")}};var Ts="https://{s}bing.com",Pu=Ts+"/translator",Jm=Ts+"/ttranslatev3",Ym=Ts+"/tspellcheckv3",da="bingGlobalConfig",Mu=[["auto","auto-detect"],["ar","ar"],["ga","ga"],["et","et"],["bg","bg"],["is","is"],["pl","pl"],["bs","bs-Latn"],["fa","fa"],["da","da"],["de","de"],["ru","ru"],["fr","fr"],["zh-TW","zh-Hant"],["fil","fil"],["fj","fj"],["fi","fi"],["gu","gu"],["kk","kk"],["ht","ht"],["ko","ko"],["nl","nl"],["ca","ca"],["zh-CN","zh-Hans"],["cs","cs"],["kn","kn"],["otq","otq"],["tlh","tlh"],["hr","hr"],["lv","lv"],["lt","lt"],["ro","ro"],["mg","mg"],["mt","mt"],["mr","mr"],["ml","ml"],["ms","ms"],["mi","mi"],["bn","bn-BD"],["hmn","mww"],["af","af"],["pa","pa"],["pt","pt"],["ps","ps"],["ja","ja"],["sv","sv"],["sm","sm"],["sr-Latn","sr-Latn"],["sr-Cyrl","sr-Cyrl"],["no","nb"],["sk","sk"],["sl","sl"],["sw","sw"],["ty","ty"],["te","te"],["ta","ta"],["th","th"],["to","to"],["tr","tr"],["cy","cy"],["ur","ur"],["uk","uk"],["es","es"],["he","iw"],["el","el"],["hu","hu"],["it","it"],["hi","hi"],["id","id"],["en","en"],["yua","yua"],["yue","yua"],["vi","vi"],["ku","ku"],["km","kmr"]],Lu=new Map(Mu),_u=new Map(Mu.map(([e,t])=>[t,e])),Cu=1e3,ot,wn;function ws(e,t){return e.replace("{s}",t?t+".":"")}async function Xm(){if(!ot){let n=await Q.storage.local.get(da);return n&&(ot=n[da]),!0}let{tokenTs:e,tokenExpiryInterval:t}=ot;return Date.now()-e>t}async function ku(){let e,t,n,r,o,a,i,s,c,u;try{let l=ws(Pu,e),f=await ie({url:l,responseType:"raw"}),{body:d,headers:g,url:m}=f;e=m.match(/^https?:\/\/(\w+)\.bing\.com/)[1],u=g["set-cookie"],t=d.match(/IG:"([^"]+)"/)[1],n=d.match(/data-iid="([^"]+)"/)[1],[o,r,a,i,s,c]=JSON.parse(d.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])}catch(l){throw console.error("failed to fetch global config",l),l}return ot={subdomain:e,IG:t,IID:n,key:o,token:r,tokenTs:o,tokenExpiryInterval:a,isVertical:i,frontDoorBotClassification:s,isSignedInOrCorporateUser:c,cookie:u,count:0},await Q.storage.local.set({[da]:ot}),ot}function Qm(e){let{IG:t,IID:n,subdomain:r,isVertical:o}=ot;return ws(e?Ym:Jm,r)+"?isVertical=1"+(t&&t.length?"&IG="+t:"")+(n&&n.length?"&IID="+n+"."+ot.count++:"")}function Zm(e,t,n,r){let{token:o,key:a}=ot,i={fromLang:n,text:t,token:o,key:a};return!e&&r&&(i.to=r),i}async function Ru(e,t,n){if(!e||!(e=e.trim()))return;if(e.length>Cu)throw new Error(`The supported maximum length of text is ${Cu}. Please shorten the text.`);wn||(wn=ku()),await wn,await Xm()&&(wn=ku(),await wn),t=t||"auto",n=n||"zh-CN",t=Lu.get(t)||t,n=Lu.get(n)||n;let o=Qm(!1),a=Zm(!1,e,t,n==="auto-detect"?"zh-Hans":n),i={referer:ws(Pu,ot.subdomain),"content-type":"application/x-www-form-urlencoded"},s=new URLSearchParams(a),c=o,u=s.toString(),l=await ie({url:c,headers:i,method:"POST",body:u});if(l.ShowCaptcha||l.StatusCode===401||l.statusCode){if(ot=null,wn=null,await Q.storage.local.remove(da),l.ShowCaptcha)throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${l.StatusCode}.
    `);if(l.StatusCode===401)throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);if(l.statusCode)throw new Error(`Something went wrong! The response is ${JSON.stringify(l)}.`)}let f=l[0].translations[0],d=l[0].detectedLanguage;return{text:f.text,from:_u.get(d.language),to:_u.get(f.to)}}var cr=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.maxTextLength=1e3}async translate(n){let{text:r,from:o,to:a}=n;return r?await Ru(r,o,a):{...n}}};var Du=[["auto","auto"],["zh-CN","zh"],["en","en"],["yue","yue"],["wyw","wyw"],["ja","jp"],["ko","kor"],["fr","fra"],["es","spa"],["th","th"],["ar","ara"],["ru","ru"],["pt","pt"],["de","de"],["it","it"],["el","el"],["nl","nl"],["pl","pl"],["bg","bul"],["et","est"],["da","dan"],["fi","fin"],["cs","cs"],["ro","rom"],["sl","slo"],["sv","swe"],["hu","hu"],["zh-TW","cht"],["vi","vie"]],Nu=new Map(Du),ep=new Map(Du.map(([e,t])=>[t,e])),vs=class extends ae{constructor(n,r){super(n,r);this.endpoint="https://api.fanyi.baidu.com/api/trans/vip/translate";this.appid="";this.key="";this.isSupportList=!1;if(!n||!n.appid||!n.key)throw new Error("appid and key are required");this.appid=n.appid,this.key=n.key}static getAllProps(){return[{name:"appid",required:!0,type:"text"},{name:"key",required:!0,type:"password"}]}async translate(n){let r=Date.now().toString(),{endpoint:o}=this,{appid:a,key:i}=this,{text:s,from:c,to:u}=n,l=new URLSearchParams({from:Nu.get(c),to:Nu.get(u),q:s,salt:r,appid:a,sign:pn(a+s+r+i)}),f=new URL(o);f.search=l.toString();let d=await ie({url:f.toString()});if(d.error_code)throw console.error(new Error("[Baidu service]"+d.error_msg)),new Ne("API_SERVER_ERROR",d.error_msg);let{trans_result:g,from:m}=d,h=g.map(({dst:p})=>p);return{from:ep.get(m),to:u,text:h.join(`
`)}}},Ou=vs;var tp=[["auto","auto"],["zh-CN","zh"],["en","en"],["ja","ja"]],Iu=new Map(tp),Ss=class extends ae{constructor(n,r){super(n,r);this.token="";if(!n||!n.token)throw new Error("token are required");this.token=n.token}static getAllProps(){return[{name:"token",required:!0,type:"password"}]}async translateList(n){let{text:r,from:o,to:a}=n;o==="auto"&&(o=await Xe({text:r.join(" ")}));let i=r;return{text:(await ie({url:"https://api.interpreter.caiyunai.com/v1/translator",headers:{"content-type":"application/json","x-authorization":"token "+this.token},method:"POST",body:JSON.stringify({source:i,trans_type:`${Iu.get(o)}2${Iu.get(a)}`})})).target,from:o,to:a}}},Fu=Ss;var $u=[["auto","auto"],["en","en"],["ru","ru"],["pt","pt"],["es","es"],["zh-CN","zh-CHS"],["ja","ja"],["ko","ko"],["fr","fr"],["ar","ar"],["id","id"],["vi","vi"],["it","it"]],Hu=new Map($u),np=new Map($u.map(([e,t])=>[t,e]));function rp(e){let t=e.length;return t<=20?e:e.substring(0,10)+t+e.substring(t-10,t)}var Es=class extends ae{constructor(n,r){super(n,r);this.isSupportList=!1;this.appId="";this.appSecret="";if(!n||!n.appId||!n.appSecret)throw new Error("appId and appSecret are required");this.appId=n.appId,this.appSecret=n.appSecret}static getAllProps(){return[{name:"appId",required:!0,type:"text"},{name:"appSecret",required:!0,type:"password"}]}async translate(n){let{text:r,from:o,to:a}=n,i=new Date().getTime(),s=Math.round(new Date().getTime()/1e3),c=this.appId+rp(r)+i+s+this.appSecret,u=await tt(c),l={q:r,appKey:this.appId,salt:i.toString(),from:Hu.get(o),to:Hu.get(a),sign:u,signType:"v3",curtime:s.toString()},f=new URLSearchParams(l),g=await ie({url:"https://openapi.youdao.com/api",method:"POST",body:f.toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),m=g.l,[h,y]=m.split("2");return{text:g.translation.join(`
`),from:np.get(h),to:a}}},Bu=Es;var vn={mock:{class:Tn,name:"Mock",homepage:"https://www.google.com"},mock2:{class:Tn,name:"Mock2",homepage:"https://www.google.com"},google:{class:Gt,name:"Google",homepage:"https://translate.google.com/"},transmart:{class:Xt,name:"Transmart",homepage:"https://transmart.qq.com/"},deepl:{class:Tu,name:"DeepL",homepage:"https://www.deepl.com/translator",docUrl:"https://hcfy.app/docs/services/deepl"},volc:{class:Su,name:"Volc",homepage:"https://www.volcengine.com/",docUrl:"https://hcfy.app/docs/services/hs-api"},volcAlpha:{class:ir,name:"Volc Alpha",alpha:!0,homepage:"https://www.volcengine.com/"},bing:{class:cr,name:"Bing",homepage:"https://www.bing.com/translator"},tencent:{class:Kt,name:"Tencent",homepage:"https://fanyi.qq.com/",docUrl:"https://hcfy.app/docs/services/qq-api"},baidu:{class:Ou,name:"Baidu",homepage:"https://fanyi.baidu.com/",docUrl:"https://hcfy.app/docs/services/baidu-api"},caiyun:{class:Fu,name:"Caiyun",homepage:"https://fanyi.caiyunapp.com/",docUrl:"https://hcfy.app/docs/services/caiyun-api"},openl:{class:fa,name:"Openl",homepage:"https://openl.club/",docUrl:"https://docs.openl.club/"},youdao:{class:Bu,name:"Youdao",homepage:"https://fanyi.youdao.com/",docUrl:"https://hcfy.app/docs/services/youdao-api"},d:{class:Jt,name:"Deepl(Alpha) ",alpha:!0,homepage:"https://www.deepl.com/translator"},deeplx:{class:lr,name:"DeepLX(Alpha)",alpha:!0,homepage:"https://www.deepl.com/translator"}};function As(e,t){let n=vn[e],r=t.config.translationServices[e]||{},o=!0,a=n.class.getAllProps();if(a.length>0){let i=a.filter(s=>s.required);if(i.length>0){for(let s of i)if(!r[s.name]){o=!1;break}}}return{...n,id:e,selected:t.translationService===e,ok:o,config:r,props:n.class.getProps(),allProps:a}}var ap=Object.keys(vn),Uu=e=>{let{config:t}=e,n=t.alpha,r=t.debug;return ap.filter(o=>{let a=vn[o];return o.startsWith("mock")?!!r:!a.alpha||n||o===e.translationService}).map(o=>As(o,e))};async function Yc(e,t){if(!e.text)return e;let n=await cs({sentences:[e]},t);if(n.sentences.length>0)return{...e,...n.sentences[0]};throw new Ne("translateFailed","translate failed")}async function cs(e,t,n){if(!e.sentences.length)return{...e};let{config:r,translationService:o}=t,a=r.translationGeneralConfig,i=r.translationServices,s=o,c=i[s]||{};e.sentences=e.sentences.map(y=>y);let u=[],l={sentences:Array(e.sentences.length)},f=e.sentences.length,d=-1;if(r.cache)for(let y of e.sentences){d++;let p=s;s==="openl"&&(p=s+"-"+c.codename||fa.DEFAULT_CODENAME);let b=null;try{b=await ur(Xc({originalText:y.text,from:y.from,to:y.to,service:p}),1e3)}catch(T){J.warn("query cache DB error, but it's ok",T)}if(b){let T={...y,text:b.translatedText};l.sentences[d]=T,n&&n(null,T,y)}else u.push(y)}else u.push(...e.sentences);let g=u.length;if(f-g>0&&J.debug(`use ${f-g} sentences from cache`),!u.length)return l;let m;try{m=new vn[s].class(c,a),await m.init()}catch(y){if(n)for(let p of u)n(y,null,p);throw y}let h=await m.multipleTranslate({sentences:u},(y,p,b)=>{if(n&&(n(y,p,b),!y&&p&&!s.startsWith("mock")&&r.cache)){let T=s;s==="openl"&&(T=s+"-"+c.codename||fa.DEFAULT_CODENAME),r.cache&&ur(Qc({translatedText:p.text,from:b.from,to:b.to,detectedFrom:p.from,key:pn(b.text),service:T}),3e3).catch(L=>{J.warn("set cache DB error",L)})}});for(let y of h.sentences){let p=l.sentences.findIndex(b=>!b);if(p===-1)throw new Ne("translateFailed","can not match the result");l.sentences[p]=y}return l}var ju={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},Wu={...Dt,"zh-CN":{...ju["zh-CN"],...Dt["zh-CN"]},"zh-TW":{...ju["zh-TW"],...Dt["zh-TW"]}},zu=Wu;var ma=(e,t,n)=>{let r=uc(Wu,`languages.${e}`,t,"en");return n?So[e]||e:r!==`languages.${e}`?r:So[e]};function Ls(e){let t=lc(),{onTranslateTheMainPage:n,onUserConfigChange:r,pageStatus:o,config:a,onTranslateTheWholePage:i,openOptionsPage:s,ontranslateToThePageEndImmediately:c,onSetPageLanguage:u,onToggleTranslate:l,onTranslateLocalPdfFile:f,onTranslatePdf:d,onRestorePage:g,ctx:m,currentUrl:h,currentLang:y,onClose:p,onTranslatePage:b}=e,T=r,[L,R]=xe(""),[v,w]=xe(""),{t:E}=ea(),A=null,F=null,$=null,z=null,N=null,G=null,Y=null,we=null,oe=null,ee=null,te=null,ft=null;if(a){let{translationService:_,translationServices:H,translationUrlPattern:P}=a;if(vn[_]&&(we=As(_,m)),H&&H[_]?ft=H[_]||{}:ft={},h&&Yr(h)){oe=new URL(h),ee=sc(oe.hostname),te=ic(h);let{matches:I,excludeMatches:K}=P;F=I.includes(ee),A=I.includes(oe.hostname),z=K.includes(ee),$=K.includes(oe.hostname),G=I.includes(te),Y=K.includes(te)}}if(a&&y&&y!=="auto"){let{translationLanguagePattern:_}=a,{matches:H}=_;H.includes(y)?N=!0:N=!1}let bt=_=>{_.preventDefault(),s(),p()},S=_=>{T(H=>(H.alpha?R("Success disable alpha!"):R("Success enable alpha!"),{...H,alpha:!H.alpha}))},D=()=>{T(_=>({..._,translationArea:"body"})),i()},O=()=>{T(_=>({..._,translationArea:"main"})),n()},X=(_,H,P,I)=>{if(_==="default"){T(B=>{let ue={...B.translationUrlPattern};return{...B,translationUrlPattern:{...B.translationUrlPattern,matches:St([oe?.hostname,ee,h],ue.matches),excludeMatches:St([oe?.hostname,ee,h],ue.excludeMatches)}}});return}let K=_,se=K==="matches"?"excludeMatches":"matches";oe&&T(B=>{let ue={...B.translationUrlPattern};return ue[K]=Co(H,ue[K]),I.length>0&&(ue[K]=St(I,ue[K])),ue[se]=St(P,ue[se]),{...B,translationUrlPattern:{...B.translationUrlPattern,...ue}}}),K==="matches"&&o==="Original"?setTimeout(()=>{b(),p()},100):K==="excludeMatches"&&o==="Translated"&&setTimeout(()=>{g(),p()},100)},V=_=>{if(!_){T(I=>{let K={...I.translationLanguagePattern};return{...I,translationLanguagePattern:{...I.translationLanguagePattern,matches:St(y,K.matches),excludeMatches:St(y,K.excludeMatches)}}});return}let H=_,P=H==="matches"?"excludeMatches":"matches";y&&T(I=>{let K={...I.translationLanguagePattern};return K[H]=Co(y,K[H]),K[P]=St(y,K[P]),{...I,translationLanguagePattern:{...I.translationLanguagePattern,...K}}}),H==="matches"&&o==="Original"&&setTimeout(()=>{b(),p()},100)},he=oe?.pathname.toLowerCase().endsWith(".pdf"),de=E("translate");o==="Translated"?de=E("show-original"):o==="Original"?he?Pr()&&oe.protocol==="file:"?de=E("translate-firefox-local-pdf"):de=E("translate-pdf"):de=E("translate"):de=E(o);let Ce=E("translateToThePageEndImmediately");(o==="Original"||o==="Translated")&&(a.shortcuts.toggleTranslatePage&&(ml()&&m.rule.fingerCountToToggleTranslagePageWhenTouching>=2?de+=` (${E(`fingers.${m.rule.fingerCountToToggleTranslagePageWhenTouching}`)})`:de+=` (${a.shortcuts.toggleTranslatePage})`),a.shortcuts.toggleTranslateToThePageEndImmediately&&(Ce+=` (${a.shortcuts.toggleTranslateToThePageEndImmediately})`));let me=[];m&&(me=Uu(m));let ce=_=>{_.preventDefault(),p()};return U("div",{class:"p-3",children:[U("div",{class:"text-sm",children:[U("div",{class:"flex justify-between mb-2",children:[U("label",{class:"inline-block",children:[E("popupSourceLanguage"),"\uFF1A"]}),U(_t,{items:vt.map(_=>({label:ma(_,a.interfaceLanguage),value:_,selected:_===y,onSelected:H=>{u(H.value)}}))})]}),a&&a.targetLanguage&&U("div",{class:"flex justify-between mb-2",children:[U("label",{class:"inline-block",children:[E("popupTarget"),"\uFF1A"]}),U(_t,{items:vt.filter(_=>_!=="auto").map(_=>({label:ma(_,a.interfaceLanguage),value:_,selected:_===a.targetLanguage,onSelected:H=>{T(P=>({...P,targetLanguage:H.value}))}}))})]}),we&&me.length>0&&U(it,{children:[U("div",{class:"flex justify-between mb-2",children:[U("label",{class:"inline-block",children:[E("popupService"),"\uFF1A"]}),U(_t,{items:me.map(_=>({label:`${E("translationServices."+_.id)}${_.ok?"":" "+E("needAction")}`,value:_.id,selected:_.selected,onSelected:H=>{let P=me.find(I=>I.id===H.value);P.ok?(T(I=>({...I,translationService:P.id})),P.props.length===0?setTimeout(()=>{b()},1):setTimeout(()=>{g()},1)):(T(I=>({...I,translationService:P.id})),setTimeout(()=>{g()},1),setTimeout(()=>{s(),p()},100))}}))})]}),ft&&we.props.length>0&&we.props.map((_,H)=>U("div",{class:"pl-4 text-sm",children:U(zo,{field:_,value:ft[_.name],onChange:P=>{T(I=>{let K=I.translationServices||{},se=K[we.id]||{};return setTimeout(()=>{g()},1),{...I,translationServices:{...K,[we.id]:{...se,[_.name]:P}}}})}},"field-"+H)}))]}),oe&&U("div",{class:"flex justify-between mb-2",children:[U("label",{class:"inline-block",children:E("forThisSite")}),U(_t,{items:[{label:E("default"),value:"default",selected:A===!1&&$===!1&&!F&&!z&&!G&&!Y,onSelected:()=>{X("default",oe.hostname,[],[])}},{label:E("alwaysTranslateSomeSite",{hostname:oe.hostname}),value:"matches",selected:A,onSelected:_=>{X(_.value,oe.hostname,[oe.hostname,ee,te],[ee])}},{label:E("neverTranslateSomeSite",{hostname:oe.hostname}),value:"excludeMatches",selected:$,onSelected:_=>{X(_.value,oe.hostname,[oe.hostname,ee,te],[ee])}},ee&&{label:E("alwaysTranslateSomeSite",{hostname:ee}),value:"matchesWild",selected:F,onSelected:()=>{X("matches",ee,[te,oe.hostname,ee],[oe.hostname])}},ee&&{label:E("neverTranslateSomeSite",{hostname:ee}),value:"excludeMatchesWild",selected:z,onSelected:()=>{X("excludeMatches",ee,[oe.hostname,te,ee],[oe.hostname])}},te&&{label:E("alwaysTranslateSomeSite",{hostname:E("currentUrl")}),value:"matchesUrl",selected:G,onSelected:()=>{X("matches",te,[te],[])}},te&&{label:E("neverTranslateSomeSite",{hostname:E("currentUrl")}),value:"excludeMatchesUrl",selected:Y,onSelected:()=>{X("excludeMatches",te,[te],[])}}].filter(Boolean)})]})]}),U("div",{class:"",children:U("button",{class:"py-2 mt-1 mb-2 main-button ",onClick:()=>{he?d&&d():l()},"aria-busy":o==="Translating",disabled:o==="Translating",children:de})}),U("div",{class:"flex justify-between",children:[y&&y!=="auto"?U("label",{for:"alwaysTranslateThisLanugage",class:"text-sm",children:[U("input",{type:"checkbox",id:"alwaysTranslateThisLanugage",name:"alwaysTranslateThisLanugage",checked:!!N,onChange:_=>{let H=_.target.checked;V(H?"matches":void 0)}}),E("alwaysTranslateSomeLanguage",{language:ma(y,a.interfaceLanguage)})]}):U("span",{}),U($o,{label:E("more"),showArrow:!0,onSelected:_=>{_.value==="translateTheWholePage"?i():_.value==="translateToThePageEndImmediately"?c():_.value==="translateTheMainPage"?n():_.value==="showTranslationOnly"||(_.value==="translateLocalPdfFile"?f&&f():_.value==="donate"?(globalThis.open(a.donateUrl),p()):_.value==="feedback"?(globalThis.open(a.feedbackUrl),p()):_.value==="options"?(s(),p()):_.value==="changeToTranslateTheWholePage"?D():_.value==="changeToTranslateTheMainPage"&&O())},menus:[a.translationArea==="main"&&{label:E("changeToTranslateTheWholePage"),value:"changeToTranslateTheWholePage"},a.translationArea==="body"&&{label:E("changeToTranslateTheMainPage"),value:"changeToTranslateTheMainPage"},{label:Ce,value:"translateToThePageEndImmediately"},!$e()&&{label:E("browser.translateLocalPdfFile"),value:"translateLocalPdfFile"},{label:"\u2615\uFE0F "+E("sponsorLabel"),value:"donate"},{label:"\u{1F41B} "+E("feedback"),value:"feedback"},{label:"\u2699\uFE0F "+E("browser.openOptionsPage"),value:"options"}].filter(Boolean)})]}),U("div",{class:"text-sm",children:L}),U("div",{class:"text-sm",children:v}),U("footer",{class:"mt-3 text-sm flex justify-between",children:[U("a",{href:"#",class:"secondary",onClick:bt,children:E("options")}),$e()&&U("a",{href:"#",class:"secondary",onClick:ce,children:E("close")}),U("span",{class:"immersive-translate-no-select muted",onClick:oc(7)(S),children:["V",t]})]})]})}var Qt={},qu={};function pa(e,t){if(qu[e])try{t()}catch(n){J.error("run callback failed",n)}else Qt[e]||(Qt[e]=[]),Qt[e].push(t)}function op(e){if(Qt[e]&&Qt[e].length){let t=[...Qt[e]];Qt[e]=[],t.forEach(n=>n())}}function _s(){let[e,t]=xe("Original"),[n,r,o,a]=nc(),[i,s]=xe(null),[c,u]=xe(null),[l,f]=xe(null),[d,g]=xe("auto"),[m,h]=xe(null),y=w=>{let{tabId:E,payload:A}=w.detail,{method:F,data:$}=A;J.debug("popup received message",F,$||" "),F==="setPageStatus"&&E&&t($)};Ze(()=>{let w=Xn();return Q.tabs.query({currentWindow:!0,active:!0}).then(E=>{let A=E[0].id;f(A);let F=E[0].url;Q.tabs.onUpdated.addListener(($,z,N)=>{$===$&&N.url&&c&&N.url!==c&&(u(N.url),window.location.reload())}),globalThis.document.addEventListener(Hn,y),F&&u(F),F&&Yr(F)&&(u(F),w.sendMessage(`content_script:main_sync:${A}`,{method:"ping"}).then($=>{qu[A]=!0,op(A)}).catch($=>{J.debug("ping failed, but it is ok. cause maybe content is not injected",$)}),pa(A,async()=>{let $=await w.sendMessage(`content_script:main_sync:${A}`,{method:"getPageStatus"});t($)}),pa(A,async()=>{let $=await jt();s($)}),pa(A,async()=>{let $=await w.sendMessage(`content_script:main_sync:${A}`,{method:"getCurrentPageLanguage"});g($)}))}),()=>{globalThis.document.removeEventListener(Hn,y)}},[]),Ze(()=>{jt().then(w=>{s(w)})},[n]),Ze(()=>{c&&i&&Jn({url:c,config:i}).then(w=>{h(w)})},[c,i]);let p=w=>async()=>{let E=Xn(),F=(await Q.tabs.query({currentWindow:!0,active:!0}))[0].id;E.sendMessage(`content_script:main:${F}`,{method:w}),setTimeout(()=>{globalThis.close()},10)},b=()=>{let w=Q.runtime.getURL(Mr);Q.tabs.create({url:w}),globalThis.close()},T=()=>{c&&l&&(Q.tabs.update(l,{url:Pl(c)}),globalThis.close())},L=w=>{let E=Xn();if(g(w),l&&c){let A=fl(c,w,i.sourceLanguageUrlPattern);r(F=>({...F,sourceLanguageUrlPattern:A})),pa(l,()=>{E.sendMessage(`content_script:main:${l}`,{method:"setCurrentPageLanguageByClient",data:w})})}},R=()=>{globalThis.close()},v=()=>{Q.runtime.openOptionsPage(),globalThis.close()};return!i||!m?null:U(Ls,{onClose:R,onToggleTranslate:p("toggleTranslatePage"),openOptionsPage:v,onTranslatePdf:T,onTranslateLocalPdfFile:b,onTranslateTheMainPage:p("translateTheMainPage"),onTranslateTheWholePage:p("translateTheWholePage"),ontranslateToThePageEndImmediately:p("translateToThePageEndImmediately"),onTranslatePage:p("translatePage"),onRestorePage:p("restorePage"),onSetPageLanguage:L,onUserConfigChange:r,config:i,pageStatus:e,ctx:m,currentUrl:c,currentLang:d})}var Vu=document.getElementById("mount");ac();Vu&&(async()=>{let e=await jt();e.debug&&J.setLevel("debug"),Sa(U(gc,{lang:e.interfaceLanguage,translations:zu,fallbackLang:"zh-CN",children:U(_s,{})}),Vu)})();
