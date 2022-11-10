$(document).ready(function() {
    let listData = JSON.parse(localStorage.getItem('list')) || [];


    function update() {
        localStorage.setItem('list', JSON.stringify(listData));
        $('.list-group').html('');
        for (let i = 0; i < listData.length; i++) {
            createList(listData[i].title, i);
            if (listData[i].completed) {
                let checkbox = $('.list-group input[type=checkbox]');
                $(checkbox[i]).next().addClass('line-through');
                checkbox[i].checked = true;
            }
        }
        countItems();
    }
    update();


    function countItems() {
        let getLen = listData.length;
        let checkbox = $('.list-group input[type=checkbox]');
        let completedAry = [];
        for (let i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                completedAry.push(i);
            }
        }
        let len = getLen - completedAry.length;

        $('#countItems').text(len + ' items left')
    }

    function active() {
        for (let i = 0; i < listData.length; i++) {
            if (listData[i].completed) {
                let checkbox = $('.list-group input[type=checkbox]');
                $(checkbox[i]).parent().addClass('d-none');
            }
        }
    }

    function completed() {
        for (let i = 0; i < listData.length; i++) {
            if (!listData[i].completed) {
                let checkbox = $('.list-group input[type=checkbox]');
                $(checkbox[i]).parent().addClass('d-none');
            }
        }
    }


    function nowHash() {
        if (location.hash === '#active') {
            update();
            active();
        } else if (location.hash === '#completed') {
            update();
            completed();
        } else {
            update();
        }
    }


    function createList(text, num) {
        const createLi = document.createElement('li');
        const createInput = document.createElement('input');
        const createP = document.createElement('p');
        const createBtn = document.createElement('button');

        createLi.setAttribute('class', 'list-group-item');
        createLi.setAttribute('data-num', num);
        createInput.setAttribute('class', 'mr-3');
        createInput.setAttribute('type', 'checkbox');
        createP.setAttribute('class', 'd-inline');
        createP.textContent = text;
        createBtn.setAttribute('class', 'close');
        createBtn.setAttribute('type', 'button');
        createBtn.innerHTML = '<span aria-hidden="true">&times;</span>';

        createLi.appendChild(createInput);
        createLi.appendChild(createP);
        createLi.appendChild(createBtn);
        document.querySelector('.list-group').appendChild(createLi);
    }


    $('#addList').keyup(function(e) {
        if (e.keyCode === 13) {
            let textValue = $(this).val();
            if (textValue === '') { return };
            let items = {};
            items.title = textValue;
            items.completed = false;
            listData.push(items);
            nowHash();
            $(this).val('');
        }
    });

    $('.nav-pills').click(function(e) {
        $(this).find('a').removeClass('active');
        if (e.target.tagName !== 'A') { return }
        $(e.target).addClass('active')
        switch (e.target.hash) {
            case '#active':
                update();
                active();
                break;
            case '#completed':
                update();
                completed();
                break;
            default:
                update();
                break;
        }
    });


    $('.list-group').click(function(e) {
        let tagName = e.target.tagName;
        switch (tagName) {
            case 'SPAN':

                let num = $(e.target).parent().parent().data('num');
                listData.splice(num, 1);
                nowHash();
                break;
            case 'INPUT':

                $(e.target).next().toggleClass('line-through');
                let checkbox = $('.list-group input[type=checkbox]');
                for (let i = 0; i < checkbox.length; i++) {
                    if (checkbox[i].checked) {
                        listData[i].completed = true;
                    } else {
                        listData[i].completed = false;
                    }
                }
                nowHash();
                break;
        }
    });


    function edit(who) {
        let num = $(who).data('num');

        let str = `
			<input type="text" class="edit-line w-100 p-2" data-num="${num}">
        `
        $(who).addClass('p-0');
        $(who).html(str);

        $(who).find('input').val('').focus().val(listData[num].title);

        $(who).find('input').keyup(function(e) {
            if (e.keyCode === 13) {
                let textValue = $(this).val();
                if (textValue === '') { return };
                listData[num].title = textValue;
                nowHash();
            } else if (e.keyCode === 27) {
                cancelEdit(who, num);
            }
        });
    }


    function cancelEdit(who, num) {
        $(who).removeClass('p-0');
        $(who).html('');
        const createInput = document.createElement('input');
        const createP = document.createElement('p');
        const createBtn = document.createElement('button');

        createInput.setAttribute('class', 'mr-3');
        createInput.setAttribute('type', 'checkbox');
        createP.setAttribute('class', 'd-inline');
        createP.textContent = listData[num].title;
        createBtn.setAttribute('class', 'close');
        createBtn.setAttribute('type', 'button');
        createBtn.innerHTML = '<span aria-hidden="true">&times;</span>';

        $(who).append(createInput);
        $(who).append(createP);
        $(who).append(createBtn);

        if (listData[num].completed) {
            let checkbox = $('.list-group input[type=checkbox]');
            $(checkbox[num]).next().addClass('line-through');
            checkbox[num].checked = true;
        }
    }


    $('.list-group').dblclick(function(e) {
        let tagName = e.target.tagName;
        if (tagName !== 'LI' && tagName !== 'P') {
            return
        } else if ($(this).find('input[type=text]').hasClass('edit-line')) {
            let who = $(this).find('input[type=text]').parent();
            let num = $(this).find('input[type=text]').data('num');
            cancelEdit(who, num);
        }
        switch (tagName) {
            case 'LI':
                edit(e.target);
                break;
            case 'P':
                let getLi = $(e.target).parent();
                edit(getLi);
                break;
        }
    })


    $('#clearAll').click(function(e) {

        listData = [];
        update();
    });
});