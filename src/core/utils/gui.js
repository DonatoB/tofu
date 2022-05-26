import $ from 'jquery';

export default {

    init: function () {
        this.$popup = $('<div>', {'id': 'tofu_popup_box'});
        $('body').append(this.$popup);

        this.$popup.onclick = (event) => {
          if ($(event.target).is("#tofu_popup_box")) {
            this.hide();
          }
        };

        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                self.hide();
            }
        });

    },
    
    displayText: function (tx) {
        this.displayHtml("<div>" + tx + "</div>");
    },

    displayHtml: function (html) {
        this.hide();
        const child = document.createElement('div');
        child.innerHTML = html;
        var $div = document.createElement('div');
        $div.appendChild(child);

        this.$popup.append($div);
        this.$popup.show();
        return $div;
    }

    , hide: function () {
        this.$popup.hide();
        this.$popup.children().remove();
    }

};
