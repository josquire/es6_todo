$(document).ready( () => {
  let todos = ['Mop Floor', 'Wash Windows', 'Fold Laundry' ];

  const loadTodos = () => {
    $('#todos').empty();
    for(let todo of todos) {
      let li = `<li class='pointer card'>${todo}
        <button class='delete_item'>Delete</button>
        <button class='edit_item'>Edit</button>
        </li>`;
      $('#todos').append(li);
      $('li').on('click', function() {
        $(this).css({'text-decoration': 'line-through', 'color': 'gray'});
      });
    }
  }

  $(`#addTodo`).on('click', (e) => {
    e.preventDefault();
    let todo = $('#add').val();
    todos = [todo, ...todos];
    $('#add').val('');

    loadTodos();
  });

  loadTodos();

  $(document).on('click', '.delete_item', function (e) {
    let btn = $(e.target);
    let li = btn.parent();
    li.remove();
    $('#todos').render();

  })

// 
//   $(document).on('click', '.edit_item', function (e) {
//     e.preventDefault();
//     let bttn = $(e.target);
//     let li = btn.parent();
//     $("#editTodo").slideDown();
//     $('#edit').val(li);
//   })
// });


//ALL DONE IN es6
//have form for user to add todo item
//todo item shows up in list
//if user clicks item it gets marked complete or not complete
//have a visual indicator of complete

//BONUS
//ability to delete todos
//filter todos by complete / imcomplete / all
//edit todo name
