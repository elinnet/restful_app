

var userListData = [];

$(document).ready(function(){
  populateTable();
	$('#userList').on('click', 'td a.linkshowuser', showUserInfo);
});

function populateTable(){
  var tableContent = '';

	$.getJSON('/users/userlist', function(data){
	  userListData = data;
	  $.each(data, function(){
		  tableContent += '<tr>';
		  tableContent += '<td><a href="#" class="linkshowuser" rel="' +
			                 this.username + '" title="Show details">' +
											 this.username + '</td>';
		  tableContent += '<td>' + this.email + '</td>';
		  tableContent += '<td><a href="#" class="linkdeleteuser" rel="' +
			                 this._id + '">delete</a></td>';
		  tableContent += '</tr>';
	  });
		$('#userList table tbody').html(tableContent);
	});
}

function showUserInfo(event){
  event.preventDefault();
	var thisUser = $(this).attr('rel');
	var arrayPosition = userListData.map(function(arrayItem){
	  return arrayItem.username;
	}).indexOf(thisUser);


    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);


}
