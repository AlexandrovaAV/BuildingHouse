$(document).ready(function () {
    // animated wow
    new WOW(
        {
            animateConfig: {"prefix": "animate__", "animationPrefix": "animate_"},
            boxClass: 'wow',
            offset: 0,
            mobile: false,
            live: true,
        }).init();

    //popup-tour
    let tourAction = $('#tour-action');
    let popupTour = $('.popup-tour');
    let popupInfo = $('.popup-tour-info');
    let popupClose = $('#popup-tour-close');
    let body = $('body');

    tourAction.click(() => {
        popupTour.css('transform', 'scale(1)');
        popupInfo.css({
            'transform': 'scale(1)',
        });
    });

    function closePopup() {
        popupInfo.css({
            'transform': 'scale(0)',
        });
        setTimeout(function () {
            popupTour.css({
                'transform': 'scale(0)',
            });
        }, 700);
    }

    popupTour.click((e) => {
        closePopup();
    });

    popupInfo.click((e) => {
        e.stopPropagation();
    });

    popupClose.click(() => {
        closePopup();
    });


    //burger-menu
    let burger = $('#burger');
    let burgerMenu = $('.burger-menu');
    let burgerClose = $('#burger-menu-close');
    let burgerItem = $('.burger-menu-item');
    let burgerMenuTitle = $('.burger-menu-title');
    let burgerMenuSocialNetworks = $('.burger-menu-social-networks');
    let burgerMenuMobile = $('.burger-menu .mobile');
    let burgerMenuPhone = $('.burger-menu .mobile .phone');
    let burgerMenuCall = $('.burger-menu .mobile .call')

    // массив с id для пунктов меню
    let arrBurgerItemId = ['#buildings', '#technologies', '#projects', '#steps', '#guarantees', '#buildings'];

    // настройка анимации для пунктов меню
    burger.click(() => {
        burgerMenu.css({
            'transform': 'translateX(0px)',
            'transition': 'transform 1.2s ease-out',
        });
        setTimeout(function () {
            burgerMenuTitle.css({
                'opacity': '1',
            });
        }, 1280);
        setTimeout(function () {
            burgerItem.eq(0).css({
                'opacity': '1',
            });
        }, 1300);
        setTimeout(function () {
            burgerItem.eq(1).css({
                'opacity': '1',
            });
        }, 1350);
        setTimeout(function () {
            burgerItem.eq(2).css({
                'opacity': '1',
            });
        }, 1400);
        setTimeout(function () {
            burgerItem.eq(3).css({
                'opacity': '1',
            });
        }, 1450);
        setTimeout(function () {
            burgerItem.eq(4).css({
                'opacity': '1',
            });
        }, 1500);
        setTimeout(function () {
            burgerItem.eq(5).css({
                'opacity': '1',
            });
        }, 1550);
        setTimeout(function () {
            burgerMenuSocialNetworks.css({
                'opacity': '1',
            });
            burgerMenuMobile.css({
                'opacity': '1',
            });
        }, 1600);
        setTimeout(function () {
            burgerMenuPhone.css({
                'opacity': '1',
            });
        }, 1650);
        setTimeout(function () {
            burgerMenuCall.css({
                'opacity': '1',
            });
        }, 1700);
    });

    // скролл для пунктов меню
    for (let i = 0; i <= burgerItem.length; i++) {
        burgerItem.eq(i).click(() => {
            let saveArrBurgerItemId = arrBurgerItemId[i];
            smoothScrolling($(`${saveArrBurgerItemId}`));
        });
    }

    function closeBurgerMenu() {
        burgerMenu.css({
            'transform': 'translateX(-4000px)',
            'transition': '4.3s linear',
        });
        burgerMenuTitle.css({
            'opacity': '0',
        });
        burgerItem.css({
            'opacity': '0',
        });
        burgerMenuSocialNetworks.css({
            'opacity': '0',
        });
        burgerMenuMobile.css({
            'opacity': '0',
        });
        burgerMenuPhone.css({
            'opacity': '0',
        });
        burgerMenuCall.css({
            'opacity': '0',
        });
    }

    burgerClose.click(() => {
        closeBurgerMenu();
    });

    burgerItem.click(() => {
        closeBurgerMenu();
    });

    window.onscroll = () => {
        setTimeout(function () {
            closeBurgerMenu();
        }, 1000);
    }

    //Smooth Scroll
    let btnMain = $('.btn-main');
    let consultationSection = $('#consultation');
    let btnProjects = $('.btn-projects');
    let htmlBody = $("html,body");

    function smoothScrolling(el) {
        htmlBody.animate({scrollTop: el.offset().top}, 1000);
    }

    btnMain.click(() => {
        smoothScrolling(consultationSection);
    });

    btnProjects.click(() => {
        smoothScrolling(consultationSection);
    });


    //download pdf
    let btnDownload = $('.btn-project-download');

    btnDownload.click(() => {
        let link = document.createElement('a');
        link.setAttribute('href', '../files/project home.pdf');
        link.setAttribute('download', 'project home.pdf');
        link.click();
        return false;
    });

    let btnDownloadGuarantees = $('.btn-guarantees');

    btnDownloadGuarantees.click(() => {
        let link = document.createElement('a');
        link.setAttribute('href', '../files/Dogovor.docx');
        link.setAttribute('download', 'Dogovor.docx');
        link.click();
        return false;
    });

    //more
    let projectShowMoreText = $('.projects-show-more-text');
    let projectsShowMoreImage = $('.projects-show-more-image');
    let projectDisactive = $('.project-disactive');

    projectShowMoreText.click(() => {
        if ($('.project-disactive').css('display') === 'none') {
            projectDisactive.css({
                'display': 'grid',
            });
            setTimeout(function () {
                projectDisactive.css({
                    'opacity': '1',
                });
            }, 300);
            projectShowMoreText.text('Скрыть');
            projectsShowMoreImage.css({
                'transform': 'rotate(180deg)',
            });
            htmlBody.animate({scrollTop: projectShowMoreText.offset().top - 500}, 1000);
            htmlBody.animate({scrollTop: projectDisactive.offset().top - 100}, 1000);

        } else {
            projectDisactive.css({
                'display': 'none',
            });
            projectShowMoreText.text('Посмотреть ещё 3 проекта');
            projectsShowMoreImage.css({
                'transform': 'rotate(0)',
            });
            htmlBody.animate({scrollTop: projectShowMoreText.offset().top - 500}, 1000);
        }
    });


    //magnific-popup
    $('.project-gallery a').magnificPopup({
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        },
        type: 'image'
    });


    // validate consultation
    let username = $('#username');
    let checkbox = $('#checkbox');
    let consultationCheckmark = $('.consultation-checkbox__checkmark');

    $('#phone').inputmask({"mask": "+7 (999) 999-99-99"}); // маска для телефона

    // validate consultation маска для поля "Введите имя"
    username.on("input", function () {
        $(this).val($(this).val().replace(/[^аa-яzёАA-ЯZЁ]/g, ''));
    });

    // проверка на заполнение количество цифр номера по маске
    $.validator.addMethod("checkMask", function (value, element) {
        return /\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}/g.test(value);
    });

    //validate consultation изменение цвета флажка
    function changeAttrChecked(checkbox, checkmark) {
        if (checkbox.prop('checked') === true) {
            checkmark.css('border-color', '#fff');
        }
        if (checkbox.prop('checked') === false) {
            checkmark.css('border-color', '#BB0845FF');
        }
    }

    $('.consultation-checkbox').on('change', function () {
        changeAttrChecked(checkbox, consultationCheckmark);
    });

    let consultationTitle = $('.consultation-title');
    let consultationForm = $('.consultation-form form');
    let consultationFormBlock = $('.consultation-form');

    //validate consultation валидация формы
    consultationForm.validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
            },
            phone: {
                required: true,
                checkMask: true,
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Это поле обязательно к заполнению",
                minlength: "Имя должно содержать более одного символа"
            },
            phone: {
                required: "Это поле обязательно к заполнению",
                checkMask: "Введите номер телефона полностью"
            },
            checkbox: {
                required: "",
            }
        },
        submitHandler: function (form) {
            let username = $('#username');
            let phone = $('#phone');

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {
                    name: username.val(),
                    phone: phone.val()
                }
            })
                .done(function (message) {
                    if (message.success) {
                        consultationTitle.text('Спасибо, мы свяжемся с вами в ближайшее время!');
                        consultationForm.css('display', 'none');
                        consultationFormBlock.css('justify-content', 'center');
                        setTimeout(function () {
                            consultationTitle.text('Получите индивидуальную консультацию');
                            consultationForm.css('display', 'flex');
                            username.val('');
                            phone.val('');
                        }, 5000);
                    } else {
                        alert('Ошибочка!');
                    }
                });
        },
    });

    // validate tour
    let usernameTour = $('#tourName');
    let checkboxTour = $('#checkbox-tour');
    let popupCheckmark = $('.popup-tour-checkbox__checkmark');

    $('#tourPhone').inputmask({"mask": "+7 (999) 999-99-99"});

    usernameTour.on("input", function () {
        $(this).val($(this).val().replace(/[^аa-яzёАA-ЯZЁ]/g, ''));
    });

    $('.popup-tour-checkbox').on('change', function () {
        changeAttrChecked(checkboxTour, popupCheckmark);
    });

    let popupTitle = $('.tour-info-title');
    let tourForm = $('.popup-tour-info form');
    let tourDesc = $('.tour-info-desc');
    let tourInfo = $('.tour-info');

    tourForm.validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            phone: {
                required: true,
                checkMask: true,
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно к заполнению",
                minlength: "Имя должно содержать более одного символа"
            },
            phone: {
                required: "Это поле обязательно к заполнению",
                checkMask: "Введите номер телефона полностью"
            },
            checkbox: {
                required: "",
            }
        },
        submitHandler: function (form) {
            let tourName = $('#tourName');
            let tourPhone = $('#tourPhone');

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {
                    name: tourName.val(),
                    phone: tourPhone.val()
                }
            })
                .done(function (message) {
                    if (message.success) {
                        popupTitle.text('Спасибо, мы свяжемся с вами в ближайшее время!');
                        tourDesc.css('display', 'none');
                        tourAction.css('display', 'none');
                        consultationFormBlock.css('justify-content', 'center');
                        closePopup();
                        setTimeout(function () {
                            popupTitle.text('Запишитесь на экскурсию');
                            tourInfo.css({
                                'display': 'flex',
                            });
                            tourDesc.css('display', 'block');
                            tourAction.css('display', 'flex');
                            tourName.val('');
                            tourPhone.val('');
                        }, 5000);
                    } else {
                        alert('Ошибочка!');
                    }
                });
        },
    });

    //adaptive block technologies
    let points = $('.points');
    let technoDesc = $('.technologies-description');
    if ($(window).width() <= 1024) {
        for (let i = 0; i <= points.length; i++) {
            $(`#point${i}`).on('click', function () {

                let findClasses = $(`.points .point`);
                if (findClasses.hasClass('after-class') === true) {
                    findClasses.removeClass('after-class');
                    $(`.points`).css('border-color', '#ecc66b');
                }
                $(`#point${i}`).css('border-color', '#fcedcb');
                $(`#point${i} .point`).addClass('after-class');
                for (let j = 0; j <= technoDesc.length; j++) {
                    $(`#desc${j}`).css('display', 'none');
                }
                $(`#desc${i}`).css('display', 'inline-block');
            });
        }
    } else {
        for (let j = 0; j <= technoDesc.length; j++) {
            $(`#desc${j}`).css('display', 'inline-block');
        }
    }

});