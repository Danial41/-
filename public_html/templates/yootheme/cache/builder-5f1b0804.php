<?php // $file = /home/r/rutoppro/kibermir_hand-gold_com/public_html/templates/yootheme/vendor/yootheme/builder/config/builder.json

return [
  'advanced' => [
    'title' => 'Advanced', 
    'fields' => ['name', 'status', 'source', 'id', 'class', 'css']
  ], 
  'name' => [
    'label' => 'Name', 
    'description' => 'Define a name to easily identify this element inside the builder.', 
    'attrs' => []
  ], 
  'status' => [
    'label' => 'Status', 
    'description' => 'Disable your element and publish it later. It will only be shown to the editor while the customizer is open.', 
    'type' => 'checkbox', 
    'text' => 'Disable element', 
    'attrs' => [
      'true-value' => 'disabled', 
      'false-value' => ''
    ]
  ], 
  'id' => [
    'label' => 'ID', 
    'description' => 'Define a unique identifier for the element.'
  ], 
  'cls' => [
    'label' => 'Class', 
    'description' => 'Define one or more class names for the element. Separate multiple classes with spaces.'
  ], 
  'position' => [
    'label' => 'Position', 
    'description' => 'Position the element in the normal content flow, or in normal flow but with an offset relative to itself, or remove it from the flow and position it relative to the containing column.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Static' => '', 
      'Relative' => 'relative', 
      'Absolute' => 'absolute'
    ]
  ], 
  'position_left' => [
    'label' => 'Left', 
    'description' => 'Set the horizontal position of the element\'s left edge in pixels. A different unit like % or vw can also be entered.', 
    'type' => 'range', 
    'attrs' => [
      'min' => '-600', 
      'max' => '600', 
      'step' => '10'
    ], 
    'enable' => 'position && !position_right'
  ], 
  'position_right' => [
    'label' => 'Right', 
    'description' => 'Set the horizontal position of the element\'s right edge in pixels. A different unit like % or vw can also be entered.', 
    'type' => 'range', 
    'attrs' => [
      'min' => '-600', 
      'max' => '600', 
      'step' => '10'
    ], 
    'enable' => 'position && !position_left'
  ], 
  'position_top' => [
    'label' => 'Top', 
    'description' => 'Set the horizontal position of the element\'s top edge in pixels. A different unit like % or vw can also be entered.', 
    'type' => 'range', 
    'attrs' => [
      'min' => '-600', 
      'max' => '600', 
      'step' => '10'
    ], 
    'enable' => 'position && !position_bottom'
  ], 
  'position_bottom' => [
    'label' => 'Bottom', 
    'description' => 'Set the horizontal position of the element\'s bottom edge in pixels. A different unit like % or vw can also be entered.', 
    'type' => 'range', 
    'attrs' => [
      'min' => '-600', 
      'max' => '600', 
      'step' => '10'
    ], 
    'enable' => 'position && !position_top'
  ], 
  'position_z_index' => [
    'label' => 'Z Index', 
    'description' => 'Position the element above or below other elements. If they have the same stack level, the position depends on the order in the layout.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'None' => '', 
      0 => '0', 
      1 => '1', 
      2 => '2', 
      3 => '3'
    ], 
    'enable' => 'position'
  ], 
  'margin' => [
    'label' => 'Margin', 
    'description' => 'Set the vertical margin. Note: The first element\'s top margin and the last element\'s bottom margin are always removed. Define those in the grid settings instead.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Keep existing' => '', 
      'Small' => 'small', 
      'Default' => 'default', 
      'Medium' => 'medium', 
      'Large' => 'large', 
      'X-Large' => 'xlarge', 
      'None' => 'remove-vertical'
    ], 
    'enable' => 'position != \'absolute\''
  ], 
  'margin_remove_top' => [
    'type' => 'checkbox', 
    'text' => 'Remove top margin', 
    'enable' => 'position != \'absolute\' && margin != \'remove-vertical\''
  ], 
  'margin_remove_bottom' => [
    'type' => 'checkbox', 
    'text' => 'Remove bottom margin', 
    'enable' => 'position != \'absolute\' && margin != \'remove-vertical\''
  ], 
  'maxwidth' => [
    'label' => 'Max Width', 
    'description' => 'Set the maximum content width.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'None' => '', 
      'Small' => 'small', 
      'Medium' => 'medium', 
      'Large' => 'large', 
      'X-Large' => 'xlarge', 
      'XX-Large' => 'xxlarge'
    ]
  ], 
  'maxwidth_breakpoint' => [
    'label' => 'Max Width Breakpoint', 
    'description' => 'Define the device width from which the max-width will apply.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Always' => '', 
      'Small (Phone Landscape)' => 's', 
      'Medium (Tablet Landscape)' => 'm', 
      'Large (Desktop)' => 'l', 
      'X-Large (Large Screens)' => 'xl'
    ], 
    'enable' => 'maxwidth'
  ], 
  'block_align' => [
    'label' => 'Block Alignment', 
    'description' => 'Define the alignment in case the container exceeds the element\'s max-width.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Left' => '', 
      'Center' => 'center', 
      'Right' => 'right'
    ], 
    'enable' => 'position != \'absolute\' && maxwidth'
  ], 
  'block_align_breakpoint' => [
    'label' => 'Block Alignment Breakpoint', 
    'description' => 'Define the device width from which the alignment will apply.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Always' => '', 
      'Small (Phone Landscape)' => 's', 
      'Medium (Tablet Landscape)' => 'm', 
      'Large (Desktop)' => 'l', 
      'X-Large (Large Screens)' => 'xl'
    ], 
    'enable' => 'position != \'absolute\' && maxwidth'
  ], 
  'block_align_fallback' => [
    'label' => 'Block Alignment Fallback', 
    'description' => 'Define an alignment fallback for device widths below the breakpoint.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Left' => '', 
      'Center' => 'center', 
      'Right' => 'right'
    ], 
    'enable' => 'position != \'absolute\' && maxwidth && block_align_breakpoint'
  ], 
  'text_align' => [
    'label' => 'Text Alignment', 
    'description' => 'Center, left and right alignment may depend on a breakpoint and require a fallback.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'None' => '', 
      'Left' => 'left', 
      'Center' => 'center', 
      'Right' => 'right'
    ]
  ], 
  'text_align_justify' => [
    'label' => 'Text Alignment', 
    'description' => 'Center, left and right alignment may depend on a breakpoint and require a fallback.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'None' => '', 
      'Left' => 'left', 
      'Center' => 'center', 
      'Right' => 'right', 
      'Justify' => 'justify'
    ]
  ], 
  'text_align_breakpoint' => [
    'label' => 'Text Alignment Breakpoint', 
    'description' => 'Define the device width from which the alignment will apply.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Always' => '', 
      'Small (Phone Landscape)' => 's', 
      'Medium (Tablet Landscape)' => 'm', 
      'Large (Desktop)' => 'l', 
      'X-Large (Large Screens)' => 'xl'
    ], 
    'enable' => 'text_align && text_align != \'justify\''
  ], 
  'text_align_fallback' => [
    'label' => 'Text Alignment Fallback', 
    'description' => 'Define an alignment fallback for device widths below the breakpoint.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'None' => '', 
      'Left' => 'left', 
      'Center' => 'center', 
      'Right' => 'right'
    ], 
    'enable' => 'text_align && text_align_breakpoint'
  ], 
  'text_align_justify_fallback' => [
    'label' => 'Text Alignment Fallback', 
    'description' => 'Define an alignment fallback for device widths below the breakpoint.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'None' => '', 
      'Left' => 'left', 
      'Center' => 'center', 
      'Right' => 'right', 
      'Justify' => 'justify'
    ], 
    'enable' => 'text_align && text_align != \'justify\' && text_align_breakpoint'
  ], 
  'animation' => [
    'label' => 'Animation', 
    'description' => 'Override the section\'s animation setting. This option won\'t have any effect unless animations are enabled for this section.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Inherit' => '', 
      'None' => 'none', 
      'Fade' => 'fade', 
      'Scale Up' => 'scale-up', 
      'Scale Down' => 'scale-down', 
      'Slide Top Small' => 'slide-top-small', 
      'Slide Bottom Small' => 'slide-bottom-small', 
      'Slide Left Small' => 'slide-left-small', 
      'Slide Right Small' => 'slide-right-small', 
      'Slide Top Medium' => 'slide-top-medium', 
      'Slide Bottom Medium' => 'slide-bottom-medium', 
      'Slide Left Medium' => 'slide-left-medium', 
      'Slide Right Medium' => 'slide-right-medium', 
      'Slide Top 100%' => 'slide-top', 
      'Slide Bottom 100%' => 'slide-bottom', 
      'Slide Left 100%' => 'slide-left', 
      'Slide Right 100%' => 'slide-right', 
      'Parallax' => 'parallax'
    ]
  ], 
  '_parallax_button' => [
    'type' => 'button-panel', 
    'text' => 'Edit Settings', 
    'panel' => 'builder-parallax', 
    'show' => 'animation == \'parallax\' || item_animation == \'parallax\''
  ], 
  'visibility' => [
    'label' => 'Visibility', 
    'description' => 'Display the element only on this device width and larger.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'Always' => '', 
      'Small (Phone Landscape)' => 's', 
      'Medium (Tablet Landscape)' => 'm', 
      'Large (Desktop)' => 'l', 
      'X-Large (Large Screens)' => 'xl'
    ]
  ], 
  'container_padding_remove' => [
    'label' => 'Section/Row', 
    'description' => 'If a section or row has a max width, and one side is expanding to the left or right, the default padding can be removed from the expanding side.', 
    'type' => 'checkbox', 
    'text' => 'Remove left or right padding', 
    'enable' => 'position != \'absolute\''
  ], 
  'image' => [
    'label' => 'Image', 
    'type' => 'image', 
    'enable' => '!icon', 
    'source' => true
  ], 
  'icon_ratio' => [
    'label' => 'Icon Size', 
    'description' => 'Enter a size ratio, if you want the icon to appear larger than the default font size, for example 1.5 or 2 to double the size.', 
    'attrs' => [
      'placeholder' => '1'
    ], 
    'enable' => 'icon'
  ], 
  'icon_color' => [
    'label' => 'Icon Color', 
    'description' => 'Set the icon color.', 
    'type' => 'select', 
    'default' => '', 
    'options' => [
      'None' => '', 
      'Muted' => 'muted', 
      'Emphasis' => 'emphasis', 
      'Primary' => 'primary', 
      'Success' => 'success', 
      'Warning' => 'warning', 
      'Danger' => 'danger'
    ], 
    'enable' => 'icon'
  ], 
  'link' => [
    'label' => 'Link', 
    'type' => 'link', 
    'description' => 'Enter or pick a link, an image or a video file.', 
    'attrs' => [
      'placeholder' => 'http://'
    ], 
    'source' => true
  ], 
  'link_target' => [
    'type' => 'checkbox', 
    'text' => 'Open the link in a new window'
  ], 
  'link_title' => [
    'label' => 'Link Title', 
    'description' => 'Enter an optional text for the title attribute of the link, which will appear on hover.', 
    'source' => true
  ], 
  'source' => [
    'label' => 'Dynamic Content', 
    'type' => 'source'
  ]
];
