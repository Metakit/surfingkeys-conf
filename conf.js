const util = require("./util")
const keys = require("./keys")
const completions = require("./completions")

// ---- Settings ----//
util.addSettings({
  hintAlign:                "left",
  omnibarSuggestionTimeout: 500,
  richHintsForKeystroke:    1,

  // Switch tabs
  tabsThreshold:  20,
  tabsMRUOrder:   false,
  historyMUOrder: false,

  // Page march
  prevLinkRegex: /((<(<)?|prev(ious)?|back|older|(<)?(<)?上一页|‹|←|«|≪)+)/i,
  nextLinkRegex: /((>(>)?|next|more|newer|下一页(>)?(>)?|›|→|»|≫)+)/i,

  // Auto insert mode
  editableBodyCare: false,

  // Searching
  defaultSearchEngine: "go",

  // Theme
  theme: `
    /* Disable RichHints CSS animation */
    .expandRichHints {
        animation: 0s ease-in-out 1 forwards expandRichHints;
    }
    .collapseRichHints {
        animation: 0s ease-in-out 1 forwards collapseRichHints;
    }

    /* Edit these variables for easy theme making */
    :root {
      /* Font */
      --font: 'Source Code Pro', Ubuntu, sans;
      --font-size: 18;
      --font-weight: bold;

      --fg: #C5C8C6;
      --bg: #282A2E;
      --bg-dark: #1D1F21;
      --border: #373b41;
      --main-fg: #81A2BE;
      --accent-fg: #52C196;
      --info-fg: #AC7BBA;
      --select: #585858;
      /* Unused Alternate Colors */
      /* --cyan: #4CB3BC; */
      /* --orange: #DE935F; */
      /* --red: #CC6666; */
      /* --yellow: #CBCA77; */
    }
    /* ---------- Generic ---------- */
    .sk_theme {
    background: var(--bg);
    color: var(--fg);
      background-color: var(--bg);
      border-color: var(--border);
      font-family: var(--font);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
    }
    input {
      font-family: var(--font);
      font-weight: var(--font-weight);
    }
    .sk_theme tbody {
      color: var(--fg);
    }
    .sk_theme input {
      color: var(--fg);
    }
    /* Hints */
    #sk_hints .begin {
      color: var(--accent-fg) !important;
    }
    #sk_tabs .sk_tab {
      background: var(--bg-dark);
      border: 1px solid var(--border);
      color: var(--fg);
    }
    #sk_tabs .sk_tab_hint {
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--accent-fg);
    }
    .sk_theme #sk_frame {
      background: var(--bg);
      opacity: 0.2;
      color: var(--accent-fg);
    }
    /* ---------- Omnibar ---------- */
    /* Uncomment this and use settings.omnibarPosition = 'bottom' for Pentadactyl/Tridactyl style bottom bar */
    /* .sk_theme#sk_omnibar {
      width: 100%;
      left: 0;
    } */
    .sk_theme .title {
      color: var(--accent-fg);
    }
    .sk_theme .url {
      color: var(--main-fg);
    }
    .sk_theme .annotation {
      color: var(--accent-fg);
    }
    .sk_theme .omnibar_highlight {
      color: var(--accent-fg);
    }
    .sk_theme .omnibar_timestamp {
      color: var(--info-fg);
    }
    .sk_theme .omnibar_visitcount {
      color: var(--accent-fg);
    }
    .sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
      background: var(--bg-dark);
    }
    .sk_theme #sk_omnibarSearchResult ul li.focused {
      background: var(--border);
    }
    .sk_theme #sk_omnibarSearchArea {
      border-top-color: var(--border);
      border-bottom-color: var(--border);
    }
    .sk_theme #sk_omnibarSearchArea input,
    .sk_theme #sk_omnibarSearchArea span {
      font-size: var(--font-size);
    }
    .sk_theme .separator {
      color: var(--accent-fg);
    }
    /* ---------- Popup Notification Banner ---------- */
    #sk_banner {
      font-family: var(--font);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      background: var(--bg);
      border-color: var(--border);
      color: var(--fg);
      opacity: 0.9;
    }
    /* ---------- Popup Keys ---------- */
    #sk_keystroke {
      background-color: var(--bg);
    }
    .sk_theme kbd .candidates {
      color: var(--info-fg);
    }
    .sk_theme span.annotation {
      color: var(--accent-fg);
    }
    /* ---------- Popup Translation Bubble ---------- */
    #sk_bubble {
      background-color: var(--bg) !important;
      color: var(--fg) !important;
      border-color: var(--border) !important;
    }
    #sk_bubble * {
      color: var(--fg) !important;
    }
    #sk_bubble div.sk_arrow div:nth-of-type(1) {
      border-top-color: var(--border) !important;
      border-bottom-color: var(--border) !important;
    }
    #sk_bubble div.sk_arrow div:nth-of-type(2) {
      border-top-color: var(--bg) !important;
      border-bottom-color: var(--bg) !important;
    }
    /* ---------- Search ---------- */
    #sk_status,
    #sk_find {
      font-size: var(--font-size);
      border-color: var(--border);
    }
    .sk_theme kbd {
      background: var(--bg-dark);
      border-color: var(--border);
      box-shadow: none;
      color: var(--fg);
    }
    .sk_theme .feature_name span {
      color: var(--main-fg);
    }
    /* ---------- ACE Editor ---------- */
    #sk_editor {
      background: var(--bg-dark) !important;
      height: 50% !important;
      /* Remove this to restore the default editor size */
    }
    .ace_dialog-bottom {
      border-top: 1px solid var(--bg) !important;
    }
    .ace-chrome .ace_print-margin,
    .ace_gutter,
    .ace_gutter-cell,
    .ace_dialog {
      background: var(--bg) !important;
    }
    .ace-chrome {
      color: var(--fg) !important;
    }
    .ace_gutter,
    .ace_dialog {
      color: var(--fg) !important;
    }
    .ace_cursor {
      color: var(--fg) !important;
    }
    .normal-mode .ace_cursor {
      background-color: var(--fg) !important;
      border: var(--fg) !important;
      opacity: 0.7 !important;
    }
    .ace_marker-layer .ace_selection {
      background: var(--select) !important;
    }
    .ace_editor,
    .ace_dialog span,
    .ace_dialog input {
      font-family: var(--font);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
    }
  `,
})

if (typeof Hints !== "undefined") {
  Hints.characters = "qwertasdfgzxcvb"

  // Theme
  Hints.style("border: solid 2px #373B41; color:#52C196; background: initial; background-color: #1D1F21;")
  Hints.style("border: solid 2px #373B41 !important; padding: 1px !important; color: #C5C8C6 !important; background: #1D1F21 !important;", "text")
  Visual.style("marks", "background-color: #52C19699;")
  Visual.style("cursor", "background-color: #81A2BE;")
}

// Leader for site-specific mappings
const siteleader = "<Space>"

// Leader for OmniBar searchEngines
const searchleader = "a"

// Process mappings and completions
// See ./keys.js and ./completions.js
util.rmMaps(keys.unmaps.mappings, "")
util.rmMaps(keys.unmaps.imappings, "i")
util.rmMaps(keys.unmaps.vmappings, "v")
util.rmMaps(keys.unmaps.cmappings, "c")
util.rmSearchAliases(keys.unmaps.searchAliases)
util.processMaps(keys.maps, keys.aliases, siteleader)
util.processCompletions(completions, searchleader)

module.exports = { siteleader, searchleader }
