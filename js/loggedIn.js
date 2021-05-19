"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
var galleryItem_1 = require("./galleryItem");
function default_1() {
    if (localStorage.username) {
        document.getElementById('loginModalButtonContainer').innerHTML = "<span>Hola, " + users_1.getUsers()[0].username + "</span>";
        document.getElementById('addGalleryItemButtonContainer').innerHTML = "<button data-toggle=\"modal\" data-target=\"#addGalleryItemModal\" class=\"btn btn-primary btn-block\">Agregar foto</button>\n                                                                                <button id=\"closeSessionButton\" class=\"btn btn-danger btn-block\">Cerrar sesi\u00F3n</button>\n                                                                                ";
        $('#closeSessionButton').on('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
        $('#addGalleryItemButton').on('click', function () {
            var imageUrl = $('#imageUrl').val();
            var title = $('#title').val();
            var date = $('#date').val();
            if (!imageUrl || !title || !date) {
                return;
            }
            var newGalleryItem = new galleryItem_1.GalleryItem(imageUrl, title, date);
            $('#galleryItemsRow').append(newGalleryItem.html);
        });
    }
}
exports.default = default_1;
