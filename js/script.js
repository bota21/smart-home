$(() => {
  // Переключение основных табов
  $(".wrapper_for_smart_home_content").hide();
  $('.wrapper_for_smart_home_content[data-tab="0"]').show();
  $('.smart_home_tabs[data-tab="0"]').addClass("tab_active");
  $(".smart_home_tabs").click(function () {
    const tabIndex = $(this).data("tab");
    $(".smart_home_tabs").removeClass("tab_active");
    $(this).addClass("tab_active");
    $(".wrapper_for_smart_home_content").hide();
    $('.wrapper_for_smart_home_content[data-tab="' + tabIndex + '"]').fadeIn();
  });

  // Переключение табов для яндекс
  $(".wrapper_for_smart_home_item_1").hide();
  $('.wrapper_for_smart_home_item_1[data-tab="00"]').show();
  $('.tabs_for_smart_home_item_1[data-tab="00"]').addClass("tab_item_active");
  $(".tabs_for_smart_home_item_1").click(function () {
    const tabIndex = $(this).data("tab");
    $(".tabs_for_smart_home_item_1").removeClass("tab_item_active");
    $(this).addClass("tab_item_active");
    $(".wrapper_for_smart_home_item_1").hide();
    $('.wrapper_for_smart_home_item_1[data-tab="' + tabIndex + '"]').fadeIn();
  });

  // Переключение табов для датчиков
  $(".wrapper_for_smart_home_item_2").hide();
  $('.wrapper_for_smart_home_item_2[data-tab="10"]').show();
  $('.tabs_for_smart_home_item_2[data-tab="10"]').addClass("tab_item_active");
  $(".tabs_for_smart_home_item_2").click(function () {
    const tabIndex = $(this).data("tab");
    $(".tabs_for_smart_home_item_2").removeClass("tab_item_active");
    $(this).addClass("tab_item_active");
    $(".wrapper_for_smart_home_item_2").hide();
    $('.wrapper_for_smart_home_item_2[data-tab="' + tabIndex + '"]').fadeIn();
  });

  // Переключение табов для выключателей, розеток
  $(".wrapper_for_smart_home_item_3").hide();
  $('.wrapper_for_smart_home_item_3[data-tab="20"]').show();
  $('.tabs_for_smart_home_item_3[data-tab="20"]').addClass("tab_item_active");
  $(".tabs_for_smart_home_item_3").click(function () {
    const tabIndex = $(this).data("tab");
    $(".tabs_for_smart_home_item_3").removeClass("tab_item_active");
    $(this).addClass("tab_item_active");
    $(".wrapper_for_smart_home_item_3").hide();
    $('.wrapper_for_smart_home_item_3[data-tab="' + tabIndex + '"]').fadeIn();
  });

  // Переключение табов для свет
  $(".wrapper_for_smart_home_item_4").hide();
  $('.wrapper_for_smart_home_item_4[data-tab="30"]').show();
  $('.tabs_for_smart_home_item_4[data-tab="30"]').addClass("tab_item_active");
  $(".tabs_for_smart_home_item_4").click(function () {
    const tabIndex = $(this).data("tab");
    $(".tabs_for_smart_home_item_4").removeClass("tab_item_active");
    $(this).addClass("tab_item_active");
    $(".wrapper_for_smart_home_item_4").hide();
    $('.wrapper_for_smart_home_item_4[data-tab="' + tabIndex + '"]').fadeIn();
  });
});
