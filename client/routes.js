var currentPage = "Home";

setPage = function (name) {
    currentPage = name;
};

getPage = function () {
    return currentPage;
};

UI.registerHelper('getPage', function () {
    return getPage();
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'board',
        layoutTemplate: 'container',
        data: function () {
            return {
                name: "Home"
            }
        }
    });

    this.route('tag', {
        path: '/tag/:tag',
        template: 'tag',
        layoutTemplate: 'container',
        data: function () {
            return {
                tag: this.params.tag
            };
        }
    });

    this.route('note', {
        path: '/note/:_id',
        template: 'note',
        layoutTemplate: 'shareNote',
        data: function () {
            return {
                id: this.params._id
            }
        }
    });

    this.route('board', {
        path: '/board/:board',
        template: 'board',
        layoutTemplate: 'container',
        data: function () {
            setPage(this.params.board);
            return {
                name: this.params.board
            }
        }
    });

    this.route('manageBoards', {
        onBeforeAction: function () {
            setPage("Manage boards");
            this.next();
        },
        template: 'manageBoards',
        layoutTemplate: 'container'
    });
});
