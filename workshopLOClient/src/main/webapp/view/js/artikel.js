// The root URL for the RESTful services
var rootURL = "http://localhost:8080/workshop3LO/webresources/artikel";
addArtikel()
//var artikel = [{key: 'id '}, {key: 'naam '},
//    {key: 'prijs '}, {key: 'voorraad '}];

//// Retrieve artikel list when application starts 
//findAll();
//
// Nothing to delete in initial application state
//$('#btnDelete').hide();
//
//// Register listeners
//$('#btnSearch').click(function () {
//    search($('#searchKey').val());
//    return false;
//});
////
//// Trigger search when pressing 'Return' on search key input field
//$('#searchKey').keypress(function (e) {
//    if (e.which == 13) {
//        search($('#searchKey').val());
//        e.preventDefault();
//        return false;
//    }
//});
//
//$('#btnAdd').click(function () {
//    newArtikel();
//    return false;
//});
//
//$('#btnSave').click(function () {
//    if ($('#artikelId').val() == '')
//        addArtikel();
//    else
//        updateArtikel();
//    return false;
//});
//
//$('#btnDelete').click(function () {
//    deleteArtikel();
//    return false;
//});
//
//$('#artikelList a').live('click', function () {
//    findById($(this).data('identity'));
//});
//
//// Replace broken images with generic artikel 
//$("img").error(function () {
//    $(this).attr("src", "pics/generic.jpg");
//
//});

//function search(searchKey) {
//    if (searchKey == '')
//        findAll();
//    else
//        findByName(searchKey);
//}

//function newArtikel() {
//    $('#btnDelete').hide();
//    currentArtikel = {};
//    renderDetails(currentArtikel); // Display empty form
//}

//function findAll() {
//    console.log('findAll');
//    $.ajax({
//        type: 'GET',
//        url: rootURL,
//        dataType: "json", // data type of response
//        success: renderList,
//        error: function () {
//            console.log("Error");
//        }
//    });
//}

//function findByName(searchKey) {
//    console.log('findByName: ' + searchKey);
//    $.ajax({
//        type: 'GET',
//        url: rootURL + '/search/' + searchKey,
//        dataType: "json",
//        success: renderList
//    });
//}

//function findById(id) {
//    console.log('findById: ' + id);
//    $.ajax({
//        type: 'GET',
//        url: rootURL + '/' + id,
//        dataType: "json",
//        success: function (data) {
//            $('#btnDelete').show();
//            console.log('findById success: ' + data.name);
//            currentArtikel = data;
//            renderDetails(currentArtikel);
//        }
//    });
//}

function addArtikel() {
    //console.log('addArtikel');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: rootURL,
        dataType: "json",
        data: formToJSON(),
        success: function (data, textStatus, jqXHR) {
            alert('Artikel created successfully');
//            $('#btnDelete').show();
//            $('#artikelId').val(data.id);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('addArtikel error: ' + textStatus);
        }
    });
}

//function updateArtikel() {
//    console.log('updateArtikel');
//    $.ajax({
//        type: 'PUT',
//        contentType: 'application/json',
//        url: rootURL + '/' + $('#artikelId').val(),
//        dataType: "json",
//        data: formToJSON(),
//        success: function (data, textStatus, jqXHR) {
//            alert('Artikel updated successfully');
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            alert('updateArtikel error: ' + textStatus);
//        }
//    });
//}

//function deleteArtikel() {
//    console.log('deleteArtikel');
//    $.ajax({
//        type: 'DELETE',
//        url: rootURL + '/' + $('#artikelId').val(),
//        success: function (data, textStatus, jqXHR) {
//            alert('Artikel deleted successfully');
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            alert('deleteArtikel error');
//        }
//    });
//}

//function renderList(data) {
//     JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
//    var list = data == null ? [] : (data instanceof Array ? data : [data]);
//    $('#artikelList li').remove();
//    alert(JSON.stringify(data));
//
//    $.each(data, function (index) {
////        $('#artikelList').append('<li><a href="#" data-identity="' + artikel.naam + '">' + artikel.naam + '</a></li>');
//        $('#artikelList').append( '<tr><td>' + data[index].id+ '</td>');
//        $('#artikelList').append('<td>' + data[index].naam + '</td>');
//        $('#artikelList').append('<td>' + data[index].prijs + '</td>');
//         $('#artikelList').append('<td>' + data[index].voorraad + '</td></tr>');
//    });
//
//}

//
//function renderDetails(artikel) {
//    $('#artikelId').val(artikel.id);
//    $('#name').val(artikel.naam);
//    $('#prijs').val(artikel.prijs);
//    $('#voorraad').val(artikel.voorraad);
//
//}

// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
    var artikelId = $('#artikelId').val();
    return JSON.stringify({
        "id": artikelId == "" ? null : artikelId,
        "naam": $('#name').val(),
        "prijs": $('#prijs').val(),
        "voorraad": $('#voorraad').val(),
        "picture": currentArtikel.picture,
    });
}
