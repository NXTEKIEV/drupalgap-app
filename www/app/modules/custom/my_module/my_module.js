/**
 * Implements hook_menu().
 * @return {[type]} [description]
 */
function my_module_menu(){

  var items = {};
  items['hello-world'] = {
    title: 'DrupalGap by NXTE.NL',
    pagecallback: 'my_module_hello_world_page'
  };

  return items;

}


function my_module_hello_world_page(){

  var content = {};
  content['my_button'] = {
    theme: 'button',
    text: 'Hello world',
    attributes: {
      onclick: "drupalgap_alert('Hi!');",
    },
  };
  return content;

}
