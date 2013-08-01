var todo = { 
	init: function() {
		$('#description').keypress(function(e) {
			if (e.keyCode == 13) {
				if (todo.add()) {
					todo.clear();
					todo.checkbox();
				}
				e.preventDefault();
			}
		});
	},
	add: function() {
		var description = $('#description').val();
		if (description != '') {
			var line = $('#line>div').clone();
			$('#todo_list').append(line);
			$('[name=todo_description]', line).text(description);
			return true;
		}
		$('#message').text('preencha a descricao');
		
	},
	clear: function() {
		$('#description').val('');
	},
	checkbox: function() {
		$('.check_todo').unbind('click');
		$('.check_todo').click( function() {
			var todo = $(this).parent();
			todo.toggleClass('checked');
		});
	},
	first: function() {
		return $('#todo_list>div.line').text().trim();
	}
}