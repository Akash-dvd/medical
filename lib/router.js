Router.configure({
  layoutTemplate: 'layout',
 
});
Router.map(function() {
  this.route('index', {path: '/index.html'});
  this.route('index', {path: '/'});
  this.route('fourzerofour', 
    { 
    path: '/404.html',
    layoutTemplate: 'null'
    });
  this.route('fivezerozero', 
    { 
    path: '/500.html',
    layoutTemplate: 'null'
    });
  this.route('badges_labels', {path: '/badges_labels.html'});
  this.route('basic_gallery', {path: '/basic_gallery.html'});
  this.route('boxed_layout', {path: '/boxed_layout.html'});
  this.route('buttons', {path: '/buttons.html'});
  this.route('calendar', {path: '/calendar.html'});
  this.route('carousel', {path: '/carousel.html'});
  this.route('contacts', {path: '/contacts.html'});
  this.route('css_animations', {path: '/css_animations.html'});
  this.route('draggable_panels', {path: '/draggable_panels.html'});
  this.route('empty_page', {path: '/empty_page.html'});
  this.route('file_manager', {path: '/file_manager.html'});
  this.route('form_advanced', {path: '/form_advanced.html'});
  this.route('form_basic', {path: '/form_basic.html'});
  this.route('form_editors', {path: '/form_editors.html'});
  this.route('form_file_upload', {path: '/form_file_upload.html'});
  this.route('form_wizard', {path: '/form_wizard.html'});
  this.route('facility_all', {path: '/appointments.html'});
  this.route('graph_flot', {path: '/graph_flot.html'});
  this.route('graph_morris', {path: '/graph_morris.html'});
  this.route('graph_peity', {path: '/graph_peity.html'});
  this.route('graph_rickshaw', {path: '/graph_rickshaw.html'});
  this.route('graph_sparkline', {path: '/graph_sparkline.html'});
  this.route('grid_options', {path: '/grid_options.html'});
  this.route('icons', {path: '/icons.html'});
  this.route('invoice', {path: '/invoice.html'});
  this.route('invoice_print', {path: '/invoice_print.html'});
  this.route('lockscreen', 
    { 
    path: '/lockscreen.html',
    layoutTemplate: 'null'
    });
  this.route('login', 
    {
    path: '/login.html',
    layoutTemplate: 'null'
    });
  this.route('mailbox', {path: '/mailbox.html'});
  this.route('mail_compose', {path: '/mail_compose.html'});
  this.route('mail_detail', {path: '/mail_detail.html'});
  this.route('notifications', {path: '/notifications.html'});
  this.route('pin_board', {path: '/pin_board.html'});
  this.route('profile', {path: '/profile.html'});
  this.route('register', 
    {
    path: '/register.html',
    layoutTemplate: 'null'
    });
  this.route('search_results', {path: '/search_results.html'});
  this.route('table_basic', {path: '/table_basic.html'});
  this.route('table_data_tables', {path: '/table_data_tables.html'});
  this.route('tabs_panels', {path: '/tabs_panels.html'});
  this.route('timeline', {path: '/timeline.html'});
  this.route('typography', {path: '/typography.html'});
  
});


Router.onBeforeAction('loading');
