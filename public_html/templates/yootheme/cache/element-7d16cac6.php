<?php // $file = /home/r/rutoppro/kibermir_hand-gold_com/public_html/templates/yootheme/vendor/yootheme/builder/elements/grid_item/element.json

return [
  '@import' => $filter->apply('path', './element.php', $file), 
  'name' => 'grid_item', 
  'title' => 'Item', 
  'width' => 500, 
  'placeholder' => [
    'props' => [
      'title' => 'Title', 
      'meta' => '', 
      'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
      'image' => '', 
      'icon' => ''
    ]
  ], 
  'templates' => [
    'render' => $filter->apply('path', './templates/template.php', $file), 
    'content' => $filter->apply('path', './templates/content.php', $file)
  ], 
  'fields' => [
    'title' => [
      'label' => 'Title', 
      'source' => true
    ], 
    'meta' => [
      'label' => 'Meta', 
      'source' => true
    ], 
    'content' => [
      'label' => 'Content', 
      'type' => 'editor', 
      'source' => true
    ], 
    'image' => $config->get('builder.image'), 
    'image_alt' => [
      'label' => 'Image Alt', 
      'enable' => 'image', 
      'source' => true
    ], 
    'icon' => [
      'label' => 'Icon', 
      'description' => 'Instead of using a custom image, you can click on the pencil to pick an icon from the icon library.', 
      'type' => 'icon', 
      'source' => true, 
      'enable' => '!image'
    ], 
    'link' => $config->get('builder.link'), 
    'tags' => [
      'label' => 'Tags', 
      'description' => 'Enter a comma-separated list of tags, for example, <code>blue, white, black</code>.', 
      'source' => true
    ], 
    'source' => $config->get('builder.source')
  ], 
  'fieldset' => [
    'default' => [
      'type' => 'tabs', 
      'fields' => [[
          'title' => 'Content', 
          'fields' => ['title', 'meta', 'content', 'image', 'image_alt', 'icon', 'link', 'tags']
        ], [
          'title' => 'Advanced', 
          'fields' => ['source']
        ]]
    ]
  ]
];
