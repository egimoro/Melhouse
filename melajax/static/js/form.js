

    $('#getHouses').bind('click', ()=>{
        loadData();
        
        alert('Here are the current houses');

        
    });


  $('#btnAdd').bind('click', (e) =>{
      e.preventDefault();
    var formData = {
        seller: $('#id_seller').val(),

        rooms: $('#id_rooms').val(),
        house_type: $('#id_house_type').val(),
        price: $('#id_price').val(),
        method: $('#id_method').val(),
        date: $('#id_date').val()


    };

    $.ajax({
        headers: {'X-CSRFToken': csrftoken},
        url: '/house/add/',
        data: formData,
        type: 'POST',
        dataType: 'json',
        success: (data) =>{
            console.log(data);
            loadData();
            alert('House successfully added');
            $('#myModal').modal('hide');
        }
        

    });
});


 getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

getDetail = (id) =>{

            tr_id = '#house-' + id;

            seller = $(tr_id).find('.t_seller').text();
            rooms = $(tr_id).find('.t_rooms').text()
            house_type = $(tr_id).find('.t_house_type').text();
            price = $(tr_id).find('.t_price').text();
            method = $(tr_id).find('.t_method').text();
            date = $(tr_id).find('.t_date').text();

            $('#id_formhse').val(id);
            $('#id_seller').val(seller);
            $('#id_rooms').val(rooms);
            $('#id_price').val(price);
            $('#id_method').val(method);
            $('#id_date').val(date);
            $('#id_house_type').val(house_type);
   
            $('#myModal').modal('show');
            $('#btnAdd').hide();
            $('#btnUpdate').show();

        

    

};

loadData = () =>{
    $.ajax({

        url: '/house/',
        type:'GET',
        dataType: 'json',
        success: (data) =>{
            let rows = '';
            $.each(data.house_list, (k, house) =>{
                rows += `
                    <tr id="house-${house.id}">
                        <td>${house.id}</td>
                        <td class="t_seller">${house.seller}</td>
                        <td class="t_rooms">${house.rooms}</td>
                        <td class="t_house_type">${house.house_type}</td>
                        <td class="t_price">${house.price}</td>
                        <td class="t_method">${house.method}</td>
                        <td class="t_date">${house.date}</td>
                        <td>
                            <button  onclick="getDetail(${house.id})">Edit</button>
                        </td>
                    </tr>
                
                `;

            });
            
            $('#houseTable tbody').append(rows);
            console.log(data);
            
        }

    });

}


Update = () =>{

    var id = $('#id_formhse').val();
    
    var formData = {
        seller: $('#id_seller').val(),
        

        rooms: $('#id_rooms').val(),
        house_type: $('#id_house_type').val(),
        price: $('#id_price').val(),
        method: $('#id_method').val(),
        date: $('#id_date').val()


    };

    $.ajax({
        headers: {'X-CSRFToken': csrftoken},
        url: '/house/update/' +id,
        data: formData,
        type: 'POST',
        dataType: 'json',
        success: (data) =>{
            console.log(data);
            loadData();
            alert('House successfully updated');
            $('#myModal').modal('hide');
            $('#id_seller').val('');
            $('#id_rooms').val('');

        
        }
        

    });


}