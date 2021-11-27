/**
 * Desciption: Form đăng ký
 */
function formRegister(form) {
	var idForm 	= "#" + form;
	var urlAjax = "/form/add";
	var textBtn = $(idForm + ' .btnSuccess .btn').val();
		
	$.ajax({
		type: "POST",
		url: urlAjax,
		data: $(idForm).serialize(),
		dataType: "json",
		cache: false,
		beforeSend: function() {
			$('body').append('<div class="page-loading"><div class="loader"></div></div>');
			$(idForm + ' .form-group').removeClass('has-error');
			$(idForm + ' .alert').remove();
		},
		success: function(result){
			if(result.error) {
				$.each(result.error, function(key, value) {
					$(idForm + ' #input-'+ key).addClass('has-error');
				})
				$(idForm + ' .btnSuccess').prepend('<div class="alert alert-danger">Vui lòng điền đầy đủ các thông tin bắt buộc</div>');
			} else {
				var frmRegister = localStorage.getItem("frmRegister") ? JSON.parse(localStorage.getItem("frmRegister")) : {};
				frmRegister[form] = 1;
				localStorage.setItem("frmRegister", JSON.stringify(frmRegister));

				if(form == 'frmTuvan') {
					$(idForm).html('<div class="alert alert-success" style="min-height: 160px; margin-bottom: 0;">Thông tin của bạn đã được gửi thành công</div>');
					$('#box_tuvan .col-3').removeAttr('onclick');
				} else {
					$(idForm + ' .btnSuccess').prepend('<div class="alert alert-success">Thông tin của bạn đã được gửi thành công</div>');
				}
				$(idForm + ' .form-control').val('');
				
				modalHelper({content: 'Cảm ơn bạn đã đăng ký, Win Smile sẽ liên hệ lại với bạn sớm nhất!'});
				window.location = '/thankyou';
			}
			
			$('body .page-loading').remove();
		}
	});
}

/**
 * Desciption: Hiển thị số lượng sản phẩm trong giỏ hàng
 */
function viewCart(){
	$.ajax({
		type: "POST",
		url: '/product/report',
		dataType: "json",
		cache: false,
		beforeSend: function() {
			 
		},
		success: function(result){
			if(result.total_amount) {
				$('#box_cart').removeClass('hidden');
			}
			$('#box_cart .cart_amount').html(result.total_amount);
			$('#box_cart .cart_price').html(result.total_price + ' VNĐ');
		}
	});
}
// viewCart();

/**
 * Desciption: Play video
 */
function playVideo(data) {
	$(data).html('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ $(data).attr('data-id') +'?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>')
}

/**
 * Desciption: Đếm số ký tự
 */
function countLeft(field, count, max) {
	if ($(field).val().length > max)
		$(field).val($(field).val().substring(0, max));
	else
		$(count + ' .value').html(max - $(field).val().length);
}

/**
 * Desciption: Tìm kiếm
 */
function popupSearch(){
	var xhtml = '<div class="popup_search">'+ 
			        '<div class="popup_wrapper">'+ 
					    '<div class="popup_content">'+ 
					        '<form action="/search">'+ 
					            '<div class="form-group">'+ 
					                '<div class="input-group">'+ 
					                    '<input name="keyword" type="text" class="form-control" placeholder="Tìm kiếm" value="">'+ 
					                    '<div class="input-group-addon"><button type="submit"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button></div>'+ 
					                '</div>'+ 
					            '</div>'+ 
					        '</form>'+ 
					    '</div>'+ 
					    '<a href="javascript:;" class="popup_close" onclick="popupSearchClose()">Close <i class="fa fa-close" aria-hidden="true"></i></a>'+ 
					'</div>'+ 
				'</div>';
	
	$('.popup_search').remove();
	$('body').append(xhtml);
}

function popupSearchClose() {
	$('.popup_search').remove();
}

function modalHelper(options = {}) {
	var name = options.name ? options.name : 'modal-info';
	var id = '#' + name;
	var title = options.title ? options.title : 'Thông báo';
	var content = options.content ? options.content : '';
	$(id).remove();
	var xhtml = `<div id="${name}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
					<div class="modal-dialog modal-sm" role="document">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title">${title}</h4>
						</div>
						<div class="modal-content">
							${content}
						</div>
						<div class="modal-footer">
							<a href="javascript:;" data-dismiss="modal" class="btn btn-default">Đóng</a>
						</div>
				  </div>
				</div>`;
	$('body').append(xhtml);
	var $modal 	= $(id);
	$modal.modal();
}

/**
 * Desciption: Nạp tất cả các function cần khởi tạo khi chạy ứng dụng
 */
$(document).ready(function() {
	$( ".datepicker" ).datepicker({
		dateFormat: 'dd/mm/yy'
	});

    $('body').on('click', '.go_box', function() {
        var box = $(this).attr('data-box');
        if($('#' + box).length) {
            var top_scroll = 0;
            top_scroll = $("#" + box).offset().top;
            $('html,body').animate({
                scrollTop: top_scroll - 60
            }, 'slow');
        }
    });

	$(window).scroll(function () {
		var boxMenu = '#box_header';
		var topPage = $(window).scrollTop();
		var topFix = 40;
		if(topPage >= topFix) {
			$(boxMenu).addClass('sticky');
		} else {
			$(boxMenu).removeClass('sticky');
		}
	});

	setTimeout(function () {
		if($('#box_popup_tuvan').length) {
			var frmRegister = localStorage.getItem("frmRegister") ? JSON.parse(localStorage.getItem("frmRegister")) : {};
			if(!frmRegister['frmTuvanPopup']) {
				$('#box_popup_tuvan').show();
			}
		}
	}, 3000);

	$('#box_popup_tuvan .close_popup').click(function () {
		$('#box_popup_tuvan').hide();
	});
	$('#box_controls_mobile .btn_register').click(function () {
		$('#box_popup_tuvan').show();
	});
});














