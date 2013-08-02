ace.define("ace/theme/dark",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-dark",t.cssText='/* CSS style content from light\'s default pygments highlighter template.Cursor and selection styles from textmate.css. */.ace-dark {font-family: "LiberationMono";}.ace-dark .ace_gutter {background: #2F3129;color: #CCCCCC}.ace-dark .ace_print-margin {width: 1px;background: #555651}.ace-dark {background-color: black;color: #F8F8F2}.ace-dark .ace_cursor {border-left: 2px solid #F8F8F0}.ace-dark .ace_overwrite-cursors .ace_cursor {border-left: 0px;border-bottom: 1px solid #F8F8F0}.ace-dark .ace_marker-layer .ace_selection {background: #49483E}.ace-dark.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;border-radius: 2px}.ace-dark .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-dark .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-dark .ace_marker-layer .ace_active-line {background: #202020}.ace-dark .ace_gutter-active-line {background-color: #272727}.ace-dark .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-dark .ace_invisible {color: #52524d}.ace-dark .ace_entity.ace_name.ace_tag,.ace-dark .ace_keyword {font-weight: bold}.ace-dark .ace_identifier {color: #f7edb4;},.ace-dark .ace_meta.ace_tag,.ace-dark .ace_storage {color: white}.ace-dark .ace_constant.ace_character,.ace-dark .ace_constant.ace_language,.ace-dark .ace_constant.ace_numeric,.ace-dark .ace_constant.ace_other {color: #5ed1e5;}.ace-dark .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-dark .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-dark .ace_support.ace_constant,.ace-dark .ace_support.ace_function {color: #5ed1e5}.ace-dark .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-dark .ace_storage.ace_type,.ace-dark .ace_support.ace_class,.ace-dark .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-dark .ace_entity.ace_name.ace_function,.ace-dark .ace_entity.ace_other,.ace-dark .ace_entity.ace_other.ace_attribute-name,.ace-dark .ace_variable {color: #A6E22E}.ace-dark .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-dark .ace_string {color: #e89510}.ace-dark .ace_comment {color: #cccccc}.ace-dark .ace_markup.ace_underline {text-decoration: underline}.ace-dark .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y;}';var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})