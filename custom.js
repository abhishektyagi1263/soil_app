$(function(){
var districtOptions;
$.getJSON('MHDistricts.json',function(result){
		$.each(result, function(i,district) {
				//<option value='districtName'>districtName</option>
				districtOptions+="<option value='"
				+district.name+
				"'>"
				+district.name+
				"</option>";
				 });
				 $('#district').html(districtOptions);
});


});
