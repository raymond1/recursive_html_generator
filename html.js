function escape_string(input_string){
  var return_string = input_string.replace(/</g, '&lt;')
  return_string = input_string.replace(/</g, '&lt;')
  return_string = return_string.replace(/>/g, '&gt;')
  return return_string
}

//tagname, array1, array 2, array3..
function convert_to_html(input_array){
  if (input_array.length == 0) return ''

  if (input_array.length == 1) return '<' + input_array[0] + '/>'

  var inner_string = ''
  for (var i = 1; i < input_array.length; i++){
    if (typeof input_array[i] == 'string'){
      inner_string += '' + escape_string(input_array[i])
    }
    else{
      inner_string += '' + convert_to_html(input_array[i])
    }
  }

  return '<' + input_array[0] + '>' + inner_string + '</' + input_array[0] + '>'
}
