//XpConfig

var xpConfig = {
  Geral: {
    exibirMinimoCompraSite: 1,
    exibirNewsletterOptin: 1,
    exibirPrateleiraDescontoPercentual: 1,
    status: 1,
    valorMinimoCompra: -1,
    frete: {
      gratis: {
        valorMinimo: 400,
        mensagens: {
          alerta:
            "Faltam apenas R$ #$diferenca$# para você ganhar frete grátis.",
          sucesso: "Parabéns, você ganhou frete grátis.",
        },
      },
    },
  },
  checkout: {
    alertaCarrinho: "",
    frete: {
      gratis: {
        exibirMinimo: 1,
        valorMinimo: 400,
        mensagens: {
          alerta: "Faltam apenas %valorMinimo% para você ganhar frete grátis.",
          sucesso: "Parabéns, você ganhou frete grátis.",
        },
      },
    },
  },
};

//modulo de categoria footer

document.addEventListener("DOMContentLoaded", () => {
  const moduleListAllCategories = () => {
    function init() {
      var ul = '<ul class="menu qd-is-active">';
      var liMount = data => {
        const { name, url } = data;
        let urlSplit = url.split(".br/")[1];
        return `<li class="menu-${urlSplit}">
                    <a href="${url}">${name}</a>
                </li>`;
      };

      function dynamicSort(property) {
        var sortOrder = 1;

        if (property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
        }

        return function (a, b) {
          if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
          } else {
            return a[property].localeCompare(b[property]);
          }
        };
      }

      function uniqueBy(arr, key) {
        return arr.reduce(
          (accumulator, current) =>
            accumulator.some(x => x.name === current[key])
              ? accumulator
              : [...accumulator, current],
          []
        );
      }
      const lista = document.querySelector(".footer-qd-v1-menu-list .menu");
      if (lista) {
        fetch("/api/catalog_system/pub/category/tree/3/")
          .then(res => res.json())
          .then(res => {
            lista.innerHTML = "";
            let newItems = "";
            let data = [];

            for (const item of res) {
              // newItems += liMount(item);

              if (item.hasChildren === true) {
                data = [...data, { ...item }];
                for (const children of item.children) {
                  data = [
                    ...data,
                    {
                      ...children,
                    },
                  ];
                }
              }
            }
            let newData = uniqueBy(data, "name");
            newData = newData.sort(dynamicSort("name"));
            console.log(newData);
            for (const item of newData) {
              newItems += liMount(item);
            }
            const items = ul + newItems + "</ul>";
            lista.innerHTML = items;
          })
          .catch(error => console.log(error));
      }
    }

    return {
      init,
    };
  };
  moduleListAllCategories().init();
});

function qd_number_format(t, e, i, o) {
  (t = (t + "").replace(/[^0-9+\-Ee.]/g, "")),
    (t = isFinite(+t) ? +t : 0),
    (e = isFinite(+e) ? Math.abs(e) : 0),
    (o = void 0 === o ? "," : o),
    (i = void 0 === i ? "." : i);
  var s = "";
  return (
    (s = function (t, e) {
      var i = Math.pow(10, e);
      return "" + (Math.round(t * i) / i).toFixed(e);
    }),
    (s = (e ? s(t, e) : "" + Math.round(t)).split(".")),
    3 < s[0].length && (s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, o)),
    (s[1] || "").length < e &&
      ((s[1] = s[1] || ""), (s[1] += Array(e - s[1].length + 1).join("0"))),
    s.join(i)
  );
}
function qd_number_format(t, e, i, o) {
  (t = (t + "").replace(/[^0-9+\-Ee.]/g, "")),
    (t = isFinite(+t) ? +t : 0),
    (e = isFinite(+e) ? Math.abs(e) : 0),
    (o = void 0 === o ? "," : o),
    (i = void 0 === i ? "." : i);
  var s = "";
  return (
    (s = function (t, e) {
      var i = Math.pow(10, e);
      return "" + (Math.round(t * i) / i).toFixed(e);
    }),
    (s = (e ? s(t, e) : "" + Math.round(t)).split(".")),
    3 < s[0].length && (s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, o)),
    (s[1] || "").length < e &&
      ((s[1] = s[1] || ""), (s[1] += Array(e - s[1].length + 1).join("0"))),
    s.join(i)
  );
}
function qd_number_format(t, e, i, o) {
  (t = (t + "")[_0x12f7("0x2")](/[^0-9+\-Ee.]/g, "")),
    (t = isFinite(+t) ? +t : 0),
    (e = isFinite(+e) ? Math.abs(e) : 0),
    (o = _0x12f7("0x3") === typeof o ? "," : o),
    (i = void 0 === i ? "." : i);
  var s = "";
  return (
    (s = function (t, e) {
      var i = Math[_0x12f7("0x4")](10, e);
      return "" + (Math[_0x12f7("0x5")](t * i) / i).toFixed(e);
    }),
    (s = (e ? s(t, e) : "" + Math[_0x12f7("0x5")](t))[_0x12f7("0x6")](".")),
    3 < s[0][_0x12f7("0x7")] &&
      (s[0] = s[0][_0x12f7("0x2")](/\B(?=(?:\d{3})+(?!\d))/g, o)),
    (s[1] || "").length < e &&
      ((s[1] = s[1] || ""),
      (s[1] += Array(e - s[1][_0x12f7("0x7")] + 1)[_0x12f7("0x8")]("0"))),
    s[_0x12f7("0x8")](i)
  );
}
"function" != typeof String.prototype.trim &&
  (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  }),
  "function" != typeof String.prototype.capitalize &&
    (String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    }),
  "function" != typeof String.prototype.replaceSpecialChars &&
    (String.prototype.replaceSpecialChars = function () {
      var t = {
        ç: "c",
        æ: "ae",
        œ: "oe",
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u",
        à: "a",
        è: "e",
        ì: "i",
        ò: "o",
        ù: "u",
        ä: "a",
        ë: "e",
        ï: "i",
        ö: "o",
        ü: "u",
        ÿ: "y",
        â: "a",
        ê: "e",
        î: "i",
        ô: "o",
        û: "u",
        å: "a",
        ã: "a",
        ø: "o",
        õ: "o",
        u: "u",
        Á: "A",
        É: "E",
        Í: "I",
        Ó: "O",
        Ú: "U",
        Ê: "E",
        Ô: "O",
        Ü: "U",
        Ã: "A",
        Õ: "O",
        À: "A",
        Ç: "C",
      };
      return this.replace(/[\u00e0-\u00fa]/gi, function (e) {
        return void 0 !== t[e] ? t[e] : e;
      });
    }),
  Array.prototype.indexOf ||
    (Array.prototype.indexOf = function (t, e) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var i = Object(this),
        o = i.length >>> 0;
      if (0 === o) return -1;
      var s = +e || 0;
      if ((1 / 0 === Math.abs(s) && (s = 0), s >= o)) return -1;
      for (s = Math.max(0 <= s ? s : o - Math.abs(s), 0); s < o; ) {
        if (s in i && i[s] === t) return s;
        s++;
      }
      return -1;
    });
var Common = {
    run: function () {},
    init: function () {
      Common.vtexBindQuickViewDestroy(),
        Common.applySmartCart(),
        Common.applyAmazingMenu(),
        Common.applyAmazingMenuMobile(),
        Common.applyMosaicBanners(),
        Common.openSearchModal(),
        Common.applyTipBarCarousel(),
        Common.showFooterLinks(),
        Common.qdOverlay(),
        Common.bodyDataQDScrollT(),
        Common.saveAmountFix(),
        Common.showHideMenuFloat(),
        Common.openModalVideoInstitutional(),
        Common.applyCarouselShelf();
    },
    ajaxStop: function () {
      Common.appendSkuPopUpCloseBtn(), Common.saveAmountFix();
    },
    windowOnload: function () {
      Common.saveAmountFix();
    },
    vtexBindQuickViewDestroy: function () {
      window.bindQuickView = function () {};
    },
    qdOverlayClass: "qd-am-on qd-cart-show qd-sn-on",
    qdOverlay: function () {
      $(".components-qd-v1-overlay").click(function () {
        $(document.body).removeClass(Common.qdOverlayClass);
      });
    },
    bodyDataQDScrollT: function () {
      $(document.body).attr("data-qd-scroll-limit", "145");
    },
    saveAmountFix: function () {
      $(".shelf-qd-v1-highlight-discount-percentage:not(.qd-on)")
        .addClass("qd-on")
        .each(function () {
          var t = $(this);
          t.text(
            (
              t
                .text()
                .trim()
                .match(/[0-9]+/) || [""]
            ).pop() + "% OFF"
          );
        });
    },
    applyMosaicBanners: function () {
      $(".mosaic-qd-v1-wrapper > .box-banner").QD_mosaicBanners({
        containerWidth: 1170,
        classTwoColumn: "col-xs-12 col-md-6",
        classThreeColumn: "col-xs-12 col-md-4",
        classFourColumn: "col-xs-6 col-md-3",
      }),
        $(".mosaic-qd-v2-wrapper > .box-banner").QD_mosaicBanners({
          containerWidth: 800,
          classTwoColumn: "col-xs-12 col-md-6",
          classThreeColumn: "col-xs-12 col-md-4",
          classFourColumn: "col-xs-6 col-md-3",
        });
    },
    openModalVideoInstitutional: function () {
      var t = /(youtu\.be\/|\?v=)([^&]+)/i;
      $(".box-banner a")
        .filter('[href*="youtube.com/"], [href*="youtu.be/"]')
        .click(function (e) {
          e.preventDefault();
          var i = $(".qd-v1-modal")
            .clone()
            .appendTo(document.body)
            .addClass("video-qd-v1-modal");
          e = $(this);
          var o = (e.attr("href").match(t) || [""]).pop();
          i
            .find(".modal-header")
            .append(
              '<h2 class="modal-title">' + e.find("img").attr("alt") + "</h2>"
            ),
            $(
              '<iframe src="https://www.youtube.com/embed/' +
                o +
                '?wmode=transparent&rel=0" frameborder="0"></iframe>'
            ).appendTo(i.find(".modal-body")),
            i.modal(),
            i.on("hidden.bs.modal", function () {
              i.remove();
            });
        });
    },
    applyCarouselShelf: function () {
      var t = $(".carousel-qd-v1-shelf .prateleira");
      if (!t.length) return !1;
      t.each(function () {
        var t = $(this);
        t.find("h2").insertBefore(t);
      }),
        t.parent().removeClass("mosaic-qd-v1-wrapper"),
        t.slick({
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: !0,
          draggable: !1,
          speed: 700,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 991,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 550,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
    },
    appendSkuPopUpCloseBtn: function () {
      var t = $(".boxPopUp2 .selectSkuTitle:not(.qd-on)");
      t.addClass("qd-on").append(
        $('<span class="modal-qd-v1-box-popup-close">Fechar</span>').click(
          function () {
            return (
              $(window).trigger("vtex.modal.hide"), t.removeClass(".qd-on"), !1
            );
          }
        )
      );
    },
    showFooterLinks: function () {
      $(".footer-qd-v1-menu-list > ul > li").click(function (t) {
        (t = $(this)),
          t.toggleClass("qd-is-active"),
          t.find("> ul").toggleClass("qd-is-active");
      });
    },
    applySmartCart: function () {
      $(".header-qd-v1-actions-wrapper").append(
        '<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>'
      ),
        $(
          '<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>'
        ).insertAfter(".fixed-buttons-qd-v1 .header-qd-v1-cart-link"),
        $(document.body).append(
          '<div class="smart-cart-qd-v2-wrapper"><div class="qd-sc-wrapper"></div></div>'
        );
      var t = $(".qd-sc-wrapper");
      $.QD_smartCart({
        selector: t,
        dropDown: {
          texts: {
            linkCart: "Finalizar Compra",
            cartTotal:
              '<span class="qd-infoTotalItems">Itens: #items</span><span class="qd-infoTotalValue">Total: #value</span>',
          },
          updateOnlyHover: !1,
          smartCheckout: !0,
          forceImageHTTPS: !0,
          callback: function () {
            $(".qd-ddc-wrapper3").prepend(
              '<div class="qd-cartTitle"><h3>Meu carrinho</h3></div>'
            ),
              t
                .find(".qd_ddc_continueShopping")
                .after(t.find(".qd-ddc-viewCart"));
          },
          skuName: function (t) {
            return t.name + " - " + t.skuName.replace(t.name, "");
          },
          callbackProductsList: function () {
            t.find(".qd-ddc-prodQtt").each(function () {
              var t = $(this);
              t.add(t.next(".qd-ddc-prodRemove")).wrapAll(
                '<div class="qd-ddc-prodAction"></div>'
              );
            });
          },
        },
        buyButton: { buyButton: "body .prateleira:not(.qd-am) .buy-button" },
      }),
        (window._QuatroDigital_prodBuyCallback = function (t, e, i, o) {
          $.fn.simpleCart(!0),
            $(".shelf-qd-v1-buy-button-modal").modal("hide"),
            $(window).trigger("QuatroDigital.qd_bb_prod_add", [
              new $(),
              o[0] || 0,
            ]);
        }),
        $(".header-qd-v1-cart-link").click(function (e) {
          e.preventDefault(),
            $(document.body).toggleClass("qd-cart-show"),
            t.height($(window).height()),
            t
              .find(".qd-ddc-prodWrapper")
              .css("max-height", $(window).height() - 193);
        }),
        $(".qd_ddc_lightBoxClose").click(function (t) {
          $(document.body).removeClass(Common.qdOverlayClass),
            Common.blogAdjustBodyHeight();
        });
    },
    applyTipBarCarousel: function () {
      var t = $(".tip-bar-qd-v1-carousel > ul");
      t.length &&
        t.slick(
          $.extend(
            !0,
            {
              arrows: !1,
              autoplay: !0,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: !0,
              draggable: !1,
              speed: 2e3,
              responsive: [
                {
                  breakpoint: 1366,
                  settings: { slidesToShow: 3, slidesToScroll: 3 },
                },
                {
                  breakpoint: 767,
                  settings: { slidesToShow: 1, slidesToScroll: 1 },
                },
              ],
            },
            t.closest(".product-qd-v1-sku-selection-box").length
              ? { slidesToShow: 2 }
              : {}
          )
        );
    },
    openSearchModal: function () {
      $(".header-qd-v1-action-search").click(function () {
        return $(".modal-qd-v1-search").modal(), !1;
      });
    },
    applyAmazingMenu: function () {
      $(".header-qd-v1-amazing-menu").QD_amazingMenu({});
    },
    applyAmazingMenuMobile: function () {
      var t = $(".header-qd-v1-amazing-menu-mobile");
      t.find("> ul > li > ul").prepend(function () {
        return $(this).prev().clone().wrap("<li></li>").parent();
      }),
        t.QD_amazingMenu({
          callback: function () {
            $(
              '<span class="qd-am-dropdown-trigger"><i class="fa fa-angle-down"></i></span>'
            )
              .appendTo(t.find(".qd-am-has-ul"))
              .click(function () {
                var t = $(this);
                $.merge(t.parent(), t.closest("ul")).toggleClass(
                  "qd-am-is-active"
                ),
                  t
                    .filter(function () {
                      return !$(this).closest("ul").is(".qd-amazing-menu");
                    })
                    .siblings("ul")
                    .stop(!0, !0)
                    .slideToggle();
              }),
              t.find("> ul > li > .qd-am-dropdown-trigger").click(function () {
                $(".header-qd-v1-amazing-menu-mobile-wrapper").addClass(
                  "qd-am-is-active"
                ),
                  $(".header-qd-v1-amazing-menu-mobile-wrapper").animate(
                    { scrollTop: 0 },
                    200
                  );
              }),
              t.find("> ul > li > ul > li:first-child").click(function (t) {
                t.preventDefault(),
                  $(this)
                    .parents(".qd-am-is-active")
                    .removeClass("qd-am-is-active");
              });
          },
        }),
        $(".header-qd-v1-amazing-menu-trigger").click(function (t) {
          t.preventDefault(), $(document.body).toggleClass("qd-am-on");
        }),
        $(
          ".header-qd-v1-amazing-menu-mobile-wrapper .header-qd-v1-user-message"
        ).on("click", "a#login", function () {
          $(document.body).removeClass("qd-am-on");
        });
    },
    showHideMenuFloat: function () {
      $(".header-qd-v1-float-menu-trigger").click(function () {
        $(".header-qd-v1-amazing-menu-wrapper.float-bar").toggleClass(
          "qd-nav-float-on"
        );
      });
    },
    blogAdjustBodyHeight: function () {
      if ($(document.body).is(".qd-am-on")) {
        var t = $(".header-qd-v1-amazing-menu-mobile-wrapper >.row").height();
        $(document.body).css("min-height", t);
      } else $(document.body).css("min-height", "");
    },
  },
  Home = {
    init: function () {
      Home.sliderFull(), Home.countDown();
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    sliderFull: function () {
      var t = $(".slider-qd-v1-full");
      t.slick({
        dots: !0,
        fade: !0,
        cssEase: "linear",
        infinite: !0,
        speed: 500,
        draggable: !1,
        autoplay: !0,
        autoplaySpeed: 4e3,
      }),
        t.each(function () {
          $(this).find(".slick-arrow").wrapAll('<div class="slick-nav" />');
        });
    },
    countDown: function () {
      $(".countdown-qd-v1-wrapper .shelf-qd-v1").each(function () {
        var t = $(this);
        t.prepend('<p class="shelf-qd-v1-countdown-title">SUPER OFERTA</p>'),
          t.vtexCountdown({
            htmlFormat:
              '<span class="days qd-cp-timeinfo">%days% <span class="vtex-cd_p qd-cp-text">dias</span><span class="vtex-cd_s qd-cp-text">dia</span> </span><span class="hours qd-cp-timeinfo">%hours% <span class="vtex-cd_p qd-cp-text">horas</span><span class="vtex-cd_s qd-cp-text">hora</span> </span><span class="minutes qd-cp-timeinfo">%minutes% <span class="vtex-cd_p qd-cp-text">min.</span><span class="vtex-cd_s qd-cp-text">min.</span> </span><span class="seconds qd-cp-timeinfo">%seconds% <span class="vtex-cd_p qd-cp-text">seg.</span><span class="vtex-cd_s qd-cp-text">seg.</span> </span>',
            displayElement: ".shelf-qd-v1-countdown",
            callback: function () {
              t.addClass("qd-has-countdown");
            },
          });
      });
    },
  },
  Search = {
    init: function () {
      Search.hideExtendedMenu(),
        Search.openFiltersMenu(".search-multiple-navigator"),
        Search.shelfLineFix(),
        Home.sliderFull();
    },
    ajaxStop: function () {
      Search.shelfLineFix();
    },
    windowOnload: function () {},
    infinityScroll: function () {
      $(".prateleira[id*=ResultItems]").QD_infinityScroll();
    },
    hideExtendedMenu: function () {
      $(".search-qd-v1-navigator ul").each(function () {
        var t = $(this),
          e = t.find(">li");
        if (!(10 >= e.length)) {
          var i = e.filter(":gt(9)").stop(!0, !0).hide(),
            o = $('<a class="qd-viewMoreMenu">Mostrar mais</a>');
          t.after(o);
          var s = $(
            '<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais filtros</a></li>'
          );
          t.append(s),
            (t = function () {
              i.stop(!0, !0).slideToggle(0, function () {
                10 < e.filter(":visible").length
                  ? (o.addClass("minus").text("Mostrar menos filtros"),
                    s.addClass("minus").find("a").text("Mostrar menos filtros"))
                  : (o.removeClass("minus").text("Mostrar mais filtros"),
                    s
                      .removeClass("minus")
                      .find("a")
                      .text("Mostrar mais filtros"));
              });
            }),
            s.bind("click.qd_viewMore", t),
            o.bind("click.qd_viewMore", t);
        }
      });
      var t = $(".search-single-navigator, .search-multiple-navigator");
      t.find("h3, h4, h5").click(function (e) {
        var i = $(this);
        ($(e.target).is(t.find("h3")) ||
          $(e.target).is(t.find("h4")) ||
          $(e.target).is(t.find("h5"))) &&
          (i
            .find("+ ul")
            .stop(!0, !0)
            .slideToggle(0, function () {
              i.toggleClass("qd-seach-active-menu");
            }),
          i
            .find("+ div")
            .stop(!0, !0)
            .slideToggle(0, function () {
              i.toggleClass("qd-seach-active-menu");
            }));
      });
    },
    openFiltersMenu: function (t) {
      $(".search-qd-v1-navigator-trigger").click(function (e) {
        e.preventDefault(),
          $(document.body).toggleClass("qd-sn-on"),
          null != t && ".search-multiple-navigator" == t
            ? $(".search-qd-v1-navigator-close")
                .appendTo(".search-multiple-navigator-navigator")
                .removeClass("hide")
            : $(".search-qd-v1-navigator-close")
                .appendTo(".search-single-navigator")
                .removeClass("hide");
      }),
        $(".navigation-tabs").prepend(
          '<span class="search-qd-v1-navigator-close hide"></span>'
        ),
        $(".search-qd-v1-navigator-close").click(function () {
          $(document.body).removeClass("qd-sn-on"),
            $(".search-qd-v1-navigator-close").addClass("hide");
        });
    },
    shelfLineFix: function () {
      try {
        var t = function () {
          var t,
            e = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')")
              .addClass("qd-fi-on")
              .children("ul")
              .removeClass("qd-first-line");
          e.first().addClass("qd-first-line");
          var i = function () {
            e.each(function () {
              var i = $(this);
              if (i.is(".qd-first-line")) (t = i.offset().top), (e = e.not(i));
              else {
                var o = i.offset().top;
                if (!(o >= t - 10 && o <= t + 10))
                  return i.addClass("qd-first-line"), !1;
                e = e.not(i);
              }
            }),
              e.length && i();
          };
          i();
        };
        t(),
          window.qd_shelf_line_fix_ ||
            ($(window).on("QuatroDigital.sr_shelfCallback", t),
            (window.qd_shelf_line_fix_ = !0)),
          window.qd_shelf_line_fix_is ||
            ($(window).on("QuatroDigital.is_Callback", t),
            (window.qd_shelf_line_fix_is = !0));
        var e = $._data(window).events.resize,
          i = !0;
        if (e)
          for (var o = 0; o < e.length; o++)
            if ("qd" == e[o].namespace) {
              i = !1;
              break;
            }
        if (i) {
          var s = 0;
          $(window).on("resize.qd", function () {
            clearTimeout(s),
              (s = setTimeout(function () {
                $(".qd-first-line").removeClass(".qd-first-line"), t();
              }, 20));
          });
        }
      } catch (t) {
        "undefined" != typeof console &&
          "function" == typeof console.error &&
          console.error("Problemas :( . Detalhes: " + t.message);
      }
    },
  },
  Product = {
    run: function () {},
    init: function () {
      Product.accessoriesFix(),
        Product.accessoriesApplyCarousel(),
        Product.forceImageZoom(),
        Product.setAvailableBodyClass(),
        $(window).on("skuSelectable.vtex", Product.applyCarouselThumb),
        Product.qdCallThumbVideo(),
        Product.openShipping(),
        Product.qdHideUniqueSkuOption(),
        Product.scrollToDescription(),
        Product.scrollToOpinions(),
        Product.seeInstalments(),
        Product.applyMatchCarouselShelf(),
        Product.saveAmountFlag(),
        Product.scrollToBuyButton(),
        Product.showFloatingBuyBar(),
        Product.applyProductBrandCarousel(),
        Product.smartStockInit(),
        Product.applyCarouselShelfSimilares(),
        Product.yourProductMatchWith(),
        Product.buyAsynchronousSkuChangedFix();
    },
    ajaxStop: function () {
      Product.applyCarouselThumb();
    },
    windowOnload: function () {},
    accessoriesFix: function () {
      $("fieldset >.buy-product-checkbox")
        .parent()
        .each(function () {
          var t = $(this);
          t.add(t.prev("ul")).wrapAll(
            '<div class="accessories-qd-v1-item col-xs-12 col-sm-6 col-md-3"/>'
          );
        });
    },
    applyCarouselShelfSimilares: function () {
      var t = $(".qd-stonetree-color");
      if (!t.length) return !1;
      t.each(function () {
        $(this).find("h2").insertBefore(t);
      }),
        t.parent().removeClass("mosaic-qd-v1-wrapper"),
        t.slick({
          prevArrow:
            '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: !0,
          draggable: !1,
          speed: 700,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 4, slidesToScroll: 4 },
            },
            {
              breakpoint: 991,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 550,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
    },
    accessoriesApplyCarousel: function () {
      var t = $(".accessories-qd-v1-item");
      t.length &&
        (t.wrapAll('<div class="accessories-qd-v1-carousel"></div>'),
        $(".accessories-qd-v1-carousel").slick({
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: !0,
          draggable: !1,
          speed: 700,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 991,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        }));
    },
    setAvailableBodyClass: function () {
      function t(t) {
        t
          ? $(document.body)
              .addClass("qd-product-available")
              .removeClass("qd-product-unavailable")
          : $(document.body)
              .addClass("qd-product-unavailable")
              .removeClass("qd-product-available");
      }
      $(document).on("skuSelected.vtex", function (e, i, o) {
        t(o.available);
      }),
        t(skuJson.available);
    },
    forceImageZoom: function () {
      try {
        var t = window.ImageControl;
        window.ImageControl = function () {
          $("ul.thumbs a").each(function () {
            var t = $(this);
            if (!t.attr("zoom")) {
              var e = t.attr("rel");
              e &&
                t.attr(
                  "zoom",
                  e.replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1000-1000")
                );
            }
          }),
            t.apply(this, arguments);
        };
      } catch (t) {
        "undefined" != typeof console &&
          "function" == typeof console.error &&
          console.error(
            "Ops, algo saiu errado como zoom :( . Detalhes: " + t.message
          );
      }
    },
    applyCarouselThumb: function () {
      var t = $(".product-qd-v1-thumbs-mobile");
      t.removeClass("slick-initialized slick-slider"),
        t.on("init", function (e, i) {
          $(this).find(".slick-current a").addClass("ON"),
            $(this)
              .find("a")
              .on("click", function () {
                t.slick(
                  "slickGoTo",
                  $(this).closest("li").attr("data-slick-index")
                );
              });
        }),
        t.slick({
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: !1,
          infinite: !1,
          draggable: !0,
          swipeToSlide: !0,
          edgeFriction: 0.1,
          variableWidth: !0,
        });
    },
    qdCallThumbVideo: function () {
      var t = $("td.value-field.VIDEO:first iframe");
      window.qdVideoInProduct = t.length
        ? {
            videoFieldSelector: $("<span/>")
              .addClass("video-product")
              .text(
                "https://www.youtube.com/watch?v=" +
                  t.attr("src").split("?").shift().split("/").pop() +
                  "&rel=0"
              ),
            urlProtocol: "https",
          }
        : {
            videoFieldSelector: "td.value-field.VIDEO:first",
            urlProtocol: "https",
          };
    },
    openShipping: function () {
      "function" == typeof window.ShippingValue && window.ShippingValue();
    },
    qdHideUniqueSkuOption: function () {
      $(".product-qd-v1-sku-selection [class*='group_']").each(function () {
        var t = $(this),
          e = t.find("input");
        1 === e.length &&
          (e.attr("checked", !0).change(), t.getParent("ul").hide());
      });
    },
    scrollToDescription: function () {
      $(".product-qd-v1-link-description").click(function (t) {
        t.preventDefault(),
          $("html, body")
            .stop()
            .animate(
              { scrollTop: $(".product-qd-v1-description").offset().top - 100 },
              900,
              "swing"
            );
      });
    },
    scrollToOpinions: function () {
      $(".product-qd-v1-see-opinions").click(function (t) {
        t.preventDefault(),
          $("html, body")
            .stop()
            .animate(
              { scrollTop: $(".product-qd-v1-avaliations").offset().top - 100 },
              900,
              "swing"
            );
      });
    },
    seeInstalments: function () {
      $(".product-qd-v1-see-installments").click(function (t) {
        t.preventDefault(),
          $(this).toggleClass("qd-is-active"),
          $(".product-qd-v1-installments-method").toggleClass("qd-is-visible");
      });
    },
    applyMatchCarouselShelf: function () {
      var t = $(".product-match-qd-v1-shelf-carousel .prateleira");
      if (!t.length) return !1;
      t.each(function () {
        $(this).find("h2").insertBefore(t);
      }),
        t.slick({
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          draggable: !1,
          speed: 700,
          responsive: [
            {
              breakpoint: 991,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 550,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
    },
    saveAmountFlag: function () {
      var t = $(".product-qd-v1-stamps-highlight-discount");
      $(window).on("skuSelected.vtex", function (e, i, o) {
        t.length ||
          (t = $(
            '<div class="product-qd-v1-stamps-highlight-discount"></div>'
          ).prependTo(".product-qd-v1-stamps")),
          o.listPrice > o.bestPrice
            ? t
                .text(
                  parseInt(100 - (o.bestPrice / o.listPrice) * 100) + "% OFF"
                )
                .show()
            : t.hide();
      }),
        1 <= skuJson.skus.length &&
          (t.length ||
            (t = $(
              '<div class="product-qd-v1-stamps-highlight-discount"></div>'
            ).prependTo(".product-qd-v1-stamps")),
          skuJson.skus[0].listPrice > skuJson.skus[0].bestPrice &&
            t
              .text(
                parseInt(
                  100 -
                    (skuJson.skus[0].bestPrice / skuJson.skus[0].listPrice) *
                      100
                ) + "% OFF"
              )
              .show());
    },
    scrollToBuyButton: function () {
      $(".product-qd-v1-buy-button-float").click(function (t) {
        t.preventDefault(),
          $("html, body")
            .stop()
            .animate(
              { scrollTop: $(".product-qd-v1-name").offset().top - 100 },
              900,
              "swing"
            );
      });
    },
    showFloatingBuyBar: function () {
      var t = $(".product-qd-v1-buy-button").offset().top - 10,
        e = $(".product-floating-bar-buy"),
        i = $(window).scroll(function () {
          i.scrollTop() > t ? e.addClass("active") : e.removeClass("active");
        });
    },
    applyProductBrandCarousel: function () {
      $(".brand-carousel-qd-v1-carousel").slick({
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: !0,
        speed: 700,
        responsive: [
          { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: !0,
              infinite: !0,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: !0,
              infinite: !0,
              centerPadding: "0px",
            },
          },
        ],
      });
    },
    smartStockInit: function () {
      $(".qd_smart_stock_available").QD_smartStockAvailable();
    },
    yourProductMatchWith: function () {
      var t = $(".product-match-qd-v1-wrapper");
      if (!(1 > t.find(".product-match-qd-v1-last-product *").length)) {
        t.show(), (t = $(".shelf-qd-v1-current-product"));
        var e = skuJson.skus[0].image.replace(
          /(ids\/[0-9]+-)[0-9-]+/i,
          "$1300-300"
        );
        null != e
          ? $('<img src="' + e + '">').load(function () {
              $(this).appendTo(".shelf_qd_v1_image");
            })
          : console.log(
              "[Seu produto combina com...] Não foi possível obter a imagem da vitrine..."
            ),
          (e = $(".product-qd-v1-stamps p").clone()),
          t.find(".shelf-qd-v1-stamps").append(e),
          (e =
            "<a href=void();>" +
            $(
              ".product-qd-v1-sku-selection-row .product-qd-v1-name >div"
            ).text() +
            "</a>"),
          t.find(".shelf-qd-v1-name h3").append(e);
        var i = $(
          ".product-qd-v1-sku-selection-row .product-qd-v1-price .descricao-preco"
        );
        (e = i.find(".skuBestPrice").clone()),
          (i = i.find(".price-installments >span").clone()),
          t.find(".shelf-qd-v1-price .shelf-qd-v1-price-best-price").append(e),
          t.find(".shelf-qd-v1-price .shelf-qd-v1-price-instalment").append(i),
          (e = $(".product-qd-v1-sku-selection-row .product-qd-v1-buy-button a")
            .first()
            .clone()),
          t.find(".shelf-qd-v1-buy-button").append(e),
          (e =
            "<ul><li>" +
            $(".product-qd-v1-specification table td.CONSERVACAO").text() +
            "</li></ul>"),
          t.find(".shelf-qd-v1-product-field").append(e);
      }
    },
    buyAsynchronousSkuChangedFix: function () {
      try {
        var t = !0,
          e = window.imageControl_OnSkuDataReceived;
        $(".btn-add-buy-button-asynchronous").click(function () {
          t = !1;
        }),
          $(window).on("orderFormUpdated.vtex", function () {
            t = !0;
          }),
          $(
            ".product-qd-v1-image-wrapper, .product-qd-v1-image-thumbs, .product-qd-v1-sku-selection-box, .product-tip-bar-qd-v1-full"
          ).click(function () {
            t = !0;
          }),
          (window.imageControl_OnSkuDataReceived = function (i) {
            t && e.apply(this, arguments);
          });
      } catch (t) {
        "undefined" != typeof console &&
          "function" == typeof console.error &&
          console.error(
            "Ops, algo saiu errado como zoom :( . Detalhes: " + t.message
          );
      }
    },
  },
  List = {
    run: function () {},
    init: function () {},
    ajaxStop: function () {},
    windowOnload: function () {},
  },
  Institutional = {
    init: function () {
      Institutional.sideMenuToggle(), Institutional.sendAccessForm();
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    sideMenuToggle: function () {
      $(".institucional-qd-v1-menu-toggle-wrap").click(function (t) {
        t.preventDefault(), $(document.body).addClass("qd-sn-on");
      }),
        $(".institucional-qd-v1-side-menu-wrap-close").click(function () {
          $(document.body).removeClass("qd-sn-on");
        });
    },
    checkEmailExist: function (t) {
      return (
        (window.QD_checkEmailExist_request =
          window.QD_checkEmailExist_request ||
          $.ajax({
            url: "/api/dataentities/CL/search",
            data: { _fields: "id", email: t },
            type: "GET",
            dataType: "json",
            headers: { Accept: "application/vnd.vtex.ds.v10+json" },
            success: function (t) {
              t.length &&
                alert(
                  "Este e-mail já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente."
                );
            },
            complete: function () {
              window.QD_checkEmailExist_request = void 0;
            },
          })),
        window.QD_checkEmailExist_request
      );
    },
    checkCnpjExist: function (t) {
      return (
        (window.QD_checkCnpjExist_request =
          window.QD_checkCnpjExist_request ||
          $.ajax({
            url: "/api/dataentities/CL/search",
            data: {
              _fields: "id",
              corporateDocument: t.replace(/[^0-9]/gi, ""),
            },
            type: "GET",
            dataType: "json",
            headers: { Accept: "application/vnd.vtex.ds.v10+json" },
            success: function (t) {
              t.length &&
                alert(
                  "Este CNPJ já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente."
                );
            },
            complete: function () {
              window.QD_checkCnpjExist_request = void 0;
            },
          })),
        window.QD_checkCnpjExist_request
      );
    },
    sendAccessForm: function () {
      Institutional.formCadastreMask();
      var t = $(".form-qd-v1"),
        e = $("form-qd-v1-loading").hide(),
        i = t.find("[name='qd_form_cpnj']");
      i.keyup(function (t) {
        17 < (i.val() || "").length &&
          Institutional.checkCnpjExist(i.val() || "");
      });
      var o = t.find("[name='qd_form_email']");
      o.focusout(function (t) {
        0 < (o.val() || "").length &&
          Institutional.checkEmailExist(o.val() || "");
      });
      var s = t
          .find(
            "input[name=qd_form_street], input[name=qd_form_complement], input[name=qd_form_neighboor], input[name=qd_form_city], input[name=qd_form_state]"
          )
          .attr("disabled", "disabled"),
        n = t.find("input[name=qd_form_zipcode]");
      n.keyup(function (i) {
        9 > (n.val() || "").length ||
          (e.slideDown(),
          $.ajax({
            url: "/api/checkout/pub/postal-code/BRA/" + n.val(),
            dataType: "json",
            success: function (i) {
              e.slideDown(),
                t.find("input[name=qd_form_street]").val(i.street || ""),
                t
                  .find("input[name=qd_form_neighboor]")
                  .val(i.neighborhood || ""),
                t.find("input[name=qd_form_city]").val(i.city || ""),
                t.find("input[name=qd_form_state]").val(i.state || "");
            },
            complete: function () {
              s.removeAttr("disabled"), e.slideUp();
            },
          }));
      }),
        "function" == typeof $.fn.validate &&
          t.validate({
            rules: { email: { email: !0 } },
            submitHandler: function (t) {
              if (((t = $(t)), t.valid())) {
                e.slideDown();
                var i = t.find("input, textarea");
                Institutional.checkEmailExist(
                  i.filter("[name='qd_form_email']").val() || ""
                )
                  .always(function () {
                    e.slideUp();
                  })
                  .done(function (t) {
                    t.length ||
                      (e.slideDown(),
                      Institutional.checkCnpjExist(
                        i.filter("[name='qd_form_cpnj']").val() || ""
                      )
                        .always(function () {
                          e.slideUp();
                        })
                        .done(function (t) {
                          if (!t.length) {
                            e.slideDown(),
                              (t = (
                                i.filter("[name='qd_form_ie']").val() ||
                                "Isento"
                              ).trim()),
                              (t = t.length ? t : "Isento"),
                              (t = t.replace(/i.+ento/g, "Isento"));
                            var o = i
                              .filter("[name='qd_form_email_news']")
                              .val();
                            (o = "on" == o ? "true" : "false"),
                              $.ajax({
                                url:
                                  "/api/dataentities/CL/documents?an=lojafatab2b",
                                type: "PATCH",
                                dataType: "json",
                                headers: {
                                  Accept: "application/vnd.vtex.ds.v10+json",
                                  "Content-Type":
                                    "application/json; charset=utf-8",
                                },
                                data: JSON.stringify({
                                  firstName:
                                    i.filter("[name='qd_form_name']").val() ||
                                    "",
                                  lastName:
                                    i
                                      .filter("[name='qd_form_lastname']")
                                      .val() || "",
                                  email:
                                    i.filter("[name='qd_form_email']").val() ||
                                    "",
                                  isNewsletterOptIn: o || "",
                                  gender:
                                    i
                                      .filter("[name='qd_form_sex']:checked")
                                      .val() || "",
                                  documentType: "cpf",
                                  document: (
                                    i.filter("[name='qd_form_cpf']").val() || ""
                                  ).replace(/[^0-9]/gi, ""),
                                  homePhone:
                                    "+55" +
                                    (
                                      i
                                        .filter("[name='qd_form_phone']")
                                        .val() || ""
                                    ).replace(/[^0-9]/gi, ""),
                                  cellPhone:
                                    "+55" +
                                    (
                                      i
                                        .filter("[name='qd_form_celphone']")
                                        .val() || ""
                                    ).replace(/[^0-9]/gi, ""),
                                  isSMSNewsletterOptIn: !1,
                                  tradeName:
                                    i
                                      .filter("[name='qd_form_trading_name']")
                                      .val() || "",
                                  corporateName:
                                    i
                                      .filter("[name='qd_form_company_name']")
                                      .val() || "",
                                  corporateDocument: (
                                    i.filter("[name='qd_form_cpnj']").val() ||
                                    ""
                                  ).replace(/[^0-9]/gi, ""),
                                  stateRegistration: t,
                                  site:
                                    i.filter("[name='qd_form_site']").val() ||
                                    "",
                                  facebook:
                                    i
                                      .filter("[name='qd_form_facebook']")
                                      .val() || "",
                                  instagram:
                                    i
                                      .filter("[name='qd_form_instagram']")
                                      .val() || "",
                                  workingBrands:
                                    i
                                      .filter("[name='qd_form_working_brands']")
                                      .val() || "",
                                  interestingBrands:
                                    i
                                      .filter(
                                        "[name='qd_form_interesting_brands']"
                                      )
                                      .val() || "",
                                  isCorporate: !0,
                                  localeDefault: "pt-BR",
                                }),
                                success: function (t) {
                                  $.ajax({
                                    url:
                                      "/api/dataentities/AD/documents?an=lojafatab2b",
                                    type: "PATCH",
                                    dataType: "json",
                                    headers: {
                                      Accept:
                                        "application/vnd.vtex.ds.v10+json",
                                      "Content-Type":
                                        "application/json; charset=utf-8",
                                    },
                                    data: JSON.stringify({
                                      addressName: "Principal",
                                      userId: (t.Id || "").replace(
                                        /^[a-z]{2}\-/i,
                                        ""
                                      ),
                                      street:
                                        i
                                          .filter("[name='qd_form_street']")
                                          .val() || "",
                                      number:
                                        i
                                          .filter("[name='qd_form_number']")
                                          .val() || "",
                                      complement:
                                        i
                                          .filter("[name='qd_form_complement']")
                                          .val() || "",
                                      neighborhood:
                                        i
                                          .filter("[name='qd_form_neighboor']")
                                          .val() || "",
                                      city:
                                        i
                                          .filter("[name='qd_form_city']")
                                          .val() || "",
                                      state:
                                        i
                                          .filter("[name='qd_form_state']")
                                          .val() || "",
                                      country:
                                        i
                                          .filter("[name='qd_form_country']")
                                          .val() || "",
                                      postalCode:
                                        i
                                          .filter("[name='qd_form_zipcode']")
                                          .val() || "",
                                      addressType: "residential",
                                      receiverName:
                                        i
                                          .filter("[name='qd_form_name']")
                                          .val() || "",
                                      geoCoordinate: [],
                                    }),
                                    success: function () {
                                      $(".form-qd-v1-sucess").removeClass(
                                        "hide"
                                      ),
                                        $(".register-content-qd-v1").addClass(
                                          "hide"
                                        ),
                                        $(document).scrollTop(0);
                                    },
                                    error: function (t) {
                                      alert(
                                        "Não foi possível enviar seu formulário, por favor tente novamente ou entre em contato por telefone."
                                      );
                                    },
                                    complete: function () {
                                      e.slideUp(function () {
                                        $(this).remove();
                                      });
                                    },
                                  });
                                },
                                error: function () {
                                  alert(
                                    "Não foi possível enviar seu formulário, por favor tente novamente ou entre em contato por telefone."
                                  ),
                                    e.slideUp(function () {
                                      $(this).remove();
                                    });
                                },
                              });
                          }
                        }));
                  });
              }
            },
            errorPlacement: function (t, e) {},
          });
    },
    formCadastreMask: function () {
      var t = $(".form-qd-v1");
      t.length &&
        "function" == typeof $.fn.mask &&
        (t.find("[name=qd_form_cpnj]").mask("00.000.000/0000-00"),
        t.find("[name=qd_form_cpf]").mask("000.000.000-00"),
        t.find("[name=qd_form_phone]").mask("(00) 0000-00009"),
        t.find("[name=qd_form_celphone]").mask("(00) 0000-00009"),
        t.find("[name=qd_form_zipcode]").mask("00000-000"),
        t.find("[name=qd_form_ie]").mask("###.###.###.###.###"),
        t.find("[name=qd_form_birthdate]").mask("00/00/0000"));
    },
  },
  Orders = {
    init: function () {
      Orders.bootstrapCssFix();
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    bootstrapCssFix: function () {
      for (var t = document.styleSheets, e = 0; e < t.length; e++)
        if (
          -1 <
          (t[e].href || "").indexOf(
            "io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css"
          )
        ) {
          t[e].disabled = !0;
          break;
        }
    },
  };
try {
  (function () {
    var t,
      e = function () {
        Common.windowOnload(),
          t.is(".home")
            ? Home.windowOnload()
            : t.is(".resultado-busca, .departamento, .categoria")
            ? Search.windowOnload()
            : t.is(".produto")
            ? Product.windowOnload()
            : t.is(".listas")
            ? List.windowOnload()
            : t.is(".institucional")
            ? Institutional.windowOnload()
            : t.is(".orders") && Orders.windowOnload();
      },
      i = function () {
        Common.ajaxStop(),
          t.is(".home")
            ? Home.ajaxStop()
            : t.is(".resultado-busca, .departamento, .categoria")
            ? Search.ajaxStop()
            : t.is(".produto")
            ? Product.ajaxStop()
            : t.is(".listas")
            ? List.ajaxStop()
            : t.is(".institucional")
            ? Institutional.ajaxStop()
            : t.is(".orders") && Orders.ajaxStop();
      };
    $(function () {
      (t = $(document.body)),
        Common.init(),
        t.is(".home")
          ? Home.init()
          : t.is(".resultado-busca, .departamento, .categoria")
          ? ((Search.isSearch = $(document.body).is(".resultado-busca")),
            (Search.isDepartament = $(document.body).is(".departamento")),
            (Search.isCategory = $(document.body).is(".categoria")),
            Search.init())
          : t.is(".produto")
          ? Product.init()
          : t.is(".listas")
          ? List.init()
          : t.is(".institucional")
          ? Institutional.init()
          : t.is(".orders") && Orders.init(),
        $(document).ajaxStop(i),
        $(window).load(e),
        t.addClass("jsFullLoaded");
    }),
      Common.run(),
      "/p" ==
      location.pathname.substr(location.pathname.length - 2, 2).toLowerCase()
        ? Product.run()
        : 0 == location.pathname.search(/^(\/giftlist|\/list\/)/) && List.run();
  })();
} catch (t) {
  "undefined" != typeof console &&
    "function" == typeof console.error &&
    $("body").addClass("jsFullLoaded jsFullLoadedError") &&
    console.error(
      "Houve um erro ao iniciar os objetos. Detalhes: " + t.message
    );
}
(function () {
  var t;
  "function" != typeof $.cookie &&
    ((t = function (t) {
      function e(t) {
        return (
          (t = s.json ? JSON.stringify(t) : String(t)),
          s.raw ? t : encodeURIComponent(t)
        );
      }
      function i(e, i) {
        if (s.raw) var n = e;
        else
          t: {
            var a = e;
            0 === a.indexOf('"') &&
              (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
              (a = decodeURIComponent(a.replace(o, " "))),
                (n = s.json ? JSON.parse(a) : a);
              break t;
            } catch (t) {}
            n = void 0;
          }
        return t.isFunction(i) ? i(n) : n;
      }
      var o = /\+/g,
        s = (t.cookie = function (o, n, a) {
          if (1 < arguments.length && !t.isFunction(n)) {
            if (
              ((a = t.extend({}, s.defaults, a)), "number" == typeof a.expires)
            ) {
              var r = a.expires,
                d = (a.expires = new Date());
              d.setTime(+d + 864e5 * r);
            }
            return (document.cookie = [
              s.raw ? o : encodeURIComponent(o),
              "=",
              e(n),
              a.expires ? "; expires=" + a.expires.toUTCString() : "",
              a.path ? "; path=" + a.path : "",
              a.domain ? "; domain=" + a.domain : "",
              a.secure ? "; secure" : "",
            ].join(""));
          }
          (r = o ? void 0 : {}),
            (d = document.cookie ? document.cookie.split("; ") : []);
          for (var l = 0, c = d.length; l < c; l++) {
            var f = d[l].split("="),
              u = f.shift();
            if (
              ((u = s.raw ? u : decodeURIComponent(u)),
              (f = f.join("=")),
              o && o === u)
            ) {
              r = i(f, n);
              break;
            }
            o || void 0 === (f = i(f)) || (r[u] = f);
          }
          return r;
        });
      (s.defaults = {}),
        (t.removeCookie = function (e, i) {
          return (
            void 0 !== t.cookie(e) &&
            (t.cookie(e, "", t.extend({}, i, { expires: -1 })), !t.cookie(e))
          );
        });
    }),
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? t(require("jquery"))
      : t(jQuery));
})(),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "undefined" != typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    var e,
      i = window.Slick || {};
    (e = 0),
      (i = function (i, o) {
        (this.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(i),
          appendDots: t(i),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, i) {
            return t(
              '<button type="button" data-role="none" role="button" tabindex="0" />'
            ).text(i + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (this.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          t.extend(this, this.initials),
          (this.animProp = this.animType = this.activeBreakpoint = null),
          (this.breakpoints = []),
          (this.breakpointSettings = []),
          (this.interrupted = this.focussed = this.cssTransitions = !1),
          (this.hidden = "hidden"),
          (this.paused = !0),
          (this.respondTo = this.positionProp = null),
          (this.rowCount = 1),
          (this.shouldClick = !0),
          (this.$slider = t(i)),
          (this.transitionType = this.transformType = this.$slidesCache = null),
          (this.visibilityChange = "visibilitychange"),
          (this.windowWidth = 0),
          (this.windowTimer = null);
        var s = t(i).data("slick") || {};
        (this.options = t.extend({}, this.defaults, o, s)),
          (this.currentSlide = this.options.initialSlide),
          (this.originalSettings = this.options),
          void 0 !== document.mozHidden
            ? ((this.hidden = "mozHidden"),
              (this.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((this.hidden = "webkitHidden"),
              (this.visibilityChange = "webkitvisibilitychange")),
          (this.autoPlay = t.proxy(this.autoPlay, this)),
          (this.autoPlayClear = t.proxy(this.autoPlayClear, this)),
          (this.autoPlayIterator = t.proxy(this.autoPlayIterator, this)),
          (this.changeSlide = t.proxy(this.changeSlide, this)),
          (this.clickHandler = t.proxy(this.clickHandler, this)),
          (this.selectHandler = t.proxy(this.selectHandler, this)),
          (this.setPosition = t.proxy(this.setPosition, this)),
          (this.swipeHandler = t.proxy(this.swipeHandler, this)),
          (this.dragHandler = t.proxy(this.dragHandler, this)),
          (this.keyHandler = t.proxy(this.keyHandler, this)),
          (this.instanceUid = e++),
          (this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          this.registerBreakpoints(),
          this.init(!0);
      }),
      (i.prototype.activateADA = function () {
        this.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" });
      }),
      (i.prototype.addSlide = i.prototype.slickAdd = function (e, i, o) {
        if ("boolean" == typeof i) (o = i), (i = null);
        else if (0 > i || i >= this.slideCount) return !1;
        this.unload(),
          "number" == typeof i
            ? 0 === i && 0 === this.$slides.length
              ? t(e).appendTo(this.$slideTrack)
              : o
              ? t(e).insertBefore(this.$slides.eq(i))
              : t(e).insertAfter(this.$slides.eq(i))
            : !0 === o
            ? t(e).prependTo(this.$slideTrack)
            : t(e).appendTo(this.$slideTrack),
          (this.$slides = this.$slideTrack.children(this.options.slide)),
          this.$slideTrack.children(this.options.slide).detach(),
          this.$slideTrack.append(this.$slides),
          this.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e);
          }),
          (this.$slidesCache = this.$slides),
          this.reinit();
      }),
      (i.prototype.animateHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.animate({ height: t }, this.options.speed);
        }
      }),
      (i.prototype.animateSlide = function (e, i) {
        var o = {},
          s = this;
        s.animateHeight(),
          !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
          !1 === s.transformsEnabled
            ? !1 === s.options.vertical
              ? s.$slideTrack.animate(
                  { left: e },
                  s.options.speed,
                  s.options.easing,
                  i
                )
              : s.$slideTrack.animate(
                  { top: e },
                  s.options.speed,
                  s.options.easing,
                  i
                )
            : !1 === s.cssTransitions
            ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
              t({ animStart: s.currentLeft }).animate(
                { animStart: e },
                {
                  duration: s.options.speed,
                  easing: s.options.easing,
                  step: function (t) {
                    (t = Math.ceil(t)),
                      !1 === s.options.vertical
                        ? ((o[s.animType] = "translate(" + t + "px, 0px)"),
                          s.$slideTrack.css(o))
                        : ((o[s.animType] = "translate(0px," + t + "px)"),
                          s.$slideTrack.css(o));
                  },
                  complete: function () {
                    i && i.call();
                  },
                }
              ))
            : (s.applyTransition(),
              (e = Math.ceil(e)),
              !1 === s.options.vertical
                ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
              s.$slideTrack.css(o),
              i &&
                setTimeout(function () {
                  s.disableTransition(), i.call();
                }, s.options.speed));
      }),
      (i.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
      }),
      (i.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0);
          });
      }),
      (i.prototype.applyTransition = function (t) {
        var e = {};
        !1 === this.options.fade
          ? (e[this.transitionType] =
              this.transformType +
              " " +
              this.options.speed +
              "ms " +
              this.options.cssEase)
          : (e[this.transitionType] =
              "opacity " + this.options.speed + "ms " + this.options.cssEase),
          !1 === this.options.fade
            ? this.$slideTrack.css(e)
            : this.$slides.eq(t).css(e);
      }),
      (i.prototype.autoPlay = function () {
        this.autoPlayClear(),
          this.slideCount > this.options.slidesToShow &&
            (this.autoPlayTimer = setInterval(
              this.autoPlayIterator,
              this.options.autoplaySpeed
            ));
      }),
      (i.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (i.prototype.autoPlayIterator = function () {
        var t = this.currentSlide + this.options.slidesToScroll;
        this.paused ||
          this.interrupted ||
          this.focussed ||
          (!1 === this.options.infinite &&
            (1 === this.direction &&
            this.currentSlide + 1 === this.slideCount - 1
              ? (this.direction = 0)
              : 0 === this.direction &&
                ((t = this.currentSlide - this.options.slidesToScroll),
                0 == this.currentSlide - 1 && (this.direction = 1))),
          this.slideHandler(t));
      }),
      (i.prototype.buildArrows = function () {
        !0 === this.options.arrows &&
          ((this.$prevArrow = t(this.options.prevArrow).addClass(
            "slick-arrow"
          )),
          (this.$nextArrow = t(this.options.nextArrow).addClass("slick-arrow")),
          this.slideCount > this.options.slidesToShow
            ? (this.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              this.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              this.htmlExpr.test(this.options.prevArrow) &&
                this.$prevArrow.prependTo(this.options.appendArrows),
              this.htmlExpr.test(this.options.nextArrow) &&
                this.$nextArrow.appendTo(this.options.appendArrows),
              !0 !== this.options.infinite &&
                this.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : this.$prevArrow
                .add(this.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (i.prototype.buildDots = function () {
        var e;
        if (
          !0 === this.options.dots &&
          this.slideCount > this.options.slidesToShow
        ) {
          this.$slider.addClass("slick-dotted");
          var i = t("<ul />").addClass(this.options.dotsClass);
          for (e = 0; e <= this.getDotCount(); e += 1)
            i.append(
              t("<li />").append(this.options.customPaging.call(this, this, e))
            );
          (this.$dots = i.appendTo(this.options.appendDots)),
            this.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (i.prototype.buildOut = function () {
        (this.$slides = this.$slider
          .children(this.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (this.slideCount = this.$slides.length),
          this.$slides.each(function (e, i) {
            t(i)
              .attr("data-slick-index", e)
              .data("originalStyling", t(i).attr("style") || "");
          }),
          this.$slider.addClass("slick-slider"),
          (this.$slideTrack =
            0 === this.slideCount
              ? t('<div class="slick-track"/>').appendTo(this.$slider)
              : this.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (this.$list = this.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          this.$slideTrack.css("opacity", 0),
          (!0 !== this.options.centerMode &&
            !0 !== this.options.swipeToSlide) ||
            (this.options.slidesToScroll = 1),
          t("img[data-lazy]", this.$slider)
            .not("[src]")
            .addClass("slick-loading"),
          this.setupInfinite(),
          this.buildArrows(),
          this.buildDots(),
          this.updateDots(),
          this.setSlideClasses(
            "number" == typeof this.currentSlide ? this.currentSlide : 0
          ),
          !0 === this.options.draggable && this.$list.addClass("draggable");
      }),
      (i.prototype.buildRows = function () {
        var t, e, i, o, s;
        if (
          ((o = document.createDocumentFragment()),
          (s = this.$slider.children()),
          1 < this.options.rows)
        ) {
          var n = this.options.slidesPerRow * this.options.rows,
            a = Math.ceil(s.length / n);
          for (t = 0; a > t; t++) {
            var r = document.createElement("div");
            for (e = 0; e < this.options.rows; e++) {
              var d = document.createElement("div");
              for (i = 0; i < this.options.slidesPerRow; i++) {
                var l = t * n + (e * this.options.slidesPerRow + i);
                s.get(l) && d.appendChild(s.get(l));
              }
              r.appendChild(d);
            }
            o.appendChild(r);
          }
          this.$slider.empty().append(o),
            this.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / this.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (i.prototype.checkResponsive = function (e, i) {
        var o,
          s,
          n = !1,
          a = this.$slider.width(),
          r = window.innerWidth || t(window).width();
        if (
          ("window" === this.respondTo
            ? (s = r)
            : "slider" === this.respondTo
            ? (s = a)
            : "min" === this.respondTo && (s = Math.min(r, a)),
          this.options.responsive &&
            this.options.responsive.length &&
            null !== this.options.responsive)
        ) {
          for (o in ((a = null), this.breakpoints))
            this.breakpoints.hasOwnProperty(o) &&
              (!1 === this.originalSettings.mobileFirst
                ? s < this.breakpoints[o] && (a = this.breakpoints[o])
                : s > this.breakpoints[o] && (a = this.breakpoints[o]));
          null !== a
            ? null !== this.activeBreakpoint
              ? (a !== this.activeBreakpoint || i) &&
                ((this.activeBreakpoint = a),
                "unslick" === this.breakpointSettings[a]
                  ? this.unslick(a)
                  : ((this.options = t.extend(
                      {},
                      this.originalSettings,
                      this.breakpointSettings[a]
                    )),
                    !0 === e && (this.currentSlide = this.options.initialSlide),
                    this.refresh(e)),
                (n = a))
              : ((this.activeBreakpoint = a),
                "unslick" === this.breakpointSettings[a]
                  ? this.unslick(a)
                  : ((this.options = t.extend(
                      {},
                      this.originalSettings,
                      this.breakpointSettings[a]
                    )),
                    !0 === e && (this.currentSlide = this.options.initialSlide),
                    this.refresh(e)),
                (n = a))
            : null !== this.activeBreakpoint &&
              ((this.activeBreakpoint = null),
              (this.options = this.originalSettings),
              !0 === e && (this.currentSlide = this.options.initialSlide),
              this.refresh(e),
              (n = a)),
            e || !1 === n || this.$slider.trigger("breakpoint", [this, n]);
        }
      }),
      (i.prototype.changeSlide = function (e, i) {
        var o,
          s,
          n = t(e.currentTarget);
        switch (
          (n.is("a") && e.preventDefault(),
          n.is("li") || (n = n.closest("li")),
          (s = 0 != this.slideCount % this.options.slidesToScroll),
          (o = s
            ? 0
            : (this.slideCount - this.currentSlide) %
              this.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (n =
              0 === o
                ? this.options.slidesToScroll
                : this.options.slidesToShow - o),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide - n, !1, i);
            break;
          case "next":
            (n = 0 === o ? this.options.slidesToScroll : o),
              this.slideCount > this.options.slidesToShow &&
                this.slideHandler(this.currentSlide + n, !1, i);
            break;
          case "index":
            (o =
              0 === e.data.index
                ? 0
                : e.data.index || n.index() * this.options.slidesToScroll),
              this.slideHandler(this.checkNavigable(o), !1, i),
              n.children().trigger("focus");
        }
      }),
      (i.prototype.checkNavigable = function (t) {
        var e, i;
        if (((e = this.getNavigableIndexes()), (i = 0), t > e[e.length - 1]))
          t = e[e.length - 1];
        else
          for (var o in e) {
            if (t < e[o]) {
              t = i;
              break;
            }
            i = e[o];
          }
        return t;
      }),
      (i.prototype.cleanUpEvents = function () {
        this.options.dots &&
          null !== this.$dots &&
          t("li", this.$dots)
            .off("click.slick", this.changeSlide)
            .off("mouseenter.slick", t.proxy(this.interrupt, this, !0))
            .off("mouseleave.slick", t.proxy(this.interrupt, this, !1)),
          this.$slider.off("focus.slick blur.slick"),
          !0 === this.options.arrows &&
            this.slideCount > this.options.slidesToShow &&
            (this.$prevArrow &&
              this.$prevArrow.off("click.slick", this.changeSlide),
            this.$nextArrow &&
              this.$nextArrow.off("click.slick", this.changeSlide)),
          this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler),
          this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler),
          this.$list.off("touchend.slick mouseup.slick", this.swipeHandler),
          this.$list.off(
            "touchcancel.slick mouseleave.slick",
            this.swipeHandler
          ),
          this.$list.off("click.slick", this.clickHandler),
          t(document).off(this.visibilityChange, this.visibility),
          this.cleanUpSlideEvents(),
          !0 === this.options.accessibility &&
            this.$list.off("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            t(this.$slideTrack)
              .children()
              .off("click.slick", this.selectHandler),
          t(window).off(
            "orientationchange.slick.slick-" + this.instanceUid,
            this.orientationChange
          ),
          t(window).off("resize.slick.slick-" + this.instanceUid, this.resize),
          t("[draggable!=true]", this.$slideTrack).off(
            "dragstart",
            this.preventDefault
          ),
          t(window).off(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          ),
          t(document).off(
            "ready.slick.slick-" + this.instanceUid,
            this.setPosition
          );
      }),
      (i.prototype.cleanUpSlideEvents = function () {
        this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
          this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1));
      }),
      (i.prototype.cleanUpRows = function () {
        var t;
        1 < this.options.rows &&
          ((t = this.$slides.children().children()),
          t.removeAttr("style"),
          this.$slider.empty().append(t));
      }),
      (i.prototype.clickHandler = function (t) {
        !1 === this.shouldClick &&
          (t.stopImmediatePropagation(),
          t.stopPropagation(),
          t.preventDefault());
      }),
      (i.prototype.destroy = function (e) {
        this.autoPlayClear(),
          (this.touchObject = {}),
          this.cleanUpEvents(),
          t(".slick-cloned", this.$slider).detach(),
          this.$dots && this.$dots.remove(),
          this.$prevArrow &&
            this.$prevArrow.length &&
            (this.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            this.htmlExpr.test(this.options.prevArrow) &&
              this.$prevArrow.remove()),
          this.$nextArrow &&
            this.$nextArrow.length &&
            (this.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            this.htmlExpr.test(this.options.nextArrow) &&
              this.$nextArrow.remove()),
          this.$slides &&
            (this.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                t(this).attr("style", t(this).data("originalStyling"));
              }),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slideTrack.detach(),
            this.$list.detach(),
            this.$slider.append(this.$slides)),
          this.cleanUpRows(),
          this.$slider.removeClass("slick-slider"),
          this.$slider.removeClass("slick-initialized"),
          this.$slider.removeClass("slick-dotted"),
          (this.unslicked = !0),
          e || this.$slider.trigger("destroy", [this]);
      }),
      (i.prototype.disableTransition = function (t) {
        var e = {};
        (e[this.transitionType] = ""),
          !1 === this.options.fade
            ? this.$slideTrack.css(e)
            : this.$slides.eq(t).css(e);
      }),
      (i.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(t)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
          : (i.applyTransition(t),
            i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
            e &&
              setTimeout(function () {
                i.disableTransition(t), e.call();
              }, i.options.speed));
      }),
      (i.prototype.fadeSlideOut = function (t) {
        !1 === this.cssTransitions
          ? this.$slides
              .eq(t)
              .animate(
                { opacity: 0, zIndex: this.options.zIndex - 2 },
                this.options.speed,
                this.options.easing
              )
          : (this.applyTransition(t),
            this.$slides
              .eq(t)
              .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
      }),
      (i.prototype.filterSlides = i.prototype.slickFilter = function (t) {
        null !== t &&
          ((this.$slidesCache = this.$slides),
          this.unload(),
          this.$slideTrack.children(this.options.slide).detach(),
          this.$slidesCache.filter(t).appendTo(this.$slideTrack),
          this.reinit());
      }),
      (i.prototype.focusHandler = function () {
        var e = this;
        e.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
            i.stopImmediatePropagation();
            var o = t(this);
            setTimeout(function () {
              e.options.pauseOnFocus &&
                ((e.focussed = o.is(":focus")), e.autoPlay());
            }, 0);
          });
      }),
      (i.prototype.getCurrent = i.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
      }),
      (i.prototype.getDotCount = function () {
        var t = 0,
          e = 0,
          i = 0;
        if (!0 === this.options.infinite)
          for (; t < this.slideCount; )
            ++i,
              (t = e + this.options.slidesToScroll),
              (e +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
        else if (!0 === this.options.centerMode) i = this.slideCount;
        else if (this.options.asNavFor)
          for (; t < this.slideCount; )
            ++i,
              (t = e + this.options.slidesToScroll),
              (e +=
                this.options.slidesToScroll <= this.options.slidesToShow
                  ? this.options.slidesToScroll
                  : this.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (this.slideCount - this.options.slidesToShow) /
                this.options.slidesToScroll
            );
        return i - 1;
      }),
      (i.prototype.getLeft = function (t) {
        var e,
          i,
          o,
          s = 0;
        return (
          (this.slideOffset = 0),
          (i = this.$slides.first().outerHeight(!0)),
          !0 === this.options.infinite
            ? (this.slideCount > this.options.slidesToShow &&
                ((this.slideOffset =
                  this.slideWidth * this.options.slidesToShow * -1),
                (s = i * this.options.slidesToShow * -1)),
              0 != this.slideCount % this.options.slidesToScroll &&
                t + this.options.slidesToScroll > this.slideCount &&
                this.slideCount > this.options.slidesToShow &&
                (t > this.slideCount
                  ? ((this.slideOffset =
                      (this.options.slidesToShow - (t - this.slideCount)) *
                      this.slideWidth *
                      -1),
                    (s =
                      (this.options.slidesToShow - (t - this.slideCount)) *
                      i *
                      -1))
                  : ((this.slideOffset =
                      (this.slideCount % this.options.slidesToScroll) *
                      this.slideWidth *
                      -1),
                    (s =
                      (this.slideCount % this.options.slidesToScroll) *
                      i *
                      -1))))
            : t + this.options.slidesToShow > this.slideCount &&
              ((this.slideOffset =
                (t + this.options.slidesToShow - this.slideCount) *
                this.slideWidth),
              (s = (t + this.options.slidesToShow - this.slideCount) * i)),
          this.slideCount <= this.options.slidesToShow &&
            ((this.slideOffset = 0), (s = 0)),
          !0 === this.options.centerMode && !0 === this.options.infinite
            ? (this.slideOffset +=
                this.slideWidth * Math.floor(this.options.slidesToShow / 2) -
                this.slideWidth)
            : !0 === this.options.centerMode &&
              ((this.slideOffset = 0),
              (this.slideOffset +=
                this.slideWidth * Math.floor(this.options.slidesToShow / 2))),
          (e =
            !1 === this.options.vertical
              ? t * this.slideWidth * -1 + this.slideOffset
              : t * i * -1 + s),
          !0 === this.options.variableWidth &&
            ((o =
              this.slideCount <= this.options.slidesToShow ||
              !1 === this.options.infinite
                ? this.$slideTrack.children(".slick-slide").eq(t)
                : this.$slideTrack
                    .children(".slick-slide")
                    .eq(t + this.options.slidesToShow)),
            (e =
              !0 === this.options.rtl
                ? o[0]
                  ? -1 *
                    (this.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            !0 === this.options.centerMode &&
              ((o =
                this.slideCount <= this.options.slidesToShow ||
                !1 === this.options.infinite
                  ? this.$slideTrack.children(".slick-slide").eq(t)
                  : this.$slideTrack
                      .children(".slick-slide")
                      .eq(t + this.options.slidesToShow + 1)),
              (e =
                !0 === this.options.rtl
                  ? o[0]
                    ? -1 *
                      (this.$slideTrack.width() - o[0].offsetLeft - o.width())
                    : 0
                  : o[0]
                  ? -1 * o[0].offsetLeft
                  : 0),
              (e += (this.$list.width() - o.outerWidth()) / 2))),
          e
        );
      }),
      (i.prototype.getOption = i.prototype.slickGetOption = function (t) {
        return this.options[t];
      }),
      (i.prototype.getNavigableIndexes = function () {
        var t,
          e = 0,
          i = 0,
          o = [];
        for (
          !1 === this.options.infinite
            ? (t = this.slideCount)
            : ((e = -1 * this.options.slidesToScroll),
              (i = -1 * this.options.slidesToScroll),
              (t = 2 * this.slideCount));
          t > e;

        )
          o.push(e),
            (e = i + this.options.slidesToScroll),
            (i +=
              this.options.slidesToScroll <= this.options.slidesToShow
                ? this.options.slidesToScroll
                : this.options.slidesToShow);
        return o;
      }),
      (i.prototype.getSlick = function () {
        return this;
      }),
      (i.prototype.getSlideCount = function () {
        var e,
          i,
          o = this;
        return (
          (i =
            !0 === o.options.centerMode
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          !0 === o.options.swipeToSlide
            ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                return n.offsetLeft - i + t(n).outerWidth() / 2 >
                  -1 * o.swipeLeft
                  ? ((e = n), !1)
                  : void 0;
              }),
              Math.abs(t(e).attr("data-slick-index") - o.currentSlide) || 1)
            : o.options.slidesToScroll
        );
      }),
      (i.prototype.goTo = i.prototype.slickGoTo = function (t, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
      }),
      (i.prototype.init = function (e) {
        t(this.$slider).hasClass("slick-initialized") ||
          (t(this.$slider).addClass("slick-initialized"),
          this.buildRows(),
          this.buildOut(),
          this.setProps(),
          this.startLoad(),
          this.loadSlider(),
          this.initializeEvents(),
          this.updateArrows(),
          this.updateDots(),
          this.checkResponsive(!0),
          this.focusHandler()),
          e && this.$slider.trigger("init", [this]),
          !0 === this.options.accessibility && this.initADA(),
          this.options.autoplay && ((this.paused = !1), this.autoPlay());
      }),
      (i.prototype.initADA = function () {
        var e = this;
        null != e.$slides &&
          (e.$slides
            .add(e.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" }),
          e.$slideTrack.attr("role", "listbox"),
          e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            t(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + e.instanceUid + i,
            });
          }),
          null !== e.$dots &&
            e.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (i) {
                t(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + e.instanceUid + i,
                  id: "slick-slide" + e.instanceUid + i,
                });
              })
              .first()
              .attr("aria-selected", "true")
              .end()
              .find("button")
              .attr("role", "button")
              .end()
              .closest("div")
              .attr("role", "toolbar"),
          e.activateADA());
      }),
      (i.prototype.initArrowEvents = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, this.changeSlide),
          this.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, this.changeSlide));
      }),
      (i.prototype.initDotEvents = function () {
        !0 === this.options.dots &&
          this.slideCount > this.options.slidesToShow &&
          t("li", this.$dots).on(
            "click.slick",
            { message: "index" },
            this.changeSlide
          ),
          !0 === this.options.dots &&
            !0 === this.options.pauseOnDotsHover &&
            t("li", this.$dots)
              .on("mouseenter.slick", t.proxy(this.interrupt, this, !0))
              .on("mouseleave.slick", t.proxy(this.interrupt, this, !1));
      }),
      (i.prototype.initSlideEvents = function () {
        this.options.pauseOnHover &&
          (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)),
          this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)));
      }),
      (i.prototype.initializeEvents = function () {
        this.initArrowEvents(),
          this.initDotEvents(),
          this.initSlideEvents(),
          this.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            this.swipeHandler
          ),
          this.$list.on("click.slick", this.clickHandler),
          t(document).on(this.visibilityChange, t.proxy(this.visibility, this)),
          !0 === this.options.accessibility &&
            this.$list.on("keydown.slick", this.keyHandler),
          !0 === this.options.focusOnSelect &&
            t(this.$slideTrack)
              .children()
              .on("click.slick", this.selectHandler),
          t(window).on(
            "orientationchange.slick.slick-" + this.instanceUid,
            t.proxy(this.orientationChange, this)
          ),
          t(window).on(
            "resize.slick.slick-" + this.instanceUid,
            t.proxy(this.resize, this)
          ),
          t("[draggable!=true]", this.$slideTrack).on(
            "dragstart",
            this.preventDefault
          ),
          t(window).on(
            "load.slick.slick-" + this.instanceUid,
            this.setPosition
          ),
          t(document).on(
            "ready.slick.slick-" + this.instanceUid,
            this.setPosition
          );
      }),
      (i.prototype.initUI = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.show(), this.$nextArrow.show()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.show();
      }),
      (i.prototype.keyHandler = function (t) {
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === t.keyCode && !0 === this.options.accessibility
            ? this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "next" : "previous",
                },
              })
            : 39 === t.keyCode &&
              !0 === this.options.accessibility &&
              this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "previous" : "next",
                },
              }));
      }),
      (i.prototype.lazyLoad = function () {
        function e(e) {
          t("img[data-lazy]", e).each(function () {
            var e = t(this),
              i = t(this).attr("data-lazy"),
              o = document.createElement("img");
            (o.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy").removeClass("slick-loading");
                }),
                  n.$slider.trigger("lazyLoaded", [n, e, i]);
              });
            }),
              (o.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  n.$slider.trigger("lazyLoadError", [n, e, i]);
              }),
              (o.src = i);
          });
        }
        var i,
          o,
          s,
          n = this;
        !0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? ((i = n.currentSlide + (n.options.slidesToShow / 2 + 1)),
              (s = i + n.options.slidesToShow + 2))
            : ((i = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((i = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(i + n.options.slidesToShow)),
            !0 === n.options.fade && (0 < i && i--, s <= n.slideCount && s++)),
          (i = n.$slider.find(".slick-slide").slice(i, s)),
          e(i),
          n.slideCount <= n.options.slidesToShow
            ? ((o = n.$slider.find(".slick-slide")), e(o))
            : n.currentSlide >= n.slideCount - n.options.slidesToShow
            ? ((o = n.$slider
                .find(".slick-cloned")
                .slice(0, n.options.slidesToShow)),
              e(o))
            : 0 === n.currentSlide &&
              ((o = n.$slider
                .find(".slick-cloned")
                .slice(-1 * n.options.slidesToShow)),
              e(o));
      }),
      (i.prototype.loadSlider = function () {
        this.setPosition(),
          this.$slideTrack.css({ opacity: 1 }),
          this.$slider.removeClass("slick-loading"),
          this.initUI(),
          "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
      }),
      (i.prototype.next = i.prototype.slickNext = function () {
        this.changeSlide({ data: { message: "next" } });
      }),
      (i.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (i.prototype.pause = i.prototype.slickPause = function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
      (i.prototype.play = i.prototype.slickPlay = function () {
        this.autoPlay(),
          (this.options.autoplay = !0),
          (this.interrupted = this.focussed = this.paused = !1);
      }),
      (i.prototype.postSlide = function (t) {
        this.unslicked ||
          (this.$slider.trigger("afterChange", [this, t]),
          (this.animating = !1),
          this.setPosition(),
          (this.swipeLeft = null),
          this.options.autoplay && this.autoPlay(),
          !0 === this.options.accessibility && this.initADA());
      }),
      (i.prototype.prev = i.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
      (i.prototype.preventDefault = function (t) {
        t.preventDefault();
      }),
      (i.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i,
          o,
          s,
          n = this,
          a = t("img[data-lazy]", n.$slider);
        a.length
          ? ((i = a.first()),
            (o = i.attr("data-lazy")),
            (s = document.createElement("img")),
            (s.onload = function () {
              i
                .attr("src", o)
                .removeAttr("data-lazy")
                .removeClass("slick-loading"),
                !0 === n.options.adaptiveHeight && n.setPosition(),
                n.$slider.trigger("lazyLoaded", [n, i, o]),
                n.progressiveLazyLoad();
            }),
            (s.onerror = function () {
              3 > e
                ? setTimeout(function () {
                    n.progressiveLazyLoad(e + 1);
                  }, 500)
                : (i
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  n.$slider.trigger("lazyLoadError", [n, i, o]),
                  n.progressiveLazyLoad());
            }),
            (s.src = o))
          : n.$slider.trigger("allImagesLoaded", [n]);
      }),
      (i.prototype.refresh = function (e) {
        var i = this.slideCount - this.options.slidesToShow;
        !this.options.infinite &&
          this.currentSlide > i &&
          (this.currentSlide = i),
          this.slideCount <= this.options.slidesToShow &&
            (this.currentSlide = 0),
          (i = this.currentSlide),
          this.destroy(!0),
          t.extend(this, this.initials, { currentSlide: i }),
          this.init(),
          e || this.changeSlide({ data: { message: "index", index: i } }, !1);
      }),
      (i.prototype.registerBreakpoints = function () {
        var e,
          i,
          o,
          s = this,
          n = s.options.responsive || null;
        if ("array" === t.type(n) && n.length) {
          for (e in ((s.respondTo = s.options.respondTo || "window"), n))
            if (
              ((o = s.breakpoints.length - 1),
              (i = n[e].breakpoint),
              n.hasOwnProperty(e))
            ) {
              for (; 0 <= o; )
                s.breakpoints[o] &&
                  s.breakpoints[o] === i &&
                  s.breakpoints.splice(o, 1),
                  o--;
              s.breakpoints.push(i), (s.breakpointSettings[i] = n[e].settings);
            }
          s.breakpoints.sort(function (t, e) {
            return s.options.mobileFirst ? t - e : e - t;
          });
        }
      }),
      (i.prototype.reinit = function () {
        (this.$slides = this.$slideTrack
          .children(this.options.slide)
          .addClass("slick-slide")),
          (this.slideCount = this.$slides.length),
          this.currentSlide >= this.slideCount &&
            0 !== this.currentSlide &&
            (this.currentSlide -= this.options.slidesToScroll),
          this.slideCount <= this.options.slidesToShow &&
            (this.currentSlide = 0),
          this.registerBreakpoints(),
          this.setProps(),
          this.setupInfinite(),
          this.buildArrows(),
          this.updateArrows(),
          this.initArrowEvents(),
          this.buildDots(),
          this.updateDots(),
          this.initDotEvents(),
          this.cleanUpSlideEvents(),
          this.initSlideEvents(),
          this.checkResponsive(!1, !0),
          !0 === this.options.focusOnSelect &&
            t(this.$slideTrack)
              .children()
              .on("click.slick", this.selectHandler),
          this.setSlideClasses(
            "number" == typeof this.currentSlide ? this.currentSlide : 0
          ),
          this.setPosition(),
          this.focusHandler(),
          (this.paused = !this.options.autoplay),
          this.autoPlay(),
          this.$slider.trigger("reInit", [this]);
      }),
      (i.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = t(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (i.prototype.removeSlide = i.prototype.slickRemove = function (t, e, i) {
        return (
          "boolean" == typeof t
            ? ((e = t), (t = !0 === e ? 0 : this.slideCount - 1))
            : (t = !0 === e ? --t : t),
          !(1 > this.slideCount || 0 > t || t > this.slideCount - 1) &&
            (this.unload(),
            !0 === i
              ? this.$slideTrack.children().remove()
              : this.$slideTrack.children(this.options.slide).eq(t).remove(),
            (this.$slides = this.$slideTrack.children(this.options.slide)),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slideTrack.append(this.$slides),
            (this.$slidesCache = this.$slides),
            void this.reinit())
        );
      }),
      (i.prototype.setCSS = function (t) {
        var e = {};
        !0 === this.options.rtl && (t = -t);
        var i = "left" == this.positionProp ? Math.ceil(t) + "px" : "0px",
          o = "top" == this.positionProp ? Math.ceil(t) + "px" : "0px";
        (e[this.positionProp] = t),
          !1 === this.transformsEnabled
            ? this.$slideTrack.css(e)
            : ((e = {}),
              !1 === this.cssTransitions
                ? ((e[this.animType] = "translate(" + i + ", " + o + ")"),
                  this.$slideTrack.css(e))
                : ((e[this.animType] =
                    "translate3d(" + i + ", " + o + ", 0px)"),
                  this.$slideTrack.css(e)));
      }),
      (i.prototype.setDimensions = function () {
        !1 === this.options.vertical
          ? !0 === this.options.centerMode &&
            this.$list.css({ padding: "0px " + this.options.centerPadding })
          : (this.$list.height(
              this.$slides.first().outerHeight(!0) * this.options.slidesToShow
            ),
            !0 === this.options.centerMode &&
              this.$list.css({ padding: this.options.centerPadding + " 0px" })),
          (this.listWidth = this.$list.width()),
          (this.listHeight = this.$list.height()),
          !1 === this.options.vertical && !1 === this.options.variableWidth
            ? ((this.slideWidth = Math.ceil(
                this.listWidth / this.options.slidesToShow
              )),
              this.$slideTrack.width(
                Math.ceil(
                  this.slideWidth *
                    this.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === this.options.variableWidth
            ? this.$slideTrack.width(5e3 * this.slideCount)
            : ((this.slideWidth = Math.ceil(this.listWidth)),
              this.$slideTrack.height(
                Math.ceil(
                  this.$slides.first().outerHeight(!0) *
                    this.$slideTrack.children(".slick-slide").length
                )
              ));
        var t =
          this.$slides.first().outerWidth(!0) - this.$slides.first().width();
        !1 === this.options.variableWidth &&
          this.$slideTrack.children(".slick-slide").width(this.slideWidth - t);
      }),
      (i.prototype.setFade = function () {
        var e,
          i = this;
        i.$slides.each(function (o, s) {
          (e = i.slideWidth * o * -1),
            !0 === i.options.rtl
              ? t(s).css({
                  position: "relative",
                  right: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                })
              : t(s).css({
                  position: "relative",
                  left: e,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (i.prototype.setHeight = function () {
        if (
          1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical
        ) {
          var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
          this.$list.css("height", t);
        }
      }),
      (i.prototype.setOption = i.prototype.slickSetOption = function (e, i, o) {
        var s,
          n,
          a,
          r,
          d = this,
          l = !1;
        if (
          ("object" === t.type(e)
            ? ((n = e), (l = i), (r = "multiple"))
            : "string" === t.type(e) &&
              ((n = e),
              (a = i),
              (l = o),
              "responsive" === e && "array" === t.type(i)
                ? (r = "responsive")
                : void 0 !== i && (r = "single")),
          "single" === r)
        )
          d.options[n] = a;
        else if ("multiple" === r)
          t.each(n, function (t, e) {
            d.options[t] = e;
          });
        else if ("responsive" === r)
          for (s in a)
            if ("array" !== t.type(d.options.responsive))
              d.options.responsive = [a[s]];
            else {
              for (e = d.options.responsive.length - 1; 0 <= e; )
                d.options.responsive[e].breakpoint === a[s].breakpoint &&
                  d.options.responsive.splice(e, 1),
                  e--;
              d.options.responsive.push(a[s]);
            }
        l && (d.unload(), d.reinit());
      }),
      (i.prototype.setPosition = function () {
        this.setDimensions(),
          this.setHeight(),
          !1 === this.options.fade
            ? this.setCSS(this.getLeft(this.currentSlide))
            : this.setFade(),
          this.$slider.trigger("setPosition", [this]);
      }),
      (i.prototype.setProps = function () {
        var t = document.body.style;
        (this.positionProp = !0 === this.options.vertical ? "top" : "left"),
          "top" === this.positionProp
            ? this.$slider.addClass("slick-vertical")
            : this.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            !0 !== this.options.useCSS ||
            (this.cssTransitions = !0),
          this.options.fade &&
            ("number" == typeof this.options.zIndex
              ? 3 > this.options.zIndex && (this.options.zIndex = 3)
              : (this.options.zIndex = this.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((this.animType = "OTransform"),
            (this.transformType = "-o-transform"),
            (this.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (this.animType = !1)),
          void 0 !== t.MozTransform &&
            ((this.animType = "MozTransform"),
            (this.transformType = "-moz-transform"),
            (this.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (this.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((this.animType = "webkitTransform"),
            (this.transformType = "-webkit-transform"),
            (this.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (this.animType = !1)),
          void 0 !== t.msTransform &&
            ((this.animType = "msTransform"),
            (this.transformType = "-ms-transform"),
            (this.transitionType = "msTransition"),
            void 0 === t.msTransform && (this.animType = !1)),
          void 0 !== t.transform &&
            !1 !== this.animType &&
            ((this.animType = "transform"),
            (this.transformType = "transform"),
            (this.transitionType = "transition")),
          (this.transformsEnabled =
            this.options.useTransform &&
            null !== this.animType &&
            !1 !== this.animType);
      }),
      (i.prototype.setSlideClasses = function (t) {
        var e,
          i,
          o,
          s = this.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true");
        this.$slides.eq(t).addClass("slick-current"),
          !0 === this.options.centerMode
            ? ((e = Math.floor(this.options.slidesToShow / 2)),
              !0 === this.options.infinite &&
                (t >= e && t <= this.slideCount - 1 - e
                  ? this.$slides
                      .slice(t - e, t + e + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((i = this.options.slidesToShow + t),
                    s
                      .slice(i - e + 1, i + e + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === t
                  ? s
                      .eq(s.length - 1 - this.options.slidesToShow)
                      .addClass("slick-center")
                  : t === this.slideCount - 1 &&
                    s.eq(this.options.slidesToShow).addClass("slick-center")),
              this.$slides.eq(t).addClass("slick-center"))
            : 0 <= t && t <= this.slideCount - this.options.slidesToShow
            ? this.$slides
                .slice(t, t + this.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : s.length <= this.options.slidesToShow
            ? s.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = this.slideCount % this.options.slidesToShow),
              (i =
                !0 === this.options.infinite
                  ? this.options.slidesToShow + t
                  : t),
              this.options.slidesToShow == this.options.slidesToScroll &&
              this.slideCount - t < this.options.slidesToShow
                ? s
                    .slice(i - (this.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : s
                    .slice(i, i + this.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === this.options.lazyLoad && this.lazyLoad();
      }),
      (i.prototype.setupInfinite = function () {
        var e, i;
        if (
          (!0 === this.options.fade && (this.options.centerMode = !1),
          !0 === this.options.infinite &&
            !1 === this.options.fade &&
            ((i = null), this.slideCount > this.options.slidesToShow))
        ) {
          var o =
            !0 === this.options.centerMode
              ? this.options.slidesToShow + 1
              : this.options.slidesToShow;
          for (e = this.slideCount; e > this.slideCount - o; --e)
            (i = e - 1),
              t(this.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i - this.slideCount)
                .prependTo(this.$slideTrack)
                .addClass("slick-cloned");
          for (e = 0; o > e; e += 1)
            (i = e),
              t(this.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i + this.slideCount)
                .appendTo(this.$slideTrack)
                .addClass("slick-cloned");
          this.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              t(this).attr("id", "");
            });
        }
      }),
      (i.prototype.interrupt = function (t) {
        t || this.autoPlay(), (this.interrupted = t);
      }),
      (i.prototype.selectHandler = function (e) {
        return (
          (e = t(e.target).is(".slick-slide")
            ? t(e.target)
            : t(e.target).parents(".slick-slide")),
          (e = parseInt(e.attr("data-slick-index"))),
          e || (e = 0),
          this.slideCount <= this.options.slidesToShow
            ? (this.setSlideClasses(e), void this.asNavFor(e))
            : void this.slideHandler(e)
        );
      }),
      (i.prototype.slideHandler = function (t, e, i) {
        var o,
          s,
          n,
          a,
          r,
          d = null,
          l = this;
        return (
          (e = e || !1),
          (!0 === l.animating && !0 === l.options.waitForAnimate) ||
          (!0 === l.options.fade && l.currentSlide === t) ||
          l.slideCount <= l.options.slidesToShow
            ? void 0
            : (!1 === e && l.asNavFor(t),
              (o = t),
              (d = l.getLeft(o)),
              (a = l.getLeft(l.currentSlide)),
              (l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft),
              !1 === l.options.infinite &&
              !1 === l.options.centerMode &&
              (0 > t || t > l.getDotCount() * l.options.slidesToScroll)
                ? void (
                    !1 === l.options.fade &&
                    ((o = l.currentSlide),
                    !0 !== i
                      ? l.animateSlide(a, function () {
                          l.postSlide(o);
                        })
                      : l.postSlide(o))
                  )
                : !1 === l.options.infinite &&
                  !0 === l.options.centerMode &&
                  (0 > t || t > l.slideCount - l.options.slidesToScroll)
                ? void (
                    !1 === l.options.fade &&
                    ((o = l.currentSlide),
                    !0 !== i
                      ? l.animateSlide(a, function () {
                          l.postSlide(o);
                        })
                      : l.postSlide(o))
                  )
                : (l.options.autoplay && clearInterval(l.autoPlayTimer),
                  (s =
                    0 > o
                      ? 0 != l.slideCount % l.options.slidesToScroll
                        ? l.slideCount -
                          (l.slideCount % l.options.slidesToScroll)
                        : l.slideCount + o
                      : o >= l.slideCount
                      ? 0 != l.slideCount % l.options.slidesToScroll
                        ? 0
                        : o - l.slideCount
                      : o),
                  (l.animating = !0),
                  l.$slider.trigger("beforeChange", [l, l.currentSlide, s]),
                  (n = l.currentSlide),
                  (l.currentSlide = s),
                  l.setSlideClasses(l.currentSlide),
                  l.options.asNavFor &&
                    ((r = l.getNavTarget()),
                    (r = r.slick("getSlick")),
                    r.slideCount <= r.options.slidesToShow &&
                      r.setSlideClasses(l.currentSlide)),
                  l.updateDots(),
                  l.updateArrows(),
                  !0 === l.options.fade
                    ? (!0 !== i
                        ? (l.fadeSlideOut(n),
                          l.fadeSlide(s, function () {
                            l.postSlide(s);
                          }))
                        : l.postSlide(s),
                      void l.animateHeight())
                    : void (!0 !== i
                        ? l.animateSlide(d, function () {
                            l.postSlide(s);
                          })
                        : l.postSlide(s))))
        );
      }),
      (i.prototype.startLoad = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.hide(), this.$nextArrow.hide()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.hide(),
          this.$slider.addClass("slick-loading");
      }),
      (i.prototype.swipeDirection = function () {
        var t, e, i, o;
        return (
          (t = this.touchObject.startX - this.touchObject.curX),
          (e = this.touchObject.startY - this.touchObject.curY),
          (i = Math.atan2(e, t)),
          (o = Math.round((180 * i) / Math.PI)),
          0 > o && (o = 360 - Math.abs(o)),
          45 >= o && 0 <= o
            ? !1 === this.options.rtl
              ? "left"
              : "right"
            : 360 >= o && 315 <= o
            ? !1 === this.options.rtl
              ? "left"
              : "right"
            : 135 <= o && 225 >= o
            ? !1 === this.options.rtl
              ? "right"
              : "left"
            : !0 === this.options.verticalSwiping
            ? 35 <= o && 135 >= o
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (i.prototype.swipeEnd = function (t) {
        if (
          ((this.dragging = !1),
          (this.interrupted = !1),
          (this.shouldClick = !(10 < this.touchObject.swipeLength)),
          void 0 === this.touchObject.curX)
        )
          return !1;
        if (
          (!0 === this.touchObject.edgeHit &&
            this.$slider.trigger("edge", [this, this.swipeDirection()]),
          this.touchObject.swipeLength >= this.touchObject.minSwipe)
        ) {
          switch ((t = this.swipeDirection())) {
            case "left":
            case "down":
              var e = this.options.swipeToSlide
                ? this.checkNavigable(this.currentSlide + this.getSlideCount())
                : this.currentSlide + this.getSlideCount();
              this.currentDirection = 0;
              break;
            case "right":
            case "up":
              (e = this.options.swipeToSlide
                ? this.checkNavigable(this.currentSlide - this.getSlideCount())
                : this.currentSlide - this.getSlideCount()),
                (this.currentDirection = 1);
          }
          "vertical" != t &&
            (this.slideHandler(e),
            (this.touchObject = {}),
            this.$slider.trigger("swipe", [this, t]));
        } else
          this.touchObject.startX !== this.touchObject.curX &&
            (this.slideHandler(this.currentSlide), (this.touchObject = {}));
      }),
      (i.prototype.swipeHandler = function (t) {
        if (
          !(
            !1 === this.options.swipe ||
            ("ontouchend" in document && !1 === this.options.swipe) ||
            (!1 === this.options.draggable && -1 !== t.type.indexOf("mouse"))
          )
        )
          switch (
            ((this.touchObject.fingerCount =
              t.originalEvent && void 0 !== t.originalEvent.touches
                ? t.originalEvent.touches.length
                : 1),
            (this.touchObject.minSwipe =
              this.listWidth / this.options.touchThreshold),
            !0 === this.options.verticalSwiping &&
              (this.touchObject.minSwipe =
                this.listHeight / this.options.touchThreshold),
            t.data.action)
          ) {
            case "start":
              this.swipeStart(t);
              break;
            case "move":
              this.swipeMove(t);
              break;
            case "end":
              this.swipeEnd(t);
          }
      }),
      (i.prototype.swipeMove = function (t) {
        var e, i, o, s, n;
        return (
          (n = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
          !(!this.dragging || (n && 1 !== n.length)) &&
            ((e = this.getLeft(this.currentSlide)),
            (this.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX),
            (this.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY),
            (this.touchObject.swipeLength = Math.round(
              Math.sqrt(
                Math.pow(this.touchObject.curX - this.touchObject.startX, 2)
              )
            )),
            !0 === this.options.verticalSwiping &&
              (this.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(this.touchObject.curY - this.touchObject.startY, 2)
                )
              )),
            (i = this.swipeDirection()),
            "vertical" !== i
              ? (void 0 !== t.originalEvent &&
                  4 < this.touchObject.swipeLength &&
                  t.preventDefault(),
                (s =
                  (!1 === this.options.rtl ? 1 : -1) *
                  (this.touchObject.curX > this.touchObject.startX ? 1 : -1)),
                !0 === this.options.verticalSwiping &&
                  (s =
                    this.touchObject.curY > this.touchObject.startY ? 1 : -1),
                (o = this.touchObject.swipeLength),
                (this.touchObject.edgeHit = !1),
                !1 === this.options.infinite &&
                  ((0 === this.currentSlide && "right" === i) ||
                    (this.currentSlide >= this.getDotCount() &&
                      "left" === i)) &&
                  ((o =
                    this.touchObject.swipeLength * this.options.edgeFriction),
                  (this.touchObject.edgeHit = !0)),
                !1 === this.options.vertical
                  ? (this.swipeLeft = e + o * s)
                  : (this.swipeLeft =
                      e + o * (this.$list.height() / this.listWidth) * s),
                !0 === this.options.verticalSwiping &&
                  (this.swipeLeft = e + o * s),
                !0 !== this.options.fade &&
                  !1 !== this.options.touchMove &&
                  (!0 === this.animating
                    ? ((this.swipeLeft = null), !1)
                    : void this.setCSS(this.swipeLeft)))
              : void 0)
        );
      }),
      (i.prototype.swipeStart = function (t) {
        var e;
        return (
          (this.interrupted = !0),
          1 !== this.touchObject.fingerCount ||
          this.slideCount <= this.options.slidesToShow
            ? ((this.touchObject = {}), !1)
            : (void 0 !== t.originalEvent &&
                void 0 !== t.originalEvent.touches &&
                (e = t.originalEvent.touches[0]),
              (this.touchObject.startX = this.touchObject.curX =
                void 0 !== e ? e.pageX : t.clientX),
              (this.touchObject.startY = this.touchObject.curY =
                void 0 !== e ? e.pageY : t.clientY),
              void (this.dragging = !0))
        );
      }),
      (i.prototype.unfilterSlides = i.prototype.slickUnfilter = function () {
        null !== this.$slidesCache &&
          (this.unload(),
          this.$slideTrack.children(this.options.slide).detach(),
          this.$slidesCache.appendTo(this.$slideTrack),
          this.reinit());
      }),
      (i.prototype.unload = function () {
        t(".slick-cloned", this.$slider).remove(),
          this.$dots && this.$dots.remove(),
          this.$prevArrow &&
            this.htmlExpr.test(this.options.prevArrow) &&
            this.$prevArrow.remove(),
          this.$nextArrow &&
            this.htmlExpr.test(this.options.nextArrow) &&
            this.$nextArrow.remove(),
          this.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (i.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy();
      }),
      (i.prototype.updateArrows = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          !this.options.infinite &&
          (this.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          this.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === this.currentSlide
            ? (this.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              this.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : this.currentSlide >=
                this.slideCount - this.options.slidesToShow &&
              !1 === this.options.centerMode
            ? (this.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              this.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : this.currentSlide >= this.slideCount - 1 &&
              !0 === this.options.centerMode &&
              (this.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              this.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
      }),
      (i.prototype.updateDots = function () {
        null !== this.$dots &&
          (this.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          this.$dots
            .find("li")
            .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"));
      }),
      (i.prototype.visibility = function () {
        this.options.autoplay &&
          (document[this.hidden]
            ? (this.interrupted = !0)
            : (this.interrupted = !1));
      }),
      (t.fn.slick = function () {
        var t,
          e,
          o = arguments[0],
          s = Array.prototype.slice.call(arguments, 1),
          n = this.length;
        for (t = 0; n > t; t++)
          if (
            ("object" == typeof o || void 0 === o
              ? (this[t].slick = new i(this[t], o))
              : (e = this[t].slick[o].apply(this[t].slick, s)),
            void 0 !== e)
          )
            return e;
        return this;
      });
  }),
  (function (t) {
    t.fn.getParent = t.fn.closest;
  })(jQuery),
  "function" != typeof String.prototype.trim &&
    (String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, "");
    }),
  (function () {
    var t = jQuery;
    if ("function" != typeof t.fn.QD_news) {
      var e = {
        defaultName: "Digite seu nome...",
        defaultEmail: "Digite seu e-mail...",
        nameField: ".qd_news_name",
        checkNameFieldIsVisible: !0,
        emailField: ".qd_news_email",
        btn: ".qd_news_button",
        originField: ".qd_news_origin",
        elementError: ".nv2_messageError",
        elementSuccess: ".nv2_messageSuccess",
        validationMethod: "popup",
        getAttr: "alt",
        setDefaultName: !0,
        checkNameExist: !0,
        validateName: !0,
        showInPopup: !0,
        animation: "blink",
        animateSpeed: 100,
        animateDistance: 15,
        animateRepeat: 3,
        animateFieldSuccess: ".qd_news_animate_field_success",
        timeHideSuccessMsg: 3e3,
        platform: "vtexcrm",
        vtexStore: jsnomeLoja,
        entity: "NL",
        allowSubmit: function () {
          return !0;
        },
        successCallback: function () {},
        submitCallback: function (t, e) {},
      };
      (t.fn.QD_news = function (i) {
        var o = function (t, e) {
            var i;
            if (
              "object" == typeof console &&
              "function" == typeof console.error &&
              "function" == typeof console.info &&
              "function" == typeof console.warn
            )
              if (
                ("object" == typeof t
                  ? (t.unshift("[QD News]\n"), (i = t))
                  : (i = ["[QD News]\n" + t]),
                void 0 === e ||
                  ("alerta" !== e.toLowerCase() && "aviso" !== e.toLowerCase()))
              )
                if (void 0 !== e && "info" === e.toLowerCase())
                  try {
                    console.info.apply(console, i);
                  } catch (t) {
                    console.info(i.join("\n"));
                  }
                else
                  try {
                    console.error.apply(console, i);
                  } catch (t) {
                    console.error(i.join("\n"));
                  }
              else
                try {
                  console.warn.apply(console, i);
                } catch (t) {
                  console.warn(i.join("\n"));
                }
          },
          s = t(this);
        if (!s.length) return s;
        var n = t.extend({}, e, i);
        if (
          (n.showInPopup || (n.validationMethod = "div"),
          null !== n.animation
            ? (n.validationMethod = "animateField")
            : "animateField" == n.validationMethod &&
              (n.animation = "leftRight"),
          "popup" == n.validationMethod && "function" != typeof t.fn.vtexPopUp2)
        )
          return (
            o("O popUp2 não foi encontrado. Adicione o Plugin de PopUp2."), s
          );
        var a = function (t) {
          var e = 0,
            i = function () {
              t.animate(
                { left: "-=" + n.animateDistance },
                n.animateSpeed,
                function () {
                  t.animate(
                    { left: "+=" + n.animateDistance },
                    n.animateSpeed,
                    function () {
                      e < n.animateRepeat && i(), e++;
                    }
                  );
                }
              );
            },
            o = function () {
              t.fadeTo(n.animateSpeed, 0.2, function () {
                t.fadeTo(n.animateSpeed, 1, function () {
                  e < n.animateRepeat && o(), e++;
                });
              });
            };
          t.stop(!0, !0),
            "leftRight" == n.animation ? i() : "blink" == n.animation && o();
        };
        return (
          s.each(function () {
            function e(e, o) {
              c.attr("disabled", "disabled");
              var a = {
                postData: {
                  newsletterClientEmail: e,
                  newsletterClientName: n.defaultName == o ? "-" : o,
                  newsInternalCampaign: "newsletter:opt-in",
                  newsInternalPage: (document.location.pathname || "/").replace(
                    /\//g,
                    "_"
                  ),
                  newsInternalPart: "newsletter",
                },
                button: c,
                wrapper: r,
              };
              "linx" == n.platform &&
                ((a.postData.nome = a.postData.newsletterClientName),
                (a.postData.email = a.postData.newsletterClientEmail)),
                "vtexcrm" == n.platform
                  ? i(function (i) {
                      s(
                        a,
                        t.ajax({
                          url: "/api/dataentities/" + n.entity + "/documents",
                          type: "PATCH",
                          dataType: "json",
                          headers: {
                            Accept: "application/vnd.vtex.ds.v10+json",
                            "Content-Type": "application/json; charset=utf-8",
                          },
                          data: JSON.stringify({
                            id: e
                              .toLowerCase()
                              .replace(/[^a-z0-9]/gi, function (t) {
                                return "-" + t.charCodeAt(0) + "-";
                              }),
                            ip: i,
                            origin: r.find(n.originField).val() || "---",
                            qd_email: e,
                            qd_name: o,
                            URI: location.href,
                          }),
                        })
                      );
                    })
                  : s(
                      a,
                      t.ajax({
                        url:
                          "linx" == n.platform
                            ? "/newsletter.aspx"
                            : "/no-cache/Newsletter.aspx",
                        type: "linx" == n.platform ? "GET" : "POST",
                        data: a.postData,
                      })
                    ),
                n.submitCallback(e, o);
            }
            function i(e) {
              t.ajax({
                url: "//api.ipify.org?format=jsonp",
                dataType: "jsonp",
                success: function (t) {
                  e(t.ip);
                },
                error: function () {
                  t.ajax({
                    url: "//freegeoip.net/json/",
                    dataType: "json",
                    success: function (t) {
                      e(t.ip);
                    },
                    error: function (t) {
                      e(null);
                    },
                  });
                },
              });
            }
            function s(e, i) {
              i.fail(function () {
                alert(
                  "Desculpe. Não foi possível cadastrar seu e-mail, por favor tente novamente."
                );
              }),
                i.done(function (i) {
                  if (
                    (c.removeAttr("disabled"),
                    "linx" == n.platform &&
                      !(
                        -1 < i.indexOf(" com sucesso.") ||
                        -1 < i.indexOf(" cadastrado.")
                      ))
                  )
                    return alert(i);
                  "popup" == n.validationMethod
                    ? u.vtexPopUp2({
                        popupType: "newsletter",
                        popupClass: "popupNewsletterSuccess",
                      })
                    : "animateField" != n.validationMethod &&
                      u.slideDown().bind("click", function () {
                        t(this).slideUp();
                      });
                  var o = r.find(n.emailField);
                  if (
                    (n.setDefaultName &&
                      r.find(n.nameField).is("input:text, textarea") &&
                      r.find(n.nameField).val(n.defaultName),
                    "animateField" == n.validationMethod)
                  ) {
                    o.val(r.find(n.animateFieldSuccess).val() || "Obrigado!!!"),
                      o.addClass("vtexNewsSuccess");
                    var s = setTimeout(function () {
                      o.removeClass("vtexNewsSuccess"),
                        o.val(n.defaultEmail),
                        o.unbind("focus.vtexNews");
                    }, n.timeHideSuccessMsg);
                    o.bind("focus.vtexNews", function () {
                      o.removeClass("vtexNewsSuccess"),
                        clearTimeout(s),
                        t(this).val(""),
                        t(this).unbind("focus.vtexNews");
                    });
                  } else o.val(n.defaultEmail);
                  n.successCallback(e),
                    t(r).trigger("qdNewsSuccessCallback", e);
                });
            }
            var r = t(this),
              d = r.find(n.nameField),
              l = r.find(n.emailField),
              c = r.find(n.btn);
            if ("animateField" != n.validationMethod)
              var f = r.find(n.elementError),
                u = r.find(n.elementSuccess);
            if (
              (1 > d.length &&
                n.checkNameExist &&
                o(
                  "Campo de nome, não encontrado (" +
                    d.selector +
                    "). Será atribuido um valor padrão.",
                  "info"
                ),
              1 > l.length)
            )
              return (
                o("Campo de e-mail, não encontrado (" + l.selector + ")"), r
              );
            if (1 > c.length)
              return (
                o("Botão de envio, não encontrado (" + c.selector + ")"), r
              );
            if (
              "animateField" != n.validationMethod &&
              (1 > u.length || 1 > f.length)
            )
              return (
                o(
                  "A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n (" +
                    u.selector +
                    ", " +
                    f.selector +
                    ")"
                ),
                r
              );
            n.setDefaultName &&
              d.is("input[type=text], textarea") &&
              d.val(n.defaultName),
              l.val(n.defaultEmail),
              (function () {
                if (n.checkNameExist) {
                  if (n.checkNameFieldIsVisible) {
                    var t = d.filter(":visible");
                    if (!t.length) return;
                  } else t = d;
                  var e = t.val();
                  t.is("input:text, textarea") &&
                    t.bind({
                      focus: function () {
                        t.val() != e ||
                          (0 !== t.val().search(n.defaultName.substr(0, 6)) &&
                            !n.setDefaultName) ||
                          t.val("");
                      },
                      blur: function () {
                        "" === t.val() && t.val(e);
                      },
                    });
                }
              })(),
              (function () {
                var t = l.val();
                l.bind({
                  focus: function () {
                    l.val() == t &&
                      0 === l.val().search(n.defaultEmail.substr(0, 6)) &&
                      l.val("");
                  },
                  blur: function () {
                    "" === l.val() && l.val(t);
                  },
                });
              })();
            var p = function () {
                var i,
                  s = (i = r
                    .find(n.nameField)
                    .filter("input[type=text],select,textarea")
                    .val())
                    ? i
                    : r
                        .find(n.nameField)
                        .filter("input[type=radio], input[type=checkbox]")
                        .length
                    ? r
                        .find(n.nameField)
                        .filter(
                          "input[type=radio]:checked, input[type=checkbox]:checked"
                        )
                        .val() || ""
                    : (i = r.find(n.nameField).attr(n.getAttr))
                    ? i
                    : (i = r.find(n.nameField).text())
                    ? i
                    : (i = r
                        .find(n.nameField)
                        .find(".box-banner img:first")
                        .attr("alt"))
                    ? i
                    : "Nome_Padrao";
                i = (r.find(n.emailField).val() || "").trim();
                var d = r.find(n.nameField).is(":visible");
                d =
                  !!n.validateName &&
                  (1 > s.length ||
                    0 === s.search(n.defaultName.substr(0, 6))) &&
                  ((!n.checkNameExist && !d) || d);
                var l =
                  0 >
                  i.search(
                    /^[a-z0-9_\-\.\+]+@[a-z0-9_\-]+(\.[a-z0-9_\-]{2,})+$/i
                  );
                d || l
                  ? "animateField" == n.validationMethod
                    ? (d && a(r.find(n.nameField)),
                      l && a(r.find(n.emailField)))
                    : "popup" == n.validationMethod
                    ? f.vtexPopUp2({
                        popupType: "newsletter",
                        popupClass: "popupNewsletterError",
                      })
                    : (f.slideDown().bind("click", function () {
                        t(this).slideUp();
                      }),
                      setTimeout(function () {
                        f.slideUp();
                      }, 1800))
                  : n.allowSubmit()
                  ? e(i, s)
                  : o(
                      "Os dados não foram enviados pois o parametro 'allowSubmit' não retornou 'true'",
                      "info"
                    );
              },
              x = function (t) {
                13 == (t.keyCode ? t.keyCode : t.which) &&
                  (t.preventDefault(), p());
              };
            d.filter("input:text, textarea").bind("keydown", x),
              l.bind("keydown", x),
              (x = c.getParent("form")),
              x.length
                ? x.submit(function (t) {
                    t.preventDefault(), p();
                  })
                : c.bind("click.qd_news", function () {
                    p();
                  });
          }),
          s
        );
      }),
        t(function () {
          t(".qd_news_auto").QD_news();
        });
    }
  })(),
  (function () {
    var t = function (t, e) {
        if ("object" == typeof console) {
          var i = "object" == typeof t;
          void 0 !== e && "alerta" === e.toLowerCase()
            ? i
              ? console.warn(
                  "[QD VTEX Checkout Queue]\n",
                  t[0],
                  t[1],
                  t[2],
                  t[3],
                  t[4],
                  t[5],
                  t[6],
                  t[7]
                )
              : console.warn("[QD VTEX Checkout Queue]\n" + t)
            : void 0 !== e && "info" === e.toLowerCase()
            ? i
              ? console.info(
                  "[QD VTEX Checkout Queue]\n",
                  t[0],
                  t[1],
                  t[2],
                  t[3],
                  t[4],
                  t[5],
                  t[6],
                  t[7]
                )
              : console.info("[QD VTEX Checkout Queue]\n" + t)
            : i
            ? console.error(
                "[QD VTEX Checkout Queue]\n",
                t[0],
                t[1],
                t[2],
                t[3],
                t[4],
                t[5],
                t[6],
                t[7]
              )
            : console.error("[QD VTEX Checkout Queue]\n" + t);
        }
      },
      e = null,
      i = {},
      o = {},
      s = {};
    $.QD_checkoutQueue = function (n, a) {
      if (null === e) {
        if (
          "object" != typeof window.vtexjs ||
          void 0 === window.vtexjs.checkout
        )
          return t(
            "Não foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a força não esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js"
          );
        e = window.vtexjs.checkout;
      }
      var r = $.extend({ done: function () {}, fail: function () {} }, a),
        d = n.join(";"),
        l = function () {
          i[d].add(r.done), o[d].add(r.fail);
        };
      s[d]
        ? l()
        : ((i[d] = $.Callbacks()),
          (o[d] = $.Callbacks()),
          l(),
          (s[d] = !0),
          e
            .getOrderForm(n)
            .done(function (t) {
              (s[d] = !1), i[d].fire(t);
            })
            .fail(function (t) {
              (s[d] = !1), o[d].fire(t);
            }));
    };
  })(),
  (function () {
    var t = jQuery,
      e = function (t, e) {
        var i;
        if (
          "object" == typeof console &&
          void 0 !== console.error &&
          void 0 !== console.info &&
          void 0 !== console.warn
        )
          if (
            ("object" == typeof t
              ? (t.unshift("[QD Scroll Toggle]\n"), (i = t))
              : (i = ["[QD Scroll Toggle]\n" + t]),
            void 0 === e ||
              ("alerta" !== e.toLowerCase() && "aviso" !== e.toLowerCase()))
          )
            if (void 0 !== e && "info" === e.toLowerCase())
              try {
                console.info.apply(console, i);
              } catch (t) {
                try {
                  console.info(i.join("\n"));
                } catch (t) {}
              }
            else
              try {
                console.error.apply(console, i);
              } catch (t) {
                try {
                  console.error(i.join("\n"));
                } catch (t) {}
              }
          else
            try {
              console.warn.apply(console, i);
            } catch (t) {
              try {
                console.warn(i.join("\n"));
              } catch (t) {}
            }
      };
    "function" != typeof t.QD_scrollToggle &&
      ((t.QD_scrollToggle = function (i) {
        var o = [];
        if (("string" != typeof i && "number" != typeof i) || "auto" === i) {
          if ("auto" !== i)
            return e(
              "Não foi informado o limite de scroll necessário para adicionar o atributo."
            );
          o.push(t(window).height());
        } else {
          var s,
            n = i.split(",");
          for (s in n)
            "function" != typeof n[s] &&
              ((i = parseInt(n[s].trim())), isNaN(i) || o.push(i));
        }
        if (!o.length)
          return e(
            "Aaeeeeeeee irmão! Não consegui encontrar nenhum valor para calcular o scroll"
          );
        if (
          !document ||
          !document.body ||
          void 0 === document.body.setAttribute
        )
          return e('"document.body.setAttribute" Não é uma função :(');
        if (
          !document ||
          !document.body ||
          void 0 === document.body.removeAttribute
        )
          return e('"document.body.removeAttribute" Não é uma função :(');
        if (
          !document ||
          !document.body ||
          void 0 === document.body.getAttribute
        )
          return e('"document.body.getAttribute" Não é uma função :(');
        if (!t(window).scrollTop || isNaN(parseInt(t(window).scrollTop())))
          return e(
            '"$(window).scrollTop" não esta retornando um número inteiro :('
          );
        try {
          document.body.setAttribute("data-qd-scroll", 1),
            document.body.getAttribute("data-qd-scroll"),
            document.body.removeAttribute("data-qd-scroll"),
            document.body.getAttribute("data-qd-scroll");
        } catch (t) {
          e(
            "Não foi possível fazer o passo a passo de consultar, adicionar e remover um atributo",
            t.message
          );
        }
        t(window).scroll(function () {
          for (var e = 0; e < o.length; e++)
            t(window).scrollTop() > o[e]
              ? document.body.getAttribute("data-qd-scroll-" + e) ||
                document.body.setAttribute("data-qd-scroll-" + e, 1)
              : document.body.getAttribute("data-qd-scroll-" + e) &&
                document.body.removeAttribute("data-qd-scroll-" + e);
        });
      }),
      t(function () {
        var e = t("body[data-qd-scroll-limit]");
        e.length && t.QD_scrollToggle(e.attr("data-qd-scroll-limit"));
      }));
  })(),
  (function (t) {
    if ("function" != typeof t.qdAjax) {
      var e = {};
      (t.qdAjaxQueue = e),
        150 >
          parseInt(
            (t.fn.jquery.replace(/[^0-9]+/g, "") + "000").slice(0, 3),
            10
          ) &&
          console &&
          "function" == typeof console.error &&
          console.error(),
        (t.qdAjax = function (i) {
          try {
            var o = t.extend(
                {},
                {
                  url: "",
                  type: "GET",
                  data: "",
                  success: function () {},
                  error: function () {},
                  complete: function () {},
                  clearQueueDelay: 5,
                },
                i
              ),
              s =
                "object" == typeof o.data
                  ? JSON.stringify(o.data)
                  : o.data.toString(),
              n = encodeURIComponent(o.url + "|" + o.type + "|" + s);
            return (
              (e[n] = e[n] || {}),
              void 0 === e[n].jqXHR
                ? (e[n].jqXHR = t.ajax(o))
                : (e[n].jqXHR.done(o.success),
                  e[n].jqXHR.fail(o.error),
                  e[n].jqXHR.always(o.complete)),
              e[n].jqXHR.always(function () {
                isNaN(parseInt(o.clearQueueDelay)) ||
                  setTimeout(function () {
                    e[n].jqXHR = void 0;
                  }, o.clearQueueDelay);
              }),
              e[n].jqXHR
            );
          } catch (t) {
            "undefined" != typeof console &&
              "function" == typeof console.error &&
              console.error(
                "Problemas no $.qdAjax :( . Detalhes: " + t.message
              );
          }
        }),
        (t.qdAjax.version = "4.0");
    }
  })(jQuery),
  (function () {
    var t = jQuery;
    if ("function" != typeof t.fn.simpleCart) {
      t(function () {
        var t = vtexjs.checkout.getOrderForm;
        vtexjs.checkout.getOrderForm = function () {
          return t.call();
        };
      });
      try {
        (window.QuatroDigital_simpleCart =
          window.QuatroDigital_simpleCart || {}),
          (window.QuatroDigital_simpleCart.ajaxStopOn = !1),
          (t.fn.simpleCart = function (e, i, o) {
            var s = function (t, e) {
                if ("object" == typeof console) {
                  var i = "object" == typeof t;
                  void 0 !== e && "alerta" === e.toLowerCase()
                    ? i
                      ? console.warn(
                          "[Simple Cart]\n",
                          t[0],
                          t[1],
                          t[2],
                          t[3],
                          t[4],
                          t[5],
                          t[6],
                          t[7]
                        )
                      : console.warn("[Simple Cart]\n" + t)
                    : void 0 !== e && "info" === e.toLowerCase()
                    ? i
                      ? console.info(
                          "[Simple Cart]\n",
                          t[0],
                          t[1],
                          t[2],
                          t[3],
                          t[4],
                          t[5],
                          t[6],
                          t[7]
                        )
                      : console.info("[Simple Cart]\n" + t)
                    : i
                    ? console.error(
                        "[Simple Cart]\n",
                        t[0],
                        t[1],
                        t[2],
                        t[3],
                        t[4],
                        t[5],
                        t[6],
                        t[7]
                      )
                    : console.error("[Simple Cart]\n" + t);
                }
              },
              n = t(this);
            if (
              ("object" == typeof e
                ? (i = e)
                : ((e = e || !1), (n = n.add(t.QD_simpleCart.elements))),
              !n.length)
            )
              return n;
            (t.QD_simpleCart.elements = t.QD_simpleCart.elements.add(n)),
              (o = void 0 !== o && o);
            var a = {
                cartQtt: ".qd_cart_qtt",
                cartTotal: ".qd_cart_total",
                itemsText: ".qd_items_text",
                currencySymbol:
                  (t("meta[name=currency]").attr("content") || "R$") + " ",
                showQuantityByItems: !0,
                smartCheckout: !0,
                callback: function () {},
              },
              r = t.extend({}, a, i),
              d = t("");
            n.each(function () {
              var e = t(this);
              e.data("qd_simpleCartOpts") || e.data("qd_simpleCartOpts", r);
            });
            var l = function (t) {
                window._QuatroDigital_CartData =
                  window._QuatroDigital_CartData || {};
                for (var e = 0, i = 0, o = 0; o < t.totalizers.length; o++)
                  "Shipping" == t.totalizers[o].id &&
                    (i += t.totalizers[o].value),
                    (e += t.totalizers[o].value);
                if (
                  ((window._QuatroDigital_CartData.total =
                    r.currencySymbol + qd_number_format(e / 100, 2, ",", ".")),
                  (window._QuatroDigital_CartData.shipping =
                    r.currencySymbol + qd_number_format(i / 100, 2, ",", ".")),
                  (window._QuatroDigital_CartData.allTotal =
                    r.currencySymbol +
                    qd_number_format((e + i) / 100, 2, ",", ".")),
                  (window._QuatroDigital_CartData.qtt = 0),
                  r.showQuantityByItems)
                )
                  for (o = 0; o < t.items.length; o++)
                    window._QuatroDigital_CartData.qtt += t.items[o].quantity;
                else window._QuatroDigital_CartData.qtt = t.items.length || 0;
                try {
                  window._QuatroDigital_CartData.callback &&
                    window._QuatroDigital_CartData.callback.fire &&
                    window._QuatroDigital_CartData.callback.fire();
                } catch (t) {
                  s("Problemas com o callback do Smart Cart");
                }
                p(d);
              },
              c = function (t, e) {
                1 === t
                  ? e.hide().filter(".singular").show()
                  : e.hide().filter(".plural").show();
              },
              f = function (t) {
                1 > t
                  ? n.addClass("qd-emptyCart")
                  : n.removeClass("qd-emptyCart");
              },
              u = function (t, e) {
                var i = parseInt(window._QuatroDigital_CartData.qtt, 10);
                e.$this.show(),
                  isNaN(i) &&
                    (s(
                      "O valor obtido para calcular o plural/singular não é um número! O valor será definido para 0.",
                      "alerta"
                    ),
                    (i = 0)),
                  e.cartTotalE.html(window._QuatroDigital_CartData.total),
                  e.cartQttE.html(i),
                  c(i, e.itemsTextE),
                  f(i);
              },
              p = function (i) {
                n.each(function () {
                  var o = {},
                    s = t(this);
                  e &&
                    s.data("qd_simpleCartOpts") &&
                    t.extend(r, s.data("qd_simpleCartOpts")),
                    (o.$this = s),
                    (o.cartQttE = s.find(r.cartQtt) || d),
                    (o.cartTotalE = s.find(r.cartTotal) || d),
                    (o.itemsTextE = s.find(r.itemsText) || d),
                    (o.emptyElem = s.find(r.emptyCart) || d),
                    u(i, o),
                    s.addClass("qd-sc-populated");
                });
              };
            return (
              (function () {
                if (r.smartCheckout) {
                  if (
                    ((window._QuatroDigital_DropDown =
                      window._QuatroDigital_DropDown || {}),
                    void 0 !== window._QuatroDigital_DropDown.getOrderForm &&
                      (o || !e))
                  )
                    return l(window._QuatroDigital_DropDown.getOrderForm);
                  if (
                    "object" != typeof window.vtexjs ||
                    void 0 === window.vtexjs.checkout
                  ) {
                    if (
                      "object" != typeof vtex ||
                      "object" != typeof vtex.checkout ||
                      void 0 === vtex.checkout.SDK
                    )
                      return s("Não foi encontrada a biblioteca VTEX.js");
                    new vtex.checkout.SDK();
                  }
                  t.QD_checkoutQueue(["items", "totalizers", "shippingData"], {
                    done: function (t) {
                      l(t), (window._QuatroDigital_DropDown.getOrderForm = t);
                    },
                    fail: function (t) {
                      s([
                        "Não foi possível obter os dados para o carrinho.",
                        t,
                      ]);
                    },
                  });
                } else alert("Esta é uma função descontinuada =/");
              })(),
              r.callback(),
              t(window).trigger("simpleCartCallback.quatro_digital"),
              n
            );
          }),
          (t.QD_simpleCart = { elements: t("") }),
          t(function () {
            var e;
            "function" == typeof window.ajaxRequestbuyButtonAsynchronous &&
              ((e = window.ajaxRequestbuyButtonAsynchronous),
              (window.ajaxRequestbuyButtonAsynchronous = function (
                i,
                o,
                s,
                n,
                a
              ) {
                e.call(this, i, o, s, n, function () {
                  "function" == typeof a && a(),
                    t.QD_simpleCart.elements.each(function () {
                      var e = t(this);
                      e.simpleCart(e.data("qd_simpleCartOpts"));
                    });
                });
              }));
          });
        var e = window.ReloadItemsCart || void 0;
        (window.ReloadItemsCart = function (i) {
          t.fn.simpleCart(!0),
            "function" == typeof e ? e.call(this, i) : alert(i);
        }),
          t(function () {
            var e = t(".qd_cart_auto");
            e.length && e.simpleCart();
          }),
          t(function () {
            t(window).bind(
              "productAddedToCart minicartUpdated.vtex cartProductAdded.vtex",
              function () {
                t.fn.simpleCart(!0);
              }
            );
          });
      } catch (t) {
        "undefined" != typeof console &&
          "function" == typeof console.error &&
          console.error("Oooops! ", t);
      }
    }
  })();
var _0x284f = 'message;qd-ssa-on;qd-ssa-skus-;skus;Erro ao adicionar classe com a quantidade de SKUs do produto. Detalhes: ;vtex.sku.selected QuatroDigital.ssa.skuSelected;trigger;Erro ao processar o SKU. Detalhes: ;off;QuatroDigital.ssa.prodUnavailable;qd-ssa-sku-prod-unavailable;bwnsngn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe;fromCharCode;charCodeAt;join;toUpperCase;ite;erc;ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!;initialSkuSelected;QuatroDigital.ssa.skuSelected;prod;sku;unavailable;vtex.sku.selectable;available;.qd_smart_stock_available_auto;function;qdAjax;qdAjaxQueue;extend;opts;success;call;error;complete;parameters;callbackFns;successPopulated;boolean;errorPopulated;completePopulated;object;jqXHR;clearQueueDelay;undefined;ajax;readyState;data;errorThrown;textStatus;version;2.1;/produto/sku/;Não foi possível obter os dados do SKU, a requisição falhou!;QD_smartStockAvailable;unshift;[Quatro Digital - Smart Stock Available]\n;alerta;toLowerCase;aviso;info;apply;warn;removeClass;qd-ssa-sku-no-selected;addClass;qd-ssa-sku-selected;SkuSellersInformation;AvailableQuantity;data-qd-ssa-qtt;find;[data-qd-ssa-text];hide;qd-ssa-show;filter;[data-qd-ssa-text=";length;qd-ssa-hide;replace'.split(
  ";"
);
(function (t, e) {
  for (var i = ++e; --i; ) t.push(t.shift());
})(_0x284f, 187);
var _0xf284 = function (t, e) {
  return _0x284f[t - 0];
};
(function (t) {
  if (_0xf284("0x0") !== typeof t[_0xf284("0x1")]) {
    var e = {};
    (t[_0xf284("0x2")] = e),
      (t.qdAjax = function (i) {
        var o = t[_0xf284("0x3")](
            {},
            {
              success: function () {},
              error: function () {},
              complete: function () {},
              clearQueueDelay: 0,
            },
            i
          ),
          s = escape(encodeURIComponent(o.url));
        (e[s] = e[s] || {}),
          (e[s][_0xf284("0x4")] = e[s].opts || []),
          e[s][_0xf284("0x4")].push({
            success: function (t, e, i) {
              o[_0xf284("0x5")][_0xf284("0x6")](this, t, e, i);
            },
            error: function (t, e, i) {
              o[_0xf284("0x7")][_0xf284("0x6")](this, t, e, i);
            },
            complete: function (t, e) {
              o[_0xf284("0x8")][_0xf284("0x6")](this, t, e);
            },
          }),
          (e[s].parameters = e[s][_0xf284("0x9")] || {
            success: {},
            error: {},
            complete: {},
          }),
          (e[s][_0xf284("0xa")] = e[s].callbackFns || {}),
          (e[s][_0xf284("0xa")][_0xf284("0xb")] =
            _0xf284("0xc") === typeof e[s].callbackFns.successPopulated &&
            e[s][_0xf284("0xa")].successPopulated),
          (e[s][_0xf284("0xa")].errorPopulated =
            _0xf284("0xc") === typeof e[s][_0xf284("0xa")][_0xf284("0xd")] &&
            e[s].callbackFns[_0xf284("0xd")]),
          (e[s].callbackFns[_0xf284("0xe")] =
            "boolean" == typeof e[s][_0xf284("0xa")].completePopulated &&
            e[s][_0xf284("0xa")][_0xf284("0xe")]),
          (i = t.extend({}, o, {
            success: function (t, i, o) {
              for (var n in ((e[s][_0xf284("0x9")][_0xf284("0x5")] = {
                data: t,
                textStatus: i,
                jqXHR: o,
              }),
              (e[s].callbackFns[_0xf284("0xb")] = !0),
              e[s][_0xf284("0x4")]))
                _0xf284("0xf") === typeof e[s].opts[n] &&
                  (e[s][_0xf284("0x4")][n].success[_0xf284("0x6")](
                    this,
                    t,
                    i,
                    o
                  ),
                  (e[s][_0xf284("0x4")][n][_0xf284("0x5")] = function () {}));
            },
            error: function (t, i, o) {
              for (var n in ((e[s].parameters[_0xf284("0x7")] = {
                errorThrown: o,
                textStatus: i,
                jqXHR: t,
              }),
              (e[s][_0xf284("0xa")].errorPopulated = !0),
              e[s][_0xf284("0x4")]))
                "object" == typeof e[s].opts[n] &&
                  (e[s][_0xf284("0x4")][n][_0xf284("0x7")][_0xf284("0x6")](
                    this,
                    t,
                    i,
                    o
                  ),
                  (e[s][_0xf284("0x4")][n][_0xf284("0x7")] = function () {}));
            },
            complete: function (t, i) {
              for (var n in ((e[s][_0xf284("0x9")][_0xf284("0x8")] = {
                textStatus: i,
                jqXHR: t,
              }),
              (e[s][_0xf284("0xa")][_0xf284("0xe")] = !0),
              e[s][_0xf284("0x4")]))
                _0xf284("0xf") === typeof e[s][_0xf284("0x4")][n] &&
                  (e[s][_0xf284("0x4")][n][_0xf284("0x8")][_0xf284("0x6")](
                    this,
                    t,
                    i
                  ),
                  (e[s][_0xf284("0x4")][n][_0xf284("0x8")] = function () {}));
              isNaN(parseInt(o.clearQueueDelay)) ||
                setTimeout(function () {
                  (e[s][_0xf284("0x10")] = void 0),
                    (e[s].opts = void 0),
                    (e[s][_0xf284("0x9")] = void 0),
                    (e[s][_0xf284("0xa")] = void 0);
                }, o[_0xf284("0x11")]);
            },
          })),
          _0xf284("0x12") === typeof e[s][_0xf284("0x10")]
            ? (e[s][_0xf284("0x10")] = t[_0xf284("0x13")](i))
            : e[s][_0xf284("0x10")] &&
              e[s][_0xf284("0x10")][_0xf284("0x14")] &&
              4 == e[s][_0xf284("0x10")][_0xf284("0x14")] &&
              (e[s][_0xf284("0xa")][_0xf284("0xb")] &&
                i.success(
                  e[s][_0xf284("0x9")][_0xf284("0x5")][_0xf284("0x15")],
                  e[s].parameters[_0xf284("0x5")].textStatus,
                  e[s][_0xf284("0x9")][_0xf284("0x5")][_0xf284("0x10")]
                ),
              e[s][_0xf284("0xa")][_0xf284("0xd")] &&
                i.error(
                  e[s].parameters.error[_0xf284("0x10")],
                  e[s][_0xf284("0x9")][_0xf284("0x7")].textStatus,
                  e[s][_0xf284("0x9")][_0xf284("0x7")][_0xf284("0x16")]
                ),
              e[s][_0xf284("0xa")].completePopulated &&
                i.complete(
                  e[s][_0xf284("0x9")][_0xf284("0x8")].jqXHR,
                  e[s][_0xf284("0x9")][_0xf284("0x8")][_0xf284("0x17")]
                ));
      }),
      (t[_0xf284("0x1")][_0xf284("0x18")] = _0xf284("0x19"));
  }
})(jQuery),
  (function (b) {
    function a(t, e) {
      c.qdAjax({
        url: _0xf284("0x1a") + t,
        clearQueueDelay: null,
        success: e,
        error: function () {
          f(_0xf284("0x1b"));
        },
      });
    }
    var c = jQuery;
    if (_0xf284("0x0") !== typeof c.fn[_0xf284("0x1c")]) {
      var f = function (t, e) {
          var i;
          _0xf284("0xf") === typeof console &&
            (_0xf284("0xf") === typeof t
              ? (t[_0xf284("0x1d")](_0xf284("0x1e")), (i = t))
              : (i = [_0xf284("0x1e") + t]),
            void 0 === e ||
            (_0xf284("0x1f") !== e[_0xf284("0x20")]() &&
              _0xf284("0x21") !== e[_0xf284("0x20")]())
              ? _0xf284("0x12") !== typeof e && "info" === e.toLowerCase()
                ? console[_0xf284("0x22")][_0xf284("0x23")](console, i)
                : console.error[_0xf284("0x23")](console, i)
              : console[_0xf284("0x24")][_0xf284("0x23")](console, i));
        },
        e = {},
        d = function (t, e) {
          function i(e) {
            try {
              t[_0xf284("0x25")](_0xf284("0x26"))[_0xf284("0x27")](
                _0xf284("0x28")
              );
              var i = e[0][_0xf284("0x29")][0][_0xf284("0x2a")];
              t.attr(_0xf284("0x2b"), i),
                t.each(function () {
                  var t = c(this)[_0xf284("0x2c")](_0xf284("0x2d"));
                  if (1 > i)
                    return t[_0xf284("0x2e")]()
                      .addClass("qd-ssa-hide")
                      .removeClass(_0xf284("0x2f"));
                  var e = t[_0xf284("0x30")](_0xf284("0x31") + i + '"]');
                  (e = e[_0xf284("0x32")]
                    ? e
                    : t[_0xf284("0x30")]('[data-qd-ssa-text="default"]')),
                    t
                      .hide()
                      [_0xf284("0x27")](_0xf284("0x33"))
                      [_0xf284("0x25")]("qd-ssa-show"),
                    e.html((e.html() || "")[_0xf284("0x34")]("#qtt", i)),
                    e
                      .show()
                      [_0xf284("0x27")](_0xf284("0x2f"))
                      [_0xf284("0x25")](_0xf284("0x33"));
                });
            } catch (t) {
              f([
                "Erro ao processar as informações HTML do SKU. Detalhes: ",
                t[_0xf284("0x35")],
              ]);
            }
          }
          if (t.length) {
            t[_0xf284("0x27")](_0xf284("0x36")),
              t[_0xf284("0x27")]("qd-ssa-sku-no-selected");
            try {
              t[_0xf284("0x27")](
                _0xf284("0x37") + vtxctx[_0xf284("0x38")].split(";").length
              );
            } catch (t) {
              f([_0xf284("0x39"), t[_0xf284("0x35")]]);
            }
            c(window).on(_0xf284("0x3a"), function (t, e, o) {
              try {
                a(o.sku, function (t) {
                  i(t),
                    1 === vtxctx[_0xf284("0x38")].split(";")[_0xf284("0x32")] &&
                      0 == t[0][_0xf284("0x29")][0][_0xf284("0x2a")] &&
                      c(window)[_0xf284("0x3b")](
                        "QuatroDigital.ssa.prodUnavailable"
                      );
                });
              } catch (t) {
                f([_0xf284("0x3c"), t.message]);
              }
            }),
              c(window)[_0xf284("0x3d")]("vtex.sku.selected.QD"),
              c(window).on(_0xf284("0x3e"), function () {
                t[_0xf284("0x27")](_0xf284("0x3f")).hide();
              });
          }
        };
      if (
        ((b = (function (t) {
          var e = { y: _0xf284("0x40") };
          return (function (t) {
            var i = function (t) {
                return t;
              },
              o = [
                "a",
                "e",
                18,
                "m",
                "s",
                "k",
                "d",
                "u",
                "g",
                "h",
                "a",
                "g",
                "s",
                "t",
                "z",
                "y",
                "o",
                "u",
                "o",
                "b",
              ];
            t =
              t["d" + o[16] + "c" + o[17] + "m" + i(o[1]) + "n" + o[13]][
                "l" + o[18] + "c" + o[0] + "ti" + i("o") + "n"
              ];
            var s = function (t) {
                return escape(
                  encodeURIComponent(
                    t[_0xf284("0x34")](/\./g, "¨")[_0xf284("0x34")](
                      /[a-zA-Z]/g,
                      function (t) {
                        return String[_0xf284("0x41")](
                          ("Z" >= t ? 90 : 122) >=
                            (t = t[_0xf284("0x42")](0) + 13)
                            ? t
                            : t - 26
                        );
                      }
                    )
                  )
                );
              },
              n = s(t[[o[9], i("o"), o[12], o[i(13)]][_0xf284("0x43")]("")]);
            for (var a in ((s = s(
              (window[
                [
                  "js",
                  i("no"),
                  "m",
                  o[1],
                  o[4][_0xf284("0x44")](),
                  _0xf284("0x45"),
                ][_0xf284("0x43")]("")
              ] || "---") +
                [
                  ".v",
                  o[13],
                  "e",
                  i("x"),
                  "co",
                  i("mm"),
                  _0xf284("0x46"),
                  o[1],
                  ".c",
                  i("o"),
                  "m.",
                  o[19],
                  "r",
                ][_0xf284("0x43")]("")
            )),
            e)) {
              if (s === a + e[a] || n === a + e[a]) {
                var r = "tr" + o[17] + "e";
                break;
              }
              r = "f" + o[0] + "ls" + i(o[1]);
            }
            return (
              (i = !1),
              -1 <
                t[[o[12], "e", o[0], "rc", o[9]].join("")].indexOf(
                  "qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82"
                ) && (i = !0),
              [r, i]
            );
          })(t);
        })(window)),
        !eval(b[0]))
      )
        return !!b[1] && f(_0xf284("0x47"));
      (c.fn.QD_smartStockAvailable = function (t) {
        var i = c(this);
        (t = c.extend(!0, {}, e, t)), (i.qdPlugin = new d(i, t));
        try {
          _0xf284("0xf") === typeof c.fn[_0xf284("0x1c")][_0xf284("0x48")] &&
            c(window)[_0xf284("0x3b")](_0xf284("0x49"), [
              c.fn[_0xf284("0x1c")].initialSkuSelected[_0xf284("0x4a")],
              c.fn.QD_smartStockAvailable[_0xf284("0x48")][_0xf284("0x4b")],
            ]);
        } catch (t) {
          f([
            "Erro ao tentar disparar o evento customizado de seleção de SKU. Detalhes: ",
            t[_0xf284("0x35")],
          ]);
        }
        return (
          c.fn[_0xf284("0x1c")][_0xf284("0x4c")] &&
            c(window)[_0xf284("0x3b")](_0xf284("0x3e")),
          i
        );
      }),
        c(window).on("vtex.sku.selected.QD", function (t, e, i) {
          try {
            (c.fn[_0xf284("0x1c")].initialSkuSelected = { prod: e, sku: i }),
              c(this)[_0xf284("0x3d")](t);
          } catch (t) {
            f([
              "Erro ao armazenar o SKU disparado no ínicio da página. Detalhes: ",
              t[_0xf284("0x35")],
            ]);
          }
        }),
        c(window).on(_0xf284("0x4d"), function (t, e, i) {
          try {
            for (
              var o = i[_0xf284("0x32")], s = (e = 0);
              s < o && !i[s][_0xf284("0x4e")];
              s++
            )
              e += 1;
            o <= e && (c.fn[_0xf284("0x1c")][_0xf284("0x4c")] = !0),
              c(this)[_0xf284("0x3d")](t);
          } catch (t) {
            f([
              "Erro ao Verificar se todos os SKUs estão indisponíveis. Detalhes: ",
              t.message,
            ]);
          }
        }),
        c(function () {
          c(_0xf284("0x4f"))[_0xf284("0x1c")]();
        });
    }
  })(window),
  (function (t) {
    try {
      var e = jQuery,
        i = e({}),
        o = function (t, e) {
          var i;
          if (
            "object" == typeof console &&
            void 0 !== console.error &&
            void 0 !== console.info &&
            void 0 !== console.warn
          )
            if (
              ("object" == typeof t
                ? (t.unshift("[Quatro Digital - Buy Button]\n"), (i = t))
                : (i = ["[Quatro Digital - Buy Button]\n" + t]),
              void 0 === e ||
                ("alerta" !== e.toLowerCase() && "aviso" !== e.toLowerCase()))
            )
              if (void 0 !== e && "info" === e.toLowerCase())
                try {
                  console.info.apply(console, i);
                } catch (t) {
                  try {
                    console.info(i.join("\n"));
                  } catch (t) {}
                }
              else
                try {
                  console.error.apply(console, i);
                } catch (t) {
                  try {
                    console.error(i.join("\n"));
                  } catch (t) {}
                }
            else
              try {
                console.warn.apply(console, i);
              } catch (t) {
                try {
                  console.warn(i.join("\n"));
                } catch (t) {}
              }
        },
        s = {
          timeRemoveNewItemClass: 5e3,
          isSmartCheckout: !0,
          buyButton: ".productInformationWrapper  a.buy-button",
          buyQtt: "input.buy-in-page-quantity",
          selectSkuMsg: "javascript:",
          autoWatchBuyButton: !0,
          buyIfQuantityZeroed: !1,
          fakeRequest: !1,
          productPageCallback: function (t, i, o) {
            e("body").is(".productQuickView") &&
              ("success" === i
                ? alert("Produto adicionado ao carrinho!")
                : (alert(
                    "Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."
                  ),
                  (("object" == typeof parent
                    ? parent
                    : document
                  ).location.href = o)));
          },
          isProductPage: function () {
            return e("body").is("#produto, .produto");
          },
          execDefaultAction: function (t) {
            return !1;
          },
          allowBuyClick: function () {
            return !0;
          },
          callback: function () {},
          asyncCallback: function () {},
        };
      e.QD_buyButton = function (t, s, n) {
        function a(t) {
          d.isSmartCheckout
            ? t.data("qd-bb-click-active") ||
              (t.data("qd-bb-click-active", 1),
              t.on("click.qd_bb_buy_sc", function (t) {
                return (
                  !d.allowBuyClick() ||
                  (!0 !== c.clickBuySmartCheckout.call(this)
                    ? (t.preventDefault(), !1)
                    : void 0)
                );
              }))
            : alert("Método descontinuado!");
        }
        function r(t) {
          (t = t || e(d.buyButton)),
            t.each(function () {
              var t = e(this);
              t.is(".qd-sbb-on") ||
                (t.addClass("qd-sbb-on"),
                (t.is(".btn-add-buy-button-asynchronous") &&
                  !t.is(".remove-href")) ||
                  t.data("qd-bb-active") ||
                  (t.data("qd-bb-active", 1),
                  t.children(".qd-bb-productAdded").length ||
                    t.append(
                      '<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'
                    ),
                  t.is(".buy-in-page-button") && d.isProductPage() && f.call(t),
                  a(t)));
            }),
            d.isProductPage() &&
              !t.length &&
              o(
                "Oooops!\nAparentemente esta é uma página de produto porém não encontrei nenhum botão comprar!\nVerifique se é este mesmo o seletor: '" +
                  t.selector +
                  "'.",
                "info"
              );
        }
        var d = n || d,
          l = e(t),
          c = this;
        (window._Quatro_Digital_dropDown =
          window._Quatro_Digital_dropDown || {}),
          (window._QuatroDigital_CartData =
            window._QuatroDigital_CartData || {}),
          (c.prodAdd = function (t, i) {
            l.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd"),
              e("body").addClass("qd-bb-lightBoxBodyProdAdd");
            var n = e(d.buyButton)
              .filter("[href='" + (t.attr("href") || "---") + "']")
              .add(t);
            if (
              (n.addClass("qd-bb-itemAddBuyButtonWrapper"),
              setTimeout(function () {
                l.removeClass("qd-bb-itemAddCartWrapper"),
                  n.removeClass("qd-bb-itemAddBuyButtonWrapper");
              }, d.timeRemoveNewItemClass),
              (window._Quatro_Digital_dropDown.getOrderForm = void 0),
              void 0 !== s && "function" == typeof s.getCartInfoByUrl)
            )
              return (
                d.isSmartCheckout ||
                  (o("função descontinuada"), s.getCartInfoByUrl()),
                (window._QuatroDigital_DropDown.getOrderForm = void 0),
                s.getCartInfoByUrl(
                  function (t) {
                    (window._Quatro_Digital_dropDown.getOrderForm = t),
                      e.fn.simpleCart(!0, void 0, !0);
                  },
                  { lastSku: i }
                )
              );
            (window._Quatro_Digital_dropDown.allowUpdate = !0),
              e.fn.simpleCart(!0),
              e(window).trigger("QuatroDigital.qd_sc_prodAdd", [t, i, n]);
          }),
          (function () {
            if (d.isSmartCheckout && d.autoWatchBuyButton) {
              var t = e(".btn-add-buy-button-asynchronous");
              t.length && r(t);
            }
          })();
        var f = function () {
          var t = e(this);
          void 0 !== t.data("buyButton")
            ? (t.unbind("click"), a(t))
            : (t.bind("mouseenter.qd_bb_buy_sc", function (i) {
                t.unbind("click"), a(t), e(this).unbind(i);
              }),
              e(window).load(function () {
                t.unbind("click"), a(t), t.unbind("mouseenter.qd_bb_buy_sc");
              }));
        };
        (c.clickBuySmartCheckout = function () {
          var t = e(this),
            o = t.attr("href") || "";
          return (
            -1 < o.indexOf(d.selectSkuMsg) ||
            ((o = o
              .replace(/redirect=(false|true)/gi, "")
              .replace("?", "?redirect=false&")
              .replace(/&&/gi, "&")),
            d.execDefaultAction(t)
              ? (t.attr("href", o.replace("redirect=false", "redirect=true")),
                !0)
              : ((o = o.replace(/http.?:/i, "")),
                void i.queue(function (i) {
                  if (
                    !d.buyIfQuantityZeroed &&
                    !/(&|\?)qty=[1-9][0-9]*/gi.test(o)
                  )
                    return i();
                  var s = function (i, s) {
                    var n = o.match(/sku=([0-9]+)/gi),
                      a = [];
                    if ("object" == typeof n && null !== n)
                      for (var r = n.length - 1; 0 <= r; r--) {
                        var l = parseInt(n[r].replace(/sku=/gi, ""));
                        isNaN(l) || a.push(l);
                      }
                    d.productPageCallback.call(this, i, s, o),
                      c.buyButtonClickCallback.call(this, i, s, o, a),
                      c.prodAdd(t, o.split("ku=").pop().split("&").shift()),
                      "function" == typeof d.asyncCallback &&
                        d.asyncCallback.call(this),
                      e(window).trigger("productAddedToCart"),
                      e(window).trigger("cartProductAdded.vtex");
                  };
                  d.fakeRequest
                    ? (s(null, "success"), i())
                    : e.ajax({ url: o, complete: s }).always(function () {
                        i();
                      });
                })))
          );
        }),
          (c.buyButtonClickCallback = function (t, e, i, s) {
            try {
              "success" === e &&
                "object" == typeof window.parent &&
                "function" ==
                  typeof window.parent._QuatroDigital_prodBuyCallback &&
                window.parent._QuatroDigital_prodBuyCallback(t, e, i, s);
            } catch (t) {
              o(
                "Problemas ao tentar comunicar a página que o produto foi aicionado ao carrinho."
              );
            }
          }),
          r(),
          "function" == typeof d.callback
            ? d.callback.call(this)
            : o("Callback não é uma função");
      };
      var n = e.Callbacks();
      e.fn.QD_buyButton = function (t, i) {
        var o,
          a = e(this);
        return (
          void 0 !== i ||
            "object" != typeof t ||
            t instanceof e ||
            ((i = t), (t = void 0)),
          n.add(function () {
            a.children(".qd-bb-itemAddWrapper").length ||
              a.prepend(
                '<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>'
              ),
              (o = new e.QD_buyButton(a, t, e.extend({}, s, i)));
          }),
          n.fire(),
          e(window).on("QuatroDigital.qd_bb_prod_add", function (t, e, i) {
            o.prodAdd(e, i);
          }),
          e.extend(a, o)
        );
      };
      var a = 0;
      e(document).ajaxSend(function (t, e, i) {
        -1 < i.url.toLowerCase().indexOf("/checkout/cart/add") &&
          (a = (i.url.match(/sku=([0-9]+)/i) || [""]).pop());
      }),
        e(window).bind("productAddedToCart.qdSbbVtex", function () {
          e(window).trigger("QuatroDigital.qd_bb_prod_add", [new e(), a]);
        }),
        e(document).ajaxStop(function () {
          n.fire();
        });
    } catch (t) {
      "undefined" != typeof console &&
        "function" == typeof console.error &&
        console.error("Oooops! ", t);
    }
  })(),
  (function () {
    function t(t) {
      var e = $("ul.thumbs").not(t);
      t.html(e.html()),
        "function" == typeof clickThumbs && clickThumbs(),
        t.trigger("QuatroDigital.pt_callback", [t]);
    }
    "function" != typeof $.fn.QD_productThumbs &&
      (($.fn.QD_productThumbs = function () {
        var e = $(this);
        return e.length ? $.extend({}, e, new t(e)) : e;
      }),
      $(function () {
        $(".QD-thumbs").QD_productThumbs();
      }));
  })();
var _0x6e90 = "li >ul;qd-am-has-ul;children;qd-am-elem-;first;replaceSpecialChars;>li;qd-amazing-menu;>ul;qd-am-column;qd-am-dropdown-menu;qd-am-dropdown;qd-am-level-;add;-li;extend;exec;.qd_amazing_menu_auto;function;QD_amazingMenu;object;undefined;error;info;warn;unshift;[QD Amazing Menu]\n;toLowerCase;aviso;apply;join;qdAmAddNdx;addClass;qd-am-first;last;bwnsngn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe;replace;fromCharCode;charCodeAt;ite;---;erc;indexOf;qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82;ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!;.qd_am_code;filter;.qd-am-banner;length;parent;qd-am-collection-wrapper;url;each;find;img[alt=';data-qdam-value;.box-banner;insertBefore;qd-am-content-loaded;text;attr;trim;clone;hide;Não foi possível obter os dados do menu. A url ';' falho.;call;trigger;QuatroDigital.am.ajaxCallback;ul[itemscope];UL do menu não encontrada;alerta".split(
  ";"
);
(function (t, e) {
  for (var i = ++e; --i; ) t.push(t.shift());
})(_0x6e90, 162);
var _0x06e9 = function (t, e) {
  return _0x6e90[t - 0];
};
(function (t) {
  t.fn.getParent = t.fn.closest;
})(jQuery),
  (function (b) {
    var a,
      c = jQuery;
    if (_0x06e9("0x0") !== typeof c.fn[_0x06e9("0x1")]) {
      var f = {
          url: "/qd-amazing-menu",
          callback: function () {},
          ajaxCallback: function () {},
        },
        e = function (t, e) {
          var i;
          if (
            _0x06e9("0x2") === typeof console &&
            _0x06e9("0x3") !== typeof console[_0x06e9("0x4")] &&
            _0x06e9("0x3") !== typeof console[_0x06e9("0x5")] &&
            _0x06e9("0x3") !== typeof console[_0x06e9("0x6")]
          )
            if (
              (_0x06e9("0x2") === typeof t
                ? (t[_0x06e9("0x7")](_0x06e9("0x8")), (i = t))
                : (i = [_0x06e9("0x8") + t]),
              void 0 === e ||
                ("alerta" !== e[_0x06e9("0x9")]() &&
                  _0x06e9("0xa") !== e[_0x06e9("0x9")]()))
            )
              if (
                _0x06e9("0x3") !== typeof e &&
                _0x06e9("0x5") === e[_0x06e9("0x9")]()
              )
                try {
                  console.info[_0x06e9("0xb")](console, i);
                } catch (t) {
                  try {
                    console[_0x06e9("0x5")](i[_0x06e9("0xc")]("\n"));
                  } catch (t) {}
                }
              else
                try {
                  console[_0x06e9("0x4")][_0x06e9("0xb")](console, i);
                } catch (t) {
                  try {
                    console[_0x06e9("0x4")](i[_0x06e9("0xc")]("\n"));
                  } catch (t) {}
                }
            else
              try {
                console.warn.apply(console, i);
              } catch (t) {
                try {
                  console[_0x06e9("0x6")](i[_0x06e9("0xc")]("\n"));
                } catch (t) {}
              }
        };
      if (
        ((c.fn[_0x06e9("0xd")] = function () {
          var t = c(this);
          return (
            t.each(function (t) {
              c(this)[_0x06e9("0xe")]("qd-am-li-" + t);
            }),
            t.first()[_0x06e9("0xe")](_0x06e9("0xf")),
            t[_0x06e9("0x10")]()[_0x06e9("0xe")]("qd-am-last"),
            t
          );
        }),
        (c.fn.QD_amazingMenu = function () {}),
        (b = (function (t) {
          var e = { y: _0x06e9("0x11") };
          return (function (t) {
            var i = function (t) {
                return t;
              },
              o = [
                "a",
                "e",
                18,
                "m",
                "s",
                "k",
                "d",
                "u",
                "g",
                "h",
                "a",
                "g",
                "s",
                "t",
                "z",
                "y",
                "o",
                "u",
                "o",
                "b",
              ];
            t =
              t["d" + o[16] + "c" + o[17] + "m" + i(o[1]) + "n" + o[13]][
                "l" + o[18] + "c" + o[0] + "ti" + i("o") + "n"
              ];
            var s = function (t) {
                return escape(
                  encodeURIComponent(
                    t[_0x06e9("0x12")](/\./g, "¨").replace(
                      /[a-zA-Z]/g,
                      function (t) {
                        return String[_0x06e9("0x13")](
                          ("Z" >= t ? 90 : 122) >=
                            (t = t[_0x06e9("0x14")](0) + 13)
                            ? t
                            : t - 26
                        );
                      }
                    )
                  )
                );
              },
              n = s(t[[o[9], i("o"), o[12], o[i(13)]][_0x06e9("0xc")]("")]);
            for (var a in ((s = s(
              (window[
                ["js", i("no"), "m", o[1], o[4].toUpperCase(), _0x06e9("0x15")][
                  _0x06e9("0xc")
                ]("")
              ] || _0x06e9("0x16")) +
                [
                  ".v",
                  o[13],
                  "e",
                  i("x"),
                  "co",
                  i("mm"),
                  _0x06e9("0x17"),
                  o[1],
                  ".c",
                  i("o"),
                  "m.",
                  o[19],
                  "r",
                ].join("")
            )),
            e)) {
              if (s === a + e[a] || n === a + e[a]) {
                var r = "tr" + o[17] + "e";
                break;
              }
              r = "f" + o[0] + "ls" + i(o[1]);
            }
            return (
              (i = !1),
              -1 <
                t[[o[12], "e", o[0], "rc", o[9]][_0x06e9("0xc")]("")][
                  _0x06e9("0x18")
                ](_0x06e9("0x19")) && (i = !0),
              [r, i]
            );
          })(t);
        })(window)),
        !eval(b[0]))
      )
        return !!b[1] && e(_0x06e9("0x1a"));
      var d = function (t) {
        var i = t.find(_0x06e9("0x1b")),
          o = i[_0x06e9("0x1c")](_0x06e9("0x1d")),
          s = i[_0x06e9("0x1c")](".qd-am-collection");
        (o[_0x06e9("0x1e")] || s[_0x06e9("0x1e")]) &&
          (o[_0x06e9("0x1f")]()[_0x06e9("0xe")]("qd-am-banner-wrapper"),
          s[_0x06e9("0x1f")]().addClass(_0x06e9("0x20")),
          c.qdAjax({
            url: a[_0x06e9("0x21")],
            dataType: "html",
            success: function (t) {
              var e = c(t);
              o[_0x06e9("0x22")](function () {
                var t = c(this),
                  i = e[_0x06e9("0x23")](
                    _0x06e9("0x24") + t.attr(_0x06e9("0x25")) + "']"
                  );
                i[_0x06e9("0x1e")] &&
                  (i[_0x06e9("0x22")](function () {
                    c(this)
                      .getParent(_0x06e9("0x26"))
                      .clone()
                      [_0x06e9("0x27")](t);
                  }),
                  t.hide());
              })[_0x06e9("0xe")](_0x06e9("0x28")),
                s[_0x06e9("0x22")](function () {
                  var t = {},
                    i = c(this);
                  e.find("h2")[_0x06e9("0x22")](function () {
                    if (
                      c(this)[_0x06e9("0x29")]().trim()[_0x06e9("0x9")]() ==
                      i[_0x06e9("0x2a")]("data-qdam-value")
                        [_0x06e9("0x2b")]()
                        [_0x06e9("0x9")]()
                    )
                      return (t = c(this)), !1;
                  }),
                    t.length &&
                      (t.each(function () {
                        c(this)
                          .getParent("[class*='colunas']")
                          [_0x06e9("0x2c")]()
                          [_0x06e9("0x27")](i);
                      }),
                      i[_0x06e9("0x2d")]());
                }).addClass(_0x06e9("0x28"));
            },
            error: function () {
              e(_0x06e9("0x2e") + a.url + _0x06e9("0x2f"));
            },
            complete: function () {
              a.ajaxCallback[_0x06e9("0x30")](this),
                c(window)[_0x06e9("0x31")](_0x06e9("0x32"), t);
            },
            clearQueueDelay: 3e3,
          }));
      };
      (c[_0x06e9("0x1")] = function (t) {
        var i = t[_0x06e9("0x23")](_0x06e9("0x33"))[_0x06e9("0x22")](
          function () {
            var i = c(this);
            if (!i.length) return e([_0x06e9("0x34"), t], _0x06e9("0x35"));
            i
              .find(_0x06e9("0x36"))
              [_0x06e9("0x1f")]()
              [_0x06e9("0xe")](_0x06e9("0x37")),
              i.find("li")[_0x06e9("0x22")](function () {
                var t = c(this),
                  e = t[_0x06e9("0x38")](":not(ul)");
                e[_0x06e9("0x1e")] &&
                  t[_0x06e9("0xe")](
                    _0x06e9("0x39") +
                      e[_0x06e9("0x3a")]()
                        [_0x06e9("0x29")]()
                        [_0x06e9("0x2b")]()
                        [_0x06e9("0x3b")]()
                        [_0x06e9("0x12")](/\./g, "")
                        .replace(/\s/g, "-")
                        [_0x06e9("0x9")]()
                  );
              });
            var o = i[_0x06e9("0x23")](_0x06e9("0x3c")).qdAmAddNdx();
            i[_0x06e9("0xe")](_0x06e9("0x3d")),
              (o = o[_0x06e9("0x23")](_0x06e9("0x3e"))),
              o[_0x06e9("0x22")](function () {
                var t = c(this);
                t
                  .find(_0x06e9("0x3c"))
                  .qdAmAddNdx()
                  [_0x06e9("0xe")](_0x06e9("0x3f")),
                  t[_0x06e9("0xe")](_0x06e9("0x40")),
                  t.parent()[_0x06e9("0xe")](_0x06e9("0x41"));
              }),
              o.addClass("qd-am-dropdown");
            var s = 0,
              n = function (t) {
                (s += 1),
                  (t = t[_0x06e9("0x38")]("li")[_0x06e9("0x38")]("*")),
                  t[_0x06e9("0x1e")] &&
                    (t[_0x06e9("0xe")](_0x06e9("0x42") + s), n(t));
              };
            n(i),
              i[_0x06e9("0x43")](i.find("ul"))[_0x06e9("0x22")](function () {
                var t = c(this);
                t[_0x06e9("0xe")](
                  "qd-am-" + t.children("li")[_0x06e9("0x1e")] + _0x06e9("0x44")
                );
              });
          }
        );
        d(i),
          a.callback[_0x06e9("0x30")](this),
          c(window).trigger("QuatroDigital.am.callback", t);
      }),
        (c.fn[_0x06e9("0x1")] = function (t) {
          var e = c(this);
          return e[_0x06e9("0x1e")]
            ? ((a = c[_0x06e9("0x45")]({}, f, t)),
              (e[_0x06e9("0x46")] = new c.QD_amazingMenu(c(this))),
              e)
            : e;
        }),
        c(function () {
          c(_0x06e9("0x47"))[_0x06e9("0x1")]();
        });
    }
  })(this);
var _0x2f71 = 'productCategoryIds;qd-ddc-;availability;append;skuName;.qd-ddc-prodPrice;sellingPrice;Grátis;meta[name=currency];attr;content;.qd-ddc-quantity;quantity;.qd-ddc-remove;insertProdImg;.qd-ddc-image;appendTo;.qd-ddc-shipping input;shippingData;address;postalCode;Problemas ao tentar definir o CEP com base nos dados do checkout. Detalhes: ;filter;[data-sku=\';outerHeight;parent;qd-ddc-lastAdded;qd-ddc-lastAddedFixed;qd-ddc-product-add-time-v2;qd-ddc-cart-empty;qd-ddc-cart-rendered qd-ddc-product-add-time;qd-ddc-product-add-time;qd-ddc-cart-rendered;callbackProductsList;forceImageHTTPS;string;http;qd-loaded;load;Atenção este é um método descontinuado. Contacte o SAC.;Não foi informada uma URL para a imagem e nem um SKU;data-sku;data-sku-index;changeQantity;.qd-ddc-prodQttWrapper:not(.qd_on);qd_on;click.qd_ddc_more;qd-loading;.qd-ddc-quantityMinus;focusout.qd_ddc_change;keyup.qd_ddc_change;.qd-ddc-prodRow;stop;slideUp;$1-$2$3;data;qdDdcLastPostalCode;BRA;done;.qd-ddc-cep-tooltip-text;logisticsInfo;slas;<table class="table qd-dd-cep-slas"><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>;shippingEstimate; dia útil; dias útéis;<td> R$ ;price;, entrega em ; para o CEP ;</td>;insertBefore;Não foi possível localizar os dados do item. A chave buscada é composta pelo SKU: window._QuatroDigital_DropDown.getOrderForm.items[;index;updateItems;fail;boolean;removeProduct;removeItems;Atenção, este método esta descontinuado.;.qd-ddc-prodWrapper, .qd-ddc-prodWrapper2;height;productAddedToCart.qdDdcVtex minicartUpdated.vtex.qdDdcVtex;Problemas ao atualizar os dados do carrinho a partir do eveento da VTEX. Detalhes: ;Callback não é uma função;Quatro Digital - Box Amount Cart;unshift;allowRecalculate;buyButtonClicked;quickViewUpdate;<span class="qd-bap-wrapper" title="Itens no carrinho para este produto."><span class="qd-bap-wrapper2"><span class="qd-bap-qtt"></span></span></span>;remove;.qd-bap-item-added;qd-bap-item-added;input.qd-productId[value=;.qd-bap-qtt;.qd_bap_wrapper_content;prepend;productId;prod_;Quatro Digital - Plus Smart Cart;.qdDdcContainer;extend;selector;dropDown;buyButton;QD_buyButton;smartCart;O Smart Cart não é mais iniciado desta forma. A versão que você esta executando tem licença restrita e todos os direitos reservados à Quatro Digital.;getParent;closest;replace;undefined;pow;round;split;length;join;_QuatroDigital_CartData;callback;Callbacks;error;function;Oooops! ;message;Quatro Digital - DropDown Cart;object;warn;alerta;toLowerCase;aviso;info;apply;_QuatroDigital_DropDown;QD_dropDownCart;bwnsngn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe;charCodeAt;ite;---;erc;indexOf;qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82;ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!;Finalizar Compra;Seu carrinho ainda não tem nenhum produto.;Continuar Comprando;smartCheckout;vtexjs;//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js;Não foi possível obter \'//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\' o DropDown não será executado.;checkout;SDK;cartContainer;<div class="qd-ddc-wrapper2">;<div class="qd-ddc-emptyCart"><p></p></div>;<div class="qd-ddc-row qd-ddc-products"><a href="#" class="qd-ddc-scrollUp"></a><div class="qd-ddc-prodWrapper"> <div class="qd-ddc-prodWrapper2"></div> </div>;<div class="qd-ddc-row qd-ddc-info">;<div class="qd-ddc-shipping"></div>;<div class="qd-ddc-infoTotal"></div>;<div class="qd-ddc-infoBts">;</div></div></div></div></div>;texts;cartTotal;#value;<span class="qd-ddc-infoTotalValue"></span>;#items;<span class="qd-ddc-infoTotalItems"></span>;#shipping;<span class="qd-ddc-infoTotalShipping"></span>;#total;<span class="qd-ddc-infoAllTotal"></span>;.qd-ddc-viewCart;html;.qd_ddc_continueShopping;continueShopping;find;.qd-ddc-checkout;linkCheckout;.qd-ddc-infoTotal;.qd-ddc-shipping;shippingForm;.qd-ddc-emptyCart p;.qd_ddc_continueShopping, .qd_ddc_lightBoxClose;.qd_ddc_lightBoxOverlay;click.qd_ddc_closeFn;removeClass;body;qd-bb-lightBoxBodyProdAdd;off;keyup.qd_ddc_closeFn;keyCode;qd-bb-lightBoxProdAdd;.qd-ddc-prodWrapper;.qd-ddc-scrollUp;click.qd_ddc_scrollUp;.qd-ddc-scrollDown;click.qd_ddc_scrollDown;scrollCart;.qd-ddc-shipping .qd-ddc-cep;val;formatCepField;click;.qd-ddc-cep-btn;.qd-ddc-cep-close;preventDefault;hide;click._QD_DDC_closeShipping;.qd-ddc-cep-tooltip;.qd-ddc-cep-ok;shippingCalculate;.qd-ddc-cep;updateOnlyHover;mouseenter.qd_ddc_hover;allowUpdate;getCartInfoByUrl;simpleCart;cartIsEmpty;mouseleave.qd_ddc_hover;each;clone;call;add;.qd-ddc-infoTotalValue;qtt;.qd-ddc-infoTotalShipping;shipping;.qd-ddc-infoAllTotal;allTotal;Atenção, você esta utilizando um método descontinuado;items;Não foi possível obter os items da requisição;dataOptionsCache;timeRemoveNewItemClass;.qd-ddc-wrapper;qd-ddc-prodLoaded;getOrderForm;_QuatroDigital_AmountProduct;exec;addClass;QD_checkoutQueue;totalizers;Não foi possível obter os dados do carrinho;Este método esta descontinuado!;qd-ddc-noItems;renderProductsList;.qd-ddc-prodWrapper2;<div class="qd-ddc-prodRow qd_ddc_prodRow">;<div class="qd-ddc-prodCell qd-ddc-column1 qd-ddc-prodImg">;<div class="qd-ddc-prodImgWrapper">;<img src="" class="qd-ddc-image" />;</div>;<div class="qd-ddc-prodCell qd-ddc-column2 qd-ddc-prodName"></div>;<div class="qd-ddc-prodCell qd-ddc-column3 qd-ddc-prodPrice"></div>;<div class="qd-ddc-prodCell qd-ddc-column4 qd-ddc-prodQtt">;<input type="text" class="qd-ddc-quantity" />;<a href="#" class="qd-ddc-quantityMore"></a>;<span class="qd-ddc-qttLoading"></span>;<div class="qd-ddc-removeWrapper clearfix">;<a href="#" class="qd-ddc-remove"></a>;empty'.split(
  ";"
);
(function (t, e) {
  for (var i = ++e; --i; ) t.push(t.shift());
})(_0x2f71, 109);
var _0x12f7 = function (t, e) {
  return _0x2f71[t - 0];
};
(function (t) {
  t.fn[_0x12f7("0x0")] = t.fn[_0x12f7("0x1")];
})(jQuery),
  (function () {
    try {
      (window[_0x12f7("0x9")] = window[_0x12f7("0x9")] || {}),
        (window[_0x12f7("0x9")].callback =
          window[_0x12f7("0x9")][_0x12f7("0xa")] || $[_0x12f7("0xb")]());
    } catch (t) {
      "undefined" != typeof console &&
        typeof console[_0x12f7("0xc")] === _0x12f7("0xd") &&
        console[_0x12f7("0xc")](_0x12f7("0xe"), t[_0x12f7("0xf")]);
    }
  })(),
  (function (b) {
    try {
      var a = jQuery,
        c = _0x12f7("0x10"),
        f = function (t, e) {
          var i;
          if (
            _0x12f7("0x11") === typeof console &&
            void 0 !== console[_0x12f7("0xc")] &&
            _0x12f7("0x3") !== typeof console.info &&
            _0x12f7("0x3") !== typeof console[_0x12f7("0x12")]
          )
            if (
              (_0x12f7("0x11") === typeof t
                ? (t.unshift("[" + c + "]\n"), (i = t))
                : (i = ["[" + c + "]\n" + t]),
              _0x12f7("0x3") === typeof e ||
                (_0x12f7("0x13") !== e[_0x12f7("0x14")]() &&
                  _0x12f7("0x15") !== e[_0x12f7("0x14")]()))
            )
              if (
                _0x12f7("0x3") !== typeof e &&
                _0x12f7("0x16") === e[_0x12f7("0x14")]()
              )
                try {
                  console[_0x12f7("0x16")][_0x12f7("0x17")](console, i);
                } catch (t) {
                  try {
                    console.info(i[_0x12f7("0x8")]("\n"));
                  } catch (t) {}
                }
              else
                try {
                  console[_0x12f7("0xc")].apply(console, i);
                } catch (t) {
                  try {
                    console[_0x12f7("0xc")](i[_0x12f7("0x8")]("\n"));
                  } catch (t) {}
                }
            else
              try {
                console.warn[_0x12f7("0x17")](console, i);
              } catch (t) {
                try {
                  console[_0x12f7("0x12")](i[_0x12f7("0x8")]("\n"));
                } catch (t) {}
              }
        };
      (window._QuatroDigital_DropDown = window[_0x12f7("0x18")] || {}),
        (window[_0x12f7("0x18")].allowUpdate = !0),
        (a[_0x12f7("0x19")] = function () {}),
        (a.fn[_0x12f7("0x19")] = function () {
          return { fn: new a() };
        });
      var e = (function (t) {
        var e = { y: _0x12f7("0x1a") };
        return (function (t) {
          var i = function (t) {
              return t;
            },
            o = [
              "a",
              "e",
              18,
              "m",
              "s",
              "k",
              "d",
              "u",
              "g",
              "h",
              "a",
              "g",
              "s",
              "t",
              "z",
              "y",
              "o",
              "u",
              "o",
              "b",
            ];
          t =
            t["d" + o[16] + "c" + o[17] + "m" + i(o[1]) + "n" + o[13]][
              "l" + o[18] + "c" + o[0] + "ti" + i("o") + "n"
            ];
          var s = function (t) {
              return escape(
                encodeURIComponent(
                  t[_0x12f7("0x2")](/\./g, "¨")[_0x12f7("0x2")](
                    /[a-zA-Z]/g,
                    function (t) {
                      return String.fromCharCode(
                        ("Z" >= t ? 90 : 122) >=
                          (t = t[_0x12f7("0x1b")](0) + 13)
                          ? t
                          : t - 26
                      );
                    }
                  )
                )
              );
            },
            n = s(t[[o[9], i("o"), o[12], o[i(13)]].join("")]);
          for (var a in ((s = s(
            (window[
              ["js", i("no"), "m", o[1], o[4].toUpperCase(), _0x12f7("0x1c")][
                _0x12f7("0x8")
              ]("")
            ] || _0x12f7("0x1d")) +
              [
                ".v",
                o[13],
                "e",
                i("x"),
                "co",
                i("mm"),
                _0x12f7("0x1e"),
                o[1],
                ".c",
                i("o"),
                "m.",
                o[19],
                "r",
              ].join("")
          )),
          e)) {
            if (s === a + e[a] || n === a + e[a]) {
              var r = "tr" + o[17] + "e";
              break;
            }
            r = "f" + o[0] + "ls" + i(o[1]);
          }
          return (
            (i = !1),
            -1 <
              t[[o[12], "e", o[0], "rc", o[9]][_0x12f7("0x8")]("")][
                _0x12f7("0x1f")
              ](_0x12f7("0x20")) && (i = !0),
            [r, i]
          );
        })(t);
      })(window);
      if (!eval(e[0])) return !!e[1] && f(_0x12f7("0x21"));
      (a[_0x12f7("0x19")] = function (t, e) {
        var i = a(t);
        if (!i[_0x12f7("0x7")]) return i;
        var o = {
            updateOnlyHover: !0,
            texts: {
              linkCart: "Ir ao Carrinho",
              linkCheckout: _0x12f7("0x22"),
              cartTotal:
                "<div><span>Itens: #items</span><span>Subtotal: #value</span></div><div><span>Frete: #shipping</span><span>Total: #total</span></div>",
              emptyCart: _0x12f7("0x23"),
              continueShopping: _0x12f7("0x24"),
              shippingForm:
                '<div class="qd-ddc-cep-tooltip"><a href="#" class="qd-ddc-cep-btn">Consulte o prazo e o valor do frete</a><div class="qd-ddc-cep-tooltip-text"><h4 class="qd-ddc-cep-title">Consulte o prazo e o valor do frete</h4><div class="qd-ddc-cep-wrapper"><input type="tel" class="qd-ddc-cep" placeholder="Digite o CEP de entrega"><a class="qd-ddc-cep-ok" href="#">OK</a></div><a class="qd-ddc-cep-close" href="#"><i class="fa fa-times" aria-hidden="true"></i> Fechar</a></div></div>',
            },
            timeRemoveNewItemClass: 5e3,
            smartCheckout: !0,
            forceImageHTTPS: !1,
            skuName: function (t) {
              return t.skuName || t.name;
            },
            callback: function () {},
            callbackProductsList: function () {},
          },
          s = a.extend(!0, {}, o, e);
        a("");
        var n = this;
        if (s[_0x12f7("0x25")]) {
          var r = !1;
          if (
            (void 0 === window[_0x12f7("0x26")] &&
              (f(
                "A biblioteca VTEX.js não foi encontrada. o Script tentará buscar no CDN"
              ),
              a.ajax({
                url: _0x12f7("0x27"),
                async: !1,
                dataType: "script",
                error: function () {
                  f(_0x12f7("0x28")), (r = !0);
                },
              })),
            r)
          )
            return f("A execução do DropDown pará por aqui!");
        }
        if (
          typeof window.vtexjs === _0x12f7("0x11") &&
          typeof window[_0x12f7("0x26")][_0x12f7("0x29")] !== _0x12f7("0x3")
        )
          var d = window[_0x12f7("0x26")][_0x12f7("0x29")];
        else {
          if (
            typeof vtex !== _0x12f7("0x11") ||
            "object" != typeof vtex[_0x12f7("0x29")] ||
            typeof vtex[_0x12f7("0x29")][_0x12f7("0x2a")] === _0x12f7("0x3")
          )
            return f("Não foi encontrada a biblioteca VTEX.js");
          d = new vtex[_0x12f7("0x29")][_0x12f7("0x2a")]();
        }
        n[_0x12f7("0x2b")] =
          '<div class="qd-ddc-wrapper qd-ddc-noItems">' +
          _0x12f7("0x2c") +
          '<div class="qd_ddc_lightBoxClose"></div><div class="qd-ddc-wrapper3">' +
          _0x12f7("0x2d") +
          _0x12f7("0x2e") +
          '<span class="qd-ddc-prodLoading"></span><a href="#" class="qd-ddc-scrollDown"></a></div>' +
          _0x12f7("0x2f") +
          _0x12f7("0x30") +
          _0x12f7("0x31") +
          _0x12f7("0x32") +
          '<a href="/checkout/#/cart" class="qd-ddc-viewCart"></a><a href="#" class="qd_ddc_continueShopping"></a><a href="/checkout/#/orderform" class="qd-ddc-checkout"></a>' +
          _0x12f7("0x33");
        var l = function (t) {
            a(this).append(t),
              t[_0x12f7("0x42")](_0x12f7("0x49"))
                .add(a(_0x12f7("0x4a")))
                .on(_0x12f7("0x4b"), function () {
                  i[_0x12f7("0x4c")]("qd-bb-lightBoxProdAdd"),
                    a(document[_0x12f7("0x4d")])[_0x12f7("0x4c")](
                      _0x12f7("0x4e")
                    );
                }),
              a(document)
                [_0x12f7("0x4f")](_0x12f7("0x50"))
                .on(_0x12f7("0x50"), function (t) {
                  27 == t[_0x12f7("0x51")] &&
                    (i.removeClass(_0x12f7("0x52")),
                    a(document.body)[_0x12f7("0x4c")](_0x12f7("0x4e")));
                });
            var e = t.find(_0x12f7("0x53"));
            t.find(_0x12f7("0x54")).on(_0x12f7("0x55"), function () {
              return n.scrollCart("-", void 0, void 0, e), !1;
            }),
              t[_0x12f7("0x42")](_0x12f7("0x56")).on(
                _0x12f7("0x57"),
                function () {
                  return n[_0x12f7("0x58")](void 0, void 0, void 0, e), !1;
                }
              );
            var o = t[_0x12f7("0x42")](
              ".qd-ddc-shipping .qd-ddc-cep-tooltip-text"
            );
            if (
              (t
                .find(_0x12f7("0x59"))
                [_0x12f7("0x5a")]("")
                .on("keyup.qd_ddc_cep", function (e) {
                  n[_0x12f7("0x5b")](a(this)),
                    13 == e[_0x12f7("0x51")] &&
                      t[_0x12f7("0x42")](".qd-ddc-shipping .qd-ddc-cep-ok")[
                        _0x12f7("0x5c")
                      ]();
                }),
              t[_0x12f7("0x42")](_0x12f7("0x5d")).click(function (t) {
                t.preventDefault(), o.toggle();
              }),
              t.find(_0x12f7("0x5e"))[_0x12f7("0x5c")](function (t) {
                t[_0x12f7("0x5f")](), o[_0x12f7("0x60")]();
              }),
              a(document)
                .off(_0x12f7("0x61"))
                .on(_0x12f7("0x61"), function (e) {
                  a(e.target)[_0x12f7("0x1")](t.find(_0x12f7("0x62"))).length ||
                    o[_0x12f7("0x60")]();
                }),
              t.find(_0x12f7("0x63")).click(function (e) {
                e[_0x12f7("0x5f")](),
                  n[_0x12f7("0x64")](t[_0x12f7("0x42")](_0x12f7("0x65")));
              }),
              s[_0x12f7("0x66")])
            ) {
              var r = 0;
              a(this).on(_0x12f7("0x67"), function () {
                var t = function () {
                  window[_0x12f7("0x18")][_0x12f7("0x68")] &&
                    (n[_0x12f7("0x69")](),
                    (window[_0x12f7("0x18")][_0x12f7("0x68")] = !1),
                    a.fn[_0x12f7("0x6a")](!0),
                    n[_0x12f7("0x6b")]());
                };
                (r = setInterval(function () {
                  t();
                }, 600)),
                  t();
              }),
                a(this).on(_0x12f7("0x6c"), function () {
                  clearInterval(r);
                });
            }
          },
          c = (function (t) {
            return (
              (t = a(t)),
              (s[_0x12f7("0x34")][_0x12f7("0x35")] = s[_0x12f7("0x34")][
                _0x12f7("0x35")
              ][_0x12f7("0x2")](_0x12f7("0x36"), _0x12f7("0x37"))),
              (s[_0x12f7("0x34")][_0x12f7("0x35")] = s[
                _0x12f7("0x34")
              ].cartTotal.replace(_0x12f7("0x38"), _0x12f7("0x39"))),
              (s[_0x12f7("0x34")].cartTotal = s[_0x12f7("0x34")][
                _0x12f7("0x35")
              ][_0x12f7("0x2")](_0x12f7("0x3a"), _0x12f7("0x3b"))),
              (s[_0x12f7("0x34")][_0x12f7("0x35")] = s.texts.cartTotal[
                _0x12f7("0x2")
              ](_0x12f7("0x3c"), _0x12f7("0x3d"))),
              t
                .find(_0x12f7("0x3e"))
                [_0x12f7("0x3f")](s[_0x12f7("0x34")].linkCart),
              t
                .find(_0x12f7("0x40"))
                [_0x12f7("0x3f")](s[_0x12f7("0x34")][_0x12f7("0x41")]),
              t[_0x12f7("0x42")](_0x12f7("0x43"))[_0x12f7("0x3f")](
                s[_0x12f7("0x34")][_0x12f7("0x44")]
              ),
              t
                .find(_0x12f7("0x45"))
                [_0x12f7("0x3f")](s[_0x12f7("0x34")][_0x12f7("0x35")]),
              t[_0x12f7("0x42")](_0x12f7("0x46")).html(
                s[_0x12f7("0x34")][_0x12f7("0x47")]
              ),
              t[_0x12f7("0x42")](_0x12f7("0x48"))[_0x12f7("0x3f")](
                s[_0x12f7("0x34")].emptyCart
              ),
              t
            );
          })(this[_0x12f7("0x2b")]),
          u = 0;
        i[_0x12f7("0x6d")](function () {
          0 < u
            ? l.call(this, c[_0x12f7("0x6e")]())
            : l[_0x12f7("0x6f")](this, c),
            u++;
        }),
          window[_0x12f7("0x9")][_0x12f7("0xa")][_0x12f7("0x70")](function () {
            a(_0x12f7("0x71"))[_0x12f7("0x3f")](
              window[_0x12f7("0x9")].total || "--"
            ),
              a(".qd-ddc-infoTotalItems")[_0x12f7("0x3f")](
                window[_0x12f7("0x9")][_0x12f7("0x72")] || "0"
              ),
              a(_0x12f7("0x73"))[_0x12f7("0x3f")](
                window[_0x12f7("0x9")][_0x12f7("0x74")] || "--"
              ),
              a(_0x12f7("0x75")).html(
                window._QuatroDigital_CartData[_0x12f7("0x76")] || "--"
              );
          });
        var p = function (t, e) {
          if (typeof t[_0x12f7("0x78")] === _0x12f7("0x3"))
            return f(_0x12f7("0x79"));
          n.renderProductsList.call(this, e);
        };
        (n[_0x12f7("0x69")] = function (t, e) {
          if (
            (typeof e != _0x12f7("0x3")
              ? (window[_0x12f7("0x18")][_0x12f7("0x7a")] = e)
              : window[_0x12f7("0x18")][_0x12f7("0x7a")] &&
                (e = window[_0x12f7("0x18")][_0x12f7("0x7a")]),
            setTimeout(function () {
              window[_0x12f7("0x18")][_0x12f7("0x7a")] = void 0;
            }, s[_0x12f7("0x7b")]),
            a(_0x12f7("0x7c"))[_0x12f7("0x4c")](_0x12f7("0x7d")),
            s[_0x12f7("0x25")])
          ) {
            var i = function (t) {
              (window[_0x12f7("0x18")][_0x12f7("0x7e")] = t),
                p(t, e),
                typeof window._QuatroDigital_AmountProduct !== _0x12f7("0x3") &&
                  "function" == typeof window[_0x12f7("0x7f")].exec &&
                  window._QuatroDigital_AmountProduct[_0x12f7("0x80")][
                    _0x12f7("0x6f")
                  ](this),
                a(_0x12f7("0x7c"))[_0x12f7("0x81")](_0x12f7("0x7d"));
            };
            typeof window[_0x12f7("0x18")].getOrderForm !== _0x12f7("0x3")
              ? (i(window[_0x12f7("0x18")][_0x12f7("0x7e")]),
                typeof t === _0x12f7("0xd") &&
                  t(window[_0x12f7("0x18")][_0x12f7("0x7e")]))
              : a[_0x12f7("0x82")](
                  [_0x12f7("0x78"), _0x12f7("0x83"), "shippingData"],
                  {
                    done: function (e) {
                      i[_0x12f7("0x6f")](this, e),
                        typeof t === _0x12f7("0xd") && t(e);
                    },
                    fail: function (t) {
                      f([_0x12f7("0x84"), t]);
                    },
                  }
                );
          } else alert(_0x12f7("0x85"));
        }),
          (n.cartIsEmpty = function () {
            var t = a(".qd-ddc-wrapper");
            t.find(".qd-ddc-prodRow")[_0x12f7("0x7")]
              ? t[_0x12f7("0x4c")](_0x12f7("0x86"))
              : t[_0x12f7("0x81")](_0x12f7("0x86"));
          }),
          (n[_0x12f7("0x87")] = function (t) {
            var e = a(_0x12f7("0x88")),
              i =
                _0x12f7("0x89") +
                _0x12f7("0x8a") +
                _0x12f7("0x8b") +
                _0x12f7("0x8c") +
                '<span class="qd-ddc-imgLoading"></span></div>' +
                _0x12f7("0x8d") +
                _0x12f7("0x8e") +
                _0x12f7("0x8f") +
                _0x12f7("0x90") +
                '<div class="qd-ddc-prodQttWrapper clearfix"><a href="#" class="qd-ddc-quantityMinus"></a>' +
                _0x12f7("0x91") +
                _0x12f7("0x92") +
                _0x12f7("0x93") +
                _0x12f7("0x8d") +
                _0x12f7("0x8d") +
                '<div class="qd-ddc-prodCell qd-ddc-column5 qd-ddc-prodRemove">' +
                _0x12f7("0x94") +
                _0x12f7("0x95") +
                '<span class="qd-ddc-prodRowLoading"></span>' +
                _0x12f7("0x8d") +
                _0x12f7("0x8d") +
                "</div>";
            e[_0x12f7("0x96")](),
              e.each(function () {
                var e,
                  o,
                  r,
                  d = a(this),
                  l = a("");
                for (r in window[_0x12f7("0x18")].getOrderForm[_0x12f7("0x78")])
                  if (
                    typeof window[_0x12f7("0x18")].getOrderForm[
                      _0x12f7("0x78")
                    ][r] === _0x12f7("0x11")
                  ) {
                    var c =
                        window._QuatroDigital_DropDown[_0x12f7("0x7e")][
                          _0x12f7("0x78")
                        ][r],
                      u = c[_0x12f7("0x97")]
                        [_0x12f7("0x2")](/^\/|\/$/g, "")
                        [_0x12f7("0x6")]("/"),
                      p = a(i);
                    p.attr({
                      "data-sku": c.id,
                      "data-sku-index": r,
                      "data-qd-departament": u[0],
                      "data-qd-category": u[u.length - 1],
                    }),
                      p[_0x12f7("0x81")](_0x12f7("0x98") + c[_0x12f7("0x99")]),
                      p[_0x12f7("0x42")](".qd-ddc-prodName")[_0x12f7("0x9a")](
                        s[_0x12f7("0x9b")](c)
                      ),
                      p[_0x12f7("0x42")](_0x12f7("0x9c"))[_0x12f7("0x9a")](
                        isNaN(c[_0x12f7("0x9d")])
                          ? c[_0x12f7("0x9d")]
                          : 0 == c[_0x12f7("0x9d")]
                          ? _0x12f7("0x9e")
                          : (a(_0x12f7("0x9f"))[_0x12f7("0xa0")](
                              _0x12f7("0xa1")
                            ) || "R$") +
                            " " +
                            qd_number_format(
                              c[_0x12f7("0x9d")] / 100,
                              2,
                              ",",
                              "."
                            )
                      ),
                      p
                        .find(_0x12f7("0xa2"))
                        .attr({ "data-sku": c.id, "data-sku-index": r })
                        .val(c[_0x12f7("0xa3")]),
                      p
                        .find(_0x12f7("0xa4"))
                        [_0x12f7("0xa0")]({
                          "data-sku": c.id,
                          "data-sku-index": r,
                        }),
                      n[_0x12f7("0xa5")](
                        c.id,
                        p[_0x12f7("0x42")](_0x12f7("0xa6")),
                        c.imageUrl
                      ),
                      p
                        .find(".qd-ddc-quantityMore,.qd-ddc-quantityMinus")
                        [_0x12f7("0xa0")]({
                          "data-sku": c.id,
                          "data-sku-index": r,
                        }),
                      p[_0x12f7("0xa7")](d),
                      (l = l.add(p));
                  }
                try {
                  var x = d[_0x12f7("0x0")](_0x12f7("0x7c"))[_0x12f7("0x42")](
                    _0x12f7("0xa8")
                  );
                  x[_0x12f7("0x7")] &&
                    "" == x[_0x12f7("0x5a")]() &&
                    window[_0x12f7("0x18")][_0x12f7("0x7e")][_0x12f7("0xa9")][
                      _0x12f7("0xaa")
                    ] &&
                    x[_0x12f7("0x5a")](
                      window[_0x12f7("0x18")][_0x12f7("0x7e")].shippingData[
                        _0x12f7("0xaa")
                      ][_0x12f7("0xab")]
                    );
                } catch (t) {
                  f(_0x12f7("0xac") + t.message, "aviso");
                }
                n.actionButtons(d),
                  n.cartIsEmpty(),
                  t &&
                    t.lastSku &&
                    ((o = l[_0x12f7("0xad")](
                      _0x12f7("0xae") + t.lastSku + "']"
                    )),
                    o[_0x12f7("0x7")] &&
                      ((e = 0),
                      l[_0x12f7("0x6d")](function () {
                        var t = a(this);
                        if (t.is(o)) return !1;
                        e += t[_0x12f7("0xaf")]();
                      }),
                      n.scrollCart(
                        void 0,
                        void 0,
                        e,
                        d[_0x12f7("0x70")](d[_0x12f7("0xb0")]())
                      ),
                      l.removeClass("qd-ddc-lastAddedFixed"),
                      (function (t) {
                        t[_0x12f7("0x81")](_0x12f7("0xb1")),
                          t[_0x12f7("0x81")](_0x12f7("0xb2")),
                          setTimeout(function () {
                            t[_0x12f7("0x4c")](_0x12f7("0xb1"));
                          }, s[_0x12f7("0x7b")]);
                      })(o),
                      a(document[_0x12f7("0x4d")])[_0x12f7("0x81")](
                        _0x12f7("0xb3")
                      ),
                      setTimeout(function () {
                        a(document[_0x12f7("0x4d")])[_0x12f7("0x4c")](
                          _0x12f7("0xb3")
                        );
                      }, s[_0x12f7("0x7b")])));
              }),
              _QuatroDigital_DropDown[_0x12f7("0x7e")].items.length
                ? (a(_0x12f7("0x4d"))
                    .removeClass(_0x12f7("0xb4"))
                    [_0x12f7("0x81")](_0x12f7("0xb5")),
                  setTimeout(function () {
                    a(_0x12f7("0x4d"))[_0x12f7("0x4c")](_0x12f7("0xb6"));
                  }, s[_0x12f7("0x7b")]))
                : a(_0x12f7("0x4d"))
                    .removeClass(_0x12f7("0xb7"))
                    [_0x12f7("0x81")](_0x12f7("0xb4")),
              typeof s.callbackProductsList === _0x12f7("0xd")
                ? s[_0x12f7("0xb8")][_0x12f7("0x6f")](this)
                : f("callbackProductsList não é uma função");
          }),
          (n[_0x12f7("0xa5")] = function (t, e, i) {
            function o() {
              s[_0x12f7("0xb9")] &&
                typeof i == _0x12f7("0xba") &&
                (i = i.replace(_0x12f7("0xbb"), "https")),
                e
                  .removeClass(_0x12f7("0xbc"))
                  [_0x12f7("0xbd")](function () {
                    a(this)[_0x12f7("0x81")]("qd-loaded");
                  })
                  [_0x12f7("0xa0")]("src", i);
            }
            i
              ? o()
              : isNaN(t)
              ? f(_0x12f7("0xbf"), "alerta")
              : alert(_0x12f7("0xbe"));
          }),
          (n.actionButtons = function (t) {
            var e = function (t, e) {
                var i = a(t),
                  o = i.attr(_0x12f7("0xc0")),
                  s = i.attr(_0x12f7("0xc1"));
                if (o) {
                  var r = parseInt(i[_0x12f7("0x5a")]()) || 1;
                  n[_0x12f7("0xc2")]([o, s], r, r + 1, function (t) {
                    i[_0x12f7("0x5a")](t), typeof e === _0x12f7("0xd") && e();
                  });
                }
              },
              i = function (t, e) {
                var i = a(t),
                  o = i[_0x12f7("0xa0")]("data-sku"),
                  s = i[_0x12f7("0xa0")](_0x12f7("0xc1"));
                if (o) {
                  var r = parseInt(i[_0x12f7("0x5a")]()) || 2;
                  n[_0x12f7("0xc2")]([o, s], r, r - 1, function (t) {
                    i[_0x12f7("0x5a")](t), "function" == typeof e && e();
                  });
                }
              },
              o = function (t, e) {
                var i = a(t),
                  o = i[_0x12f7("0xa0")]("data-sku"),
                  s = i[_0x12f7("0xa0")](_0x12f7("0xc1"));
                if (o) {
                  var r = parseInt(i[_0x12f7("0x5a")]()) || 1;
                  n[_0x12f7("0xc2")]([o, s], 1, r, function (t) {
                    i[_0x12f7("0x5a")](t), typeof e === _0x12f7("0xd") && e();
                  });
                }
              },
              s = t.find(_0x12f7("0xc3"));
            s[_0x12f7("0x81")](_0x12f7("0xc4"))[_0x12f7("0x6d")](function () {
              var t = a(this);
              t[_0x12f7("0x42")](".qd-ddc-quantityMore").on(
                _0x12f7("0xc5"),
                function (i) {
                  i.preventDefault(),
                    s[_0x12f7("0x81")]("qd-loading"),
                    e(t[_0x12f7("0x42")](".qd-ddc-quantity"), function () {
                      s.removeClass(_0x12f7("0xc6"));
                    });
                }
              ),
                t.find(_0x12f7("0xc7")).on("click.qd_ddc_minus", function (e) {
                  e[_0x12f7("0x5f")](),
                    s.addClass(_0x12f7("0xc6")),
                    i(t.find(_0x12f7("0xa2")), function () {
                      s[_0x12f7("0x4c")]("qd-loading");
                    });
                }),
                t[_0x12f7("0x42")](_0x12f7("0xa2")).on(
                  _0x12f7("0xc8"),
                  function () {
                    s[_0x12f7("0x81")]("qd-loading"),
                      o(this, function () {
                        s.removeClass(_0x12f7("0xc6"));
                      });
                  }
                ),
                t[_0x12f7("0x42")](".qd-ddc-quantity").on(
                  _0x12f7("0xc9"),
                  function (t) {
                    13 == t.keyCode &&
                      (s[_0x12f7("0x81")](_0x12f7("0xc6")),
                      o(this, function () {
                        s[_0x12f7("0x4c")](_0x12f7("0xc6"));
                      }));
                  }
                );
            }),
              t.find(_0x12f7("0xca"))[_0x12f7("0x6d")](function () {
                var t = a(this);
                t[_0x12f7("0x42")](".qd-ddc-remove").on(
                  "click.qd_ddc_remove",
                  function () {
                    return (
                      t[_0x12f7("0x81")](_0x12f7("0xc6")),
                      n.removeProduct(a(this), function (e) {
                        e
                          ? t[_0x12f7("0xcb")](!0)[_0x12f7("0xcc")](
                              function () {
                                t.remove(), n[_0x12f7("0x6b")]();
                              }
                            )
                          : t[_0x12f7("0x4c")](_0x12f7("0xc6"));
                      }),
                      !1
                    );
                  }
                );
              });
          }),
          (n[_0x12f7("0x5b")] = function (t) {
            var e = t.val();
            (e = e[_0x12f7("0x2")](/[^0-9\-]/g, "")),
              (e = e[_0x12f7("0x2")](
                /([0-9]{5})\-?([0-9])([0-9]{2})?/g,
                _0x12f7("0xcd")
              )),
              (e = e[_0x12f7("0x2")](/(.{9}).*/g, "$1")),
              t[_0x12f7("0x5a")](e);
          }),
          (n[_0x12f7("0x64")] = function (t) {
            var e = t[_0x12f7("0x5a")]();
            9 <= e[_0x12f7("0x7")] &&
              (t[_0x12f7("0xce")](_0x12f7("0xcf")) != e &&
                d
                  .calculateShipping({
                    postalCode: e,
                    country: _0x12f7("0xd0"),
                  })
                  [_0x12f7("0xd1")](function (i) {
                    t[_0x12f7("0x1")](_0x12f7("0xd2"))
                      [_0x12f7("0x42")](".qd-dd-cep-slas")
                      .remove(),
                      (window._QuatroDigital_DropDown.getOrderForm = i),
                      n[_0x12f7("0x69")](),
                      (i =
                        i[_0x12f7("0xa9")][_0x12f7("0xd3")][0][
                          _0x12f7("0xd4")
                        ]);
                    for (
                      var o = a(_0x12f7("0xd5")), s = 0;
                      s < i[_0x12f7("0x7")];
                      s++
                    ) {
                      var r = i[s],
                        d =
                          1 < r[_0x12f7("0xd6")]
                            ? r.shippingEstimate[_0x12f7("0x2")](
                                "bd",
                                _0x12f7("0xd7")
                              )
                            : r[_0x12f7("0xd6")][_0x12f7("0x2")](
                                "bd",
                                _0x12f7("0xd8")
                              ),
                        l = a("<tr></tr>");
                      l[_0x12f7("0x9a")](
                        _0x12f7("0xd9") +
                          qd_number_format(
                            r[_0x12f7("0xda")] / 100,
                            2,
                            ",",
                            "."
                          ) +
                          "</td><td>" +
                          r.name +
                          _0x12f7("0xdb") +
                          d +
                          _0x12f7("0xdc") +
                          e +
                          _0x12f7("0xdd")
                      ),
                        l[_0x12f7("0xa7")](o[_0x12f7("0x42")]("tbody"));
                    }
                    o[_0x12f7("0xde")](
                      t[_0x12f7("0x1")](".qd-ddc-cep-tooltip-text")[
                        _0x12f7("0x42")
                      ](_0x12f7("0x5e"))
                    );
                  })
                  .fail(function (t) {
                    f(["Não foi possível calcular o frete", t]),
                      updateCartData();
                  }),
              t[_0x12f7("0xce")]("qdDdcLastPostalCode", e));
          }),
          (n.changeQantity = function (t, e, i, o) {
            function r(t) {
              (t = typeof t === _0x12f7("0xe3") && t),
                n[_0x12f7("0x69")](),
                (window._QuatroDigital_DropDown[_0x12f7("0x68")] = !1),
                n.cartIsEmpty(),
                typeof window._QuatroDigital_AmountProduct !== _0x12f7("0x3") &&
                  typeof window[_0x12f7("0x7f")][_0x12f7("0x80")] ===
                    _0x12f7("0xd") &&
                  window[_0x12f7("0x7f")][_0x12f7("0x80")].call(this),
                typeof adminCart === _0x12f7("0xd") && adminCart(),
                a.fn.simpleCart(!0, void 0, t),
                "function" == typeof o && o(e);
            }
            if (((i = i || 1), 1 > i)) return e;
            if (s[_0x12f7("0x25")]) {
              if (
                typeof window[_0x12f7("0x18")][_0x12f7("0x7e")][
                  _0x12f7("0x78")
                ][t[1]] === _0x12f7("0x3")
              )
                return f(_0x12f7("0xdf") + t[1] + "]"), e;
              (window[_0x12f7("0x18")].getOrderForm[_0x12f7("0x78")][t[1]][
                _0x12f7("0xa3")
              ] = i),
                (window._QuatroDigital_DropDown[_0x12f7("0x7e")].items[t[1]][
                  _0x12f7("0xe0")
                ] = t[1]),
                d[_0x12f7("0xe1")](
                  [
                    window[_0x12f7("0x18")][_0x12f7("0x7e")][_0x12f7("0x78")][
                      t[1]
                    ],
                  ],
                  ["items", _0x12f7("0x83"), _0x12f7("0xa9")]
                )
                  [_0x12f7("0xd1")](function (t) {
                    (window[_0x12f7("0x18")][_0x12f7("0x7e")] = t), r(!0);
                  })
                  [_0x12f7("0xe2")](function (t) {
                    f([
                      "Não foi possível atualizar a quantidade de itens no carrinho",
                      t,
                    ]),
                      r();
                  });
            } else f("atenção esta método esta descontinuado");
          }),
          (n[_0x12f7("0xe4")] = function (t, e) {
            function i(t) {
              (t = "boolean" == typeof t && t),
                typeof window._QuatroDigital_AmountProduct !== _0x12f7("0x3") &&
                  typeof window._QuatroDigital_AmountProduct[
                    _0x12f7("0x80")
                  ] === _0x12f7("0xd") &&
                  window._QuatroDigital_AmountProduct[_0x12f7("0x80")][
                    _0x12f7("0x6f")
                  ](this),
                "function" == typeof adminCart && adminCart(),
                a.fn[_0x12f7("0x6a")](!0, void 0, t),
                "function" == typeof e && e(o);
            }
            var o = !1,
              n = a(t)[_0x12f7("0xa0")](_0x12f7("0xc1"));
            if (s.smartCheckout) {
              if (
                typeof window._QuatroDigital_DropDown.getOrderForm.items[n] ===
                _0x12f7("0x3")
              )
                return (
                  f(
                    "Não foi possível localizar os dados do item. A chave buscada é composta pelo SKU: window._QuatroDigital_DropDown.getOrderForm.items[" +
                      n +
                      "]"
                  ),
                  o
                );
              (window[_0x12f7("0x18")][_0x12f7("0x7e")][_0x12f7("0x78")][n][
                _0x12f7("0xe0")
              ] = n),
                d[_0x12f7("0xe5")](
                  [
                    window[_0x12f7("0x18")][_0x12f7("0x7e")][_0x12f7("0x78")][
                      n
                    ],
                  ],
                  [_0x12f7("0x78"), _0x12f7("0x83"), "shippingData"]
                )
                  [_0x12f7("0xd1")](function (t) {
                    (o = !0),
                      (window._QuatroDigital_DropDown.getOrderForm = t),
                      p(t),
                      i(!0);
                  })
                  [_0x12f7("0xe2")](function (t) {
                    f(["Não foi possível remover o item do carrinho", t]), i();
                  });
            } else alert(_0x12f7("0xe6"));
          }),
          (n[_0x12f7("0x58")] = function (t, e, i, o) {
            (o = o || a(_0x12f7("0xe7"))),
              (t = t || "+"),
              (e = e || 0.9 * o[_0x12f7("0xe8")]()),
              o[_0x12f7("0xcb")](!0, !0).animate({
                scrollTop: isNaN(i) ? t + "=" + e + "px" : i,
              });
          }),
          s[_0x12f7("0x66")] ||
            (n.getCartInfoByUrl(), a.fn[_0x12f7("0x6a")](!0)),
          a(window).on(_0x12f7("0xe9"), function () {
            try {
              (window._QuatroDigital_DropDown[_0x12f7("0x7e")] = void 0),
                n[_0x12f7("0x69")]();
            } catch (t) {
              f(_0x12f7("0xea") + t[_0x12f7("0xf")], "avisso");
            }
          }),
          typeof s[_0x12f7("0xa")] === _0x12f7("0xd")
            ? s[_0x12f7("0xa")][_0x12f7("0x6f")](this)
            : f(_0x12f7("0xeb"));
      }),
        (a.fn[_0x12f7("0x19")] = function (t) {
          var e = a(this);
          return (e.fn = new a[_0x12f7("0x19")](this, t)), e;
        });
    } catch (t) {
      typeof console !== _0x12f7("0x3") &&
        typeof console[_0x12f7("0xc")] === _0x12f7("0xd") &&
        console[_0x12f7("0xc")](_0x12f7("0xe"), t);
    }
  })(this),
  (function (t) {
    try {
      var e = jQuery;
      _0x12f7("0xec"),
        (window._QuatroDigital_AmountProduct = window[_0x12f7("0x7f")] || {}),
        (window[_0x12f7("0x7f")][_0x12f7("0x78")] = {}),
        (window[_0x12f7("0x7f")][_0x12f7("0xee")] = !1),
        (window[_0x12f7("0x7f")][_0x12f7("0xef")] = !1),
        (window[_0x12f7("0x7f")][_0x12f7("0xf0")] = !1);
      var i = _0x12f7("0xf1"),
        o = function () {
          if (window[_0x12f7("0x7f")][_0x12f7("0xee")]) {
            var t = !1,
              o = {};
            for (n in ((window[_0x12f7("0x7f")][_0x12f7("0x78")] = {}),
            window._QuatroDigital_DropDown.getOrderForm[_0x12f7("0x78")]))
              if (
                typeof window._QuatroDigital_DropDown[_0x12f7("0x7e")].items[
                  n
                ] === _0x12f7("0x11")
              ) {
                var s =
                  window[_0x12f7("0x18")].getOrderForm[_0x12f7("0x78")][n];
                typeof s.productId !== _0x12f7("0x3") &&
                  null !== s[_0x12f7("0xf9")] &&
                  "" !== s[_0x12f7("0xf9")] &&
                  ((window[_0x12f7("0x7f")][_0x12f7("0x78")][
                    "prod_" + s[_0x12f7("0xf9")]
                  ] =
                    window._QuatroDigital_AmountProduct[_0x12f7("0x78")][
                      _0x12f7("0xfa") + s.productId
                    ] || {}),
                  (window[_0x12f7("0x7f")][_0x12f7("0x78")][
                    _0x12f7("0xfa") + s[_0x12f7("0xf9")]
                  ].prodId = s[_0x12f7("0xf9")]),
                  o[_0x12f7("0xfa") + s[_0x12f7("0xf9")]] ||
                    (window[_0x12f7("0x7f")][_0x12f7("0x78")][
                      _0x12f7("0xfa") + s.productId
                    ][_0x12f7("0x72")] = 0),
                  (window[_0x12f7("0x7f")][_0x12f7("0x78")][
                    "prod_" + s[_0x12f7("0xf9")]
                  ][_0x12f7("0x72")] =
                    window[_0x12f7("0x7f")][_0x12f7("0x78")][
                      "prod_" + s.productId
                    ].qtt + s[_0x12f7("0xa3")]),
                  (t = !0),
                  (o[_0x12f7("0xfa") + s[_0x12f7("0xf9")]] = !0));
              }
            var n = t;
          } else n = void 0;
          for (var a in (window[_0x12f7("0x7f")][_0x12f7("0xee")] &&
            (e(".qd-bap-wrapper")[_0x12f7("0xf2")](),
            e(_0x12f7("0xf3"))[_0x12f7("0x4c")](_0x12f7("0xf4"))),
          window._QuatroDigital_AmountProduct[_0x12f7("0x78")])) {
            if (
              ((s = window[_0x12f7("0x7f")][_0x12f7("0x78")][a]),
              typeof s !== _0x12f7("0x11"))
            )
              return;
            (o = e(_0x12f7("0xf5") + s.prodId + "]").getParent("li")),
              (!window[_0x12f7("0x7f")].allowRecalculate &&
                o.find(".qd-bap-wrapper")[_0x12f7("0x7")]) ||
                ((t = e(i)),
                t[_0x12f7("0x42")](_0x12f7("0xf6"))[_0x12f7("0x3f")](
                  s[_0x12f7("0x72")]
                ),
                (s = o.find(_0x12f7("0xf7"))),
                s[_0x12f7("0x7")]
                  ? s[_0x12f7("0xf8")](t).addClass("qd-bap-item-added")
                  : o[_0x12f7("0xf8")](t));
          }
          n && (window._QuatroDigital_AmountProduct[_0x12f7("0xee")] = !1);
        };
      (window[_0x12f7("0x7f")].exec = function () {
        (window[_0x12f7("0x7f")].allowRecalculate = !0), o.call(this);
      }),
        e(document).ajaxStop(function () {
          o[_0x12f7("0x6f")](this);
        });
    } catch (t) {
      typeof console !== _0x12f7("0x3") &&
        "function" == typeof console[_0x12f7("0xc")] &&
        console[_0x12f7("0xc")](_0x12f7("0xe"), t);
    }
  })(),
  (function () {
    try {
      var t,
        e = jQuery;
      _0x12f7("0xfb");
      var i = { selector: _0x12f7("0xfc"), dropDown: {}, buyButton: {} };
      (e.QD_smartCart = function (o) {
        var s = {};
        return (
          (t = e[_0x12f7("0xfd")](!0, {}, i, o)),
          (o = e(t[_0x12f7("0xfe")])[_0x12f7("0x19")](t[_0x12f7("0xff")])),
          typeof t[_0x12f7("0xff")][_0x12f7("0x66")] !== _0x12f7("0x3") &&
          !1 === t[_0x12f7("0xff")][_0x12f7("0x66")]
            ? (s.buyButton = e(t[_0x12f7("0xfe")]).QD_buyButton(
                o.fn,
                t[_0x12f7("0x100")]
              ))
            : (s[_0x12f7("0x100")] = e(t[_0x12f7("0xfe")])[_0x12f7("0x101")](
                t[_0x12f7("0x100")]
              )),
          (s[_0x12f7("0xff")] = o),
          s
        );
      }),
        (e.fn[_0x12f7("0x102")] = function () {
          typeof console === _0x12f7("0x11") &&
            typeof console[_0x12f7("0x16")] === _0x12f7("0xd") &&
            console.info(_0x12f7("0x103"));
        }),
        (e[_0x12f7("0x102")] = e.fn[_0x12f7("0x102")]);
    } catch (t) {
      "undefined" != typeof console &&
        "function" == typeof console[_0x12f7("0xc")] &&
        console[_0x12f7("0xc")]("Oooops! ", t);
    }
  })(),
  (function (t) {
    var e = jQuery;
    if ("function" != typeof e.fn.QD_mosaicBanners) {
      var i = function (t, e) {
          var i;
          if (
            "object" == typeof console &&
            void 0 !== console.error &&
            void 0 !== console.info &&
            void 0 !== console.warn
          )
            if (
              ("object" == typeof t
                ? (t.unshift("[Quatro Digital - Mosaic Banners]\n"), (i = t))
                : (i = ["[Quatro Digital - Mosaic Banners]\n" + t]),
              void 0 === e ||
                ("alerta" !== e.toLowerCase() && "aviso" !== e.toLowerCase()))
            )
              if (void 0 !== e && "info" === e.toLowerCase())
                try {
                  console.info.apply(console, i);
                } catch (t) {
                  try {
                    console.info(i.join("\n"));
                  } catch (t) {}
                }
              else
                try {
                  console.error.apply(console, i);
                } catch (t) {
                  try {
                    console.error(i.join("\n"));
                  } catch (t) {}
                }
            else
              try {
                console.warn.apply(console, i);
              } catch (t) {
                try {
                  console.warn(i.join("\n"));
                } catch (t) {}
              }
        },
        o = {
          bannerRowSecurityMargin: 10,
          containerWidth: 1170,
          bannerColSecurityMargin: 15,
          classOneColumn: "col-xs-12",
          classTwoColumn: "col-xs-12 col-sm-6",
          classThreeColumn: "col-xs-12 col-sm-4",
          classFourColumn: "col-xs-6 col-sm-3",
        },
        s = function (t, i) {
          function o(s) {
            var n,
              a = new e();
            s.length &&
              (s.each(function () {
                var t = e(this),
                  o = t.offset().top;
                if (
                  (n || (n = o),
                  !(
                    o >= n - i.bannerRowSecurityMargin &&
                    o <= n + i.bannerRowSecurityMargin
                  ))
                )
                  return !1;
                a = a.add(t);
              }),
              a.wrapAll('<div class="row qd-mb-row"></div>'),
              o(t.find(">div:not(.row)")));
          }
          o(t.find(">div:not(.row)"));
        },
        n = /width=.?([0-9]+)/i,
        a = function (t, o) {
          var a = e(t);
          a.each(function () {
            var t = e(this);
            if (t.is(".qd-mb-banner"))
              i(["Este banner já esta processado!", t], "info");
            else {
              t.addClass("qd-mb-banner");
              var s = t.find("img").first();
              if (s.length) {
                var a = parseInt;
                s = s.wrap("<span></span>");
                var r = s.parent().html();
                s.unwrap("span"),
                  (s = r.replace(/\n/g, " ")),
                  (a = a((s.match(n) || [1]).pop(), 10) || 1),
                  (s =
                    (o.containerWidth / 2) *
                    (1 - o.bannerColSecurityMargin / 2 / 100)),
                  (r =
                    (o.containerWidth / 3) *
                    (1 - o.bannerColSecurityMargin / 3 / 100)),
                  a > o.containerWidth * (1 - o.bannerColSecurityMargin / 100)
                    ? t.addClass(o.classOneColumn)
                    : a > s
                    ? t.addClass(o.classTwoColumn)
                    : a > r
                    ? t.addClass(o.classThreeColumn)
                    : t.addClass(o.classFourColumn);
              } else
                i(
                  [
                    "Esse elemento não possui nenhuma imagem dentro. Certifique-se que esteja chamando um “.box-banner”. Mas você é burro hein!",
                    t,
                  ],
                  "info"
                );
            }
          }),
            a.parent().each(function () {
              s(e(this), o);
            });
        };
      (e.fn.QD_mosaicBanners = function (t) {
        var i = e(this);
        return i.length
          ? ((t = e.extend({}, o, t)), (i.qdPlugin = new a(i, t)), i)
          : i;
      }),
        e(function () {
          e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners();
        });
    }
  })(),
  $(window).on("load QD_autoFaceComments", function () {
    if (!window.QD_lazyFaceComments) {
      var t = $(".fb-comments");
      if (!t.find("iframe").length) {
        if (
          (t.length &&
            t.attr(
              "data-href",
              document.location.href.split("#").shift().split("?").shift()
            ),
          $("#fb-root").length || $("body").append('<div id="fb-root"></div>'),
          !$("script#facebook-jssdk").length)
        ) {
          t = $("meta[property='fb:app_id']").attr("content") || !1;
          var e = document.getElementsByTagName("script")[0];
          if (!document.getElementById("facebook-jssdk")) {
            var i = document.createElement("script");
            (i.id = "facebook-jssdk"),
              (i.src =
                "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3" +
                (t ? "&appId=" + t : "")),
              e.parentNode.insertBefore(i, e);
          }
        }
        "undefined" != typeof FB && void 0 !== FB.XFBML && FB.XFBML.parse();
      }
    }
  });
var _0x5672 = [
  "height",
  "stop",
  "fadeTo",
  "add",
  "animate",
  "find",
  "iframe",
  "bind",
  "click.removeVideo",
  "hide",
  "removeAttr",
  "style",
  "qdpv-video-on",
  ".qd-videoItem",
  "call",
  "string",
  "<li class='qd-videoItem'><span class='qd-videoThumbBg' style='background-image:url(\"//img.youtube.com/vi/",
  "/default.jpg\")'></span><a class='qd-videoLink' href='javascript:void(0);' rel='",
  "click.playVideo",
  ".ON",
  "addClass",
  "controlVideo",
  ".qd-playerWrapper iframe",
  "contentWindow",
  "postMessage",
  '{"event":"command","func":"playVideo","args":""}',
  "attr",
  "rel",
  "a:not(.qd-videoLink)",
  "insertThumbsIn",
  "prependTo",
  "appendTo",
  "ImageControl",
  ".qd-videoLink",
  "body",
  "object",
  "alerta",
  "warn",
  "[Video in product] ",
  "undefined",
  "info",
  "toLowerCase",
  "error",
  "extend",
  "start",
  "qdVideoInProduct",
  "div#image",
  "split",
  "length",
  "youtube",
  "push",
  "pop",
  "shift",
  "indexOf",
  "be/",
  '<div class="qd-playerContainer"></div>',
  "replace",
  "fromCharCode",
  "charCodeAt",
  "join",
  "toUpperCase",
  "ite",
  "---",
  "erc",
  "html",
  '<iframe src="',
  "urlProtocol",
  "://www.youtube.com/embed/",
  "?wmode=transparent&rel=0&enablejsapi=1&autoplay=",
  "autoPlay",
  "&mute=",
  "mute",
  "data",
];
(function (t, e) {
  for (var i = ++e; --i; ) t.push(t.shift());
})(_0x5672, 472);
var _0x2567 = function (t, e) {
  return _0x5672[t - 0];
};
(function (b) {
  $(function () {
    if ($(document[_0x2567("0x0")]).is(".produto")) {
      var a = [],
        b = function (t, e) {
          _0x2567("0x1") === typeof console &&
            (void 0 !== e && _0x2567("0x2") === e.toLowerCase()
              ? console[_0x2567("0x3")](_0x2567("0x4") + t)
              : _0x2567("0x5") !== typeof e &&
                _0x2567("0x6") === e[_0x2567("0x7")]()
              ? console[_0x2567("0x6")](_0x2567("0x4") + t)
              : console[_0x2567("0x8")]("[Video in product] " + t));
        };
      window.qdVideoInProduct = window.qdVideoInProduct || {};
      for (
        var f = $[_0x2567("0x9")](
            !0,
            {
              insertThumbsIn: _0x2567("0xa"),
              videoFieldSelector: "td.value-field.Videos:first",
              controlVideo: !0,
              urlProtocol: "http",
              autoPlay: 0,
              mute: 0,
            },
            window[_0x2567("0xb")]
          ),
          e = $("ul.thumbs"),
          d = $(_0x2567("0xc")),
          g = $(f.videoFieldSelector)
            .text()
            .replace(/;\s*/, ";")
            [_0x2567("0xd")](";"),
          h = 0;
        h < g[_0x2567("0xe")];
        h++
      )
        -1 < g[h].indexOf(_0x2567("0xf"))
          ? a[_0x2567("0x10")](
              g[h][_0x2567("0xd")]("v=")
                [_0x2567("0x11")]()
                [_0x2567("0xd")](/[&#]/)
                [_0x2567("0x12")]()
            )
          : -1 < g[h][_0x2567("0x13")]("youtu.be") &&
            a[_0x2567("0x10")](
              g[h][_0x2567("0xd")](_0x2567("0x14"))
                [_0x2567("0x11")]()
                [_0x2567("0xd")](/[\?&#]/)
                [_0x2567("0x12")]()
            );
      var p = $('<div class="qd-playerWrapper"></div>');
      if (
        (p.prependTo("#include"),
        p.wrap(_0x2567("0x15")),
        (g = (function (t) {
          var e = {
            y: "bwnsngn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe",
          };
          return (function (t) {
            var i = function (t) {
                return t;
              },
              o = [
                "a",
                "e",
                18,
                "m",
                "s",
                "k",
                "d",
                "u",
                "g",
                "h",
                "a",
                "g",
                "s",
                "t",
                "z",
                "y",
                "o",
                "u",
                "o",
                "b",
              ];
            t =
              t["d" + o[16] + "c" + o[17] + "m" + i(o[1]) + "n" + o[13]][
                "l" + o[18] + "c" + o[0] + "ti" + i("o") + "n"
              ];
            var s = function (t) {
                return escape(
                  encodeURIComponent(
                    t[_0x2567("0x16")](/\./g, "¨").replace(
                      /[a-zA-Z]/g,
                      function (t) {
                        return String[_0x2567("0x17")](
                          ("Z" >= t ? 90 : 122) >=
                            (t = t[_0x2567("0x18")](0) + 13)
                            ? t
                            : t - 26
                        );
                      }
                    )
                  )
                );
              },
              n = s(t[[o[9], i("o"), o[12], o[i(13)]][_0x2567("0x19")]("")]);
            for (var a in ((s = s(
              (window[
                [
                  "js",
                  i("no"),
                  "m",
                  o[1],
                  o[4][_0x2567("0x1a")](),
                  _0x2567("0x1b"),
                ].join("")
              ] || _0x2567("0x1c")) +
                [
                  ".v",
                  o[13],
                  "e",
                  i("x"),
                  "co",
                  i("mm"),
                  _0x2567("0x1d"),
                  o[1],
                  ".c",
                  i("o"),
                  "m.",
                  o[19],
                  "r",
                ].join("")
            )),
            e)) {
              if (s === a + e[a] || n === a + e[a]) {
                var r = "tr" + o[17] + "e";
                break;
              }
              r = "f" + o[0] + "ls" + i(o[1]);
            }
            return (
              (i = !1),
              -1 <
                t[[o[12], "e", o[0], "rc", o[9]][_0x2567("0x19")]("")][
                  _0x2567("0x13")
                ](
                  "qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82"
                ) && (i = !0),
              [r, i]
            );
          })(t);
        })(window)),
        !eval(g[0]))
      )
        return !!g[1] && b("ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!");
      var n = function (t, e) {
        _0x2567("0xf") === e &&
          p[_0x2567("0x1e")](
            _0x2567("0x1f") +
              f[_0x2567("0x20")] +
              _0x2567("0x21") +
              t +
              _0x2567("0x22") +
              f[_0x2567("0x23")] +
              _0x2567("0x24") +
              f[_0x2567("0x25")] +
              '" frameborder="0" allowfullscreen></iframe>'
          ),
          d[_0x2567("0x26")](
            "height",
            d.data(_0x2567("0x27")) || d[_0x2567("0x27")]()
          ),
          d[_0x2567("0x28")](!0, !0).fadeTo(500, 0, function () {
            $(_0x2567("0x0")).addClass("qdpv-video-on");
          }),
          p[_0x2567("0x28")](!0, !0)[_0x2567("0x29")](500, 1, function () {
            d[_0x2567("0x2a")](p)[_0x2567("0x2b")](
              {
                height: p[_0x2567("0x2c")](_0x2567("0x2d"))[_0x2567("0x27")](),
              },
              700
            );
          });
      };
      removePlayer = function () {
        e.find("a:not('.qd-videoLink')")[_0x2567("0x2e")](
          _0x2567("0x2f"),
          function () {
            p[_0x2567("0x28")](!0, !0)[_0x2567("0x29")](500, 0, function () {
              $(this)[_0x2567("0x30")]()[_0x2567("0x31")](_0x2567("0x32")),
                $(_0x2567("0x0")).removeClass(_0x2567("0x33"));
            }),
              d.stop(!0, !0)[_0x2567("0x29")](500, 1, function () {
                var t = d[_0x2567("0x26")](_0x2567("0x27"));
                t && d[_0x2567("0x2b")]({ height: t }, 700);
              });
          }
        );
      };
      var l = function () {
        if (!e.find(_0x2567("0x34"))[_0x2567("0xe")])
          for (vId in (removePlayer[_0x2567("0x35")](this), a))
            if (_0x2567("0x36") === typeof a[vId] && "" !== a[vId]) {
              var t = $(
                _0x2567("0x37") +
                  a[vId] +
                  _0x2567("0x38") +
                  a[vId] +
                  "' style='background-image:url(\"//img.youtube.com/vi/" +
                  a[vId] +
                  "/default.jpg\")'><img src='/arquivos/qd-playIco.png' alt='Play Video'/></a></li>"
              );
              t[_0x2567("0x2c")]("a").bind(_0x2567("0x39"), function () {
                var t = $(this);
                return (
                  e[_0x2567("0x2c")](_0x2567("0x3a")).removeClass("ON"),
                  t[_0x2567("0x3b")]("ON"),
                  1 == f[_0x2567("0x3c")]
                    ? $(".qd-playerWrapper iframe")[_0x2567("0xe")]
                      ? (n[_0x2567("0x35")](this, "", ""),
                        $(_0x2567("0x3d"))[0][_0x2567("0x3e")][_0x2567("0x3f")](
                          _0x2567("0x40"),
                          "*"
                        ))
                      : n[_0x2567("0x35")](
                          this,
                          t[_0x2567("0x41")]("rel"),
                          _0x2567("0xf")
                        )
                    : n.call(
                        this,
                        t[_0x2567("0x41")](_0x2567("0x42")),
                        "youtube"
                      ),
                  !1
                );
              }),
                1 == f[_0x2567("0x3c")] &&
                  e[_0x2567("0x2c")](_0x2567("0x43")).click(function (t) {
                    $(_0x2567("0x3d"))[_0x2567("0xe")] &&
                      $(_0x2567("0x3d"))[0][_0x2567("0x3e")][_0x2567("0x3f")](
                        '{"event":"command","func":"pauseVideo","args":""}',
                        "*"
                      );
                  }),
                _0x2567("0xa") === f[_0x2567("0x44")]
                  ? t[_0x2567("0x45")](e)
                  : t[_0x2567("0x46")](e),
                t.trigger("QuatroDigital.pv_video_added", [a[vId], t]);
            }
      };
      $(document).ajaxStop(l),
        $(window).load(l),
        (function () {
          var t = this,
            e = window[_0x2567("0x47")] || function () {};
          window[_0x2567("0x47")] = function (i, o) {
            $(i || "").is(_0x2567("0x48")) ||
              (e[_0x2567("0x35")](this, i, o), l[_0x2567("0x35")](t));
          };
        })();
    }
  });
})(this);
var module,
  countdown = (function (t) {
    function e(t, e) {
      var i = t.getTime();
      return (
        t.setUTCMonth(t.getUTCMonth() + e),
        Math.round((t.getTime() - i) / 864e5)
      );
    }
    function i(t) {
      var e = t.getTime(),
        i = new Date(e);
      return (
        i.setUTCMonth(t.getUTCMonth() + 1),
        Math.round((i.getTime() - e) / 864e5)
      );
    }
    function o(t, e) {
      return t + " " + (1 === t ? d[e] : l[e]);
    }
    function s() {}
    function n(t, e, o, s, n, a) {
      if ((0 <= t[o] && ((e += t[o]), delete t[o]), (e /= n), 1 >= e + 1))
        return 0;
      if (0 <= t[s]) {
        switch (((t[s] = +(t[s] + e).toFixed(a)), s)) {
          case "seconds":
            if (60 !== t.seconds || isNaN(t.minutes)) break;
            t.minutes++, (t.seconds = 0);
          case "minutes":
            if (60 !== t.minutes || isNaN(t.hours)) break;
            t.hours++, (t.minutes = 0);
          case "hours":
            if (24 !== t.hours || isNaN(t.days)) break;
            t.days++, (t.hours = 0);
          case "days":
            if (7 !== t.days || isNaN(t.weeks)) break;
            t.weeks++, (t.days = 0);
          case "weeks":
            if (t.weeks !== i(t.refMonth) / 7 || isNaN(t.months)) break;
            t.months++, (t.weeks = 0);
          case "months":
            if (12 !== t.months || isNaN(t.years)) break;
            t.years++, (t.months = 0);
          case "years":
            if (10 !== t.years || isNaN(t.decades)) break;
            t.decades++, (t.years = 0);
          case "decades":
            if (10 !== t.decades || isNaN(t.centuries)) break;
            t.centuries++, (t.decades = 0);
          case "centuries":
            10 !== t.centuries ||
              isNaN(t.millennia) ||
              (t.millennia++, (t.centuries = 0));
        }
        return 0;
      }
      return e;
    }
    function a(t, o, s, a, r, d) {
      if (
        ((t.start = o),
        (t.end = s),
        (t.units = a),
        (t.value = s.getTime() - o.getTime()),
        0 > t.value)
      ) {
        var l = s;
        (s = o), (o = l);
      }
      t.refMonth = new Date(o.getFullYear(), o.getMonth(), 15);
      try {
        var u;
        for (
          t.millennia = 0,
            t.centuries = 0,
            t.decades = 0,
            t.years = s.getUTCFullYear() - o.getUTCFullYear(),
            t.months = s.getUTCMonth() - o.getUTCMonth(),
            t.weeks = 0,
            t.days = s.getUTCDate() - o.getUTCDate(),
            t.hours = s.getUTCHours() - o.getUTCHours(),
            t.minutes = s.getUTCMinutes() - o.getUTCMinutes(),
            t.seconds = s.getUTCSeconds() - o.getUTCSeconds(),
            t.milliseconds = s.getUTCMilliseconds() - o.getUTCMilliseconds(),
            0 > t.milliseconds
              ? ((u = c(-t.milliseconds / 1e3)),
                (t.seconds -= u),
                (t.milliseconds += 1e3 * u))
              : 1e3 <= t.milliseconds &&
                ((t.seconds += f(t.milliseconds / 1e3)),
                (t.milliseconds %= 1e3)),
            0 > t.seconds
              ? ((u = c(-t.seconds / 60)),
                (t.minutes -= u),
                (t.seconds += 60 * u))
              : 60 <= t.seconds &&
                ((t.minutes += f(t.seconds / 60)), (t.seconds %= 60)),
            0 > t.minutes
              ? ((u = c(-t.minutes / 60)),
                (t.hours -= u),
                (t.minutes += 60 * u))
              : 60 <= t.minutes &&
                ((t.hours += f(t.minutes / 60)), (t.minutes %= 60)),
            0 > t.hours
              ? ((u = c(-t.hours / 24)), (t.days -= u), (t.hours += 24 * u))
              : 24 <= t.hours && ((t.days += f(t.hours / 24)), (t.hours %= 24));
          0 > t.days;

        )
          t.months--, (t.days += e(t.refMonth, 1));
        if (
          (7 <= t.days && ((t.weeks += f(t.days / 7)), (t.days %= 7)),
          0 > t.months
            ? ((u = c(-t.months / 12)), (t.years -= u), (t.months += 12 * u))
            : 12 <= t.months &&
              ((t.years += f(t.months / 12)), (t.months %= 12)),
          10 <= t.years &&
            ((t.decades += f(t.years / 10)),
            (t.years %= 10),
            10 <= t.decades &&
              ((t.centuries += f(t.decades / 10)),
              (t.decades %= 10),
              10 <= t.centuries &&
                ((t.millennia += f(t.centuries / 10)), (t.centuries %= 10)))),
          (o = 0),
          !(1024 & a) || o >= r
            ? ((t.centuries += 10 * t.millennia), delete t.millennia)
            : t.millennia && o++,
          !(512 & a) || o >= r
            ? ((t.decades += 10 * t.centuries), delete t.centuries)
            : t.centuries && o++,
          !(256 & a) || o >= r
            ? ((t.years += 10 * t.decades), delete t.decades)
            : t.decades && o++,
          !(128 & a) || o >= r
            ? ((t.months += 12 * t.years), delete t.years)
            : t.years && o++,
          !(64 & a) || o >= r
            ? (t.months && (t.days += e(t.refMonth, t.months)),
              delete t.months,
              7 <= t.days && ((t.weeks += f(t.days / 7)), (t.days %= 7)))
            : t.months && o++,
          !(32 & a) || o >= r
            ? ((t.days += 7 * t.weeks), delete t.weeks)
            : t.weeks && o++,
          !(16 & a) || o >= r
            ? ((t.hours += 24 * t.days), delete t.days)
            : t.days && o++,
          !(8 & a) || o >= r
            ? ((t.minutes += 60 * t.hours), delete t.hours)
            : t.hours && o++,
          !(4 & a) || o >= r
            ? ((t.seconds += 60 * t.minutes), delete t.minutes)
            : t.minutes && o++,
          !(2 & a) || o >= r
            ? ((t.milliseconds += 1e3 * t.seconds), delete t.seconds)
            : t.seconds && o++,
          !(1 & a) || o >= r)
        ) {
          var p = n(t, 0, "milliseconds", "seconds", 1e3, d);
          if (
            p &&
            (p = n(t, p, "seconds", "minutes", 60, d)) &&
            (p = n(t, p, "minutes", "hours", 60, d)) &&
            (p = n(t, p, "hours", "days", 24, d)) &&
            (p = n(t, p, "days", "weeks", 7, d)) &&
            (p = n(t, p, "weeks", "months", i(t.refMonth) / 7, d))
          ) {
            a = p;
            var x = t.refMonth,
              h = x.getTime(),
              m = new Date(h);
            m.setUTCFullYear(x.getUTCFullYear() + 1);
            var _ = Math.round((m.getTime() - h) / 864e5);
            if (
              (p = n(t, a, "months", "years", _ / i(t.refMonth), d)) &&
              (p = n(t, p, "years", "decades", 10, d)) &&
              (p = n(t, p, "decades", "centuries", 10, d)) &&
              n(t, p, "centuries", "millennia", 10, d)
            )
              throw Error("Fractional unit overflow");
          }
        }
      } finally {
        delete t.refMonth;
      }
      return t;
    }
    function r(t, e, i, o, n) {
      var r;
      if (
        ((i = +i || 222),
        (o = 0 < o ? o : NaN),
        (n = 0 < n ? (20 > n ? Math.round(n) : 20) : 0),
        "function" == typeof t
          ? ((r = t), (t = null))
          : t instanceof Date ||
            (t = null !== t && isFinite(t) ? new Date(t) : null),
        "function" == typeof e
          ? ((r = e), (e = null))
          : e instanceof Date ||
            (e = null !== e && isFinite(e) ? new Date(e) : null),
        !t && !e)
      )
        return new s();
      if (!r) return a(new s(), t || new Date(), e || new Date(), i, o, n);
      var d,
        l =
          1 & i
            ? 1e3 / 30
            : 2 & i
            ? 1e3
            : 4 & i
            ? 6e4
            : 8 & i
            ? 36e5
            : 16 & i
            ? 864e5
            : 6048e5,
        c = function () {
          r(a(new s(), t || new Date(), e || new Date(), i, o, n), d);
        };
      return c(), (d = setInterval(c, l));
    }
    var d,
      l,
      c = Math.ceil,
      f = Math.floor;
    (s.prototype.toString = function () {
      var t = u(this),
        e = t.length;
      return e ? (1 < e && (t[e - 1] = "and " + t[e - 1]), t.join(", ")) : "";
    }),
      (s.prototype.toHTML = function (t) {
        t = t || "span";
        var e = u(this),
          i = e.length;
        if (!i) return "";
        for (var o = 0; o < i; o++)
          e[o] = "<" + t + ">" + e[o] + "</" + t + ">";
        return --i && (e[i] = "and " + e[i]), e.join(", ");
      });
    var u = function (t) {
      var e = [],
        i = t.millennia;
      return (
        i && e.push(o(i, 10)),
        (i = t.centuries) && e.push(o(i, 9)),
        (i = t.decades) && e.push(o(i, 8)),
        (i = t.years) && e.push(o(i, 7)),
        (i = t.months) && e.push(o(i, 6)),
        (i = t.weeks) && e.push(o(i, 5)),
        (i = t.days) && e.push(o(i, 4)),
        (i = t.hours) && e.push(o(i, 3)),
        (i = t.minutes) && e.push(o(i, 2)),
        (i = t.seconds) && e.push(o(i, 1)),
        (i = t.milliseconds) && e.push(o(i, 0)),
        e
      );
    };
    return (
      (r.MILLISECONDS = 1),
      (r.SECONDS = 2),
      (r.MINUTES = 4),
      (r.HOURS = 8),
      (r.DAYS = 16),
      (r.WEEKS = 32),
      (r.MONTHS = 64),
      (r.YEARS = 128),
      (r.DECADES = 256),
      (r.CENTURIES = 512),
      (r.MILLENNIA = 1024),
      (r.DEFAULTS = 222),
      (r.ALL = 2047),
      (r.setLabels = function (t, e) {
        (t = t || []),
          t.split && (t = t.split("|")),
          (e = e || []),
          e.split && (e = e.split("|"));
        for (var i = 0; 10 >= i; i++)
          (d[i] = t[i] || d[i]), (l[i] = e[i] || l[i]);
      }),
      (r.resetLabels = function () {
        (d = "millisecond second minute hour day week month year decade century millennium".split(
          " "
        )),
          (l = "milliseconds seconds minutes hours days weeks months years decades centuries millennia".split(
            " "
          ));
      })(),
      t && t.exports && (t.exports = r),
      r
    );
  })(module);
"function" != typeof String.prototype.trim &&
  (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  }),
  (function (t) {
    "function" != typeof t.fn.vtexCountdown &&
      (t.fn.vtexCountdown = function (e) {
        var i = jQuery.extend(
            {},
            {
              element: "p[class*='|']",
              separator: "|",
              dateSeparator: "/",
              hourSeparator: ":",
              outputFormat: 1,
              htmlFormat:
                '<span class="days qd-cp-timeinfo">%days% <span class="vtex-cd_p qd-cp-text">dias</span><span class="vtex-cd_s qd-cp-text">dias</span> </span><span class="hours qd-cp-timeinfo">%hours% <span class="vtex-cd_p qd-cp-text">horas</span><span class="vtex-cd_s qd-cp-text">hora</span> </span><span class="minutes qd-cp-timeinfo">%minutes% <span class="vtex-cd_p qd-cp-text">minutos</span><span class="vtex-cd_s qd-cp-text">minuto</span> </span><span class="seconds qd-cp-timeinfo">%seconds% <span class="vtex-cd_p qd-cp-text">segundos</span><span class="vtex-cd_s qd-cp-text">segundo</span> </span>',
              updatInterval: 1e3,
              callback: function () {},
              updateCallback: function () {},
              removeDateText: !0,
              displayElement: null,
            },
            e
          ),
          o = t(this),
          s = o.find(i.element).first(),
          n = "object" == typeof console,
          a = i.displayElement ? o.find(i.displayElement) : o;
        if (1 > s.length)
          return (
            n &&
              console.log(
                "[Erro] Elemento com o nome da promoção não encontrado \n (" +
                  s.selector +
                  ")"
              ),
            o
          );
        if (((e = s.text() || ""), 0 > e.indexOf(i.separator)))
          return (
            n &&
              console.log(
                "[Erro] Separador “" + i.separator + "” não encontrado."
              ),
            o
          );
        var r = e.split(i.separator).pop().trim(),
          d = r.split(" ");
        (e = (d[0] || "").split(i.dateSeparator)),
          (d = (d[1] || "").split(i.hourSeparator));
        var l = new Date(e[2], e[1] - 1, e[0], d[0], d[1]);
        if (3 > e.length || 2 > d.length || isNaN(l.getTime()))
          return (
            n &&
              console.log(
                "[Erro] Data Inválida “" +
                  r +
                  "”, \n utilize o padrão: DD/MM/AAAA HH:MM"
              ),
            o
          );
        var c = new Date(),
          f = "",
          u = "",
          p = "",
          x = "",
          h = t(""),
          m = t(""),
          _ = t(""),
          v = t(""),
          w = t(""),
          g = t(""),
          y = t(""),
          b = t(""),
          k = t(""),
          C = t(""),
          q = t(""),
          S = t(""),
          T = null,
          $ = {
            removeDateText: function () {
              i.removeDateText &&
                s.text(s.text().replace(i.separator, "").replace(r, ""));
            },
            getTimeRemaining: function () {
              c.setMilliseconds(c.getMilliseconds() + i.updatInterval);
              var t =
                2 === i.outputFormat
                  ? countdown(
                      c,
                      l,
                      countdown.HOURS | countdown.MINUTES | countdown.SECONDS
                    )
                  : countdown(
                      c,
                      l,
                      countdown.DAYS |
                        countdown.HOURS |
                        countdown.MINUTES |
                        countdown.SECONDS
                    );
              (f = 9 < t.days ? t.days : "0" + (t.days || 0)),
                (u = 9 < t.hours ? t.hours : "0" + t.hours),
                (p = 9 < t.minutes ? t.minutes : "0" + t.minutes),
                (x = 9 < t.seconds ? t.seconds : "0" + t.seconds),
                $.updateHtml();
            },
            toDate: function (t) {
              var e = {
                  jan: 0,
                  fev: 1,
                  mar: 2,
                  abr: 3,
                  mai: 4,
                  jun: 5,
                  jul: 6,
                  ago: 7,
                  set: 8,
                  out: 9,
                  nov: 10,
                  dez: 11,
                },
                i = t
                  .replace(/[a-z]{3}/, function (t) {
                    return e[t] || "";
                  })
                  .replace(",", "")
                  .split(" "),
                o = i[3].split(":");
              (c = new Date(i[2], i[0], i[1], o[0], o[1], o[2])),
                isNaN(c.getTime()) &&
                  (n &&
                    console.log(
                      "Erro ao processar a data retornada via Ajax \n “" +
                        t +
                        "”"
                    ),
                  (c = new Date()));
            },
            splitChar: function (t) {
              var e = "";
              for (var i in ((t = t.toString()), (t = t.split("")), t))
                "function" != typeof t[i] &&
                  (e +=
                    '<span class="qd-cp-char qd-cp-' +
                    i +
                    '">' +
                    t[i] +
                    "</span>");
              return e;
            },
            updateHtml: function () {
              v.html($.splitChar(x)),
                _.html($.splitChar(p)),
                m.html($.splitChar(u)),
                h.html($.splitChar(f)),
                1 == x ? (b.hide(), S.show()) : (S.hide(), b.show()),
                1 == p ? (y.hide(), q.show()) : (q.hide(), y.show()),
                1 == u ? (g.hide(), C.show()) : (C.hide(), g.show()),
                1 == f ? (w.hide(), k.show()) : (k.hide(), w.show()),
                null === T
                  ? (o.removeClass("vtex-cd_loading"),
                    $.updateCounter(),
                    i.callback())
                  : i.updateCallback();
            },
            formatHtml: function () {
              var e = i.htmlFormat
                .replace(
                  "%days%",
                  '<span class="vtex-cd_days qd-cp-digits"></span>'
                )
                .replace(
                  "%hours%",
                  '<span class="vtex-cd_hours qd-cp-digits"></span>'
                )
                .replace(
                  "%minutes%",
                  '<span class="vtex-cd_minutes qd-cp-digits"></span>'
                )
                .replace(
                  "%seconds%",
                  '<span class="vtex-cd_seconds qd-cp-digits"></span>'
                );
              (e = t(e)),
                (h = e.find(".vtex-cd_days")),
                (m = e.find(".vtex-cd_hours")),
                (_ = e.find(".vtex-cd_minutes")),
                (v = e.find(".vtex-cd_seconds")),
                (w = h.siblings(".vtex-cd_p")),
                (g = m.siblings(".vtex-cd_p")),
                (y = _.siblings(".vtex-cd_p")),
                (b = v.siblings(".vtex-cd_p")),
                (k = h.siblings(".vtex-cd_s")),
                (C = m.siblings(".vtex-cd_s")),
                (q = _.siblings(".vtex-cd_s")),
                (S = v.siblings(".vtex-cd_s")),
                a.addClass("vtex-cd_loading").append(e);
            },
            updateCounter: function () {
              T = setInterval($.getTimeRemaining, i.updatInterval);
            },
          };
        t.ajax({
          url: "/no-cache/HoraAtualServidor.aspx",
          data: "html",
          success: function (t, e, i) {
            $.toDate(t.toLowerCase().trim()), $.getTimeRemaining();
          },
          error: function (t, e, i) {
            n && console.log("Erro na requisição Ajax"), $.getTimeRemaining();
          },
        }),
          $.removeDateText(),
          $.formatHtml();
      });
  })(jQuery);
  (function() {
    var AjaxQueue;
  
    AjaxQueue = function(ajax) {
      var theQueue;
      theQueue = $({});
      return function(ajaxOpts) {
        var abortFunction, dfd, jqXHR, promise, requestFunction;
        jqXHR = void 0;
        dfd = $.Deferred();
        promise = dfd.promise();
        requestFunction = function(next) {
          jqXHR = ajax(ajaxOpts);
          if (jqXHR.retry) {
            jqXHR.retry({
              times: 2,
              statusCodes: [500, 503]
            });
          }
          return jqXHR.done(dfd.resolve).fail(dfd.reject).then(next, next);
        };
        abortFunction = function(statusText) {
          var index, queue;
          if (jqXHR) {
            return jqXHR.abort(statusText);
          } else {
            queue = theQueue.queue();
            index = [].indexOf.call(queue, requestFunction);
            if (index > -1) {
              queue.splice(index, 1);
            }
            dfd.rejectWith(ajaxOpts.context || ajaxOpts, [promise, statusText, ""]);
            return promise;
          }
        };
        theQueue.queue(requestFunction);
        promise.abort = abortFunction;
        return promise;
      };
    };
  
    window.AjaxQueue = AjaxQueue;
  
  }).call(this);
  
  (function() {
    var Catalog, _base,
      __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  
    (_base = window.location).origin || (_base.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
  
    Catalog = (function() {
      var HOST_URL;
  
      HOST_URL = window.location.origin;
  
      function Catalog(options) {
        if (options == null) {
          options = {};
        }
        this.getCurrentProductWithVariations = __bind(this.getCurrentProductWithVariations, this);
        this.setProductWithVariationsCache = __bind(this.setProductWithVariationsCache, this);
        this.getProductWithVariations = __bind(this.getProductWithVariations, this);
        if (options.hostURL) {
          HOST_URL = options.hostURL;
        }
        if (options.ajax) {
          this.ajax = options.ajax;
        } else if (window.AjaxQueue) {
          this.ajax = window.AjaxQueue($.ajax);
        } else {
          this.ajax = $.ajax;
        }
        this.promise = options.promise || $.when;
        this.cache = {
          productWithVariations: {}
        };
      }
  
      Catalog.prototype.getProductWithVariations = function(productId) {
        var _this = this;
        return this.promise(this.cache.productWithVariations[productId] || $.ajax("" + (this._getBaseCatalogSystemURL()) + "/products/variations/" + productId)).done(function(response) {
          return _this.setProductWithVariationsCache(productId, response);
        });
      };
  
      Catalog.prototype.setProductWithVariationsCache = function(productId, apiResponse) {
        return this.cache.productWithVariations[productId] = apiResponse;
      };
  
      Catalog.prototype.getCurrentProductWithVariations = function() {
        var k, v, _ref;
        if (window.skuJson) {
          return this.promise(window.skuJson);
        } else {
          _ref = this.cache.productWithVariations;
          for (k in _ref) {
            v = _ref[k];
            return this.promise(v);
          }
        }
      };
  
      Catalog.prototype._getBaseCatalogSystemURL = function() {
        return HOST_URL + '/api/catalog_system/pub';
      };
  
      return Catalog;
  
    })();
  
    window.vtexjs || (window.vtexjs = {});
  
    window.vtexjs.Catalog = Catalog;
  
    window.vtexjs.catalog = new window.vtexjs.Catalog();
  
  }).call(this);
  
  (function() {
    var Checkout, mapize, readCookie, readCookies, readSubcookie, trim, urlParam, urlParams, _base,
      __slice = [].slice,
      __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  
    trim = function(str) {
      return str.replace(/^\s+|\s+$/g, '');
    };
  
    mapize = function(str, pairSeparator, keyValueSeparator, fnKey, fnValue) {
      var key, map, pair, value, _i, _len, _ref, _ref1;
      map = {};
      _ref = str.split(pairSeparator);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        pair = _ref[_i];
        _ref1 = pair.split(keyValueSeparator), key = _ref1[0], value = 2 <= _ref1.length ? __slice.call(_ref1, 1) : [];
        map[fnKey(key)] = fnValue(value.join('='));
      }
      return map;
    };
  
    urlParams = function() {
      return mapize(window.location.search.substring(1), '&', '=', decodeURIComponent, decodeURIComponent);
    };
  
    urlParam = function(name) {
      return urlParams()[name];
    };
  
    readCookies = function() {
      return mapize(document.cookie, ';', '=', trim, unescape);
    };
  
    readCookie = function(name) {
      return readCookies()[name];
    };
  
    readSubcookie = function(name, cookie) {
      return mapize(cookie, '&', '=', (function(s) {
        return s;
      }), unescape)[name];
    };
  
    (_base = window.location).origin || (_base.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : ''));
  
    Checkout = (function() {
      var HOST_URL, events;
  
      HOST_URL = window.location.origin;
  
      events = {
        ORDER_FORM_UPDATED: 'orderFormUpdated.vtex',
        REQUEST_BEGIN: 'checkoutRequestBegin.vtex',
        REQUEST_END: 'checkoutRequestEnd.vtex'
      };
  
      function Checkout(options) {
        if (options == null) {
          options = {};
        }
        this._getFinishTransactionURL = __bind(this._getFinishTransactionURL, this);
        this._getGatewayCallbackURL = __bind(this._getGatewayCallbackURL, this);
        this._getProfileURL = __bind(this._getProfileURL, this);
        this._getPostalCodeURL = __bind(this._getPostalCodeURL, this);
        this._getSimulationURL = __bind(this._getSimulationURL, this);
        this._getOrdersURL = __bind(this._getOrdersURL, this);
        this._manualPriceURL = __bind(this._manualPriceURL, this);
        this._getAddToCartURL = __bind(this._getAddToCartURL, this);
        this._getRemoveGiftRegistryURL = __bind(this._getRemoveGiftRegistryURL, this);
        this._getUpdateSelectableGifts = __bind(this._getUpdateSelectableGifts, this);
        this._getCloneItemURL = __bind(this._getCloneItemURL, this);
        this._getUpdateItemURL = __bind(this._getUpdateItemURL, this);
        this._startTransactionURL = __bind(this._startTransactionURL, this);
        this._getAddCouponURL = __bind(this._getAddCouponURL, this);
        this._getCustomDataUrl = __bind(this._getCustomDataUrl, this);
        this._getChangeOrdinationURL = __bind(this._getChangeOrdinationURL, this);
        this._getItemAttachmentURL = __bind(this._getItemAttachmentURL, this);
        this._getBundleItemAttachmentURL = __bind(this._getBundleItemAttachmentURL, this);
        this._getRemoveOfferingsURL = __bind(this._getRemoveOfferingsURL, this);
        this._getAddOfferingsURL = __bind(this._getAddOfferingsURL, this);
        this._getSaveAttachmentURL = __bind(this._getSaveAttachmentURL, this);
        this._getOrderFormURLWithId = __bind(this._getOrderFormURLWithId, this);
        this._getOrderFormURL = __bind(this._getOrderFormURL, this);
        this._getOrderFormIdFromURL = __bind(this._getOrderFormIdFromURL, this);
        this._getOrderFormIdFromCookie = __bind(this._getOrderFormIdFromCookie, this);
        this._getOrderFormId = __bind(this._getOrderFormId, this);
        this.replaceSKU = __bind(this.replaceSKU, this);
        this.getChangeToAnonymousUserURL = __bind(this.getChangeToAnonymousUserURL, this);
        this.removeAccountId = __bind(this.removeAccountId, this);
        this.clearMessages = __bind(this.clearMessages, this);
        this.getOrders = __bind(this.getOrders, this);
        this.startTransaction = __bind(this.startTransaction, this);
        this.getProfileByEmail = __bind(this.getProfileByEmail, this);
        this.getAddressInformation = __bind(this.getAddressInformation, this);
        this.simulateShipping = __bind(this.simulateShipping, this);
        this.calculateShipping = __bind(this.calculateShipping, this);
        this.removeGiftRegistry = __bind(this.removeGiftRegistry, this);
        this.removeDiscountCoupon = __bind(this.removeDiscountCoupon, this);
        this.setCustomData = __bind(this.setCustomData, this);
        this.addDiscountCoupon = __bind(this.addDiscountCoupon, this);
        this.removeBundleItemAttachment = __bind(this.removeBundleItemAttachment, this);
        this.addBundleItemAttachment = __bind(this.addBundleItemAttachment, this);
        this.removeItemAttachment = __bind(this.removeItemAttachment, this);
        this.addItemAttachment = __bind(this.addItemAttachment, this);
        this.removeManualPrice = __bind(this.removeManualPrice, this);
        this.setManualPrice = __bind(this.setManualPrice, this);
        this.changeItemsOrdination = __bind(this.changeItemsOrdination, this);
        this.cloneItem = __bind(this.cloneItem, this);
        this.removeAllItems = __bind(this.removeAllItems, this);
        this.removeItems = __bind(this.removeItems, this);
        this.updateItems = __bind(this.updateItems, this);
        this.addToCart = __bind(this.addToCart, this);
        this.removeOffering = __bind(this.removeOffering, this);
        this.addOffering = __bind(this.addOffering, this);
        this.addOfferingWithInfo = __bind(this.addOfferingWithInfo, this);
        this.updateSelectableGifts = __bind(this.updateSelectableGifts, this);
        this.finishTransaction = __bind(this.finishTransaction, this);
        this.sendLocale = __bind(this.sendLocale, this);
        this.sendAttachment = __bind(this.sendAttachment, this);
        this.getOrderForm = __bind(this.getOrderForm, this);
        this._updateOrderForm = __bind(this._updateOrderForm, this);
        this._broadcastOrderFormUnlessPendingRequests = __bind(this._broadcastOrderFormUnlessPendingRequests, this);
        this._decreasePendingRequests = __bind(this._decreasePendingRequests, this);
        this._increasePendingRequests = __bind(this._increasePendingRequests, this);
        this._cacheOrderForm = __bind(this._cacheOrderForm, this);
        if (options.hostURL) {
          HOST_URL = options.hostURL;
        }
        if (options.ajax) {
          this.ajax = options.ajax;
        } else if (window.AjaxQueue) {
          this.ajax = window.AjaxQueue($.ajax);
        } else {
          this.ajax = $.ajax;
        }
        this.promise = options.promise || $.when;
        this.CHECKOUT_ID = 'checkout';
        this.orderForm = void 0;
        this.orderFormId = void 0;
        this._pendingRequestCounter = 0;
        this._urlToRequestMap = {};
        this._allOrderFormSections = ['items', 'totalizers', 'clientProfileData', 'shippingData', 'paymentData', 'sellers', 'messages', 'marketingData', 'clientPreferencesData', 'storePreferencesData', 'giftRegistryData', 'ratesAndBenefitsData', 'openTextField', 'commercialConditionData', 'customData'];
      }
  
      /*
      PRIVATE METHODS
      */
  
  
      Checkout.prototype._cacheOrderForm = function(data) {
        this.orderFormId = data.orderFormId;
        return this.orderForm = data;
      };
  
      Checkout.prototype._increasePendingRequests = function(options) {
        this._pendingRequestCounter++;
        return $(window).trigger(events.REQUEST_BEGIN, [options]);
      };
  
      Checkout.prototype._decreasePendingRequests = function() {
        this._pendingRequestCounter--;
        return $(window).trigger(events.REQUEST_END, arguments);
      };
  
      Checkout.prototype._broadcastOrderFormUnlessPendingRequests = function(orderForm) {
        if (this._pendingRequestCounter !== 0) {
          return;
        }
        return $(window).trigger(events.ORDER_FORM_UPDATED, [orderForm]);
      };
  
      Checkout.prototype._orderFormHasExpectedSections = function(orderForm, sections) {
        var section, _i, _len;
        if (!orderForm || !orderForm instanceof Object) {
          return false;
        }
        for (_i = 0, _len = sections.length; _i < _len; _i++) {
          section = sections[_i];
          if (!orderForm[section]) {
            return false;
          }
        }
        return true;
      };
  
      Checkout.prototype._updateOrderForm = function(options) {
        var xhr, _ref,
          _this = this;
        if (!(options != null ? options.url : void 0)) {
          throw new Error("options.url is required when sending request");
        }
        options.type || (options.type = 'POST');
        options.contentType || (options.contentType = 'application/json; charset=utf-8');
        options.dataType || (options.dataType = 'json');
        this._increasePendingRequests(options);
        xhr = this.ajax(options);
        if ((_ref = this._urlToRequestMap[options.url]) != null) {
          _ref.abort();
        }
        this._urlToRequestMap[options.url] = xhr;
        xhr.always(function() {
          return delete _this._urlToRequestMap[options.url];
        });
        xhr.always(this._decreasePendingRequests);
        xhr.done(this._cacheOrderForm);
        xhr.done(this._broadcastOrderFormUnlessPendingRequests);
        return xhr;
      };
  
      /*
      PUBLIC METHODS
      */
  
  
      Checkout.prototype.getOrderForm = function(expectedFormSections) {
        var checkoutRequest, xhr;
        if (expectedFormSections == null) {
          expectedFormSections = this._allOrderFormSections;
        }
        if (this._orderFormHasExpectedSections(this.orderForm, expectedFormSections)) {
          return this.promise(this.orderForm);
        } else {
          checkoutRequest = {
            expectedOrderFormSections: expectedFormSections
          };
          xhr = this.ajax({
            url: this._getOrderFormURLWithId(),
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(checkoutRequest)
          });
          xhr.done(this._cacheOrderForm);
          return xhr.done(this._broadcastOrderFormUnlessPendingRequests);
        }
      };
  
      Checkout.prototype.sendAttachment = function(attachmentId, attachment, expectedOrderFormSections) {
        var d;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        if (attachmentId === void 0 || attachment === void 0) {
          d = $.Deferred();
          d.reject("Invalid arguments");
          return d.promise();
        }
        attachment['expectedOrderFormSections'] = expectedOrderFormSections;
        return this._updateOrderForm({
          url: this._getSaveAttachmentURL(attachmentId),
          data: JSON.stringify(attachment)
        });
      };
  
      Checkout.prototype.sendLocale = function(locale) {
        if (locale == null) {
          locale = 'pt-BR';
        }
        return this.sendAttachment('clientPreferencesData', {
          locale: locale
        }, []);
      };
  
      Checkout.prototype.finishTransaction = function(orderGroupId, expectedOrderFormSections) {
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        return this._updateOrderForm({
          url: this._getFinishTransactionURL(orderGroupId)
        });
      };
  
      Checkout.prototype.updateSelectableGifts = function(list, selectedGifts, expectedOrderFormSections) {
        var updateSelectableGiftsRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        updateSelectableGiftsRequest = {
          id: list,
          selectedGifts: selectedGifts,
          expectedOrderFormSections: expectedOrderFormSections
        };
        return this._updateOrderForm({
          url: this._getUpdateSelectableGifts(list),
          data: JSON.stringify(updateSelectableGiftsRequest)
        });
      };
  
      Checkout.prototype.addOfferingWithInfo = function(offeringId, offeringInfo, itemIndex, expectedOrderFormSections) {
        var updateItemsRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        updateItemsRequest = {
          id: offeringId,
          info: offeringInfo,
          expectedOrderFormSections: expectedOrderFormSections
        };
        return this._updateOrderForm({
          url: this._getAddOfferingsURL(itemIndex),
          data: JSON.stringify(updateItemsRequest)
        });
      };
  
      Checkout.prototype.addOffering = function(offeringId, itemIndex, expectedOrderFormSections) {
        return this.addOfferingWithInfo(offeringId, null, itemIndex, expectedOrderFormSections);
      };
  
      Checkout.prototype.removeOffering = function(offeringId, itemIndex, expectedOrderFormSections) {
        var updateItemsRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        updateItemsRequest = {
          Id: offeringId,
          expectedOrderFormSections: expectedOrderFormSections
        };
        return this._updateOrderForm({
          url: this._getRemoveOfferingsURL(itemIndex, offeringId),
          data: JSON.stringify(updateItemsRequest)
        });
      };
  
      Checkout.prototype.addToCart = function(items, expectedOrderFormSections, salesChannel) {
        var addToCartRequest, salesChannelQueryString;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        addToCartRequest = {
          orderItems: items,
          expectedOrderFormSections: expectedOrderFormSections
        };
        salesChannelQueryString = '';
        if (salesChannel) {
          salesChannelQueryString = '?sc=' + salesChannel;
        }
        return this._updateOrderForm({
          url: this._getAddToCartURL() + salesChannelQueryString,
          data: JSON.stringify(addToCartRequest)
        });
      };
  
      Checkout.prototype.updateItems = function(items, expectedOrderFormSections, splitItem) {
        var updateItemsRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        if (splitItem == null) {
          splitItem = true;
        }
        updateItemsRequest = {
          orderItems: items,
          expectedOrderFormSections: expectedOrderFormSections,
          noSplitItem: !splitItem
        };
        return this._updateOrderForm({
          url: this._getUpdateItemURL(),
          data: JSON.stringify(updateItemsRequest)
        });
      };
  
      Checkout.prototype.removeItems = function(items, expectedOrderFormSections) {
        var i, item, itemsToRemove, _i, _len;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        if (items && items.length === 0) {
          return this.getOrderForm(expectedOrderFormSections);
        }
        itemsToRemove = [];
        for (i = _i = 0, _len = items.length; _i < _len; i = ++_i) {
          item = items[i];
          itemsToRemove.push({
            index: item.index,
            quantity: 0
          });
        }
        return this.updateItems(itemsToRemove, expectedOrderFormSections);
      };
  
      Checkout.prototype.removeAllItems = function(expectedOrderFormSections) {
        var _this = this;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        return this.getOrderForm(['items']).then(function(orderForm) {
          var i, item, items, itemsToRemove, _i, _len;
          items = orderForm.items;
          if (items && items.length === 0) {
            return orderForm;
          }
          itemsToRemove = [];
          for (i = _i = 0, _len = items.length; _i < _len; i = ++_i) {
            item = items[i];
            itemsToRemove.push({
              index: i,
              quantity: 0
            });
          }
          return _this.updateItems(itemsToRemove, expectedOrderFormSections);
        });
      };
  
      Checkout.prototype.cloneItem = function(itemIndex, newItemsOptions, expectedFormSections) {
        if (expectedFormSections == null) {
          expectedFormSections = this._allOrderFormSections;
        }
        return this._updateOrderForm({
          url: this._getCloneItemURL(itemIndex),
          data: JSON.stringify(newItemsOptions)
        });
      };
  
      Checkout.prototype.changeItemsOrdination = function(criteria, ascending, expectedOrderFormSections) {
        var changeItemsOrdinationRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        changeItemsOrdinationRequest = {
          criteria: criteria,
          ascending: ascending,
          expectedOrderFormSections: expectedOrderFormSections
        };
        return this._updateOrderForm({
          url: this._getChangeOrdinationURL(),
          data: JSON.stringify(changeItemsOrdinationRequest)
        });
      };
  
      Checkout.prototype.setManualPrice = function(itemIndex, manualPrice) {
        var setManualPriceRequest;
        setManualPriceRequest = {
          price: manualPrice
        };
        return this._updateOrderForm({
          url: this._manualPriceURL(itemIndex),
          type: 'PUT',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: JSON.stringify(setManualPriceRequest)
        });
      };
  
      Checkout.prototype.removeManualPrice = function(itemIndex) {
        return this._updateOrderForm({
          url: this._manualPriceURL(itemIndex),
          type: 'DELETE',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json'
        });
      };
  
      Checkout.prototype.addItemAttachment = function(itemIndex, attachmentName, content, expectedFormSections, splitItem) {
        var dataRequest;
        if (expectedFormSections == null) {
          expectedFormSections = this._allOrderFormSections;
        }
        if (splitItem == null) {
          splitItem = true;
        }
        dataRequest = {
          content: content,
          expectedOrderFormSections: expectedFormSections,
          noSplitItem: !splitItem
        };
        return this._updateOrderForm({
          url: this._getItemAttachmentURL(itemIndex, attachmentName),
          data: JSON.stringify(dataRequest)
        });
      };
  
      Checkout.prototype.removeItemAttachment = function(itemIndex, attachmentName, content, expectedFormSections) {
        var dataRequest;
        if (expectedFormSections == null) {
          expectedFormSections = this._allOrderFormSections;
        }
        dataRequest = {
          content: content,
          expectedOrderFormSections: expectedFormSections
        };
        return this._updateOrderForm({
          url: this._getItemAttachmentURL(itemIndex, attachmentName),
          type: 'DELETE',
          data: JSON.stringify(dataRequest)
        });
      };
  
      Checkout.prototype.addBundleItemAttachment = function(itemIndex, bundleItemId, attachmentName, content, expectedFormSections) {
        var dataRequest;
        if (expectedFormSections == null) {
          expectedFormSections = this._allOrderFormSections;
        }
        dataRequest = {
          content: content,
          expectedOrderFormSections: expectedFormSections
        };
        return this._updateOrderForm({
          url: this._getBundleItemAttachmentURL(itemIndex, bundleItemId, attachmentName),
          data: JSON.stringify(dataRequest)
        });
      };
  
      Checkout.prototype.removeBundleItemAttachment = function(itemIndex, bundleItemId, attachmentName, content, expectedFormSections) {
        var dataRequest;
        if (expectedFormSections == null) {
          expectedFormSections = this._allOrderFormSections;
        }
        dataRequest = {
          content: content,
          expectedOrderFormSections: expectedFormSections
        };
        return this._updateOrderForm({
          url: this._getBundleItemAttachmentURL(itemIndex, bundleItemId, attachmentName),
          type: 'DELETE',
          data: JSON.stringify(dataRequest)
        });
      };
  
      Checkout.prototype.addDiscountCoupon = function(couponCode, expectedOrderFormSections) {
        var couponCodeRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        couponCodeRequest = {
          text: couponCode,
          expectedOrderFormSections: expectedOrderFormSections
        };
        return this._updateOrderForm({
          url: this._getAddCouponURL(),
          data: JSON.stringify(couponCodeRequest)
        });
      };
  
      Checkout.prototype.setCustomData = function(params) {
        var customData;
        customData = {
          value: params.value
        };
        return this._updateOrderForm({
          type: 'PUT',
          url: this._getCustomDataUrl({
            app: params.app,
            field: params.field
          }),
          data: JSON.stringify(customData)
        });
      };
  
      Checkout.prototype.removeDiscountCoupon = function(expectedOrderFormSections) {
        return this.addDiscountCoupon('', expectedOrderFormSections);
      };
  
      Checkout.prototype.removeGiftRegistry = function(expectedFormSections) {
        var checkoutRequest;
        if (expectedFormSections == null) {
          expectedFormSections = this._allOrderFormSections;
        }
        checkoutRequest = {
          expectedOrderFormSections: expectedFormSections
        };
        return this._updateOrderForm({
          url: this._getRemoveGiftRegistryURL(),
          data: JSON.stringify(checkoutRequest)
        });
      };
  
      Checkout.prototype.calculateShipping = function(address) {
        return this.sendAttachment('shippingData', {
          address: address
        });
      };
  
      Checkout.prototype.simulateShipping = function() {
        var country, dataRequest, items, orderFormId, postalCode, salesChannel, salesChannelQueryString, shippingData, _ref, _ref1, _ref2;
        dataRequest = null;
        _ref = [arguments[2], arguments[3]], country = _ref[0], salesChannel = _ref[1];
        if (Array.isArray(arguments[0])) {
          console.warn("Calling simulateShipping with a list of items and postal code is deprecated.\n" + "Call it with shippingData and orderFormId instead.");
          _ref1 = [arguments[0], arguments[1]], items = _ref1[0], postalCode = _ref1[1];
          dataRequest = {
            items: items,
            postalCode: postalCode,
            country: country
          };
        } else {
          _ref2 = [arguments[0], arguments[1]], shippingData = _ref2[0], orderFormId = _ref2[1];
          dataRequest = {
            shippingData: shippingData,
            orderFormId: orderFormId,
            country: country
          };
        }
        salesChannelQueryString = '';
        if (salesChannel) {
          salesChannelQueryString = '?sc=' + salesChannel;
        }
        return this.ajax({
          url: this._getSimulationURL() + salesChannelQueryString,
          type: 'POST',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: JSON.stringify(dataRequest)
        });
      };
  
      Checkout.prototype.getAddressInformation = function(address) {
        return this.ajax({
          url: this._getPostalCodeURL(address.postalCode, address.country),
          type: 'GET',
          timeout: 20000
        });
      };
  
      Checkout.prototype.getProfileByEmail = function(email, salesChannel) {
        if (salesChannel == null) {
          salesChannel = 1;
        }
        return this.ajax({
          url: this._getProfileURL(),
          type: 'GET',
          data: {
            email: email,
            sc: salesChannel
          }
        });
      };
  
      Checkout.prototype.startTransaction = function(value, referenceValue, interestValue, savePersonalData, optinNewsLetter, expectedOrderFormSections, recaptchaKey, recaptchaToken) {
        var transactionRequest;
        if (savePersonalData == null) {
          savePersonalData = false;
        }
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        transactionRequest = {
          referenceId: this._getOrderFormId(),
          savePersonalData: savePersonalData,
          optinNewsLetter: optinNewsLetter,
          value: value,
          referenceValue: referenceValue,
          interestValue: interestValue,
          expectedOrderFormSections: expectedOrderFormSections,
          recaptchaKey: recaptchaKey,
          recaptchaToken: recaptchaToken
        };
        return this._updateOrderForm({
          url: this._startTransactionURL(),
          data: JSON.stringify(transactionRequest)
        });
      };
  
      Checkout.prototype.getOrders = function(orderGroupId) {
        return this.ajax({
          url: this._getOrdersURL(orderGroupId),
          type: 'GET',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json'
        });
      };
  
      Checkout.prototype.clearMessages = function(expectedOrderFormSections) {
        var clearMessagesRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        clearMessagesRequest = {
          expectedOrderFormSections: expectedOrderFormSections
        };
        return this.ajax({
          url: this._getOrderFormURL() + '/messages/clear',
          type: 'POST',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: JSON.stringify(clearMessagesRequest)
        });
      };
  
      Checkout.prototype.removeAccountId = function(accountId, expectedOrderFormSections) {
        var removeAccountIdRequest;
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        removeAccountIdRequest = {
          expectedOrderFormSections: expectedOrderFormSections
        };
        return this._updateOrderForm({
          url: this._getOrderFormURL() + '/paymentAccount/' + accountId + '/remove',
          data: JSON.stringify(removeAccountIdRequest)
        });
      };
  
      Checkout.prototype.getChangeToAnonymousUserURL = function() {
        return HOST_URL + '/checkout/changeToAnonymousUser/' + this._getOrderFormId();
      };
  
      Checkout.prototype.getLogoutURL = Checkout.prototype.getChangeToAnonymousUserURL;
  
      Checkout.prototype.replaceSKU = function(items, expectedOrderFormSections, splitItem) {
        if (expectedOrderFormSections == null) {
          expectedOrderFormSections = this._allOrderFormSections;
        }
        if (splitItem == null) {
          splitItem = true;
        }
        return this._updateOrderForm({
          url: this._getAddToCartURL(),
          type: 'PATCH',
          data: JSON.stringify({
            "orderItems": items,
            "expectedOrderFormSections": expectedOrderFormSections,
            "noSplitItem": !splitItem
          })
        });
      };
  
      Checkout.prototype._getOrderFormId = function() {
        return this._getOrderFormIdFromURL() || this.orderFormId || this._getOrderFormIdFromCookie() || '';
      };
  
      Checkout.prototype._getOrderFormIdFromCookie = function() {
        var COOKIE_NAME, COOKIE_ORDER_FORM_ID_KEY, cookie;
        COOKIE_NAME = 'checkout.vtex.com';
        COOKIE_ORDER_FORM_ID_KEY = '__ofid';
        cookie = readCookie(COOKIE_NAME);
        if (cookie === void 0 || cookie === '') {
          return void 0;
        }
        return readSubcookie(cookie, COOKIE_ORDER_FORM_ID_KEY);
      };
  
      Checkout.prototype._getOrderFormIdFromURL = function() {
        return urlParam('orderFormId');
      };
  
      Checkout.prototype._getBaseOrderFormURL = function() {
        return HOST_URL + '/api/checkout/pub/orderForm';
      };
  
      Checkout.prototype._getOrderFormURL = function() {
        var id;
        id = this._getOrderFormId();
        if (id === '') {
          throw new Error("This method requires an OrderForm. Use getOrderForm beforehand.");
        }
        return "" + (this._getBaseOrderFormURL()) + "/" + id;
      };
  
      Checkout.prototype._getOrderFormURLWithId = function() {
        var id;
        id = this._getOrderFormId();
        if (id) {
          return "" + (this._getBaseOrderFormURL()) + "/" + id;
        } else {
          return this._getBaseOrderFormURL();
        }
      };
  
      Checkout.prototype._getSaveAttachmentURL = function(attachmentId) {
        return this._getOrderFormURL() + '/attachments/' + attachmentId;
      };
  
      Checkout.prototype._getAddOfferingsURL = function(itemIndex) {
        return this._getOrderFormURL() + '/items/' + itemIndex + '/offerings';
      };
  
      Checkout.prototype._getRemoveOfferingsURL = function(itemIndex, offeringId) {
        return this._getOrderFormURL() + '/items/' + itemIndex + '/offerings/' + offeringId + '/remove';
      };
  
      Checkout.prototype._getBundleItemAttachmentURL = function(itemIndex, bundleItemId, attachmentName) {
        return this._getOrderFormURL() + '/items/' + itemIndex + '/bundles/' + bundleItemId + '/attachments/' + attachmentName;
      };
  
      Checkout.prototype._getItemAttachmentURL = function(itemIndex, attachmentName) {
        return this._getOrderFormURL() + '/items/' + itemIndex + '/attachments/' + attachmentName;
      };
  
      Checkout.prototype._getChangeOrdinationURL = function() {
        return this._getOrderFormURL() + '/itemsOrdination';
      };
  
      Checkout.prototype._getCustomDataUrl = function(params) {
        return this._getOrderFormURL() + '/customData/' + params.app + '/' + params.field;
      };
  
      Checkout.prototype._getAddCouponURL = function() {
        return this._getOrderFormURL() + '/coupons';
      };
  
      Checkout.prototype._startTransactionURL = function() {
        return this._getOrderFormURL() + '/transaction';
      };
  
      Checkout.prototype._getUpdateItemURL = function() {
        return this._getOrderFormURL() + '/items/update/';
      };
  
      Checkout.prototype._getCloneItemURL = function(itemIndex) {
        return this._getOrderFormURL() + '/items/' + itemIndex + '/clone';
      };
  
      Checkout.prototype._getUpdateSelectableGifts = function(list) {
        return this._getOrderFormURL() + '/selectable-gifts/' + list;
      };
  
      Checkout.prototype._getRemoveGiftRegistryURL = function() {
        return this._getBaseOrderFormURL() + ("/giftRegistry/" + (this._getOrderFormId()) + "/remove");
      };
  
      Checkout.prototype._getAddToCartURL = function() {
        return this._getOrderFormURL() + '/items';
      };
  
      Checkout.prototype._manualPriceURL = function(itemIndex) {
        return this._getOrderFormURL() + '/items/' + itemIndex + '/price';
      };
  
      Checkout.prototype._getOrdersURL = function(orderGroupId) {
        return HOST_URL + '/api/checkout/pub/orders/order-group/' + orderGroupId;
      };
  
      Checkout.prototype._getSimulationURL = function() {
        return HOST_URL + '/api/checkout/pub/orderForms/simulation';
      };
  
      Checkout.prototype._getPostalCodeURL = function(postalCode, countryCode) {
        if (postalCode == null) {
          postalCode = '';
        }
        if (countryCode == null) {
          countryCode = 'BRA';
        }
        return HOST_URL + '/api/checkout/pub/postal-code/' + countryCode + '/' + postalCode;
      };
  
      Checkout.prototype._getProfileURL = function() {
        return HOST_URL + '/api/checkout/pub/profiles/';
      };
  
      Checkout.prototype._getGatewayCallbackURL = function() {
        return HOST_URL + '/checkout/gatewayCallback/{0}/{1}/{2}';
      };
  
      Checkout.prototype._getFinishTransactionURL = function(orderGroupId) {
        return HOST_URL + '/api/checkout/pub/gatewayCallback/' + orderGroupId;
      };
  
      return Checkout;
  
    })();
  
    window.vtexjs || (window.vtexjs = {});
  
    window.vtexjs.Checkout = Checkout;
  
    window.vtexjs.checkout = new window.vtexjs.Checkout();
  
  }).call(this);
  