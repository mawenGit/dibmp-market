$(function(){
	$("#myform").validate({
		debug : true, // 取消表单的提交操作
		submitHandler : function(form) {
			form.submit(); // 提交表单
		},
		errorPlacement : function(error, element) {
			$("#" + $(element).attr("id").replace(".", "\\.") + "Msg").append(error);
		},
		highlight : function(element, errorClass) {
			$(element).fadeOut(1,function() {
				$(element).fadeIn(1, function() {
					$("#" + $(element).attr("id").replace(".","\\.") + "Div").attr("class","form-group has-error");
				});

			})
		},
		unhighlight : function(element, errorClass) {
			$(element).fadeOut(1,function() {
				$(element).fadeIn(1,function() {
						$("#" + $(element).attr("id").replace(".","\\.") + "Div").attr("class","form-group has-success");
				});
			})
		},
		errorClass : "text-danger",
		rules : {
			"name" : {
				required : true
			} ,
			"tid" : {
				required : true 
			},
			"stid" : {
				required : true 
			},
			"price" : {
				required : true ,
				number : true 
			},
			"weight" : {
				required : true ,
				digits : true 
			},
			"pic" : {
				required : true ,
				accept : ["jpg","png","gif","bmp"]
			},
			"note" : {
				required : true
			}
		}
	});
	$("#wiid").on("change",function(){
		wiid=$(this).val();
		if(wiid!=""){
			$.post("pages/back/admin/goods/getSubtypeByWiid.action",{"wiid":wiid},function(data){
				$("#stid").empty();
				for(var x = 0 ; x < data.length ; x++ ){
					temp = data[x];
				$("#stid").append("<option value=" + temp.stid + "> "+ temp.title + "</option>");
				}
			},"json");
			
		}else{
			$("#stid").empty();
			$("#stid").append("<option value=''>====== 请选择商品所属子分类 ======</option>");
			
		}
		
	})
	
	
	
	
})