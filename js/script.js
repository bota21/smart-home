  $(() => {
    $('.wrapper_for_smart_home_content').hide();
    $('.wrapper_for_smart_home_content[data-tab="0"]').show();
    $('.smart_home_tabs[data-tab="0"]').addClass('tab_active');
  
    $('.smart_home_tabs').click(function () {
      const tabIndex = $(this).data('tab');
  
      $('.smart_home_tabs').removeClass('tab_active');
      $(this).addClass('tab_active');
  
      $('.wrapper_for_smart_home_content').hide();
      $('.wrapper_for_smart_home_content[data-tab="' + tabIndex + '"]').fadeIn();
    });


    $('.wrapper_for_smart_home_item').hide();
    $('.wrapper_for_smart_home_item[data-tab="0"]').show();
    $('.tabs_for_smart_home_item[data-tab="0"]').addClass('tab_item_active');
  
    $('.tabs_for_smart_home_item').click(function () {
      const tabIndex = $(this).data('tab');
  
      $('.tabs_for_smart_home_item').removeClass('tab_item_active');
      $(this).addClass('tab_item_active');
  
      $('.wrapper_for_smart_home_item').hide();
      $('.wrapper_for_smart_home_item[data-tab="' + tabIndex + '"]').fadeIn();
    });


  });
  
