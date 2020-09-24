

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
            window.setInterval('refresh()', 9000); 
        },
        error: (errormessage) =>{
            alert(errormessage.responseText);
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
                            <button class = "btn btn-primary"  onclick="getDetail(${house.id})">Edit</button>
                            <button class = "btn btn-danger"  onclick="Delete(${house.id})">Delete</button>
                        </td>
                    </tr>
                
                `;

            });
            
            $('#houseTable tbody').append(rows);
            console.log(data);
            
        },
        error: (errormessage) =>{
            alert(errormessage.responseText);
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
             $('#id_house_type').val('');
             $('#id_price').val('');
            $('#id_method').val('');
             $('#id_date').val('');
             window.setInterval('refresh()', 9000); 
    

        
        },
        error: (errormessage) =>{
            alert(errormessage.responseText);
        }
        

    });


}

 refresh =()=> {
    window .location.reload();
};

Delete = (id) =>{
    var ans = confirm('Are you sure you want to delete this house?');

    if (ans) {

        $.ajax({
            headers: {'X-CSRFToken': csrftoken},
            url: '/house/delete/' + id,
            type: 'POST',
            dataType: 'json',
            success: (data) =>{
                loadData();
                window.setInterval('refresh()', 2000); 
            },
            error: (errormessage) =>{
                alert(errormessage.responseText);
            }


        });
        
    };

};

$('#getLocations').bind('click', ()=>{
    loadData1();
    alert('Here are the current locations');
});


loadData1 = () =>{

    $.ajax({

        url: '/location/list/',
        type:'GET',
        dataType: 'json',
        success: (data) =>{
            let rows = '';
            $.each(data.location_list, (k, location) =>{
                rows += `
                    <tr id="location-${location.id}">
                        <td>${location.id}</td>
                        <td class="t_suburb">${location.suburb}</td>
                        <td class="t_address">${location.address}</td>
                        <td class="t_postcode">${location.postcode}</td>
                        <td class="t_regionname">${location.regionname}</td>
                        <td class="t_propertycount">${location.propertycount}</td>
                        <td class="t_distance">${location.distance}</td>
                        <td class="t_councilarea">${location.councilarea}</td>
                        <td class="t_sellerh">${location.house_id}</td>
                        <td>
                            <button class = "btn btn-primary"  onclick="getDetail1(${location.id})">Edit</button>
                            <button class = "btn btn-danger"  onclick="Delete1(${location.id})">Delete</button>
                        </td>
                    </tr>
                
                `;

            });
            
            $('#locationTable tbody').append(rows);
            console.log(data);
            
        },
        error: (errormessage) =>{
            alert(errormessage.responseText);
        }

    });

}



Update1 = () =>{

    var id = $('#id_formloc').val();
    
    var formData1 = {
        suburb: $('#id_suburb').val(),
        address: $('#id_address').val(),
        postcode: $('#id_postcode').val(),
        regionname: $('#id_regionname').val(),
        propertycount: $('#id_propertycount').val(),
        distance: $('#id_distance').val(),
        councilarea: $('#id_councilarea').val(),
        house: $('#id_house').val()
  
  
  
    };

    $.ajax({
        headers: {'X-CSRFToken': csrftoken},
        url: '/location/update/' + id,
        data: formData1,
        type: 'POST',
        dataType: 'json',
        success: (data) =>{
            console.log(data);
            loadData1();
            alert('Location successfully updated');
            $('#myModal').modal('hide');
            $('#id_suburb').val('');
            $('#id_address').val('');
            $('#id_postcode').val('');
            $('#id_regionname').val('');
            $('#id_propertycount').val('');
            $('#id_distance').val('');
            $('#id_councilarea').val('');
            $('#id_house').val('');
             window.setInterval('refresh()', 9000); 
    

        
        },
        error: (errormessage) =>{
            alert(errormessage.responseText);
        }
        

    });


}

$('#btnAdd1').bind('click', (e) =>{
    e.preventDefault();
  var formData1 = {
      suburb: $('#id_suburb').val(),
      address: $('#id_address').val(),
      postcode: $('#id_postcode').val(),
      regionname: $('#id_regionname').val(),
      propertycount: $('#id_propertycount').val(),
      distance: $('#id_distance').val(),
      councilarea: $('#id_councilarea').val(),
      house: $('#id_house').val()



  };

  $.ajax({
      headers: {'X-CSRFToken': csrftoken},
      url: '/location/add/',
      data: formData1,
      type: 'POST',
      dataType: 'json',
      success: (data) =>{
          console.log(data);
          loadData1();
          alert('Location successfully added');
          $('#myModal').modal('hide');
          window.setInterval('refresh()', 9000); 
      },
      error: (errormessage) =>{
          alert(errormessage.responseText);
      }
      

  });
});

getDetail1 = (id) =>{
    tr_id = '#location-' + id;

    suburb = $(tr_id).find('.t_suburb').text();
    address = $(tr_id).find('.t_address').text()
    postcode = $(tr_id).find('.t_postcode').text();
    regionname = $(tr_id).find('.t_regionname').text();
    propertycount = $(tr_id).find('.t_propertycount').text();
    distance = $(tr_id).find('.t_distance').text();
    councilarea = $(tr_id).find('.t_councilarea').text();
    sellerh = $(tr_id).find('.t_sellerh').text();

    $('#id_formloc').val(id);
    $('#id_suburb').val(suburb);
    $('#id_address').val(address);
    $('#id_postcode').val(postcode);
    $('#id_regionname').val(regionname);
    $('#id_propertycount').val(propertycount);
    $('#id_distance').val(distance);
    $('#id_councilarea').val(councilarea);
    $('#id_house').val(sellerh);


    $('#myModal').modal('show');
    $('#btnAdd1').hide();
    $('#btnUpdate1').show();
}


Delete1 = (id) =>{
    var ans = confirm('Are you sure you want to delete this location?');

    if (ans) {

        $.ajax({
            headers: {'X-CSRFToken': csrftoken},
            url: '/location/delete/' + id,
            type: 'POST',
            dataType: 'json',
            success: (data) =>{
                loadData();
                window.setInterval('refresh()', 2000); 
            },
            error: (errormessage) =>{
                alert(errormessage.responseText);
            }


        });
        
    };

};

